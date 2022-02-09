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
          "item": "astralsorcery:rock_collector_crystal",
          "nbt": {
            "astralsorcery":{
              "constellation":"astralsorcery:aevitas",
              "crystalProperties":{
                "attributes":[{
                  "property":"astralsorcery:size",
                  "pLevel":3,
                  "discovered":1b,
                },
                {
                  "property":"astralsorcery:purity",
                  "pLevel":2,
                  "discovered":1b,
                },
                {
                  "property":"astralsorcery:shape",
                  "pLevel":3,
                  "discovered":1b,
                },
                {
                  "property":"astralsorcery:collector.rate",
                  "pLevel":3,
                  "discovered":1b,
                },
                {
                  "property":"astralsorcery:constellation.aevitas",
                  "pLevel":2,
                  "discovered":1b,
                }
              ]}
            }
          }
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )
});
