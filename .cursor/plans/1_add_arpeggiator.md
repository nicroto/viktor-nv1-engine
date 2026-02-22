---
name: NV-1 Arpeggiator Engine
overview: Implement arpeggiator in the audio engine — scheduling logic, MIDI interception in DAW, constants/defaults, and patch migration.
todos:
  - id: create-arp-engine
    content: Create arpeggiator.js in src/daw/engine/ with scheduling logic
    status: completed
  - id: integrate-arp-daw
    content: Modify daw.js to integrate arpeggiator and intercept MIDI notes
    status: completed
  - id: update-engine-const
    content: Add ENGINE_VERSION_7, arpeggiator settings to const.js
    status: completed
  - id: update-patch-loader
    content: Modify patch-loader.js for version migration
    status: completed
  - id: bump-version
    content: Bump package.json version
    status: completed
isProject: false
---

# NV-1 Arpeggiator — Engine

## Architecture

The arpeggiator lives at the **DAW level** (not Voice level) because:

- It intercepts MIDI note events before they reach the synth
- It needs access to global tempo (BPM)
- It manages a note pool across all held notes
- It generates new noteOn/noteOff events to the instrument

## Engine Changes

### 1. New File: `src/daw/engine/arpeggiator.js`

```javascript
function Arpeggiator(audioContext) {
  this.audioContext = audioContext;
  this.enabled = false;
  this.hold = false;
  this.reset = true;
  this.direction = "up"; // up, down, updown, downup, random
  this.rate = 0.125; // note duration in beats (1/8 = 0.125)
  this.range = 1; // octaves (1-3)
  this.gate = 0.8; // 0.1 - 1.0
  this.scale = "off"; // off, major, minor, pentatonic, blues
  this.velSlope = 0; // -1 to +1 (decrescendo to crescendo)

  this.notePool = []; // held notes [{freq, velocity}]
  this.currentStep = 0;
  this.schedulerInterval = null;
  this.bpm = 120;
  this.noteCallback = null; // function(noteFreq, velocity, isNoteOn)
}
```

### 2. Modify: `src/daw/daw.js`

- Add arpeggiator instance to constructor
- Add `arpeggiatorSettings` property (like compressorSettings)
- Modify `propagateMidiMessage` to intercept notes when arpeggiator is enabled
- Set up arpeggiator callback to route notes to the instrument

### 3. Modify: `src/daw/engine/const.js`

- Bump `ENGINE_VERSION` to 7
- Add arpeggiator settings ranges (enabled, hold, reset, direction, rate, range, gate, scale, velSlope)
- Add tempo settings ranges (bpm: 60–180)
- Add defaults

### 4. Modify: `src/daw/engine/patch-loader.js`

- Handle version migration to ENGINE_VERSION_7

## Arpeggiator Algorithm Details

**Direction Modes**:

- `up`: Sort notes low→high, cycle through
- `down`: Sort notes high→low, cycle through
- `updown`: Low→high→low (ping-pong, don't repeat endpoints)
- `downup`: High→low→high
- `random`: Random selection, avoid immediate repeats

**Rate to Duration Mapping** (at 120 BPM):

- 1/4 = 500ms
- 1/8 = 250ms
- 1/16 = 125ms
- 1/8T = 166.67ms (triplet)
- 1/16T = 83.33ms

**Scale Quantization** (root = lowest held note):

- Major: [0, 2, 4, 5, 7, 9, 11] semitones
- Minor: [0, 2, 3, 5, 7, 8, 10]
- Pentatonic: [0, 2, 4, 7, 9]
- Blues: [0, 3, 5, 6, 7, 10]

**Velocity Slope**:

```javascript
// For a cycle of N steps, step i (0-indexed):
slopeMultiplier = 1 + velSlope * (i / (N - 1) - 0.5);
outputVelocity = clamp(baseVelocity * slopeMultiplier, 1, 127);
```

## Files

| File                             | Action                                                    |
| -------------------------------- | --------------------------------------------------------- |
| `src/daw/engine/arpeggiator.js`  | **Create** - Arpeggiator class                            |
| `src/daw/engine/const.js`        | **Modify** - Add ENGINE_VERSION_7, arp settings           |
| `src/daw/daw.js`                 | **Modify** - Integrate arpeggiator, add settings property |
| `src/daw/engine/patch-loader.js` | **Modify** - Handle version migration                     |
| `package.json`                   | **Modify** - Bump version                                 |
