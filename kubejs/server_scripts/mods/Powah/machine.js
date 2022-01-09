onEvent('recipes', event => {

  event.remove({ output: 'powah:dielectric_paste' })
  event.custom(
    {
        "input": [
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "minecraft:clay_ball"
            },
            {
                "item": "minecraft:clay_ball"
            },
            {
                "item": "minecraft:clay_ball"
            }
        ],
        "inputFluid": "{FluidName:\"minecraft:lava\",Amount:1000}",
        "processingTime": 100,
        "output": {
            "item": "powah:dielectric_paste",
            "count": 24
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:crystal_nitro'},
      {"item": 'powah:ender_core'},
      {"item": 'refinedstorage:advanced_processor'},
      {"item": 'thermal:redstone_servo'},
      {"item": 'thermal:rf_coil'},
      {"item": 'powah:crystal_nitro'}
      ],
      "energy": 5000,
      "result": {
      "item": 'chromasky:mechanic_core_tier_4',
      "count": 1
      }
    }
  )
event.remove({ output: 'extendedcrafting:luminessence' })
event.shapeless('9x extendedcrafting:luminessence', 'extendedcrafting:luminessence_block');
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'astralsorcery:illumination_powder'},
      {"item": 'astralsorcery:illumination_powder'},
      {"item": 'minecraft:redstone'},
      {"item": 'minecraft:gunpowder'}
      ],
      "energy": 5000,
      "result": {
      "item": 'extendedcrafting:luminessence',
      "count": 2
      }
    }
  )

});
