'use strict';

var CONST = require( "./const" );


var ONE_MILLISECOND_IN_SECONDS = 0.001;

function customOrDefault( customValue, defaultValue ) {
	return customValue !== undefined ? customValue : defaultValue;
}


function Envelope( audioContext, propName, upperBound, lowerBound ) {
	var self = this;

	self.audioContext = audioContext;
	self.propName = propName;
	self.upperBound = upperBound;
	self.lowerBound = lowerBound || CONST.FAKE_ZERO;

	self.node = null;

	self.attack = self.decay = self.sustain = self.release = null;
}

Envelope.prototype = {

	start: function( upperBoundMultiplier, time ) {
		var self = this,
			audioContext = self.audioContext,
			propName = self.propName,
			upperBound = self.upperBound * upperBoundMultiplier,
			node = self.node,
			attack = self.attack || CONST.FAKE_ZERO,
			decay = self.decay || CONST.FAKE_ZERO,
			sustain = self.sustain;

		time = customOrDefault( time, audioContext.currentTime );

		node[ propName ].cancelScheduledValues( time );
		node[ propName ].setTargetAtTime( self.lowerBound, time, 0.01 );
		node[ propName ].setTargetAtTime( upperBound, time + 0.01, attack / 2 );
		node[ propName ].setTargetAtTime( sustain * upperBound, time + 0.01 + attack, decay / 2 );
	},

	end: function( time ) {
		var self = this,
			audioContext = self.audioContext,
			propName = self.propName,
			node = self.node,
			release = self.release || ONE_MILLISECOND_IN_SECONDS;

		time = customOrDefault( time, audioContext.currentTime );

		node[ propName ].cancelScheduledValues( time );
		node[ propName ].setTargetAtTime( self.lowerBound, time, release );
	}

};

module.exports = Envelope;