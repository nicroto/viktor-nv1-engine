'use strict';

var should = require( "should" ),
	patchLoader = require( "../src/daw/engine/patch-loader" ),
	data = require( "./data/patch-loader" );

describe( "patchLoader", function() {

	describe( "load( patch )", function() {

		it( "successfully loads v1 patch", function() {
			var loadedPatch = patchLoader.load( data.cases.version1Patch );

			loadedPatch.should.eql( data.expected.loadedVersion1Patch );
		} );

		it( "successfully loads v2 patch", function() {
			var loadedPatch = patchLoader.load( data.cases.version2Patch );

			loadedPatch.should.eql( data.expected.loadedVersion2Patch );
		} );

		it( "successfully loads v3 patch", function() {
			var loadedPatch = patchLoader.load( data.cases.version3Patch );

			loadedPatch.should.eql( data.expected.loadedVersion3Patch );
		} );

	} );

	describe( "prepareForSerialization( patch )", function() {

		it( "strips ranges", function() {
			var loadedPatch = patchLoader.load( data.cases.version3Patch );

			patchLoader.prepareForSerialization( loadedPatch );

			loadedPatch.should.eql( data.expected.preparedForSeralizationPatch );
		} );

	} );

} );