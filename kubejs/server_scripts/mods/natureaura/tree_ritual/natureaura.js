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

      event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "thermal:redstone_servo"
              },
              {
                "item": "thermal:rf_coil"
            },
            {
                "item": "astralsorcery:black_marble_raw"
              },
              {
                "item": "astralsorcery:black_marble_raw"
              },
              {
                "item": "astralsorcery:black_marble_raw"
              },
              {
                "item": "astralsorcery:black_marble_raw"
              },
              {
                "item": "astralsorcery:black_marble_raw"
              },
              {
                "item": "astralsorcery:black_marble_raw"
              }
            ],
            "sapling": {
              "item": "pamhc2trees:pinenut_sapling"
            },
            "output": {
              "item": "masterfulmachinery:autoastral_autoastral_item_port_items_output",
              "count": 1
            },
            "time": 200
          })

});
