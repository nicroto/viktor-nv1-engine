'use strict';

var should = require( "should" ),
	PatchLibrary = require( "../src/patches/library" ),
	defaultLibrary = require( "../src/patches/defaults" );

var mockStore = {

		data: {},

		get: function( key ) {
			var self = this;

			return self.data[ key ];
		},

		set: function( key, value ) {
			var self = this;

			self.data[ key ] = value;
		},

		remove: function( key ) {
			var self = this;

			delete self.data[ key ];
		},

		clear: function() {
			var self = this;

			self.data = {};
		}

	},
	patchLibrary;

var beforeEachFunc = function() {
	mockStore.clear();
	patchLibrary = new PatchLibrary( "VIKTOR_SYNTH", defaultLibrary, mockStore );
};

describe( "PatchLibrary", function() {

	describe( "getUniqueName( str )", function() {

		beforeEach( beforeEachFunc );

		it( "uses the default string if no argument is passed", function() {
			patchLibrary.getUniqueName().should.equal( "Custom Unsaved1" );
		} );

		it( "iterates on default string, if duplication is present", function() {
			patchLibrary.saveCustom( "Custom Unsaved1", {} );
			patchLibrary.getUniqueName().should.equal( "Custom Unsaved2" );
		} );

		it( "uses the passed string as a name base", function() {
			patchLibrary.getUniqueName( "test" ).should.equal( "test1" );
		} );

		it( "iterates using the passed string, if duplication is present", function() {
			patchLibrary.saveCustom( "test1", {} );
			patchLibrary.getUniqueName( "test" ).should.equal( "test2" );
		} );

	} );

	describe( "getPatch( patchName )", function() {

		beforeEach( beforeEachFunc );

		it( "returns undefined if no patch under this name", function() {
			should.not.exist( patchLibrary.getPatch( "non-existent patch name" ) );
		} );

		it( "returns the patch if defined in the default library", function() {
			var firstPatchName = Object.keys( defaultLibrary )[ 0 ],
				patch = patchLibrary.getPatch( firstPatchName );

			patch.should.eql( {
				name: firstPatchName,
				patch: defaultLibrary[ firstPatchName ]
			} );
		} );

		it( "returns the patch if defined in the cusotm library", function() {
			var patchName = "new patch",
				patchMock = {};

			patchLibrary.customPatches[ patchName ] = patchMock;

			patchLibrary.getPatch( patchName ).should.eql( {
				name: patchName,
				patch: patchMock,
				isCustom: true
			} );
		} );

	} );

} );