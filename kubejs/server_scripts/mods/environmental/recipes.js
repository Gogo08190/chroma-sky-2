onEvent('recipes', event => {
  event.remove({ output: 'envirotech:litherite_void_miner_ccu' })
  event.remove({ output: 'envirotech:erodium_void_miner_ccu' })
  event.remove({ output: 'envirotech:kyronite_void_miner_ccu' })
  event.remove({ output: 'envirotech:pladium_void_miner_ccu' })
  event.remove({ output: 'envirotech:ionite_void_miner_ccu' })
  event.remove({ output: 'envirotech:aethium_void_miner_ccu' })
  event.remove({ output: 'envirotech:nanorite_void_miner_ccu' })
  event.remove({ output: 'envirotech:xerothium_void_miner_ccu' })
  event.remove({ output: 'enviroenergy:litherite_solar_ccu' })
  event.remove({ output: 'enviroenergy:erodium_solar_ccu' })
  event.remove({ output: 'enviroenergy:kyronite_solar_ccu' })
  event.remove({ output: 'enviroenergy:pladium_solar_ccu' })
  event.remove({ output: 'enviroenergy:ionite_solar_ccu' })
  event.remove({ output: 'enviroenergy:aethium_solar_ccu' })
  event.remove({ output: 'enviroenergy:nanorite_solar_ccu' })
  event.remove({ output: 'enviroenergy:xerothium_solar_ccu' })

  event.remove({ output: 'envirocore:litherite_crystal' })
  event.shapeless('9x envirocore:litherite_crystal', 'envirocore:litherite');
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:crystal_spirited'},
      {"item": 'minecraft:ender_pearl'},
      {"item": 'minecraft:ender_pearl'},
      {"item": 'minecraft:quartz'},
      {"item": 'minecraft:quartz'},
      {"item": 'minecraft:quartz'}
      ],
      "energy": 5000,
      "result": {
      "item": 'envirocore:litherite_crystal',
      "count": 6
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ABCBA",
        "ADEDA",
        "AFEFA",
        "GGEGG"
      ],
      "key": {
        "A": {
          "item": "envirocore:litherite_crystal"
        },
        "B": {
          "item": "powah:niotic_crystal_block"
        },
        "C": {
          "item": "mekanism:alloy_atomic"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "envirocore:laser_core"
        },
        "F": {
          "item": "envirocore:laser_diode"
        },
        "G": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "envirotech:litherite_void_miner_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ABCBA",
        "ADEDA",
        "AFEFA",
        "GGEGG"
      ],
      "key": {
        "A": {
          "item": "envirocore:erodium_crystal"
        },
        "B": {
          "item": "powah:niotic_crystal_block"
        },
        "C": {
          "item": "envirotech:litherite_void_miner_ccu"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "envirocore:laser_core"
        },
        "F": {
          "item": "envirocore:laser_diode"
        },
        "G": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "envirotech:erodium_void_miner_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ABCBA",
        "ADEDA",
        "AFEFA",
        "GGEGG"
      ],
      "key": {
        "A": {
          "item": "envirocore:kyronite_crystal"
        },
        "B": {
          "item": "powah:niotic_crystal_block"
        },
        "C": {
          "item": "envirotech:erodium_void_miner_ccu"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "envirocore:laser_core"
        },
        "F": {
          "item": "envirocore:laser_diode"
        },
        "G": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "envirotech:kyronite_void_miner_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ABCBA",
        "ADEDA",
        "AFEFA",
        "GGEGG"
      ],
      "key": {
        "A": {
          "item": "envirocore:pladium_crystal"
        },
        "B": {
          "item": "powah:niotic_crystal_block"
        },
        "C": {
          "item": "envirotech:kyronite_void_miner_ccu"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "envirocore:laser_core"
        },
        "F": {
          "item": "envirocore:laser_diode"
        },
        "G": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "envirotech:pladium_void_miner_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ABCBA",
        "ADEDA",
        "AFEFA",
        "GGEGG"
      ],
      "key": {
        "A": {
          "item": "envirocore:ionite_crystal"
        },
        "B": {
          "item": "powah:niotic_crystal_block"
        },
        "C": {
          "item": "envirotech:pladium_void_miner_ccu"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "envirocore:laser_core"
        },
        "F": {
          "item": "envirocore:laser_diode"
        },
        "G": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "envirotech:ionite_void_miner_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ABCBA",
        "ADEDA",
        "AFEFA",
        "GGEGG"
      ],
      "key": {
        "A": {
          "item": "envirocore:aethium_crystal"
        },
        "B": {
          "item": "powah:niotic_crystal_block"
        },
        "C": {
          "item": "envirotech:ionite_void_miner_ccu"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "envirocore:laser_core"
        },
        "F": {
          "item": "envirocore:laser_diode"
        },
        "G": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "envirotech:aethium_void_miner_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ABCBA",
        "ADEDA",
        "AFEFA",
        "GGEGG"
      ],
      "key": {
        "A": {
          "item": "envirocore:nanorite_crystal"
        },
        "B": {
          "item": "powah:niotic_crystal_block"
        },
        "C": {
          "item": "envirotech:aethium_void_miner_ccu"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "envirocore:laser_core"
        },
        "F": {
          "item": "envirocore:laser_diode"
        },
        "G": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "envirotech:nanorite_void_miner_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "ABCBA",
        "ADEDA",
        "AFEFA",
        "GGEGG"
      ],
      "key": {
        "A": {
          "item": "envirocore:xerothium_crystal"
        },
        "B": {
          "item": "powah:niotic_crystal_block"
        },
        "C": {
          "item": "envirotech:nanorite_void_miner_ccu"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "envirocore:laser_core"
        },
        "F": {
          "item": "envirocore:laser_diode"
        },
        "G": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "envirotech:xerothium_void_miner_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "BBDBB",
        "ACBCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:litherite_crystal"
        },
        "B": {
          "item": "enviroenergy:litherite_solar_cell"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "enviroenergy:litherite_solar_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "BBDBB",
        "ACBCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:erodium_crystal"
        },
        "B": {
          "item": "enviroenergy:erodium_solar_cell"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:litherite_solar_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:erodium_solar_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "BBDBB",
        "ACBCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:kyronite_crystal"
        },
        "B": {
          "item": "enviroenergy:kyronite_solar_cell"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:erodium_solar_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:kyronite_solar_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "BBDBB",
        "ACBCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:pladium_crystal"
        },
        "B": {
          "item": "enviroenergy:pladium_solar_cell"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:kyronite_solar_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:pladium_solar_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "BBDBB",
        "ACBCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:ionite_crystal"
        },
        "B": {
          "item": "enviroenergy:ionite_solar_cell"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:pladium_solar_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:ionite_solar_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "BBDBB",
        "ACBCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:aethium_crystal"
        },
        "B": {
          "item": "enviroenergy:aethium_solar_cell"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:ionite_solar_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:aethium_solar_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "BBDBB",
        "ACBCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:nanorite_crystal"
        },
        "B": {
          "item": "enviroenergy:nanorite_solar_cell"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:aethium_solar_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:nanorite_solar_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "BBDBB",
        "ACBCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:xerothium_crystal"
        },
        "B": {
          "item": "enviroenergy:xerothium_solar_cell"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:nanorite_solar_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:xerothium_solar_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "ABCBA",
        "ABDBA",
        "ABBBA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:litherite_crystal"
        },
        "B": {
          "item": "mekanism:block_steel"
        },
        "C": {
          "item": "enviroenergy:insulated_lightning_rod"
        },
        "D": {
          "item": "envirocore:structure_panel"
        }
      },
      "result": {
        "item": "enviroenergy:litherite_lightning_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "AADAA",
        "ACACA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:erodium_crystal"
        },
        "B": {
          "item": "enviroenergy:insulated_lightning_rod"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:litherite_lightning_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:erodium_lightning_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "AADAA",
        "ACACA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:kyronite_crystal"
        },
        "B": {
          "item": "enviroenergy:insulated_lightning_rod"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:erodium_lightning_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:kyronite_lightning_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "AADAA",
        "ACACA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:pladium_crystal"
        },
        "B": {
          "item": "enviroenergy:insulated_lightning_rod"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:kyronite_lightning_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:pladium_lightning_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "AADAA",
        "ACACA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:ionite_crystal"
        },
        "B": {
          "item": "enviroenergy:insulated_lightning_rod"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:pladium_lightning_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:ionite_lightning_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "AADAA",
        "ACACA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:aethium_crystal"
        },
        "B": {
          "item": "enviroenergy:insulated_lightning_rod"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:ionite_lightning_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:aethium_lightning_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "AADAA",
        "ACACA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:nanorite_crystal"
        },
        "B": {
          "item": "enviroenergy:insulated_lightning_rod"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:aethium_lightning_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:nanorite_lightning_ccu"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACBCA",
        "AADAA",
        "ACACA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "envirocore:xerothium_crystal"
        },
        "B": {
          "item": "enviroenergy:insulated_lightning_rod"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "enviroenergy:nanorite_lightning_ccu"
        }
      },
      "result": {
        "item": "enviroenergy:xerothium_lightning_ccu"
      }
    }
  )

  event.remove({ output: 'envirocore:structure_panel' })
  event.shaped('envirocore:structure_panel', [
  'SOS',
  'OQO',
  'SOS'
  ], {
    S: 'powah:steel_energized',
    O: 'envirocore:obsidian_plate',
    Q: 'refinedstorage:quartz_enriched_iron'
  })

  event.remove({ output: 'envirocore:clear_structure_panel' })
  event.shaped('envirocore:clear_structure_panel', [
  'SOS',
  'OQO',
  'SOS'
  ], {
    S: 'thermal:obsidian_glass',
    O: 'envirocore:obsidian_plate',
    Q: 'refinedstorage:quartz_enriched_iron'
  })

  event.remove({ output: 'envirocore:laser_diode' })
  event.shaped('envirocore:laser_diode', [
  'HHH',
  'HRH',
  'GLG'
  ], {
    L: 'thermal:lumium_plate',
    G: 'thermal:gold_gear',
    R: 'extendedcrafting:redstone_ingot',
    H: 'thermal:obsidian_glass'
  })

  event.remove({ output: 'envirocore:laser_core' })
  event.shaped('envirocore:laser_core', [
  'OSO',
  'SLS',
  'OSO'
  ], {
    O: 'envirocore:obsidian_plate',
    S: 'mekanism:ingot_steel',
    L: 'simplylight:rodlamp'
  })

  event.remove({ output: 'envirocore:cpu' })
  event.shaped('envirocore:cpu', [
  'GCG',
  'CLC',
  'GCG'
  ], {
    C: 'minecraft:comparator',
    G: 'thermal:gold_plate',
    L: 'envirocore:litherite_crystal'
  })

  event.remove({ output: 'envirocore:volatile_memory' })
  event.shaped('envirocore:volatile_memory', [
  'SRS',
  'SLS',
  'SRS'
  ], {
    S: 'mekanism:ingot_steel',
    L: 'envirocore:litherite_crystal',
    R: 'minecraft:repeater'
  })

  event.remove({ output: 'envirocore:flash_memory' })
  event.shaped('envirocore:flash_memory', [
  'SRS',
  'RLR',
  'SRS'
  ], {
    S: 'mekanism:ingot_steel',
    L: 'envirocore:volatile_memory',
    R: 'minecraft:repeater'
  })
});
