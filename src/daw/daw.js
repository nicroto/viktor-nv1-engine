'use strict';

var settingsConvertor = require( "viktor-nv1-settings-convertor" ),
	CONST = require( "./engine/const" ),
	patchLoader = require( "./engine/patch-loader" ),
	MIDIController = require( "./engine/midi" ),
	Arpeggiator = require( "./engine/arpeggiator" ),
	Tuna = require( "./non-npm/tuna/tuna.js" );

function DAW( AudioContext, instrumentTypes, selectedPatch ) {
	var self = this,
		audioContext = new AudioContext(),
		tuna = new Tuna( audioContext ),
		compressor = new tuna.Compressor( CONST.TUNA_COMPRESSOR_DEFAULT_SETTINGS ),
		delay = new tuna.Delay( CONST.TUNA_DELAY_DEFAULT_SETTINGS ),
		reverb = new tuna.Convolver( CONST.TUNA_REVERB_DEFAULT_SETTINGS ),
		masterVolume = audioContext.createGain();

	masterVolume.gain.value = 1;

	compressor.connect( delay.input );
	delay.connect( reverb.input );
	reverb.connect( masterVolume );
	masterVolume.connect( audioContext.destination );

	self.audioContext = audioContext;
	self.selectedPatch = selectedPatch;
	self.instrumentTypes = instrumentTypes;
	self.midiController = new MIDIController();
	self.arpeggiator = new Arpeggiator( audioContext );
	self.compressor = compressor;
	self.delay = delay;
	self.reverb = reverb;
	self.masterVolume = masterVolume;
	self.instruments = [];
	self.selectedInstrument = null;
	self.externalMidiMessageHandlers = [];
	self.version = CONST.ENGINE_VERSION;
	self.settings = {
		pitch: null,
		modulation: null,
		compressor: null,
		delay: null,
		reverb: null,
		masterVolume: null,
		arpeggiator: null,
		tempo: null
	};
	self._patchChangeHandlers = [];

	self._defineProps();

	// pitch & modulation settings are set in init

	self.compressorSettings = CONST.DEFAULT_COMPRESSOR_SETTINGS;
	self.delaySettings = CONST.DEFAULT_DELAY_SETTINGS;
	self.reverbSettings = CONST.DEFAULT_REVERB_SETTINGS;
	self.masterVolumeSettings = CONST.DEFAULT_MASTER_VOLUME_SETTINGS;
	self.arpeggiatorSettings = CONST.DEFAULT_ARPEGGIATOR_SETTINGS;
	self.tempoSettings = CONST.DEFAULT_TEMPO_SETTINGS;

	self._setupArpeggiatorCallback();

	self.init();
}

DAW.prototype = {

	init: function() {
		var self = this,
			audioContext = self.audioContext,
			midiController = self.midiController,
			instruments = self.instruments,
			quietPatchChange = true;

		midiController.init();

		midiController.setMessageHandler(
			self.propagateMidiMessage.bind( self )
		);

		self.instrumentTypes.forEach( function( Instrument ) {
			instruments.push( self.createInstrument( Instrument ) );
		} );

		self.selectInstrument( 0 );

		self.pitchSettings = CONST.DEFAULT_PITCH_SETTINGS;
		self.modulationSettings = CONST.DEFAULT_MODULATION_SETTINGS;

		self.loadPatch( self.selectedPatch, quietPatchChange );
		self.audioContext = audioContext;
	},

	loadPatch: function( patch, quiet ) {
		var self = this,
			instruments = self.instruments;

		patch = patchLoader.load( patch );

		if ( patch ) {
			// first apply instrument patches (pitch, modulation etc. should override)
			instruments.forEach( function( instrument ) {
				var instrumentPatch = patch.instruments[ instrument.name ];
				if ( instrumentPatch ) {
					instrument.loadPatch( instrumentPatch );
				}
			} );

			Object.keys( patch.daw ).forEach( function( key ) {
				self[ key + "Settings" ] = patch.daw[ key ];
			} );

			if ( !quiet ) {
				self._patchChangeHandlers.forEach( function( handler ) {
					handler( patch );
				} );
			}
		}
	},

	getPatch: function() {
		var self = this,
			instrumentPatches = {};

		self.instruments.forEach( function( instrument ) {
			instrumentPatches[ instrument.name ] = instrument.getPatch();
		} );

		var patch = JSON.parse( JSON.stringify( {
			version: self.version,
			daw: self.settings,
			instruments: instrumentPatches
		} ) );

		patchLoader.prepareForSerialization( patch );

		return patch;
	},

	onPatchChange: function( handler ) {
		var self = this;

		self._patchChangeHandlers.push( handler );
	},

	selectInstrument: function( index ) {
		var self = this;

		self.selectedInstrument = self.instruments[ index ];
	},

	createInstrument: function( Instrument ) {
		var self = this,
			audioContext = self.audioContext,
			newInstrument = new Instrument( audioContext );

		newInstrument.outputNode.connect( self.compressor.input );

		return newInstrument;
	},

	propagateMidiMessage: function( eventType, parsed, rawEvent ) {
		var self = this,
			selectedInstrument = self.selectedInstrument,
			externalHandlers = self.externalMidiMessageHandlers,
			arpeggiator = self.arpeggiator;

		if ( eventType === "volume" ) {
			self.masterVolumeSettings = {
				level: settingsConvertor.transposeParam( parsed.volume, [ 0, 1 ] )
			};
		}

		if ( eventType === "notePress" && arpeggiator.enabled ) {
			if ( parsed.isNoteOn ) {
				arpeggiator.addNote( parsed.noteFrequency, parsed.velocity );
			} else {
				arpeggiator.removeNote( parsed.noteFrequency );
			}
		} else {
			selectedInstrument.onMidiMessage( eventType, parsed, rawEvent );
		}

		externalHandlers.forEach( function( handler ) {
			handler( eventType, parsed, rawEvent );
		} );
	},

	externalMidiMessage: function( midiEvent ) {
		var self = this,
			midiController = self.midiController;

		midiController.onMidiMessage( midiEvent );
	},

	addExternalMidiMessageHandler: function( handler ) {
		var self = this,
			handlers = self.externalMidiMessageHandlers;

		handlers.push( handler );
	},

	_defineProps: function() {
		var self = this;

		Object.defineProperty( self, "pitchSettings", {
			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.pitch ) );
			},
			set: function( settings ) {
				var self = this,
					oldSettings = self.settings.pitch || { bend: {} };

				if ( oldSettings.bend.value !== settings.bend.value ) {
					self.instruments.forEach( function( instrument ) {
						instrument.pitchSettings = settings;
					} );
				}

				self.settings.pitch = JSON.parse( JSON.stringify( settings ) );
			}
		} );

		Object.defineProperty( self, "modulationSettings", {
			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.modulation ) );
			},
			set: function( settings ) {
				var self = this,
					oldSettings = self.settings.modulation || {};

				if ( oldSettings.rate !== settings.rate ) {
					self.instruments.forEach( function( instrument ) {
						var alteredSettings = instrument.modulationSettings;

						alteredSettings.rate = settings.rate;

						instrument.modulationSettings = alteredSettings;
					} );
				}

				self.settings.modulation = JSON.parse( JSON.stringify( settings ) );
			}
		} );

		Object.defineProperty( self, "compressorSettings", {
			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.compressor ) );
			},
			set: function( settings ) {
				var self = this,
					oldSettings = self.settings.compressor ||
						{ enabled: {}, threshold: {}, ratio: {}, knee: {}, attack: {}, release: {}, makeupGain: {} },
					compressor = self.compressor;

				if ( oldSettings.enabled.value !== settings.enabled.value ) {
					compressor.bypass = ( settings.enabled.value === 0 );
				}
				if ( oldSettings.threshold.value !== settings.threshold.value ) {
					compressor.threshold = settings.threshold.value;
				}
				if ( oldSettings.ratio.value !== settings.ratio.value ) {
					compressor.ratio = settings.ratio.value;
				}
				if ( oldSettings.knee.value !== settings.knee.value ) {
					compressor.knee = settings.knee.value;
				}
				if ( oldSettings.attack.value !== settings.attack.value ) {
					compressor.attack = settings.attack.value;
				}
				if ( oldSettings.release.value !== settings.release.value ) {
					compressor.release = settings.release.value;
				}
				if ( oldSettings.makeupGain.value !== settings.makeupGain.value ) {
					compressor.makeupGain = settings.makeupGain.value;
				}

				self.settings.compressor = JSON.parse( JSON.stringify( settings ) );
			}
		} );

		Object.defineProperty( self, "delaySettings", {
			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.delay ) );
			},
			set: function( settings ) {
				var self = this,
					oldSettings = self.settings.delay || { time: {}, feedback: {}, dry: {}, wet: {} },
					delay = self.delay;

				if ( oldSettings.time.value !== settings.time.value ) {
					delay.delayTime = settings.time.value;
				}
				if ( oldSettings.feedback.value !== settings.feedback.value ) {
					delay.feedback = settings.feedback.value;
				}
				if ( oldSettings.dry.value !== settings.dry.value ) {
					delay.dryLevel = settings.dry.value;
				}
				if ( oldSettings.wet.value !== settings.wet.value ) {
					delay.wetLevel = settings.wet.value;
				}

				self.settings.delay = JSON.parse( JSON.stringify( settings ) );
			}
		} );

		Object.defineProperty( self, "reverbSettings", {
			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.reverb ) );
			},
			set: function( settings ) {
				var self = this,
					oldSettings = self.settings.reverb || { level: {} },
					reverb = self.reverb;

				if ( oldSettings.level.value !== settings.level.value ) {
					var newGain = settings.level.value;

					reverb.wetLevel = newGain;
					reverb.dryLevel = 1 - ( newGain / 2 );
				}

				self.settings.reverb = JSON.parse( JSON.stringify( settings ) );
			}
		} );

		Object.defineProperty( self, "masterVolumeSettings", {
			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.masterVolume ) );
			},
			set: function( settings ) {
				var self = this,
					oldSettings = self.settings.masterVolume || { level: {} },
					masterVolume = self.masterVolume;

				if ( oldSettings.level.value !== settings.level.value ) {
					masterVolume.gain.value = settings.level.value;
				}

				self.settings.masterVolume = JSON.parse( JSON.stringify( settings ) );
			}
		} );

		Object.defineProperty( self, "arpeggiatorSettings", {
			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.arpeggiator ) );
			},
			set: function( settings ) {
				var self = this,
					oldSettings = self.settings.arpeggiator ||
						{ enabled: {}, hold: {}, reset: {}, direction: {}, rate: {}, range: {}, gate: {}, scale: {}, velSlope: {} },
					arpeggiator = self.arpeggiator;

				if ( oldSettings.enabled.value !== settings.enabled.value ) {
					arpeggiator.enabled = ( settings.enabled.value === 1 );
					if ( !arpeggiator.enabled ) {
						arpeggiator.releaseAllNotes();
					}
				}
				if ( oldSettings.hold.value !== settings.hold.value ) {
					arpeggiator.hold = ( settings.hold.value === 1 );
					if ( !arpeggiator.hold ) {
						arpeggiator.releaseAllNotes();
					}
				}
				if ( oldSettings.reset.value !== settings.reset.value ) {
					arpeggiator.reset = ( settings.reset.value === 1 );
				}
				if ( oldSettings.direction.value !== settings.direction.value ) {
					arpeggiator.direction = settings.direction.value;
				}
				if ( oldSettings.rate.value !== settings.rate.value ) {
					arpeggiator.rate = settings.rate.value;
				}
				if ( oldSettings.range.value !== settings.range.value ) {
					arpeggiator.range = settings.range.value;
					arpeggiator._rebuildExpandedNotes();
				}
				if ( oldSettings.gate.value !== settings.gate.value ) {
					arpeggiator.gate = settings.gate.value;
				}
				if ( oldSettings.scale.value !== settings.scale.value ) {
					arpeggiator.scale = settings.scale.value;
				}
				if ( oldSettings.velSlope.value !== settings.velSlope.value ) {
					arpeggiator.velSlope = settings.velSlope.value;
				}

				self.settings.arpeggiator = JSON.parse( JSON.stringify( settings ) );
			}
		} );

		Object.defineProperty( self, "tempoSettings", {
			get: function() {
				var self = this;

				return JSON.parse( JSON.stringify( self.settings.tempo ) );
			},
			set: function( settings ) {
				var self = this,
					oldSettings = self.settings.tempo || { bpm: {} },
					arpeggiator = self.arpeggiator;

				if ( oldSettings.bpm.value !== settings.bpm.value ) {
					arpeggiator.bpm = settings.bpm.value;
				}

				self.settings.tempo = JSON.parse( JSON.stringify( settings ) );
			}
		} );

	},

	_setupArpeggiatorCallback: function() {
		var self = this,
			arpeggiator = self.arpeggiator;

		arpeggiator.setNoteCallback( function( freq, velocity, isNoteOn, time ) {
			var selectedInstrument = self.selectedInstrument;

			if ( selectedInstrument ) {
				selectedInstrument.onMidiMessage( "notePress", {
					isNoteOn: isNoteOn,
					noteFrequency: freq,
					velocity: velocity,
					time: time
				} );
			}
		} );
	}

};

module.exports = DAW;