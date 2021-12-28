onEvent('recipes', event => {

  event.remove({ output: 'envirocore:litherite_crystal' })
  event.shapeless('9x envirocore:litherite_crystal', 'envirocore:litherite');
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:crystal_spirited'},
      {"item": 'minecraft:ender_pearl'},
      {"item": 'minecraft:ender_pearl'},
      {"item": 'minecraft:quartz'},
      {"item": 'minecraft:quartz'},
      {"item": 'minecraft:quartz'}
      ],
      "energy": 5000,
      "result": {
      "item": 'envirocore:litherite_crystal',
      "count": 6
      }
    }
  )

});
