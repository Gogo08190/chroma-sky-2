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
});
