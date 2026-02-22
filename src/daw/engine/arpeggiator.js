'use strict';

var DIRECTION = {
	UP: 0,
	DOWN: 1,
	UP_DOWN: 2,
	DOWN_UP: 3,
	RANDOM: 4
};

var RATE = {
	QUARTER: 0,      // 1/4
	EIGHTH: 1,       // 1/8
	SIXTEENTH: 2,    // 1/16
	EIGHTH_T: 3,     // 1/8 triplet
	SIXTEENTH_T: 4   // 1/16 triplet
};

var SCALE = {
	OFF: 0,
	MAJOR: 1,
	MINOR: 2,
	PENTATONIC: 3,
	BLUES: 4
};

var SCALE_INTERVALS = {
	MAJOR: [ 0, 2, 4, 5, 7, 9, 11 ],
	MINOR: [ 0, 2, 3, 5, 7, 8, 10 ],
	PENTATONIC: [ 0, 2, 4, 7, 9 ],
	BLUES: [ 0, 3, 5, 6, 7, 10 ]
};

function Arpeggiator( audioContext ) {
	var self = this;

	self.audioContext = audioContext;
	self.enabled = false;
	self.hold = false;
	self.reset = true;
	self.direction = DIRECTION.UP;
	self.rate = RATE.EIGHTH;
	self.range = 1;
	self.gate = 0.8;
	self.scale = SCALE.OFF;
	self.velSlope = 0;
	self.bpm = 120;

	self.notePool = [];
	self.expandedNotes = [];
	self.currentStep = 0;
	self.stepDirection = 1;
	self.lastRandomIndex = -1;
	self.schedulerTimerId = null;
	self.nextNoteTime = 0;
	self.noteCallback = null;
	self.isRunning = false;

	self.lookahead = 25.0;
	self.scheduleAheadTime = 0.1;
}

Arpeggiator.prototype = {

	setNoteCallback: function( callback ) {
		var self = this;

		self.noteCallback = callback;
	},

	addNote: function( freq, velocity ) {
		var self = this,
			notePool = self.notePool,
			existingIndex = self._findNoteIndex( freq );

		if ( existingIndex === -1 ) {
			notePool.push( { freq: freq, velocity: velocity } );
			notePool.sort( function( a, b ) {
				return a.freq - b.freq;
			} );
			self._rebuildExpandedNotes();

			if ( self.reset && notePool.length === 1 ) {
				self.currentStep = 0;
				self.stepDirection = 1;
			}

			if ( !self.isRunning && notePool.length > 0 ) {
				self._start();
			}
		}
	},

	removeNote: function( freq ) {
		var self = this,
			notePool = self.notePool;

		if ( self.hold ) {
			return;
		}

		var index = self._findNoteIndex( freq );
		if ( index !== -1 ) {
			notePool.splice( index, 1 );
			self._rebuildExpandedNotes();

			if ( notePool.length === 0 ) {
				self._stop();
			}
		}
	},

	releaseAllNotes: function() {
		var self = this;

		self.notePool = [];
		self.expandedNotes = [];
		self._stop();
	},

	_findNoteIndex: function( freq ) {
		var self = this,
			notePool = self.notePool;

		for ( var i = 0; i < notePool.length; i++ ) {
			if ( Math.abs( notePool[ i ].freq - freq ) < 0.01 ) {
				return i;
			}
		}
		return -1;
	},

	_rebuildExpandedNotes: function() {
		var self = this,
			notePool = self.notePool,
			range = self.range,
			expanded = [];

		notePool.forEach( function( note ) {
			for ( var octave = 0; octave < range; octave++ ) {
				var multiplier = Math.pow( 2, octave );
				expanded.push( {
					freq: note.freq * multiplier,
					velocity: note.velocity,
					baseFreq: note.freq
				} );
			}
		} );

		expanded.sort( function( a, b ) {
			return a.freq - b.freq;
		} );

		self.expandedNotes = expanded;

		if ( self.currentStep >= expanded.length ) {
			self.currentStep = 0;
		}
	},

	_start: function() {
		var self = this,
			audioContext = self.audioContext;

		if ( self.isRunning ) {
			return;
		}

		self.isRunning = true;
		self.nextNoteTime = audioContext.currentTime;
		self._scheduler();
	},

	_stop: function() {
		var self = this;

		if ( !self.isRunning ) {
			return;
		}

		self.isRunning = false;

		if ( self.schedulerTimerId ) {
			clearTimeout( self.schedulerTimerId );
			self.schedulerTimerId = null;
		}

		self.currentStep = 0;
		self.stepDirection = 1;
	},

	_scheduler: function() {
		var self = this,
			audioContext = self.audioContext;

		if ( !self.isRunning ) {
			return;
		}

		while ( self.nextNoteTime < audioContext.currentTime + self.scheduleAheadTime ) {
			self._scheduleNote( self.nextNoteTime );
			self._advanceStep();
		}

		self.schedulerTimerId = setTimeout( function() {
			self._scheduler();
		}, self.lookahead );
	},

	_scheduleNote: function( time ) {
		var self = this,
			expandedNotes = self.expandedNotes,
			noteCallback = self.noteCallback;

		if ( !noteCallback || expandedNotes.length === 0 ) {
			return;
		}

		var noteIndex = self._getNextNoteIndex(),
			note = expandedNotes[ noteIndex ],
			freq = note.freq,
			velocity = self._calculateVelocity( note.velocity, noteIndex, expandedNotes.length ),
			noteDuration = self._getNoteDuration(),
			gateDuration = noteDuration * self.gate;

		if ( self.scale !== SCALE.OFF ) {
			freq = self._applyScale( freq, note.baseFreq );
		}

		noteCallback( freq, velocity, true, time );
		noteCallback( freq, 0, false, time + gateDuration );
	},

	_advanceStep: function() {
		var self = this,
			noteDuration = self._getNoteDuration();

		self.nextNoteTime += noteDuration;
		self._moveToNextStep();
	},

	_getNextNoteIndex: function() {
		var self = this,
			expandedNotes = self.expandedNotes,
			direction = self.direction,
			len = expandedNotes.length;

		if ( len === 0 ) {
			return 0;
		}

		var index = self.currentStep;

		if ( direction === DIRECTION.DOWN ) {
			index = len - 1 - self.currentStep;
		} else if ( direction === DIRECTION.RANDOM ) {
			var newIndex;
			if ( len === 1 ) {
				newIndex = 0;
			} else {
				do {
					newIndex = Math.floor( Math.random() * len );
				} while ( newIndex === self.lastRandomIndex );
			}
			self.lastRandomIndex = newIndex;
			index = newIndex;
		}

		return Math.max( 0, Math.min( index, len - 1 ) );
	},

	_moveToNextStep: function() {
		var self = this,
			expandedNotes = self.expandedNotes,
			direction = self.direction,
			len = expandedNotes.length;

		if ( len === 0 ) {
			return;
		}

		if ( direction === DIRECTION.UP || direction === DIRECTION.DOWN ) {
			self.currentStep = ( self.currentStep + 1 ) % len;
		} else if ( direction === DIRECTION.UP_DOWN || direction === DIRECTION.DOWN_UP ) {
			if ( len === 1 ) {
				self.currentStep = 0;
			} else {
				self.currentStep += self.stepDirection;

				if ( self.currentStep >= len - 1 ) {
					self.currentStep = len - 1;
					self.stepDirection = -1;
				} else if ( self.currentStep <= 0 ) {
					self.currentStep = 0;
					self.stepDirection = 1;
				}
			}
		}
	},

	_getNoteDuration: function() {
		var self = this,
			bpm = self.bpm,
			rate = self.rate,
			beatDuration = 60 / bpm;

		switch ( rate ) {
			case RATE.QUARTER:
				return beatDuration;
			case RATE.EIGHTH:
				return beatDuration / 2;
			case RATE.SIXTEENTH:
				return beatDuration / 4;
			case RATE.EIGHTH_T:
				return beatDuration / 3;
			case RATE.SIXTEENTH_T:
				return beatDuration / 6;
			default:
				return beatDuration / 2;
		}
	},

	_calculateVelocity: function( baseVelocity, stepIndex, totalSteps ) {
		var self = this,
			velSlope = self.velSlope;

		if ( velSlope === 0 || totalSteps <= 1 ) {
			return baseVelocity;
		}

		var position = stepIndex / ( totalSteps - 1 ),
			slopeMultiplier = 1 + velSlope * ( position - 0.5 ),
			outputVelocity = Math.round( baseVelocity * slopeMultiplier );

		return Math.max( 1, Math.min( 127, outputVelocity ) );
	},

	_applyScale: function( freq, rootFreq ) {
		var self = this,
			scale = self.scale,
			intervals;

		switch ( scale ) {
			case SCALE.MAJOR:
				intervals = SCALE_INTERVALS.MAJOR;
				break;
			case SCALE.MINOR:
				intervals = SCALE_INTERVALS.MINOR;
				break;
			case SCALE.PENTATONIC:
				intervals = SCALE_INTERVALS.PENTATONIC;
				break;
			case SCALE.BLUES:
				intervals = SCALE_INTERVALS.BLUES;
				break;
			default:
				return freq;
		}

		var rootMidi = self._freqToMidi( rootFreq ),
			noteMidi = self._freqToMidi( freq ),
			rootPitchClass = rootMidi % 12,
			notePitchClass = noteMidi % 12,
			noteOctave = Math.floor( noteMidi / 12 ),
			semitoneFromRoot = ( notePitchClass - rootPitchClass + 12 ) % 12,
			closestInterval = self._findClosestInterval( semitoneFromRoot, intervals ),
			quantizedPitchClass = ( rootPitchClass + closestInterval ) % 12,
			quantizedMidi = noteOctave * 12 + quantizedPitchClass;

		if ( quantizedMidi < noteMidi - 6 ) {
			quantizedMidi += 12;
		} else if ( quantizedMidi > noteMidi + 6 ) {
			quantizedMidi -= 12;
		}

		return self._midiToFreq( quantizedMidi );
	},

	_findClosestInterval: function( semitone, intervals ) {
		var closest = intervals[ 0 ],
			minDist = 12;

		for ( var i = 0; i < intervals.length; i++ ) {
			var dist = Math.abs( intervals[ i ] - semitone );
			if ( dist < minDist ) {
				minDist = dist;
				closest = intervals[ i ];
			}
		}

		return closest;
	},

	_freqToMidi: function( freq ) {
		return Math.round( 12 * Math.log2( freq / 440 ) + 69 );
	},

	_midiToFreq: function( midi ) {
		return 440 * Math.pow( 2, ( midi - 69 ) / 12 );
	}

};

Arpeggiator.DIRECTION = DIRECTION;
Arpeggiator.RATE = RATE;
Arpeggiator.SCALE = SCALE;

module.exports = Arpeggiator;
