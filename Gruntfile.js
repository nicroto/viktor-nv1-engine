'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON( 'package.json' ),

		jshint: {
			all: [
				'src/**/*.js',
				'test/**/*-test.js',
				'Gruntfile.js'
			],
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			src: {
				src: [ 'src/**/*.js' ]
			},
			test: {
				src: [ 'test/**/*-test.js' ]
			}
		},

		simplemocha: {
			all: { src: [
				'test/**/*-test.js',
				'src/**/*-test.js'
			] },
			options: {
				ui: 'bdd',
				reporter: 'spec'
			}
		}

	});

	// task loading
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-simple-mocha' );
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-release');

	// ci task
	grunt.registerTask( 'h', [ 'jshint:all' ] );
	grunt.registerTask( 'default', [ 'simplemocha:all', 'jshint:all' ] );
};