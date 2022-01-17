onEvent('recipes', event => {
  event.remove({ output: 'refinedstorage:quartz_enriched_iron' })

  event.shapeless('9x refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron_block');

  event.recipes.thermal
    .smelter("4x refinedstorage:quartz_enriched_iron", ['3x mekanism:ingot_steel', 'minecraft:quartz'])
    .energy(6400);

  event.remove({ output: 'refinedstorage:machine_casing' })

  event.remove({ output: 'refinedstorage:controller' })
  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:quartz_enriched_iron_block"
            },
            {
                "item": "refinedstorage:advanced_processor"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron_block"
            },
            {
                "item": "refinedstorage:construction_core"
            },
            {
                "item": "refinedstorage:destruction_core"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron_block"
            },
            {
                "item": "refinedstorage:improved_processor"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron_block"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:1000}",
        "processingTime": 320,
        "output": {
            "item": "refinedstorage:controller",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.remove({ output: 'refinedstorage:disk_drive' })
  event.shaped('refinedstorage:disk_drive', [
  'QKQ',
  'QCQ',
  'QPQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron_block',
    P: 'refinedstorage:advanced_processor',
    C: 'refinedstorage:machine_casing',
    K: 'krate:krate_large'
  })

  event.remove({ output: 'refinedstorage:advanced_processor' })
  event.remove({ output: 'refinedstorage:improved_processor' })
  event.remove({ output: 'refinedstorage:basic_processor' })
  event.remove({ output: 'refinedstorage:raw_basic_processor' })
  event.remove({ output: 'refinedstorage:raw_improved_processor' })
  event.remove({ output: 'refinedstorage:raw_advanced_processor' })

  event.shaped('refinedstorage:raw_basic_processor', [
  'IP'
  ], {
    I: 'minecraft:iron_ingot',
    P: 'refinedstorage:processor_binding'
  })
  event.shaped('refinedstorage:raw_improved_processor', [
  'IP'
  ], {
    I: 'minecraft:gold_ingot',
    P: 'refinedstorage:processor_binding'
  })
  event.shaped('refinedstorage:raw_advanced_processor', [
  'IP'
  ], {
    I: 'minecraft:diamond',
    P: 'refinedstorage:processor_binding'
  })

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "refinedstorage:raw_basic_processor"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:basic_processor",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )
  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "refinedstorage:raw_improved_processor"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:improved_processor",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "refinedstorage:raw_advanced_processor"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:advanced_processor",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.remove({'rsinfinitybooster:infinity_card'})
  event.custom(
  {
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "DCECD",
      "CEFEC",
      "GHFIG",
      "JJJJJ"
    ],
    "key": {
      "A": {
        "item": "naturesaura:outpost_finder"
      },
      "B": {
        "item": "naturesaura:fortress_finder"
      },
      "C": {
        "item": "refinedstorage:range_upgrade"
      },
      "D": {
        "item": "naturesaura:end_city_finder"
      },
      "E": {
        "item": "extendedcrafting:ender_star"
      },
      "F": {
        "item": "refinedstorage:improved_processor"
      },
      "G": {
        "item": "refinedstorage:advanced_processor"
      },
      "H": {
        "item": "refinedstorage:destruction_core"
      },
      "I": {
        "item": "refinedstorage:construction_core"
      },
      "J": {
        "item": "minecraft:netherite_ingot"
      }
    },
    "result": {
      "item": "rsinfinitybooster:infinity_card"
    }
  }
)

});
