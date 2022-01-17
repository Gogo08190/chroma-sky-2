onEvent('recipes', event => {
  event.remove({ output: 'mysticalagradditions:nether_star_crux'})
  event.remove({ output: 'mysticalagradditions:awakened_draconium_crux'})
  event.remove({ output: 'mysticalagradditions:nitro_crystal_crux'})
  event.remove({ output: 'mysticalagradditions:dragon_egg_crux'})
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "overloaded:nether_star_block"
        },
        "C": {
          "item": "mysticalagradditions:withering_soul"
        },
        "D": {
          "item": "extendedcrafting:ender_star"
        },
        "E": {
          "item": "powah:niotic_crystal_block"
        }
      },
      "result": {
        "item": "mysticalagradditions:nether_star_crux"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "draconicevolution:awakened_draconium_block"
        },
        "C": {
          "item": "draconicevolution:dragon_heart"
        },
        "D": {
          "item": "draconicevolution:awakened_core"
        },
        "E": {
          "item": "powah:niotic_crystal_block"
        }
      },
      "result": {
        "item": "mysticalagradditions:awakened_draconium_crux"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "powah:nitro_crystal_block"
        },
        "C": {
          "item": "powah:capacitor_nitro"
        },
        "D": {
          "item": "powah:ender_core"
        },
        "E": {
          "item": "powah:niotic_crystal_block"
        }
      },
      "result": {
        "item": "mysticalagradditions:nitro_crystal_crux"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "mysticalagradditions:dragon_scale"
        },
        "C": {
          "item": "minecraft:dragon_egg"
        },
        "D": {
          "item": "minecraft:dragon_breath"
        },
        "E": {
          "item": "powah:niotic_crystal_block"
        }
      },
      "result": {
        "item": "mysticalagradditions:dragon_egg_crux"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "draconicevolution:large_chaos_frag"
        },
        "C": {
          "item": "draconicevolution:chaotic_core"
        },
        "D": {
          "item": "draconicevolution:chaotic_energy_core"
        },
        "E": {
          "item": "powah:niotic_crystal_block"
        }
      },
      "result": {
        "item": "chromasky:chaos_crux"
      }
    }
  )
});
