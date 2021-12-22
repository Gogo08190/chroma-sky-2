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
});
