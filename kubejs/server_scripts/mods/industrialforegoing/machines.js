events.listen('recipes', event => {

  event.custom(
    {
        "input": [
            {
                "item": "mekanism:ingot_steel"
            },
            {
                "item": "industrialforegoing:pink_slime_ingot"
            },
            {
                "item": "mekanism:ingot_steel"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "mekanism:ingot_steel"
            },
            {
                "item": "industrialforegoing:pink_slime_ingot"
            },
            {
                "item": "mekanism:ingot_steel"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:1000}",
        "processingTime": 320,
        "output": {
            "item": "chromasky:mechanic_core_tier_3",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "minecraft:glass"
            },
            {
                "item": "immersiveengineering:electric_lantern"
            },
            {
                "item": "minecraft:glass"
            },
            {
                "item": "immersiveengineering:component_steel"
            },
            {
                "item": "immersiveengineering:component_steel"
            },
            {
                "item": "immersiveengineering:treated_wood_horizontal"
            },
            {
                "item": "immersiveengineering:fluid_pump"
            },
            {
                "item": "immersiveengineering:treated_wood_horizontal"
            }
        ],
        "inputFluid": "{FluidName:\"minecraft:water\",Amount:1000}",
        "processingTime": 320,
        "output": {
            "item": "immersiveengineering:cloche",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "masterfulmachinery:mysticfactory1_controller"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}')
            },
            {
                "item": Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}')
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "industrialforegoing:machine_frame_supreme"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:1000}",
        "processingTime": 580,
        "output": {
            "item": "masterfulmachinery:mysticfactory2_controller",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "masterfulmachinery:mysticfactory1_mystical_item_port_items_input"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "industrialforegoing:efficiency_addon_2"
            },
            {
                "item": "industrialforegoing:efficiency_addon_2"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "industrialforegoing:common_black_hole_unit"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:1000}",
        "processingTime": 580,
        "output": {
            "item": "masterfulmachinery:mysticfactory2_mystical_item_port_items_input",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "masterfulmachinery:mysticfactory1_mystical_item_port_items_output"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "industrialforegoing:efficiency_addon_2"
            },
            {
                "item": "industrialforegoing:efficiency_addon_2"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "industrialforegoing:common_black_hole_unit"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:1000}",
        "processingTime": 580,
        "output": {
            "item": "masterfulmachinery:mysticfactory2_mystical_item_port_items_output",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "input": [
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "masterfulmachinery:mysticfactory1_mystical_energy_port_energy_input"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "industrialforegoing:processing_addon_2"
            },
            {
                "item": "industrialforegoing:processing_addon_2"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            },
            {
                "item": "industrialforegoing:pink_slime_ingot"
            },
            {
                "item": "mysticalagriculture:inferium_gemstone_block"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:1000}",
        "processingTime": 580,
        "output": {
            "item": "masterfulmachinery:mysticfactory2_mystical_energy_port_energy_input",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

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
        "inputFluid": "{FluidName:\"minecraft:lava\",Amount:250}",
        "processingTime": 100,
        "output": {
            "item": "powah:dielectric_paste",
            "count": 24
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )
});
