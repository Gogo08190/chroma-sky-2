onEvent('recipes', event => {

  // Marble
  event.shaped('8x astralsorcery:marble_raw', [
    `III`,
    `ILI`,
    `III`
  ], {
    L: '#forge:dyes/white',
    I: `minecraft:stone`
  })

  event.custom(
    {
        "input": [
            {
                "item": "astralsorcery:rock_crystal"
            },
            {
                "item": "astralsorcery:rock_crystal"
            },
            {
                "item": "astralsorcery:rock_crystal"
            },
            {
                "item": "astralsorcery:rock_crystal"
            },
            {
                "item": "astralsorcery:rock_crystal"
            },
            {
                "item": "astralsorcery:rock_crystal"
            },
            {
                "item": "astralsorcery:rock_crystal"
            },
            {
                "item": "astralsorcery:rock_crystal"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:1000}",
        "processingTime": 320,
        "output": {
            "item": "Item.of('astralsorcery:rock_collector_crystal', '{astralsorcery:{constellation:"astralsorcery:discidia",crystalProperties:{attributes:[{property:"astralsorcery:size",pLevel:3,discovered:1b},{property:"astralsorcery:purity",pLevel:2,discovered:1b},{property:"astralsorcery:shape",pLevel:3,discovered:1b},{property:"astralsorcery:collector.rate",pLevel:3,discovered:1b},{property:"astralsorcery:constellation.discidia",pLevel:2,discovered:1b}]}}",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )
});
