/* jshint -W098 */

'use strict';

var CONST = require( "./engine/const" ),
	Voice = require( "./engine/voice" );

function Instrument( audioContext, config ) {
	var self = this,
		voices = [],
		voicesAvailable = [],
		voicesInUse = [],
		sustainedFrequencyVoiceMap = {},
		frequencyVoiceMap = {},
		outputNode = audioContext.createGain(),
		voiceCount = config && config.voiceCount ? config.voiceCount : CONST.DEFAULT_VOICE_COUNT;

	outputNode.gain.value = 1.0;

	self.audioContext = audioContext;
	self.voices = voices;
	self.voicesAvailable = voicesAvailable;
	self.voicesInUse = voicesInUse;
	self.frequencyVoiceMap = frequencyVoiceMap;
	self.sustainedFrequencyVoiceMap = sustainedFrequencyVoiceMap;
	self.outputNode = outputNode;
	self.activeNotes = [];
	self.transientPropNames = [
		"pitch",
		"modulation",
		"oscillator",
		"mixer",
		"noise",
		"envelopes",
		"filter",
		"lfo"
	];
	self.settings = {

		// own settings
		polyphony: null,

		// transient settings
		modulation: null,
		oscillator: null,
		mixer: null,
		noise: null,
		envelopes: null,
		filter: null,
		lfo: null,
		pitch: null

	};

	self._defineProps();

	self.modulationSettings = CONST.DEFAULT_MOD_SETTINGS;
	self.oscillatorSettings = CONST.DEFAULT_OSC_SETTINGS;
	self.mixerSettings = CONST.DEFAULT_MIX_SETTINGS;
	self.noiseSettings = CONST.DEFAULT_NOISE_SETTINGS;
	self.envelopesSettings = CONST.DEFAULT_ENVELOPES_SETTINGS;
	self.filterSettings = CONST.DEFAULT_FILTER_SETTINGS;
	self.lfoSettings = CONST.DEFAULT_LFO_SETTINGS;
	self.pitchSettings = CONST.DEFAULT_PITCH_SETTINGS;

	// should be init last because it should set transient settings to voices
	self.polyphonySettings = CONST.DEFAULT_POLYPHONY_SETTINGS;
}

Instrument.prototype = {

	name: "synth",

	loadPatch: function( patch ) {
		var self = this;

		Object.keys( patch ).forEach( function( key ) {
			self[ key + "Settings" ] = patch[ key ];
		} );
	},

	getPatch: function() {
		var self = this;

		return self.settings;
	},

	onMidiMessage: function( eventType, parsed, rawEvent ) {
		var self = this,
			allVoices = self.voices,
			voicesInUse = self.voicesInUse;

		if ( eventType === "notePress" ) {
			var methodName = ( parsed.isNoteOn ) ? "onNoteOn" : "onNoteOff";

			self[ methodName ]( parsed.noteFrequency, parsed.velocity );
		} else if ( eventType === "sustain" ) {
			var polyphonySettings = self.polyphonySettings;

			polyphonySettings.sustain = parsed.sustain;

			self.polyphonySettings = polyphonySettings;
		} else {
			allVoices.forEach( function( voice ) {
				voice.onMidiMessage( eventType, parsed, rawEvent );
			} );
		}
	},

	onNoteOn: function( noteFrequency, velocity ) {
		var self = this,
			voicesInUse = self.voicesInUse,
			voicesAvailable = self.voicesAvailable,
			frequencyVoiceMap = self.frequencyVoiceMap,
			sustainedFrequencyVoiceMap = self.sustainedFrequencyVoiceMap,
			isSustainOn = self.settings.polyphony.sustain.value === 1;

		if ( frequencyVoiceMap[ noteFrequency ] ) {
			// if the voice is already ON, no need to restart it
			return;
		}

		var availableVoice = null;
		if ( isSustainOn && sustainedFrequencyVoiceMap[ noteFrequency ] ) {
			availableVoice = sustainedFrequencyVoiceMap[ noteFrequency ];

			var indexInVoicesAvailable = voicesAvailable.indexOf( availableVoice );

			voicesAvailable.splice( indexInVoicesAvailable, 1 );
		} else if ( voicesAvailable.length ) {
			availableVoice = voicesAvailable.splice( 0, 1 )[ 0 ];
		} else {
			availableVoice = voicesInUse.splice( 0, 1 )[ 0 ];
		}

		voicesInUse.push( availableVoice );

		availableVoice.onNoteOn( noteFrequency, velocity );
		frequencyVoiceMap[ noteFrequency ] = availableVoice;
		if ( isSustainOn ) {
			sustainedFrequencyVoiceMap[ noteFrequency ] = availableVoice;
		}
	},

	onNoteOff: function( noteFrequency, velocity ) {
		var self = this,
			voicesInUse = self.voicesInUse,
			voicesAvailable = self.voicesAvailable,
			frequencyVoiceMap = self.frequencyVoiceMap,
			usedVoice = frequencyVoiceMap[ noteFrequency ],
			usedVoiceIndex = voicesInUse.indexOf( usedVoice );

		if ( !usedVoice ) {
			// if the voice is already OFF, no need to continue processing
			return;
		}

		usedVoice.onNoteOff( noteFrequency, velocity );
		delete frequencyVoiceMap[ noteFrequency ];

		if ( !usedVoice.pressedNotes.length ) {
			voicesInUse.splice( usedVoiceIndex, 1 );
			voicesAvailable.push( usedVoice );
		}
	},

	_createVoices: function( n ) {
		var self = this,
			audioContext = self.audioContext,
			voices = self.voices,
			voicesAvailable = self.voicesAvailable,
			outputNode = self.outputNode,
			transientPropNames = self.transientPropNames,
			settingsLambda = function( setting ) {
				var settingName = setting + "Settings";

				voice[ settingName ] = self[ settingName ];
			};

		for ( var i = 0; i < n; i++ ) {
			var voice = new Voice( audioContext );

			voices.push( voice );
			voicesAvailable.push( voice );

			transientPropNames.forEach( settingsLambda );

			voice.outputNode.connect( outputNode );
		}
	},

	_dropVoices: function( n ) {
		var self = this,
			voices = self.voices,
			voicesAvailable = self.voicesAvailable,
			voicesInUse = self.voicesInUse,
			frequencyVoiceMap = self.frequencyVoiceMap,
			sustainedFrequencyVoiceMap = self.sustainedFrequencyVoiceMap;

		for ( var i = 0; i < n; i++ ) {
			var voice;
			if ( voicesAvailable.length ) {
				voice = voicesAvailable.splice( voicesAvailable.length - 1, 1 )[ 0 ];
			} else if ( voicesInUse.length ) {
				voice = voicesInUse.splice( voicesInUse.length - 1, 1 )[ 0 ];

				var currentNote = voice.getCurrentNote();

				delete frequencyVoiceMap[ currentNote ];
				delete sustainedFrequencyVoiceMap[ currentNote ];
			} else {
				// there is nothing to remove
				break;
			}

			var indexInVoices = voices.indexOf( voice );
			if ( indexInVoices !== -1 ) {
				voices.splice( indexInVoices, 1 );
			}

			voice.outputNode.disconnect();
		}
	},

	_defineProps: function() {
		var self = this,
			transientPropNames = self.transientPropNames;

		Object.defineProperty( self, "polyphonySettings", {

			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.polyphony ) );
			},

			set: function( settings ) {
				var self = this,
					voices = self.voices,
					countDiff = settings.voiceCount.value - voices.length,
					isSustainOn = settings.sustain.value === 1;

				// voiceCount
				if ( countDiff > 0 ) {
					self._createVoices( countDiff );
				} else if ( countDiff < 0 ) {
					self._dropVoices( countDiff * ( -1 ) );
				}

				// sustain
				self.sustainedFrequencyVoiceMap = {};
				voices.forEach( function( voice ) {
					voice.setSustain( isSustainOn );
				} );

				self.settings.polyphony = JSON.parse( JSON.stringify( settings ) );
			}

		} );

		// define all transient properties to just pass to voices
		transientPropNames.forEach( function( settingName ) {

			( function( settingName ) {

				var propertyName = settingName + "Settings";

				Object.defineProperty( self, propertyName, {

					get: function() {
						var self = this;

						return JSON.parse( JSON.stringify( self.settings[ settingName ] ) );
					},

					set: function( settings ) {
						var self = this,
							voices = self.voices;

						voices.forEach( function( voice ) {
							voice[ propertyName ] = settings;
						} );

						self.settings[ settingName ] = JSON.parse( JSON.stringify( settings ) );
					}

				} );

			} )( settingName );

		} );
	}

};

module.exports = Instrument;