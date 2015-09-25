'use strict';

module.exports = {

	ENGINE_VERSION: 6,

	RANGE_LIBRARY: {
		// ENGINE_VERSION_1

		ENGINE_VERSION_2: {
			"daw": {
				"pitch": {
					"bend": [-200, 200]
				},
				"modulation": {
					"rate": [0, 15]
				},
				"delay": {
					"time": [0, 1000],
					"feedback": [0, 0.9],
					"dry": [0, 1],
					"wet": [0, 1]
				},
				"reverb": {
					"level": [0, 1]
				},
				"masterVolume": {
					"level": [0, 1]
				}
			},
			"instruments": {
				"synth": {
					"modulation": {
						"waveform": [0, 5],
						"portamento": [0, 0.16666666666666666],
						"rate": [0, 15]
					},
					"oscillator": {
						"osc1": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						},
						"osc2": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						},
						"osc3": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						}
					},
					"mixer": {
						"volume1": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume2": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume3": {
							"enabled": [0, 1],
							"level": [0, 1]
						}
					},
					"noise": {
						"enabled": [0, 1],
						"level": [0, 1],
						"type": [0, 2]
					},
					"envelopes": {
						"primary": {
							"attack": [0, 2],
							"decay": [0.002, 2],
							"sustain": [0, 1],
							"release": [0, 2]
						},
						"filter": {
							"attack": [0, 2],
							"decay": [0, 2],
							"sustain": [0.001, 1],
							"release": [0, 2]
						}
					},
					"filter": {
						"cutoff": [0, 8000],
						"emphasis": [0.4, 40],
						"envAmount": [0, 1]
					},
					"lfo": {
						"waveform": [0, 5],
						"rate": [1, 25],
						"amount": [0, 1]
					},
					"pitch": {
						"bend": [-200, 200]
					}
				}
			}
		},

		ENGINE_VERSION_3: {
			"daw": {
				"pitch": {
					"bend": [-200, 200]
				},
				"modulation": {
					"rate": [0, 15]
				},
				"delay": {
					"time": [0, 1000],
					"feedback": [0, 0.9],
					"dry": [0, 1],
					"wet": [0, 1]
				},
				"reverb": {
					"level": [0, 1]
				},
				"masterVolume": {
					"level": [0, 1]
				}
			},
			"instruments": {
				"synth": {
					"polyphony": {
						"voiceCount": [1, 10]
					},
					"modulation": {
						"waveform": [0, 5],
						"portamento": [0, 0.16666666666666666],
						"rate": [0, 15]
					},
					"oscillator": {
						"osc1": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						},
						"osc2": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						},
						"osc3": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						}
					},
					"mixer": {
						"volume1": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume2": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume3": {
							"enabled": [0, 1],
							"level": [0, 1]
						}
					},
					"noise": {
						"enabled": [0, 1],
						"level": [0, 1],
						"type": [0, 2]
					},
					"envelopes": {
						"primary": {
							"attack": [0, 2],
							"decay": [0.002, 2],
							"sustain": [0, 1],
							"release": [0, 2]
						},
						"filter": {
							"attack": [0, 2],
							"decay": [0, 2],
							"sustain": [0.001, 1],
							"release": [0, 2]
						}
					},
					"filter": {
						"cutoff": [0, 8000],
						"emphasis": [0.4, 40],
						"envAmount": [0, 1]
					},
					"lfo": {
						"waveform": [0, 5],
						"rate": [1, 25],
						"amount": [0, 1]
					},
					"pitch": {
						"bend": [-200, 200]
					}
				}
			}
		},

		ENGINE_VERSION_4: {
			"daw": {
				"pitch": {
					"bend": [-200, 200]
				},
				"modulation": {
					"rate": [0, 15]
				},
				"delay": {
					"time": [0, 1000],
					"feedback": [0, 0.9],
					"dry": [0, 1],
					"wet": [0, 1]
				},
				"reverb": {
					"level": [0, 1]
				},
				"masterVolume": {
					"level": [0, 1]
				}
			},
			"instruments": {
				"synth": {
					"polyphony": {
						"voiceCount": [1, 10],
						"sustain": [0, 1]
					},
					"modulation": {
						"waveform": [0, 5],
						"portamento": [0, 0.16666666666666666],
						"rate": [0, 15]
					},
					"oscillator": {
						"osc1": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						},
						"osc2": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						},
						"osc3": {
							"range": [-4, 2],
							"fineDetune": [-8, 8],
							"waveform": [0, 5]
						}
					},
					"mixer": {
						"volume1": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume2": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume3": {
							"enabled": [0, 1],
							"level": [0, 1]
						}
					},
					"noise": {
						"enabled": [0, 1],
						"level": [0, 1],
						"type": [0, 2]
					},
					"envelopes": {
						"primary": {
							"attack": [0, 2],
							"decay": [0.002, 2],
							"sustain": [0, 1],
							"release": [0, 2]
						},
						"filter": {
							"attack": [0, 2],
							"decay": [0, 2],
							"sustain": [0.001, 1],
							"release": [0, 2]
						}
					},
					"filter": {
						"cutoff": [0, 8000],
						"emphasis": [0.4, 40],
						"envAmount": [0, 1]
					},
					"lfo": {
						"waveform": [0, 5],
						"rate": [1, 25],
						"amount": [0, 1]
					},
					"pitch": {
						"bend": [-200, 200]
					}
				}
			}
		},

		ENGINE_VERSION_5: {
			"daw": {
				"pitch": {
					"bend": [-200, 200]
				},
				"modulation": {
					"rate": [0, 15]
				},
				"delay": {
					"time": [0, 1000],
					"feedback": [0, 0.9],
					"dry": [0, 1],
					"wet": [0, 1]
				},
				"reverb": {
					"level": [0, 1]
				},
				"masterVolume": {
					"level": [0, 1]
				}
			},
			"instruments": {
				"synth": {
					"polyphony": {
						"voiceCount": [1, 10],
						"sustain": [0, 1]
					},
					"modulation": {
						"waveform": [0, 5],
						"portamento": [0, 0.16666666666666666],
						"rate": [0, 15]
					},
					"oscillator": {
						"osc1": {
							"range": [-4, 2],
							"fineDetune": [-800, 800],
							"waveform": [0, 5]
						},
						"osc2": {
							"range": [-4, 2],
							"fineDetune": [-800, 800],
							"waveform": [0, 5]
						},
						"osc3": {
							"range": [-4, 2],
							"fineDetune": [-800, 800],
							"waveform": [0, 5]
						}
					},
					"mixer": {
						"volume1": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume2": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume3": {
							"enabled": [0, 1],
							"level": [0, 1]
						}
					},
					"noise": {
						"enabled": [0, 1],
						"level": [0, 1],
						"type": [0, 2]
					},
					"envelopes": {
						"primary": {
							"attack": [0, 2],
							"decay": [0.002, 2],
							"sustain": [0, 1],
							"release": [0, 2]
						},
						"filter": {
							"attack": [0, 2],
							"decay": [0, 2],
							"sustain": [0.001, 1],
							"release": [0, 2]
						}
					},
					"filter": {
						"cutoff": [0, 8000],
						"emphasis": [0.4, 40],
						"envAmount": [0, 1]
					},
					"lfo": {
						"waveform": [0, 5],
						"rate": [1, 25],
						"amount": [0, 1]
					},
					"pitch": {
						"bend": [-200, 200]
					}
				}
			}
		},

		ENGINE_VERSION_6: {
			"daw": {
				"pitch": {
					"bend": [-200, 200]
				},
				"modulation": {
					"rate": [0, 15]
				},
				"compressor": {
					"threshold": [-60, 0],
					"ratio": [1, 20],
					"knee": [0, 20],
					"attack": [0.01, 1000],
					"release": [0.1, 1000],
					"makeupGain": [0, 10],
					"enabled": [0, 1]
				},
				"delay": {
					"time": [0, 1000],
					"feedback": [0, 0.9],
					"dry": [0, 1],
					"wet": [0, 1]
				},
				"reverb": {
					"level": [0, 1]
				},
				"masterVolume": {
					"level": [0, 1]
				}
			},
			"instruments": {
				"synth": {
					"polyphony": {
						"voiceCount": [1, 10],
						"sustain": [0, 1]
					},
					"modulation": {
						"waveform": [0, 5],
						"portamento": [0, 0.16666666666666666],
						"rate": [0, 15]
					},
					"oscillator": {
						"osc1": {
							"range": [-4, 2],
							"fineDetune": [-800, 800],
							"waveform": [0, 5]
						},
						"osc2": {
							"range": [-4, 2],
							"fineDetune": [-800, 800],
							"waveform": [0, 5]
						},
						"osc3": {
							"range": [-4, 2],
							"fineDetune": [-800, 800],
							"waveform": [0, 5]
						}
					},
					"mixer": {
						"volume1": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume2": {
							"enabled": [0, 1],
							"level": [0, 1]
						},
						"volume3": {
							"enabled": [0, 1],
							"level": [0, 1]
						}
					},
					"noise": {
						"enabled": [0, 1],
						"level": [0, 1],
						"type": [0, 2]
					},
					"envelopes": {
						"primary": {
							"attack": [0, 2],
							"decay": [0.002, 2],
							"sustain": [0, 1],
							"release": [0, 2]
						},
						"filter": {
							"attack": [0, 2],
							"decay": [0, 2],
							"sustain": [0.001, 1],
							"release": [0, 2]
						}
					},
					"filter": {
						"cutoff": [0, 8000],
						"emphasis": [0.4, 40],
						"envAmount": [0, 1]
					},
					"lfo": {
						"waveform": [0, 5],
						"rate": [1, 25],
						"amount": [0, 1]
					},
					"pitch": {
						"bend": [-200, 200]
					}
				}
			}
		}
	},

	DEFAULT_PITCH_SETTINGS: {
		bend: {
			value: 0,
			range: [ -200, 200 ]
		}
	},
	DEFAULT_MODULATION_SETTINGS: {
		rate: {
			value: 0,
			range: [ 0, 15 ]
		}
	},
	DEFAULT_COMPRESSOR_SETTINGS: {
		threshold: {
			value: -20,
			range: [ -60, 0 ]
		},
		ratio: {
			value: 3,
			range: [ 1, 20 ]
		},
		knee: {
			value: 2,
			range: [ 0, 20 ]
		},
		attack: {
			value: 0.1,
			range: [ 0.01, 1000 ]
		},
		release: {
			value: 20,
			range: [ 0.1, 1000 ]
		},
		makeupGain: {
			value: 0,
			range: [ 0, 10 ]
		},
		enabled: {
			value: 0,
			range: [ 0, 1 ]
		}
	},
	DEFAULT_DELAY_SETTINGS: {
		time: {
			value: 150,
			range: [ 0, 1000 ]
		},
		feedback: {
			value: 0.3,
			range: [ 0, 0.9 ]
		},
		dry: {
			value: 1,
			range: [ 0, 1 ]
		},
		wet: {
			value: 0,
			range: [ 0, 1 ]
		}
	},
	DEFAULT_REVERB_SETTINGS: {
		level: {
			value: 0,
			range: [ 0, 1 ]
		}
	},
	DEFAULT_MASTER_VOLUME_SETTINGS: {
		level: {
			value: 0.8,
			range: [ 0, 1 ]
		}
	},

	TUNA_COMPRESSOR_DEFAULT_SETTINGS: {
		threshold: -20,
		ratio: 3,
		knee: 3,
		attack: 0.1,
		release: 20,
		makeupGain: 0,
		automakeup: false,
		bypass: true
	},
	TUNA_DELAY_DEFAULT_SETTINGS: {
		feedback: 0.45,
		delayTime: 150,
		wetLevel: 0.25,
		dryLevel: 1,
		cutoff: 2000,
		bypass: 0
	},
	TUNA_REVERB_DEFAULT_SETTINGS: {
		highCut: 22050,
		lowCut: 20,
		dryLevel: 1,
		wetLevel: 0,
		level: 1,
		impulse: "impulses/impulse_rev.wav",
		bypass: 0
	}

};