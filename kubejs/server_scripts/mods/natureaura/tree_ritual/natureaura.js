onEvent('recipes', event => {

  event.remove({ output: 'matc:inferium_crystal' })

  event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
        {
            "item": "mysticalagriculture:inferium_essence"
          },
          {
            "item": "mysticalagriculture:inferium_essence"
        },
        {
            "item": "mysticalagriculture:inferium_gemstone"
          },
          {
            "item": "mysticalagriculture:inferium_gemstone"
          },
          {
            "item": "mysticalagriculture:prosperity_shard"
          },
          {
            "item": "mysticalagriculture:prosperity_shard"
          },
          {
            "item": "mysticalagriculture:prosperity_shard"
          },
          {
            "item": "mysticalagriculture:prosperity_shard"
          }
        ],
        "sapling": {
          "item": "minecraft:birch_sapling"
        },
        "output": {
          "item": "matc:inferium_crystal",
          "count": 1
        },
        "time": 200
      })

});
