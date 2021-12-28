onEvent('recipes', event => {

  event.remove({ output: 'draconicevolution:draconium_core' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'chromasky:draconium_gear'},
      {"item": 'chromasky:draconium_gear'},
      {"item": 'powah:crystal_niotic'},
      {"item": 'powah:crystal_niotic'},
      {"item": 'thermal:gold_gear'},
      {"item": 'thermal:gold_gear'}
      ],
      "energy": 5000,
      "result": {
      "item": 'draconicevolution:draconium_core',
      "count": 1
      }
    }
  )

  event.remove({ output: 'draconicevolution:wyvern_core' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'chromasky:draconium_gear'},
      {"item": 'minecraft:nether_star'},
      {"item": 'draconicevolution:draconium_core'},
      {"item": 'draconicevolution:draconium_core'},
      {"item": 'draconicevolution:draconium_core'},
      {"item": 'draconicevolution:draconium_core'}
      ],
      "energy": 10000,
      "result": {
      "item": 'draconicevolution:wyvern_core',
      "count": 1
      }
    }
  )

});
