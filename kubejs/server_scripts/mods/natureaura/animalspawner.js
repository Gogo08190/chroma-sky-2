onEvent('recipes', event => {

  event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "minecraft:emerald"
            },
            {
                "item": "minecraft:anvil"
            }
        ],
        "entity": "minecraft:villager",
        "aura": 50000,
        "time": 60
    })

  event.custom({
      "type": "naturesaura:animal_spawner",
      "ingredients": [
          {
              "item": "naturesaura:birth_spirit"
          },
          {
              "item": "minecraft:snowball"
          },
          {
              "item": "minecraft:packed_ice"
          }
      ],
      "entity": "thermal:blitz",
      "aura": 50000,
      "time": 60
  })

  event.custom({
      "type": "naturesaura:animal_spawner",
      "ingredients": [
          {
              "item": "naturesaura:birth_spirit"
          },
          {
              "item": "rats:feathery_wing"
          },
          {
              "item": "minecraft:phantom_membrane"
          }
      ],
      "entity": "theabyss:phantom_abyss_entity",
      "aura": 50000,
      "time": 60
  })

  event.custom({
      "type": "naturesaura:animal_spawner",
      "ingredients": [
          {
              "item": "naturesaura:birth_spirit"
          },
          {
              "item": "minecraft:anvil"
          },
          {
              "item": "cyclic:evoker_fang"
          }
      ],
      "entity": "minecraft:evoker",
      "aura": 50000,
      "time": 60
  })

  event.custom({
      "type": "naturesaura:animal_spawner",
      "ingredients": [
          {
              "item": "naturesaura:birth_spirit"
          },
          {
              "item": "minecraft:rotten_flesh"
          },
          {
              "item": "minecraft:water_bucket"
          }
      ],
      "entity": "minecraft:drowned",
      "aura": 50000,
      "time": 60
  })

  event.custom({
      "type": "naturesaura:animal_spawner",
      "ingredients": [
          {
              "item": "naturesaura:birth_spirit"
          },
          {
              "item": "minecraft:pumpkin"
          },
          {
              "item": "minecraft:snow_block"
          }
      ],
      "entity": "minecraft:snow_golem",
      "aura": 50000,
      "time": 60
  })

});
