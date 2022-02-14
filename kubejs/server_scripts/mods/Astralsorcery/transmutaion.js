onEvent('recipes', event => {

  event.custom(
    {
      "type": "astralsorcery:block_transmutation",
      "input": [
        {
          "block": "astralsorcery:starmetal",
          "display": {
            "item": "astralsorcery:starmetal",
            "count": 1
          }
        }
      ],
      "output": {
        "block": "masterfulmachinery:autoastral_autoastral_starlight_port_astral_starlight_input"
      },
      "display": {
        "item": "masterfulmachinery:autoastral_autoastral_starlight_port_astral_starlight_input",
        "count": 1
      },
      "starlight": 60
    }
  )

  event.custom(
    {
      "type": "astralsorcery:block_transmutation",
      "input": [
        {
          "block": "minecraft:melon",
          "display": {
            "item": "minecraft:melon",
            "count": 1
          }
        }
      ],
      "output": {
        "block": "theabyss:blue_melon_block"
      },
      "display": {
        "item": "theabyss:blue_melon_block",
        "count": 1
      },
      "starlight": 200
    }
  )

});
