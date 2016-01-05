'use strict';

var DAW = require( "./daw/daw" ),
	Synth = require( "./instruments/synth/instrument" ),
	PatchLibrary = require( "./patches/library" );

exports.DAW = DAW;

exports.Synth = Synth;

exports.PatchLibrary = PatchLibrary;

exports.create = function( AudioContext, store ) {

	var patchLibrary = new PatchLibrary( "VIKTOR_SYNTH", require( "./patches/defaults" ), store ),
		dawEngine = new DAW(
			AudioContext,
			[
				Synth
			],
			patchLibrary.getSelected().patch
		);

	return {
		dawEngine: dawEngine,
		patchLibrary: patchLibrary
	};

};