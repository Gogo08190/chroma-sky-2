onEvent('recipes', event => {
  event.remove({ output: 'refinedstorage:quartz_enriched_iron' })

  event.shapeless('9x refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron_block');

  event.recipes.thermal
    .smelter("4x refinedstorage:quartz_enriched_iron", ['3x mekanism:ingot_steel', 'minecraft:quartz'])
    .energy(6400);

  event.remove({ output: 'refinedstorage:machine_casing' })
  event.shaped('refinedstorage:machine_casing', [
  'QSQ',
  'SCS',
  'QSQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron',
    S: 'immersiveengineering:component_steel',
    C: 'chromasky:mechanic_core_tier_3'
  })

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
});
