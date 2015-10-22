'use strict';

var FAKE_ZERO = 0.00001,
	TIME_DETERMINANT = 0.368;

function customOrDefault( customValue, defaultValue ) {
	return customValue !== undefined ? customValue : defaultValue;
}

/* RSADSR Envelope ( Reset | Start | Attack | Decay | Sustain | Release ) */

function Envelope( audioContext, propName, upperBound ) {
	var self = this;

	self.audioContext = audioContext;
	self.propName = propName;
	self.upperBound = upperBound;

	self.node = null;

	self._defineProps();
}

Envelope.prototype = {

	begin: function( upperBoundMultiplier, time ) {
		var self = this,
			audioContext = self.audioContext,
			propName = self.propName,
			upperBound = self.upperBound * upperBoundMultiplier,
			node = self.node,
			reset = self.reset,
			start = self.start * upperBound,
			attack = self.attack,
			attackTimeConstant = self.attackTimeConstant,
			decay = self.decay,
			decayTimeConstant = self.decayTimeConstant,
			sustain = self.sustain * upperBound,

		time = customOrDefault( time, audioContext.currentTime );

		node[ propName ].cancelScheduledValues( time );

		if ( reset ) {
			// I don't use the resetTimeConstant, because
			// this way reset can work without a fixed target.
			// It will never reach the set start, which is a
			// way to work together with the current value.
			// (since current value is not accessible)
			node[ propName ].setTargetAtTime( start, time, reset );
		}

		if ( attack > 2 ) {
			var upperBoundPre = 1/2000 * upperBound,
				upperBoundPreTime = attack / 30,
				upperBoundPreTimeConstant = self._getTimeConstant( upperBoundPreTime );

			node[ propName ].setTargetAtTime( upperBoundPre, time + reset, upperBoundPreTimeConstant );
			node[ propName ].linearRampToValueAtTime( upperBound, time + reset + attack );
			node[ propName ].linearRampToValueAtTime( sustain, time + reset + attack + decay );
		} else {
			node[ propName ].setTargetAtTime( upperBound, time + reset, attackTimeConstant );
			node[ propName ].setTargetAtTime( sustain, time + reset + attack, decayTimeConstant );
		}
	},

	end: function( time ) {
		var self = this,
			audioContext = self.audioContext,
			propName = self.propName,
			node = self.node,
			release = self.release,
			releaseTimeConstant = self.releaseTimeConstant;

		time = customOrDefault( time, audioContext.currentTime );

		node[ propName ].cancelScheduledValues( time );

		if ( release > 2 ) {
			console.log( "linearRampToValueAtTime: " + release );
			node[ propName ].linearRampToValueAtTime( FAKE_ZERO, time + release );
		} else {
			node[ propName ].setTargetAtTime( FAKE_ZERO, time, releaseTimeConstant );
		}
	},

	_defineProps: function() {
		var self = this;

		self._props = {};

		self.start = self.sustain = null;

		[
			"reset",
			"attack",
			"decay",
			"release"
		].forEach( function( name ) {
			var timeConstantPropName = name + "TimeConstant";

			Object.defineProperty( self, name, {

				get: function() {
					return self._props[ name ];
				},

				set: function( value ) {
					self._props[ name ] = value;

					// pre-calculate this to remove some overhead
					self[ timeConstantPropName ] = self._getTimeConstant( value );
				}

			} );
		} );
	},

	_getTimeConstant: function( time ) {
		return time * TIME_DETERMINANT;
	}

};

module.exports = Envelope;