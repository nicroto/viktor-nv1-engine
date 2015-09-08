/* jshint -W098 */

'use strict';

var CONST = require( "./engine/const" ),
	Voice = require( "./engine/voice" );

function Instrument( audioContext, config ) {
	var self = this,
		voices = [],
		voicesAvailable = [],
		voicesInUse = [],
		frequencyVoiceMap = {},
		masterVolume = audioContext.createGain(),
		voiceCount = config && config.voiceCount ? config.voiceCount : CONST.DEFAULT_VOICE_COUNT;

	for ( var i = 0; i < voiceCount; i++ ) {
		var voice = new Voice( audioContext );

		voices.push( voice );
		voicesAvailable.push( voice );

		voice.outputNode.connect( masterVolume );
	}

	masterVolume.gain.value = 1.0;

	self.audioContext = audioContext;
	self.voices = voices;
	self.voicesAvailable = voicesAvailable;
	self.voicesInUse = voicesInUse;
	self.frequencyVoiceMap = frequencyVoiceMap;
	self.outputNode = masterVolume;
	self.activeNotes = [];
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

	self.polyphonySettings = CONST.DEFAULT_POLYPHONY_SETTINGS;

	self.modulationSettings = CONST.DEFAULT_MOD_SETTINGS;
	self.oscillatorSettings = CONST.DEFAULT_OSC_SETTINGS;
	self.mixerSettings = CONST.DEFAULT_MIX_SETTINGS;
	self.noiseSettings = CONST.DEFAULT_NOISE_SETTINGS;
	self.envelopesSettings = CONST.DEFAULT_ENVELOPES_SETTINGS;
	self.filterSettings = CONST.DEFAULT_FILTER_SETTINGS;
	self.lfoSettings = CONST.DEFAULT_LFO_SETTINGS;
	self.pitchSettings = CONST.DEFAULT_PITCH_SETTINGS;
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
			frequencyVoiceMap = self.frequencyVoiceMap;

		if ( frequencyVoiceMap[ noteFrequency ] ) {
			// if the voice is already ON, no need to restart it
			return;
		}

		var availableVoice = null;

		if ( voicesAvailable.length ) {
			availableVoice = voicesAvailable.splice( 0, 1 )[ 0 ];
		} else {
			availableVoice = voicesInUse.splice( 0, 1 )[ 0 ];
		}

		if ( self.settings.polyphony.voiceCount === 1 ) {
			// monosynth
			// TODO
		} else {
			voicesInUse.push( availableVoice );
			availableVoice.onNoteOn( noteFrequency, velocity );
			frequencyVoiceMap[ noteFrequency ] = availableVoice;
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

		if ( usedVoiceIndex !== -1 ) {
			voicesInUse.splice( usedVoiceIndex, 1 );
		}

		if ( self.settings.polyphony.voiceCount === 1 ) {
			// monosynth
			// TODO
		} else {
			voicesAvailable.push( usedVoice );
			usedVoice.onNoteOff( noteFrequency, velocity );
			delete frequencyVoiceMap[ noteFrequency ];
		}
	},

	_defineProps: function() {
		var self = this;

		Object.defineProperty( self, "polyphonySettings", {

			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.polyphony ) );
			},

			set: function( settings ) {
				var self = this;

				// TODO

				self.settings.polyphony = JSON.parse( JSON.stringify( settings ) );
			}

		} );

		// define all transient properties to just pass to voices
		[
			"pitch",
			"modulation",
			"oscillator",
			"mixer",
			"noise",
			"envelopes",
			"filter",
			"lfo"
		].forEach( function( settingName ) {

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