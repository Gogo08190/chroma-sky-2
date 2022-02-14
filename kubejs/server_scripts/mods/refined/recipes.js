onEvent('recipes', event => {
  event.remove({ output: 'refinedstorage:quartz_enriched_iron' })
  event.remove({output: 'refinedstorage:silicon', input: 'minecraft:quartz'})

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
  event.shaped('extrastorage:raw_neural_processor', [
  'AI',
  'PO'
  ], {
    P: 'refinedstorage:processor_binding',
    A: 'refinedstorage:raw_advanced_processor',
    I: 'refinedstorage:raw_improved_processor',
    O: 'minecraft:obsidian'
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

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "extrastorage:raw_neural_processor"
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
                "item": "minecraft:quartz"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:neural_processor",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "thermal:lumium_glass"
            },
            {
                "item": "thermal:lumium_glass"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "extendedcrafting:redstone_ingot"
            },
            {
                "item": "refinedstorage:silicon"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:1k_storage_part",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:basic_processor"
            },
            {
                "item": "extendedcrafting:redstone_ingot"
            },
            {
                "item": "refinedstorage:basic_processor"
            },
            {
                "item": "refinedstorage:1k_storage_part"
            },
            {
                "item": "refinedstorage:1k_storage_part"
            },
            {
                "item": "refinedstorage:basic_processor"
            },
            {
                "item": "refinedstorage:1k_storage_part"
            },
            {
                "item": "refinedstorage:basic_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:4k_storage_part",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:improved_processor"
            },
            {
                "item": "extendedcrafting:redstone_ingot"
            },
            {
                "item": "refinedstorage:improved_processor"
            },
            {
                "item": "refinedstorage:4k_storage_part"
            },
            {
                "item": "refinedstorage:4k_storage_part"
            },
            {
                "item": "refinedstorage:improved_processor"
            },
            {
                "item": "refinedstorage:4k_storage_part"
            },
            {
                "item": "refinedstorage:improved_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:16k_storage_part",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:advanced_processor"
            },
            {
                "item": "extendedcrafting:redstone_ingot"
            },
            {
                "item": "refinedstorage:advanced_processor"
            },
            {
                "item": "refinedstorage:16k_storage_part"
            },
            {
                "item": "refinedstorage:16k_storage_part"
            },
            {
                "item": "refinedstorage:advanced_processor"
            },
            {
                "item": "refinedstorage:16k_storage_part"
            },
            {
                "item": "refinedstorage:advanced_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:64k_storage_part",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "powah:capacitor_hardened"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "refinedstorage:64k_storage_part"
            },
            {
                "item": "refinedstorage:64k_storage_part"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "refinedstorage:64k_storage_part"
            },
            {
                "item": "extrastorage:neural_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:storagepart_256k",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "powah:capacitor_blazing"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_256k"
            },
            {
                "item": "extrastorage:storagepart_256k"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_256k"
            },
            {
                "item": "extrastorage:neural_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:storagepart_1024k",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "powah:capacitor_spirited"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_1024k"
            },
            {
                "item": "extrastorage:storagepart_1024k"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_1024k"
            },
            {
                "item": "extrastorage:neural_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:500}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:storagepart_4096k",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "powah:capacitor_niotic"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_4096k"
            },
            {
                "item": "extrastorage:storagepart_4096k"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_4096k"
            },
            {
                "item": "extrastorage:neural_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:1000}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:storagepart_16384k",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "refinedstorage:quartz_enriched_iron"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "thermal:lumium_glass"
            },
            {
                "item": "thermal:lumium_glass"
            },
            {
                "item": "refinedstorage:silicon"
            },
            {
                "item": "thermal:fluid_cell_frame"
            },
            {
                "item": "refinedstorage:silicon"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:64k_fluid_storage_part",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:basic_processor"
            },
            {
                "item": "thermal:fluid_cell_frame"
            },
            {
                "item": "refinedstorage:basic_processor"
            },
            {
                "item": "refinedstorage:64k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:64k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:basic_processor"
            },
            {
                "item": "refinedstorage:64k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:basic_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:256k_fluid_storage_part",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:improved_processor"
            },
            {
                "item": "thermal:fluid_cell_frame"
            },
            {
                "item": "refinedstorage:improved_processor"
            },
            {
                "item": "refinedstorage:256k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:256k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:improved_processor"
            },
            {
                "item": "refinedstorage:256k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:improved_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:1024k_fluid_storage_part",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "refinedstorage:advanced_processor"
            },
            {
                "item": "thermal:fluid_cell_frame"
            },
            {
                "item": "refinedstorage:advanced_processor"
            },
            {
                "item": "refinedstorage:1024k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:1024k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:advanced_processor"
            },
            {
                "item": "refinedstorage:1024k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:advanced_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
        "processingTime": 60,
        "output": {
            "item": "refinedstorage:4096k_fluid_storage_part",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "powah:capacitor_hardened"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "refinedstorage:4096k_fluid_storage_part"
            },
            {
                "item": "refinedstorage:4096k_fluid_storage_part"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "refinedstorage:4096k_fluid_storage_part"
            },
            {
                "item": "extrastorage:neural_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:500}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:storagepart_16384k_fluid",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "powah:capacitor_blazing"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_16384k_fluid"
            },
            {
                "item": "extrastorage:storagepart_16384k_fluid"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_16384k_fluid"
            },
            {
                "item": "extrastorage:neural_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:250}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:storagepart_65536k_fluid",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "powah:capacitor_spirited"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_65536k_fluid"
            },
            {
                "item": "extrastorage:storagepart_65536k_fluid"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_65536k_fluid"
            },
            {
                "item": "extrastorage:neural_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:500}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:storagepart_262144k_fluid",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "powah:capacitor_niotic"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_262144k_fluid"
            },
            {
                "item": "extrastorage:storagepart_262144k_fluid"
            },
            {
                "item": "extrastorage:neural_processor"
            },
            {
                "item": "extrastorage:storagepart_262144k_fluid"
            },
            {
                "item": "extrastorage:neural_processor"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:500}",
        "processingTime": 60,
        "output": {
            "item": "extrastorage:storagepart_1048576k_fluid",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.remove({ output: 'refinedstorage:1k_storage_part' })
  event.remove({ output: 'refinedstorage:4k_storage_part' })
  event.remove({ output: 'refinedstorage:16k_storage_part' })
  event.remove({ output: 'refinedstorage:64k_storage_part' })

  event.remove({ output: 'extrastorage:storagepart_256k' })
  event.remove({ output: 'extrastorage:storagepart_1024k' })
  event.remove({ output: 'extrastorage:storagepart_4096k' })
  event.remove({ output: 'extrastorage:storagepart_16384k' })

  event.remove({ output: 'refinedstorage:64k_fluid_storage_part' })
  event.remove({ output: 'refinedstorage:256k_fluid_storage_part' })
  event.remove({ output: 'refinedstorage:1024k_fluid_storage_part' })
  event.remove({ output: 'refinedstorage:4096k_fluid_storage_part' })

  event.remove({ output: 'extrastorage:storagepart_16384k_fluid' })
  event.remove({ output: 'extrastorage:storagepart_65536k_fluid' })
  event.remove({ output: 'extrastorage:storagepart_262144k_fluid' })
  event.remove({ output: 'extrastorage:storagepart_1048576k_fluid' })

  event.remove({ output: 'extrastorage:neural_processor' })
  event.remove({ output: 'extrastorage:raw_neural_processor' })

  event.remove({ output: 'rsinfinitybooster:infinity_card' })
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
