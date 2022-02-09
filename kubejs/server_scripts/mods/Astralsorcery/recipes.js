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
});

onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                'astralsorcery:rock_crystal',
                'astralsorcery:rock_crystal',
                'astralsorcery:rock_crystal',
                'astralsorcery:rock_crystal',
                'astralsorcery:rock_crystal',
                'astralsorcery:rock_crystal',
                'astralsorcery:rock_crystal',
                'astralsorcery:rock_crystal'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: Item.of('astralsorcery:rock_collector_crystal', '{astralsorcery:{constellation:"astralsorcery:aevitas",crystalProperties:{attributes:[{property:"astralsorcery:size",pLevel:3,discovered:1b},{property:"astralsorcery:purity",pLevel:2,discovered:1b},{property:"astralsorcery:shape",pLevel:3,discovered:1b},{property:"astralsorcery:collector.rate",pLevel:3,discovered:1b},{property:"astralsorcery:constellation.aevitas",pLevel:2,discovered:1b}]}}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        const re = event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredients,
            inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
            processingTime: recipe.processingTime,
            output: recipe.outputItem,
            outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
        });

<<<<<<< HEAD
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
=======
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
        "inputFluid": '{FluidName:\"industrialforegoing:ether_gas\",Amount:1000}',
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
                  "discovered":1
                },
                {
                  "property":"astralsorcery:purity",
                  "pLevel":2,
                  "discovered":1
                },
                {
                  "property":"astralsorcery:shape",
                  "pLevel":3,
                  "discovered":1
                },
                {
                  "property":"astralsorcery:collector.rate",
                  "pLevel":3,
                  "discovered":1
                },
                {
                  "property":"astralsorcery:constellation.aevitas",
                  "pLevel":2,
                  "discovered":1
                }
              ]}
            }
          }
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )l
>>>>>>> 0cf24ab735af8c1880dd22c3760805aabaab3e12
});
