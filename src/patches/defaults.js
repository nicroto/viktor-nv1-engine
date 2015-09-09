'use strict';

module.exports = {

	"Bass Razr Lead": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 570,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.45,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.36,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.8,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.006666666666666666,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": -2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -3,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 3,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.2,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.16,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.08,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.17,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 1,
							"range": [0, 1]
						},
						"release": {
							"value": 0.02,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 2,
							"range": [0, 2]
						},
						"decay": {
							"value": 1.44,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.001,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.02,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 2048,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 1.6,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0.36,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 6,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Electric Piano": {
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
	},
	"Sine Bass": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 570,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.45,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.15,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.8,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.006666666666666666,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": -2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -3,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.2,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.25,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.55,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.17,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.73,
							"range": [0, 1]
						},
						"release": {
							"value": 0.02,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.14,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.2,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.16084,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.48,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 560,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 8.4,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 6,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"8-bit Shogun": {
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
				"wet": 0.28
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
						"waveform": 2
					},
					"osc2": {
						"range": 2,
						"fineDetune": -5,
						"waveform": 2
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
						"enabled": 1,
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
	},
	"Deep Sine Bass": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 570,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.45,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.15,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.0016666666666666666,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": -2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": -3,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -4,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.11,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.1,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.51,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.17,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.73,
							"range": [0, 1]
						},
						"release": {
							"value": 0.02,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.14,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.2,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.16084,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.48,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 560,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 13.200000000000001,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 6,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Electric Clavessine": {
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
				},
				"modulation": {
					"waveform": 0,
					"portamento": 0,
					"rate": 0
				},
				"oscillator": {
					"osc1": {
						"range": 0,
						"fineDetune": 0,
						"waveform": 2
					},
					"osc2": {
						"range": 1,
						"fineDetune": 0,
						"waveform": 2
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
						"enabled": 1,
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
	},
	"Moog Triangle Bass": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 460,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.47700000000000004,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.0016666666666666666,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": -2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 3,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": -3,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 3,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -4,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 3,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.12,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.38,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.7,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.17,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.73,
							"range": [0, 1]
						},
						"release": {
							"value": 0.02,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.14,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.2,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.16084,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.48,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 1248,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 22.4,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 6,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Organ Thingie": {
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
				},
				"modulation": {
					"waveform": 0,
					"portamento": 0,
					"rate": 0
				},
				"oscillator": {
					"osc1": {
						"range": 0,
						"fineDetune": 0,
						"waveform": 2
					},
					"osc2": {
						"range": 1,
						"fineDetune": 0,
						"waveform": 2
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
						"enabled": 1,
						"level": 0.25
					},
					"volume3": {
						"enabled": 1,
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
						"release": 0
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
	},
	"Accordion": {
		"version": 3,
		"daw": {
			"pitch": {
				"bend": 0
			},
			"modulation": {
				"rate": 0
			},
			"delay": {
				"time": 280,
				"feedback": 0.5940000000000001,
				"dry": 0.66,
				"wet": 0
			},
			"reverb": {
				"level": 0
			},
			"masterVolume": {
				"level": 0.84
			}
		},
		"instruments": {
			"synth": {
				"polyphony": {
					"voiceCount": 10
				},
				"modulation": {
					"waveform": 0,
					"portamento": 0,
					"rate": 0
				},
				"oscillator": {
					"osc1": {
						"range": 0,
						"fineDetune": 0,
						"waveform": 2
					},
					"osc2": {
						"range": 2,
						"fineDetune": -5,
						"waveform": 2
					},
					"osc3": {
						"range": -2,
						"fineDetune": 0,
						"waveform": 1
					}
				},
				"mixer": {
					"volume1": {
						"enabled": 1,
						"level": 0.4
					},
					"volume2": {
						"enabled": 1,
						"level": 0.2
					},
					"volume3": {
						"enabled": 1,
						"level": 0.4
					}
				},
				"noise": {
					"enabled": 0,
					"level": 0.49,
					"type": 0
				},
				"envelopes": {
					"primary": {
						"attack": 0.28,
						"decay": 1.04096,
						"sustain": 0.39,
						"release": 0
					},
					"filter": {
						"attack": 0.02,
						"decay": 1.8,
						"sustain": 0.05095,
						"release": 0.92
					}
				},
				"filter": {
					"cutoff": 8000,
					"emphasis": 5.600000000000001,
					"envAmount": 1
				},
				"lfo": {
					"waveform": 3,
					"rate": 6,
					"amount": 0
				},
				"pitch": {
					"bend": 0
				}
			}
		}
	},
	"Clean Sine": {
		daw: {
			pitch: {
				bend: {
					value: 0,
					range: [ -200, 200 ]
				}
			},
			modulation: {
				rate: {
					value: 0,
					range: [ 0, 15 ]
				}
			},
			delay: {
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
			reverb: {
				level: {
					value: 0,
					range: [ 0, 1 ]
				}
			},
			masterVolume: {
				level: {
					value: 0.8,
					range: [ 0, 1 ]
				}
			}
		},
		instruments: {
			"synth": {
				pitch: {
					bend: {
						value: 0,
						range: [ -200, 200 ]
					}
				},
				modulation: {
					waveform: {
						value: 0,
						range: [ 0, 5 ]
					},
					portamento: {
						value: 5 / 100 / 6,
						range: [ 0, 1/6 ]
					},
					rate: {
						value: 0,
						range: [ 0, 15 ]
					}
				},
				oscillator: {
					osc1: {
						range: {
							value: 0,
							range: [ -4, 2 ]
						},
						fineDetune: {
							value: 0,
							range: [ -8, 8 ]
						},
						waveform: {
							value: 0,
							range: [ 0, 5 ]
						}
					},
					osc2: {
						range: {
							value: 0,
							range: [ -4, 2 ]
						},
						fineDetune: {
							value: 0,
							range: [ -8, 8 ]
						},
						waveform: {
							value: 0,
							range: [ 0, 5 ]
						}
					},
					osc3: {
						range: {
							value: -1,
							range: [ -4, 2 ]
						},
						fineDetune: {
							value: 0,
							range: [ -8, 8 ]
						},
						waveform: {
							value: 0,
							range: [ 0, 5 ]
						}
					}
				},
				mixer: {
					volume1: {
						enabled: {
							value: 1,
							range: [ 0, 1 ]
						},
						level: {
							value: 0.6,
							range: [ 0, 1 ]
						}
					},
					volume2: {
						enabled: {
							value: 0,
							range: [ 0, 1 ]
						},
						level: {
							value: 0.6,
							range: [ 0, 1 ]
						}
					},
					volume3: {
						enabled: {
							value: 0,
							range: [ 0, 1 ]
						},
						level: {
							value: 0.6,
							range: [ 0, 1 ]
						}
					}
				},
				noise: {
					enabled: {
						value: 0,
						range: [ 0, 1 ]
					},
					type: {
						value: 0,
						range: [ 0, 2 ]
					},
					level: {
						value: 0.2,
						range: [ 0, 1 ]
					}
				},
				envelopes: {
					primary: {
						attack: {
							value: 0.5,
							range: [ 0, 2 ]
						},
						decay: {
							value: 0.5,
							range: [ 0.002, 2 ]
						},
						sustain: {
							value: 0.5,
							range: [ 0, 1 ]
						},
						release: {
							value: 0.1,
							range: [ 0, 2 ]
						}
					},
					filter: {
						attack: {
							value: 0.5,
							range: [ 0, 2 ]
						},
						decay: {
							value: 0.5,
							range: [ 0, 2 ]
						},
						sustain: {
							value: 0.5,
							range: [ 0.001, 1 ]
						},
						release: {
							value: 0.1,
							range: [ 0, 2 ]
						}
					}
				},
				filter: {
					cutoff: {
						value: 4000,
						range: [ 0, 8000 ]
					},
					emphasis: {
						value: 2,
						range: [ 0.4, 40 ]
					},
					envAmount: {
						value: 0,
						range: [ 0, 1 ]
					}
				},
				lfo: {
					waveform: {
						value: 0,
						range: [ 0, 5 ]
					},
					rate: {
						value: 3,
						range: [ 1, 25 ]
					},
					amount: {
						value: 0,
						range: [ 0, 1 ]
					}
				}
			}
		}
	},
	"Vesi": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 370,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.5670000000000001,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.4,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.24,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.8,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.008333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 4000,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 2,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 3,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Muffled": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 370,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.5670000000000001,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.4,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.28,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.008333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.38,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.42,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.33,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 4000,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 2,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 3,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Quiet voice": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 370,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.5670000000000001,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.4,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.28,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 3,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 1.5354330708661417,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": 2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.27,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0, 1]
						},
						"release": {
							"value": 0.56,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 4000,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 12.8,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 3,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Triangle and Saw": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 430,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.531,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.47,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.22,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 5,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.013333333333333332,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 3,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.64,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.28,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 5424,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 13.200000000000001,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 1,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Mnogoglas": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 370,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.5670000000000001,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.4,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.28,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.008333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": -7,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": 2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": -7,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.37,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.11,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.35,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 4000,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 2,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 5,
						"range": [0, 5]
					},
					"rate": {
						"value": 1,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Space Trumpet": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 290,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.684,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.39,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.39,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 3,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.013333333333333332,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 3,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": -2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.42,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.17,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.34,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.59,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.06194,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.84,
							"range": [0, 1]
						},
						"release": {
							"value": 0.36,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.1,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.08,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.27073,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.22,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 2848,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 0.4,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 1,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 1,
						"range": [1, 25]
					},
					"amount": {
						"value": 0.32,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Space Trumpet 2": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 450,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.387,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 0.66,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.42,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.35,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.5,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.03,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.96,
							"range": [0, 1]
						},
						"release": {
							"value": 0.94,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.04,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.56044,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.92,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 560,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 0.4,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 1,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 3,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Bird": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 370,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.5670000000000001,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.4,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.28,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.008333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": 2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.36,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.25,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.29,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 4000,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 2,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 5,
						"range": [0, 5]
					},
					"rate": {
						"value": 1,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Electronic Violin": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 430,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.531,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.47,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.22,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 1,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.0016666666666666666,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 3,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.64,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.28,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0.8,
							"range": [0, 2]
						},
						"decay": {
							"value": 1.06094,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 5424,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 13.200000000000001,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 1,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Hang": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 450,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.387,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 0.66,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.42,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.35,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.84,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.4,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.4,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.4,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.03,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.96,
							"range": [0, 1]
						},
						"release": {
							"value": 0.94,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.12,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.12,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.01099,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.92,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 432,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 0.4,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 1,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 3,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Meet her at the Love Parade": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 450,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.54,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.31,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.56,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.003333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 3,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": -4,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.69,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.97,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.09,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 1,
							"range": [0, 1]
						},
						"release": {
							"value": 0,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 4800,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 2,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 1,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Smile like you mean it": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 4.3359375,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 450,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.387,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 0.66,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.42,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.35,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.47,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 4.3359375,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.03,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.96,
							"range": [0, 1]
						},
						"release": {
							"value": 0.94,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.04,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.56044,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.92,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 560,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 0.4,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 1,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 3,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"The X-Files": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 500,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.63,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 0.66,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.42,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.35,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.84,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.4,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.4,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.4,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"level": {
						"value": 0.03,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.96,
							"range": [0, 1]
						},
						"release": {
							"value": 0.94,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.12,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.12,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.01099,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.92,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 432,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 0.4,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 1,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 3,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Babylon": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 250,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.36000000000000004,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.26,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.12,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.8,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.003333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 3,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 1,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 0,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.6,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.002,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 1,
							"range": [0, 1]
						},
						"release": {
							"value": 0.18,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.5,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.5,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 5616,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 2,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 3,
						"range": [1, 25]
					},
					"amount": {
						"value": 0.14,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Venga Party": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 380,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.45,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0.25,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.8,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.003333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": -2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": -2,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": -5,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": -1,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 0,
							"range": [0, 1]
						},
						"level": {
							"value": 0.3,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.37,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.18,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.02198,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.87,
							"range": [0, 1]
						},
						"release": {
							"value": 0.02,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.12,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.2,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 640,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 6,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 8,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Siren": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 500,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.54,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.29,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.8,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.003333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 8,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": -4,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.3,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.37,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.18,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.02198,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.87,
							"range": [0, 1]
						},
						"release": {
							"value": 0.02,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.12,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.2,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 4976,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 5.200000000000001,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 8,
						"range": [1, 25]
					},
					"amount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	},
	"Ba-ba-ba-ba-ba (voice)": {
		"daw": {
			"pitch": {
				"bend": {
					"value": 0,
					"range": [-200, 200]
				}
			},
			"modulation": {
				"rate": {
					"value": 0,
					"range": [0, 15]
				}
			},
			"delay": {
				"time": {
					"value": 500,
					"range": [0, 1000]
				},
				"feedback": {
					"value": 0.54,
					"range": [0, 0.9]
				},
				"dry": {
					"value": 1,
					"range": [0, 1]
				},
				"wet": {
					"value": 0,
					"range": [0, 1]
				}
			},
			"reverb": {
				"level": {
					"value": 0.29,
					"range": [0, 1]
				}
			},
			"masterVolume": {
				"level": {
					"value": 0.8,
					"range": [0, 1]
				}
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"portamento": {
						"value": 0.003333333333333333,
						"range": [0, 0.16666666666666666]
					},
					"rate": {
						"value": 0,
						"range": [0, 15]
					}
				},
				"oscillator": {
					"osc1": {
						"range": {
							"value": 0,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 0,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc2": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": 8,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					},
					"osc3": {
						"range": {
							"value": -1,
							"range": [-4, 2]
						},
						"fineDetune": {
							"value": -4,
							"range": [-8, 8]
						},
						"waveform": {
							"value": 2,
							"range": [0, 5]
						}
					}
				},
				"mixer": {
					"volume1": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.3,
							"range": [0, 1]
						}
					},
					"volume2": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.37,
							"range": [0, 1]
						}
					},
					"volume3": {
						"enabled": {
							"value": 1,
							"range": [0, 1]
						},
						"level": {
							"value": 0.18,
							"range": [0, 1]
						}
					}
				},
				"noise": {
					"enabled": {
						"value": 0,
						"range": [0, 1]
					},
					"type": {
						"value": 0,
						"range": [0, 2]
					},
					"level": {
						"value": 0.2,
						"range": [0, 1]
					}
				},
				"envelopes": {
					"primary": {
						"attack": {
							"value": 0,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.02198,
							"range": [0.002, 2]
						},
						"sustain": {
							"value": 0.87,
							"range": [0, 1]
						},
						"release": {
							"value": 0.02,
							"range": [0, 2]
						}
					},
					"filter": {
						"attack": {
							"value": 0.12,
							"range": [0, 2]
						},
						"decay": {
							"value": 0.2,
							"range": [0, 2]
						},
						"sustain": {
							"value": 0.5,
							"range": [0.001, 1]
						},
						"release": {
							"value": 0.1,
							"range": [0, 2]
						}
					}
				},
				"filter": {
					"cutoff": {
						"value": 1200,
						"range": [0, 8000]
					},
					"emphasis": {
						"value": 5.200000000000001,
						"range": [0.4, 40]
					},
					"envAmount": {
						"value": 0,
						"range": [0, 1]
					}
				},
				"lfo": {
					"waveform": {
						"value": 0,
						"range": [0, 5]
					},
					"rate": {
						"value": 8,
						"range": [1, 25]
					},
					"amount": {
						"value": 1,
						"range": [0, 1]
					}
				},
				"pitch": {
					"bend": {
						"value": 0,
						"range": [-200, 200]
					}
				}
			}
		}
	}

};