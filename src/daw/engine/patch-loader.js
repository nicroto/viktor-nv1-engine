'use strict';

var settingsConvertor = require( "viktor-nv1-settings-convertor" ),
	CONST = require( "./const" ),
	ENGINE_VERSION_1 = 1,
	ENGINE_VERSION_2 = 2,
	ENGINE_VERSION_3 = 3,
	ENGINE_VERSION_4 = 4,
	ENGINE_VERSION_5 = 5,
	ENGINE_VERSION_6 = 6,
	ENGINE_VERSION_7 = 7,
	CURRENT_ENGINE_VERSION = "ENGINE_VERSION_" + CONST.ENGINE_VERSION;

var patchLoader = {

	load: function( patch ) {
		var self = this,
			currentVersion = self._getVersion( patch ),
			alteredPatch = JSON.parse( JSON.stringify( patch ) ); // clone

		switch( currentVersion ) {

			case ENGINE_VERSION_1:
				alteredPatch = self._loadVersion1Patch( alteredPatch );
				break;

			case ENGINE_VERSION_2:
				alteredPatch = self._loadVersion2Patch( alteredPatch );
				break;

			case ENGINE_VERSION_3:
				alteredPatch = self._loadVersion3Patch( alteredPatch );
				break;

			case ENGINE_VERSION_4:
				alteredPatch = self._loadVersion4Patch( alteredPatch );
				break;

			case ENGINE_VERSION_5:
				alteredPatch = self._loadVersion5Patch( alteredPatch );
				break;

			case ENGINE_VERSION_6:
				alteredPatch = self._loadVersion6Patch( alteredPatch );
				break;

			case ENGINE_VERSION_7:
				alteredPatch = self._loadVersion7Patch( alteredPatch );
				break;

			default:
				break; // will return null

		}

		return alteredPatch;
	},

	prepareForSerialization: function( patch ) {
		var self = this;

		// strip ranges
		self._iterateTrees( patch, null, function( node, key ) {
			var prop = node[ key ],
				isLeaf = ( prop && prop.range && prop.range.length && prop.range.length === 2 && prop.value !== undefined );

			if ( isLeaf ) {
				node[ key ] = prop.value;
			}

			return isLeaf;
		} );
	},

	_getVersion: function( patch ) {
		var version = 1;
		if ( patch.version ) {
			version = patch.version;
		}

		return version;
	},

	_loadVersion1Patch: function( patch ) {
		var self = this,
			newRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		self._defaultPatchToMonosynth( patch );
		self._defaultPatchToNoCompression( patch );
		self._defaultPatchToOriginalEnvelopeReset( patch );
		self._applyNewerRanges( patch, newRangeLibrary );

		return patch;
	},

	_loadVersion2Patch: function( patch ) {
		var self = this,
			rangeLibrary = CONST.RANGE_LIBRARY.ENGINE_VERSION_2,
			newRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		self._defaultPatchToMonosynth( patch );
		self._defaultPatchToNoCompression( patch );
		self._defaultPatchToOriginalEnvelopeReset( patch );
		self._applyRange( patch, rangeLibrary );

		// if the current version of the engine is newer
		if ( rangeLibrary !== newRangeLibrary ) {
			self._applyNewerRanges( patch, newRangeLibrary );
		}

		return patch;
	},

	_loadVersion3Patch: function( patch ) {
		var self = this,
			rangeLibrary = CONST.RANGE_LIBRARY.ENGINE_VERSION_3,
			newRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		patch.instruments.synth.polyphony.sustain = {
			value: 0,
			range: newRangeLibrary.instruments.synth.polyphony.sustain
		};
		self._defaultPatchToNoCompression( patch );
		self._defaultPatchToOriginalEnvelopeReset( patch );

		self._applyRange( patch, rangeLibrary );

		// if the current version of the engine is newer
		if ( rangeLibrary !== newRangeLibrary ) {
			self._applyNewerRanges( patch, newRangeLibrary );
		}

		return patch;
	},

	_loadVersion4Patch: function( patch ) {
		var self = this,
			rangeLibrary = CONST.RANGE_LIBRARY.ENGINE_VERSION_4,
			newRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		self._defaultPatchToNoCompression( patch );
		self._defaultPatchToOriginalEnvelopeReset( patch );
		self._applyRange( patch, rangeLibrary );

		// if the current version of the engine is newer
		if ( rangeLibrary !== newRangeLibrary ) {
			self._applyNewerRanges( patch, newRangeLibrary );
		}

		return patch;
	},

	_loadVersion5Patch: function( patch ) {
		var self = this,
			rangeLibrary = CONST.RANGE_LIBRARY.ENGINE_VERSION_5,
			newRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		self._defaultPatchToNoCompression( patch );
		self._defaultPatchToOriginalEnvelopeReset( patch );
		self._applyRange( patch, rangeLibrary );

		// if the current version of the engine is newer
		if ( rangeLibrary !== newRangeLibrary ) {
			self._applyNewerRanges( patch, newRangeLibrary );
		}

		return patch;
	},

	_loadVersion6Patch: function( patch ) {
		var self = this,
			rangeLibrary = CONST.RANGE_LIBRARY.ENGINE_VERSION_6,
			newRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		self._defaultPatchToOriginalEnvelopeReset( patch );
		self._applyRange( patch, rangeLibrary );

		// if the current version of the engine is newer
		if ( rangeLibrary !== newRangeLibrary ) {
			self._applyNewerRanges( patch, newRangeLibrary );
		}

		return patch;
	},

	_loadVersion7Patch: function( patch ) {
		var self = this,
			rangeLibrary = CONST.RANGE_LIBRARY.ENGINE_VERSION_7,
			newRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		self._applyRange( patch, rangeLibrary );

		// if the current version of the engine is newer
		if ( rangeLibrary !== newRangeLibrary ) {
			self._applyNewerRanges( patch, newRangeLibrary );
		}

		return patch;
	},

	_defaultPatchToMonosynth: function( patch ) {
		var latestRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		patch.instruments.synth.polyphony = {
			voiceCount: {
				value: 1,
				range: latestRangeLibrary.instruments.synth.polyphony.voiceCount
			},
			sustain: {
				value: 0,
				range: latestRangeLibrary.instruments.synth.polyphony.sustain
			}
		};
	},

	_defaultPatchToNoCompression: function( patch ) {
		patch.daw.compressor = CONST.DEFAULT_COMPRESSOR_SETTINGS;
	},

	_defaultPatchToOriginalEnvelopeReset: function( patch ) {
		var latestRangeLibrary = CONST.RANGE_LIBRARY[ CURRENT_ENGINE_VERSION ];

		patch.instruments.synth.envelopes.primary.reset = {
			value: 0.01,
			range: latestRangeLibrary.instruments.synth.envelopes.primary.reset
		};
		patch.instruments.synth.envelopes.primary.start = {
			value: 0.00001,
			range: latestRangeLibrary.instruments.synth.envelopes.primary.start
		};

		patch.instruments.synth.envelopes.filter.reset = {
			value: 0.01,
			range: latestRangeLibrary.instruments.synth.envelopes.primary.reset
		};
		patch.instruments.synth.envelopes.filter.start = {
			value: 0.00001,
			range: latestRangeLibrary.instruments.synth.envelopes.primary.start
		};
	},

	_applyNewerRanges: function( patch, rangeLibrary ) {
		var self = this;

		self._iterateTrees( patch, rangeLibrary, function( node, key, rangeProp ) {
			var prop = node[ key ],
				isLeaf = ( prop && prop.range && prop.range.length && prop.range.length === 2 && prop.value !== undefined &&
					rangeProp && rangeProp.length && rangeProp.length === 2 );

			if ( isLeaf && ( prop.range[ 0 ] !== rangeProp[ 0 ] || prop.range[ 1 ] !== rangeProp[ 1 ] ) ) {
				prop.range = rangeProp;
			}

			return isLeaf;
		} );
	},

	_applyRange: function( patch, rangeLibrary ) {
		var self = this;

		self._iterateTrees( patch, rangeLibrary, function( node, key, rangeProp ) {
			var prop = node[ key ],
				isLeaf = ( rangeProp && rangeProp instanceof Array && rangeProp.length === 2 );

			if ( isLeaf ) {
				// if there is no such prop on the patch (introduced in newer engine version)
				if ( prop === undefined ) {
					// set to the range center
					prop = settingsConvertor.getRangeCenter( rangeProp );
				}
				node[ key ] = { value: prop, range: rangeProp };
			}

			return isLeaf;
		} );
	},

	_iterateTrees: function( node, matchingNode, isLeafLambda ) {
		var self = this;

		Object.keys( node ).forEach( function( key ) {
			var prop = node[ key ],
				matchingProp = matchingNode && matchingNode[ key ],
				isObject = ( "object" === typeof( prop ) );

			if ( !isLeafLambda( node, key, matchingProp ) && isObject ) {
				self._iterateTrees( prop, matchingProp, isLeafLambda );
			}
		} );
	}

};

module.exports = patchLoader;