'use strict';

exports.cases = {

	version1Patch: {
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
	version2Patch: {
		"version": 2,
		"daw": {
			"pitch": {
				"bend": 0
			},
			"modulation": {
				"rate": 0
			},
			"delay": {
				"time": 570,
				"feedback": 0.45,
				"dry": 1,
				"wet": 0
			},
			"reverb": {
				"level": 0.36
			},
			"masterVolume": {
				"level": 0.8
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": 0,
					"portamento": 0.006666666666666666,
					"rate": 0
				},
				"oscillator": {
					"osc1": {
						"range": -1,
						"fineDetune": 0,
						"waveform": 2
					},
					"osc2": {
						"range": -2,
						"fineDetune": 0,
						"waveform": 2
					},
					"osc3": {
						"range": -3,
						"fineDetune": 0,
						"waveform": 3
					}
				},
				"mixer": {
					"volume1": {
						"enabled": 0,
						"level": 0.2
					},
					"volume2": {
						"enabled": 1,
						"level": 0.16
					},
					"volume3": {
						"enabled": 1,
						"level": 0.08
					}
				},
				"noise": {
					"enabled": 0,
					"level": 0.17,
					"type": 0
				},
				"envelopes": {
					"primary": {
						"attack": 0,
						"decay": 0.002,
						"sustain": 1,
						"release": 0.02
					},
					"filter": {
						"attack": 2,
						"decay": 1.44,
						"sustain": 0.001,
						"release": 0.02
					}
				},
				"filter": {
					"cutoff": 2048,
					"emphasis": 1.6,
					"envAmount":0.36
				},
				"lfo": {
					"waveform": 0,
					"rate": 6,
					"amount": 0
				},
				"pitch": {
					"bend": 0
				}
			}
		}
	}

};

exports.expected = {

	loadedVersion1Patch: { // don't remove even if no changes - if changes are made on load, the test will start failing
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

	loadedVersion2Patch: {
		"version": 2,
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

	preparedForSeralizationPatch: {
		"version": 2,
		"daw": {
			"pitch": {
				"bend": 0
			},
			"modulation": {
				"rate": 0
			},
			"delay": {
				"time": 570,
				"feedback": 0.45,
				"dry": 1,
				"wet": 0
			},
			"reverb": {
				"level": 0.36
			},
			"masterVolume": {
				"level": 0.8
			}
		},
		"instruments": {
			"synth": {
				"modulation": {
					"waveform": 0,
					"portamento": 0.006666666666666666,
					"rate": 0
				},
				"oscillator": {
					"osc1": {
						"range": -1,
						"fineDetune": 0,
						"waveform": 2
					},
					"osc2": {
						"range": -2,
						"fineDetune": 0,
						"waveform": 2
					},
					"osc3": {
						"range": -3,
						"fineDetune": 0,
						"waveform": 3
					}
				},
				"mixer": {
					"volume1": {
						"enabled": 0,
						"level": 0.2
					},
					"volume2": {
						"enabled": 1,
						"level": 0.16
					},
					"volume3": {
						"enabled": 1,
						"level": 0.08
					}
				},
				"noise": {
					"enabled": 0,
					"level": 0.17,
					"type": 0
				},
				"envelopes": {
					"primary": {
						"attack": 0,
						"decay": 0.002,
						"sustain": 1,
						"release": 0.02
					},
					"filter": {
						"attack": 2,
						"decay": 1.44,
						"sustain": 0.001,
						"release": 0.02
					}
				},
				"filter": {
					"cutoff": 2048,
					"emphasis": 1.6,
					"envAmount":0.36
				},
				"lfo": {
					"waveform": 0,
					"rate": 6,
					"amount": 0
				},
				"pitch": {
					"bend": 0
				}
			}
		}
	}

}