# viktor-nv1-engine

The audio engine of the [Viktor NV-1 Synth](http://nicroto.github.io/viktor/).

## Install

```shell
$ npm --save viktor-nv1-engine
```

## Use

```javascript
var NV1Engine = require( "viktor-nv1-engine" ),
	AudioContext = global.AudioContext || global.webkitAudioContext,
	store = require( "store" ),
	dawEngine,
	patchLibrary;

NV1Engine.create( AudioContext, store, function( dEngine, pLibrary ) {

	dawEngine = dEngine;
	patchLibrary = pLibrary;

} );
```

If you want even more control on the init process of the engine, you should check the implementation of the `NV1Engine.create()` function, which right now looks like this:

```javascript
var DAW = require( "./daw/daw" ),
	Synth = require( "./instruments/synth/instrument" ),
	PatchLibrary = require( "./patches/library" );

// ...

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

```

The function returns an object with 2 fields - `dawEngine` and `patchLibrary`.

`dawEngine` is a shell around the actual synth, which theoretically (hasn't been used, yet) can hold more than 1 instrument. It also separates the pitch-bend wheel, modulation wheel, Effects Section and master volume from the instrument(s).

`patchLibrary` is a service object to provide library of pre-defined patches, save and delete custom patches, export & import whole libraries.

### This package is intended for use with Browserify

There is only one thing you need to do in order to instantiate the Viktor NV-1 engine in your app - to copy the `src/daw/non-npm/tuna/impulses` dir to the root of your web app.

You can, for example, have a grunt task (using `grunt-contrib-copy`) to copy it automatically as part of your build process:

```javascript
grunt.initConfig( {

		// ...

		copy: {
			main: {
				files: [
					// ...
					{
						expand: true,
						cwd: "node_modules/viktor-nv1-engine/src/daw/non-npm/tuna/impulses/",
						src: "**",
						dest: "path/to/app/impulses/"
					}
				]
			}
		},

		// ...

} );

// ...
grunt.loadNpmTasks('grunt-contrib-copy');
// ...

```

## API

To be able to manipulate the sound of Viktor NV-1, you need to know the API of the `DAW` and `Synth` objects. And if you don't want to write your own, you can use the default PatchLibrary. Lets start with DAW's interface.

### DAW

```javascript
var DAW = require( "viktor-nv1-engine" ).DAW;
```

DAW is an abstraction around the synth. Pitch-bend, modulation, effects and master volume are part of it. It can load more than 1 instrument. Patches are on DAW level, not on Synth level.

When instantiating a DAW object, you pass the AudioContext, an array of Instrument types (not instantiated - daw will instantiate them) and a simple (serializable to JSON) object with the selected patch's settings.

DAW uses the Web MIDI Api internally, parses and executes system MIDI messages and exposes a public API for receiving MIDI messages from any caller.

DAW is your entry point to the engine:

 * to play a sound you call the `daw.externalMidiMessage()` method with the respective MIDI message;
 * to change a setting on any of listed-above controls you set a property (`daw.pitchSettings` for example);
 * to access the Synth object you iterate on the `daw.instruments` array;
 * to set the current patch (changing all available settings) you call the `daw.loadPatch()` method;
 * to observe settings changes you add a handler through `daw.onPatchChange()`;
 * to select an instrument you call the `daw.selectInstrument()`.

#### `new DAW( AudioContext, instrumentTypes, selectedPatch )`

**Params:**
 * AudioContext: the audio context provided by the system (browser);
 * instrumentTypes: `[Instrument,...]` check the interface of `src/instruments/synth/instrument.js` for reference of expected interface;
 * selectedPatch: simple (serializable to JSON) `Object` with the settings of the entire engine (daw + instruments) - check the `src/patches/defaults` to see the format of a patch;

**Returns:** `Object`, on which you need to call the async init method in order to finish initialization.

#### `daw.init( callback )`

**Params:**
 * callback: `Function` to be called (with no params) after finished;

**Returns:** `undefined`.

#### `daw.loadPatch( patch[, quiet] )`

**Params:**
 * patch: `Object` serializable to JSON, representing the settings of the engine:

```javascript
// the "Electric Piano" patch
{
	"version": 3,
	"daw": {
		"pitch": {
			"bend": 0
		},
		"modulation": {
			"rate": 0
		},
		"delay": {
			"time": 450,
			"feedback": 0.387,
			"dry": 0.66,
			"wet": 0
		},
		"reverb": {
			"level": 0.1
		},
		"masterVolume": {
			"level": 0.84
		}
	},
	"instruments": {
		"synth": {
			"polyphony": {
				"voiceCount": 10
				"sustain": 0
			},
			"modulation": {
				"waveform": 0,
				"portamento": 0,
				"rate": 0
			},
			"oscillator": {
				"osc1": {
					"range": 1,
					"fineDetune": 0,
					"waveform": 0
				},
				"osc2": {
					"range": 2,
					"fineDetune": 0,
					"waveform": 5
				},
				"osc3": {
					"range": -1,
					"fineDetune": 0,
					"waveform": 0
				}
			},
			"mixer": {
				"volume1": {
					"enabled": 1,
					"level": 0.4
				},
				"volume2": {
					"enabled": 0,
					"level": 0.25
				},
				"volume3": {
					"enabled": 0,
					"level": 0.4
				}
			},
			"noise": {
				"enabled": 0,
				"level": 0.03,
				"type": 0
			},
			"envelopes": {
				"primary": {
					"attack": 0,
					"decay": 0.002,
					"sustain": 0.53,
					"release": 0.02
				},
				"filter": {
					"attack": 0.12,
					"decay": 0.12,
					"sustain": 0.01099,
					"release": 0.92
				}
			},
			"filter": {
				"cutoff": 8000,
				"emphasis": 0.4,
				"envAmount": 0
			},
			"lfo": {
				"waveform": 0,
				"rate": 3,
				"amount": 0
			},
			"pitch": {
				"bend": 0
			}
		}
	}
}
```

 * quiet: optional `Boolean` set to true if setting the patch shouldn't be announced to subscribers (daw.onPatchChange()).

**Returns:** `undefined`.

#### `daw.getPatch()`

**Returns:** `Object` serializable to JSON. Check daw.loadPatch() for reference of the structure.

#### `daw.onPatchChange( handler )`

**Params:**
 * handler( patch ): `Function` to be called after new patch is being set (after daw.loadPatch() is called). Passes the new patch object being loaded.

**Returns:** `undefined`.

#### `daw.selectInstrument( index )`

**Params:**
 * index: `Number`, integer, the index of instrument to be selected. Only the selected instrument gets called on MIDI messages.

**Returns:** `undefined`.

#### `daw.externalMidiMessage( midiMessage )`

**Params:**
 * midiMessage: `Object`, raw midi message to be executed by the engine. You can use this method if you build a UI for playing the NV-1. Here is the structure of the message:

```javascript
{
	data: [
		Number,
		Number,
		Number
	]
}
```

**Returns:** `undefined`.

#### `daw.addExternalMidiMessageHandler( handler )`

**Params:**
 * handler( eventType, parsed, rawEvent ): `Function` to be called on any MIDI message executed (whenever someone calls the above daw.externalMidiMessage() method or if the Web MIDI Api passes a MIDI message). Passes the new patch object being loaded.
	 * eventType: `String` - currently one of these [ "pitchBend", "modulationWheel", "notePress" ];
	 * parsed: null or `Object`, if successfully decoded, with decoded data from the raw MIDI message:

```javascript
{
	isPitchBend: Boolean,
	isModulationWheel: Boolean,
	pitchBend: { value: Number, range: [ Number, Number ] },
	modulation: { value: Number, range: [ Number, Number ] },
	isNoteOn: Boolean,
	noteFrequency: Number,
	velocity: Number
}
```

	 * rawEvent: `Object`, the raw MIDI message, with this structure:

```javascript
{
	data: [
		Number,
		Number,
		Number
	]
}
```

**Returns:** `undefined`.

### NV1Param (setting parameter)

Settings mostly contain NV1Param's which specify a value, but also a range of variance of that value.

```javascript
{
	value: Number,
	range: [ Number, Number ]
}
```

Having the range helps tremendously when you need to represent ranges with a UI and you need to convert between what a Web Audio param accepts (what usually stays in the settings of the engine) and what needs to be displayed in the UI.

I've released a npm package to help with conversion between ranges, called `viktor-nv1-settings-convertor`.
Check the pitchSettings property bellow for example.

#### `daw.pitchSettings` property

`Object` with structure:

```javascript
{
	bend: NV1Param
}
```

Here is how you can get the param and covert it in the 0-128 range:

```javascript
var settingsConvertor = require( "viktor-nv1-settings-convertor" ),
	settings = daw.pitchSettings,
	originalRange = settings.bend.range;

var paramInNewRange = settingsConvertor.transposeParam( settings.bend, [ 0, 128 ] );
```

An once you need to change it in the daw engine (**You should only set the full object not its properties!**):

```javascript
daw.pitchSettings = {
	bend: settingsConvertor.transposeParam( paramInNewRange, originalRange )
};
```

#### `daw.modulationSettings` property

`Object` with structure:

```javascript
{
	rate: NV1Param
}
```

Here is how you can get the param and covert it in the 0-128 range:

```javascript
var settingsConvertor = require( "viktor-nv1-settings-convertor" ),
	settings = daw.modulationSettings,
	originalRange = settings.rate.range;

var paramInNewRange = settingsConvertor.transposeParam( settings.rate, [ 0, 128 ] );
```

An once you need to change it in the daw engine (**You should only set the full object not its properties!**):

```javascript
daw.modulationSettings = {
	rate: settingsConvertor.transposeParam( paramInNewRange, originalRange )
};
```

#### `daw.delaySettings` property

`Object` with structure:

```javascript
{
	time: NV1Param,
	feedback: NV1Param,
	dry: NV1Param,
	wet: NV1Param
}
```

Here is how you can get all params and covert them in the 0-128 range, for example:

```javascript
var settingsConvertor = require( "viktor-nv1-settings-convertor" ),
	settings = daw.delaySettings;

// transposeParam creates a new object
// meaning the original ranges will stay untouched
var timeInNewRange = settingsConvertor.transposeParam( settings.time, [ 0, 128 ] ),
	feedbackInNewRange = settingsConvertor.transposeParam( settings.feedback, [ 0, 128 ] ),
	dryInNewRange = settingsConvertor.transposeParam( settings.dry, [ 0, 128 ] ),
	wetInNewRange = settingsConvertor.transposeParam( settings.wet, [ 0, 128 ] ),
```

An once you need to change them in the daw engine (**You should only set the full object not its properties!**):

```javascript
daw.delaySettings = {
	time: settingsConvertor.transposeParam( timeInNewRange, settings.time.range ),
	feedback: settingsConvertor.transposeParam( feedbackInNewRange, settings.feedback.range ),
	dry: settingsConvertor.transposeParam( dryInNewRange, settings.dry.range ),
	wet: settingsConvertor.transposeParam( wetInNewRange, settings.wet.range )
};
```

#### `daw.compressorSettings` property

`Object` with structure:

```javascript
{
	threshold: NV1Param,
	ratio: NV1Param,
	knee: NV1Param,
	attack: NV1Param,
	release: NV1Param,
	makeupGain: NV1Param,
	enabled: NV1Param
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting a daw setting property.

#### `daw.reverbSettings` property

`Object` with structure:

```javascript
{
	level: NV1Param
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting a daw setting property.

#### `daw.masterVolumeSettings` property

`Object` with structure:

```javascript
{
	level: NV1Param
}
```
**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting a daw setting property.

### Synth

```javascript
var Synth = require( "viktor-nv1-engine" ).Synth;
```

To get the actual instance created by the daw:

```javascript
var DAW = require( "viktor-nv1-engine" ).DAW,
	Synth = require( "viktor-nv1-engine" ).Synth,
	daw = new DAW(/*...*/),
	synth;

daw.init( function() {

	daw.instruments.forEach( function( instrument ) {
		if ( instrument instanceof Synth ) {
			synth = instrument;
			// use the instance
		}
	} );

} );
```

Check the actual source, if you want to extend the engine and add another instrument.

I will list only props that you would access, if you just the engine as it is. There are no methods, which you should be calling, as of this moment.

#### `synth.polyphonySettings` property

`Object` with structure:

```javascript
{
	voiceCount: NV1Param,
	sustain: NV1Param
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting an NV-1 property property.

#### `synth.modulationSettings` property

`Object` with structure:

```javascript
{
	waveform: NV1Param,
	portamento: NV1Param,
	rate: NV1Param
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting an NV-1 property property.

#### `synth.oscillatorSettings` property

`Object` with structure:

```javascript
{
	osc1: {
		range: NV1Param,
		fineDetune: NV1Param,
		waveform: NV1Param
	},
	osc2: {
		range: NV1Param,
		fineDetune: NV1Param,
		waveform: NV1Param
	},
	osc3: {
		range: NV1Param,
		fineDetune: NV1Param,
		waveform: NV1Param
	}
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting an NV-1 property property.

#### `synth.mixerSettings` property

`Object` with structure:

```javascript
{
	volume1: {
		enabled: NV1Param,
		level: NV1Param
	},
	volume2: {
		enabled: NV1Param,
		level: NV1Param
	},
	volume3: {
		enabled: NV1Param,
		level: NV1Param
	}
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting an NV-1 property property.

#### `synth.noiseSettings` property

`Object` with structure:

```javascript
{
	enabled: NV1Param,
	level: NV1Param,
	type: NV1Param
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting an NV-1 property property.

#### `synth.envelopesSettings` property

`Object` with structure:

```javascript
{
	primary: {
		attack: NV1Param,
		decay: NV1Param,
		sustain: NV1Param,
		release: NV1Param
	},
	filter: {
		attack: NV1Param,
		decay: NV1Param,
		sustain: NV1Param,
		release: NV1Param
	}
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting an NV-1 property property.

#### `synth.filterSettings` property

`Object` with structure:

```javascript
{
	cutoff: NV1Param,
	emphasis: NV1Param,
	envAmount: NV1Param
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting an NV-1 property property.

#### `synth.lfoSettings` property

`Object` with structure:

```javascript
{
	waveform: NV1Param,
	rate: NV1Param,
	amount: NV1Param
}
```

**You should only set the full object not individual properties!**

Check the daw.delaySettings for reference on getting and setting an NV-1 property property.

### PatchLibrary

```javascript
var PatchLibrary = require( "viktor-nv1-engine" ).PatchLibrary;
```

#### `new Library( name, defaultPatches, store )`

**Params:**
 * name: `String`, used for prefixing values preserved in the passed store;
 * defaultPatches: `Object` holding the predefined patches - check `src/patches/defaults` for reference;
 * store: `Object` used for persistence of the selected patch, unsaved patch, custom patch library. You can implement your own - any Object with this simple interface will do:

```javascript
{
	get: function( String:name ) {},
	set: function( String:name, SerializableToJsonObject:data ),
	remove: function( String:name ) {}
}
```

**Returns:** `Object` instanceof PatchLibarary.

#### `patchLibrary.getSelected()`

**Returns:** `Object` with this structure:

```javascript
{
	name: String,
	patch: NV1Patch, /* check the docs for daw.loadPatch() for reference */,
	isCustom: Boolean, /* optional */
	isUnsaved: Boolean /* optional */
}
```

#### `patchLibrary.getPatch( patchName )`

Searches the library (both default and custom) for a patch with the provided name.

**Params:**
 * patchName: `String`, the name of the requested patch.

**Returns:** undefined if not found, or `Object` with this structure:

```javascript
{
	name: String,
	patch: NV1Patch, /* check the docs for daw.loadPatch() for reference */,
	isCustom: Boolean, /* optional */
}
```

#### `patchLibrary.preserveUnsaved( patch )`

If you want to preserve custom, yet unsaved by the user patches, between browser reloads, this is the method to call on every change he/she makes.

**Params:**
 * patch: NV1Patch, check the docs for daw.loadPatch() for reference.

**Returns:** `undefined`.

#### `patchLibrary.getDefaultNames()`

This method gives you the names of all default patches.

**Returns:** `Array` of `String`'s.
**Params:**
 * patch: NV1Patch, check the docs for daw.loadPatch() for reference.

**Returns:** `undefined`.

#### `patchLibrary.getCustomNames()`

This method gives you the names of all custom saved patches.

**Returns:** `Array` of `String`'s.

#### `patchLibrary.selectPatch( patchName )`

Preserves the information about the selected patch (what to select in the library on browser reload).

**Params:**
 * patchName: `String`, name of the patch to be selected.

**Returns:** `undefined`.

#### `patchLibrary.onSelectionChange( handler )`

Subscribe for change of selection notification.

**Params:**
 * handler( selectedPatch ): `Function` to be called on selection change.
	 * selectedPatch: NV1Patch, check the docs for daw.loadPatch() for reference.

**Returns:** `undefined`.

#### `patchLibrary.getUniqueName( str )`

If you show a form on saving a patch, you need to suggest a name that doesn't conflict with the current names (name has to be unique).

**Params:**
 * str: `String` name to be used as a base of the name.

**Returns:** `String`, "Custom nameN" (N is iterated until no duplication), or "[str]N" if str is passed.

#### `patchLibrary.saveCustom( patchName, patch )`

Save a custom patch to the library.

**Params:**
 * patchName: `String`;
 * patch: `NV1Patch`, check `daw.loadPatch()` for reference.

**Returns:** `undefined`.

#### `patchLibrary.getPreviousName( patchName )`

List of patches is ordered. If you want to implement switching to previous patch on click of a button or shortcut - you need to get the previous name so you can then tell the library to select it.

Will give the last element in the list, if you pass the name the absolute first patch.

**Params:**
 * patchName: `String`

**Returns:** `String` the name of the previous (to the passed) patch in the list.

#### `patchLibrary.getNextName( patchName )`

List of patches is ordered. If you want to implement switching to next patch on click of a button or shortcut - you need to get the next name so you can then tell the library to select it.

Will give the first element in the list, if you pass the name the absolute last patch.

**Params:**
 * patchName: `String`

**Returns:** `String` the name of the next (to the passed) patch in the list.

#### `patchLibrary.removeCustom( patchName )`

If you want to delete one of the already preserved (named) patches in the library, you should call this method.

**Params:**
 * patchName: `String`

**Returns:** `undefined`.

#### `patchLibrary.overrideCustomLibrary( customPatches )`

Overrides the list of custom patches with another one.

**Params:**
 * customPatches: `Object`, check the defaults passed on instantiation for reference on the structure of the object.

**Returns:** `undefined`.

## Release History

 * 1.8.0
	 * Add: Envelope: lower boundary;
	 * Fix: Filter Envelope: frequency shouldn’t go down under 1Hz;
	 * Fix: Filter LFO: shouldn’t get filter frequency to anything lower than 1Hz;
	 * Reenable: all disabled patches.
 * 1.7.3
	 * Fix: breaking change in Chrome (53...), AudioParam.setValueAtTime doesn't accept 0 for time (only a value relative to context.currentTime).
 * 1.7.2
	 * Fix: ChromeIssue: with latest update AudioParam.setTargetAtTime doesn't accept 0 as last param.
	 * Improve: order of default patches;
	 * TemporaryFix: Chrome's newest Web Audio breaks patches - had to disable a couple of patches.
 * 1.7.1
 	 * Fix: Envelope: too quick release clips.
 	 * Fix: changing patches often causes loud glitches.
 	 * Fix: Library: error on load when selected patch doesn't exist.
 	 * Add: Patch: "EQUIVALENT-CHORD-PAD-1".
 	 * Add: Patch: "EQUIVALENT-CHORD-PAD-2".
 	 * Add: Patch: "Gryphon 1977".
 	 * Add: Patch: "Gryphon 1979".
 	 * Add: Patch: "Wow - Cats".
 	 * TemporaryFix: Chrome's newest Web Audio breaks patches:
	 	 * TemporaryRemove: Patch: "Danger Bubbles".
	 	 * TemporaryRemove: Patch: "Sirens' Awakening".
	 	 * TemporaryRemove: Patch: "Cooh bass 1".
	 	 * TemporaryRemove: Patch: "BRAINPAIN Mod Wheel Frenzy".
 * 1.7
 	 * Add: Patch: "EQUIVALENT-BASS-1".
 	 * Add: Patch: "BRAINPAIN Mod Wheel Frenzy".
 	 * Add: Patch: "Pumped Bass".
 	 * Add: Patch: "Cooh bass 1".
 	 * Add: Patch: "Timmo^Bass01".
 	 * Add: Patch: "Freqax Bass".
 	 * Add: Patch: "Niada's Sap Bass".
 	 * Add: Patch: "Eclectic Method Bass".
 	 * Add: Patch: "Soft Bass".
 	 * Add: Patch: "8 mile Free World Car Bass".
 	 * Add: Patch: "Muffled Razr Bass".
 	 * Add: Patch: "Da Buzzer".
 	 * Add: Patch: "Glass Bell Bass".
 	 * Add: Patch: "Turbo Saw Lead".
 	 * Add: Patch: "singende Säge Lead".
 	 * Add: Patch: "Orchestra Pad".
 	 * Add: Patch: "Netjester Kush Pad".
 	 * Add: Patch: "Bass Fanfares".
 	 * Add: Patch: "suitcase organ pad".
 	 * Add: Patch: "Sirens' Awakening".
 	 * Add: Patch: "Long Kiss".
 	 * Add: Patch: "Danger Bubbles".
 	 * Add: Patch: "Syo - demo".
 	 * Add: Patch: "Flint Kids Shuttledron".
 	 * Add: Patch: "Whale song - Synthakt".
 	 * Add: Patch: "AC1".
 	 * Add: Patch: "AC2".
 	 * Add: Patch: "Ghosts".
 	 * Add: Patch: "BB8".
 	 * Add: Patch: "Outer Space".
 * 1.6.2
 	 * Fix: patches with Envelope set to Release:0 stop system sound in Chrome.
 * 1.6.1
 	 * [Fix: failed release].
 * 1.6
 	 * (BREAKING API CHANGE)Improve: Remove the need for async init of Viktor.
 * 1.5
 	 * Add: Effect: Compressor.
 * 1.4.1
 	 * Add: Patch: Cut through that Mix.
 * 1.4
 	 * Add: FineDetune of oscillators.
 * 1.3.1
 	 * FineTune: ModWheel.
 * 1.3
 	 * Add: MIDI: Sustain pedal support;
 	 * Add: MIDI: Volume knob/slider support;
 	 * Add: Patch: Underwater Bass Lead.
 * 1.2.2
 	 * Add: Velocity Sensitivity;
 * 1.2.1
 	 * Add: Polyphony: voice scaling (creating and droping voices);
 * 1.2
 	 * Add: Polyphony;
 	 * Add: Patch ver3;
 	 * Add: Patch: Electric Piano;
 	 * Add: Patch: 8-bit Shogun;
 	 * Add: Patch: Electric Clavessine;
 	 * Add: Patch: Electric Clavessine 2;
 	 * Add: Patch: Organ Thingie;
 	 * Add: Patch: Accordion.
 * 1.1.2
 	 * Add: PatchLibrary: getPatch( patchName ).
 * 1.1.1
 	 * Add: PatchLibrary: getUniqueName( str ).
 * 1.1
 	 * Add: backward compatibility for patches exported from older versions of the engine;
 	 * Improve: patch size (cut down to 43% of previous size);
 	 * AddPatch: Bass Razr Lead.