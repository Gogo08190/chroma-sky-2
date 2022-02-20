onEvent('recipes', event => {

    // Unstable Obsidian
    event.remove({ output: 'theabyss:abyssportalstone' })
    event.shaped('2x theabyss:abyssportalstone', [
      `OLO`,
      `LNL`,
      `OLO`
    ], {
      O: 'minecraft:crying_obsidian',
      L: 'theabyss:abyssloranitem',
      N: 'powah:crystal_niotic'
    })

    // Abyss Activator portal
    event.remove({ output: 'theabyss:theabyssdim' })
    event.custom(
      {
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 100,
        "pattern": [
          "_____",
          "_ R _",
          "_ENE_",
          "_ B _",
          "_____"
        ],
        "key": {
          "B": {
            "item": "minecraft:lava_bucket"
          },
          "R": {
            "item": "astralsorcery:resonating_gem"
          },
          "E": {
            "item": "extendedcrafting:black_iron_ingot"
          },
          "N": {
            "item": "powah:crystal_niotic"
          },
        },
        "output": [
          {
            "item": "theabyss:theabyssdim",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
      }
    )

  });
