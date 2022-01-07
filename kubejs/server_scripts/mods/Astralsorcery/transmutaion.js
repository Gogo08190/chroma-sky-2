onEvent('recipes', event => {

  event.custom(
    {
      "type": "astralsorcery:block_transmutation",
      "starlight": 100,
      "input": [
        {
          "item": "astralsorcery:starmetal"
        }
      ],
      "output": {
        "block": "masterfulmachinery:autoastral_autoastral_starlight_port_astral_starlight_input"
      },
      "display": {
        "item": "masterfulmachinery:autoastral_autoastral_starlight_port_astral_starlight_input",
        "count": 1
      }
    }
  )
  });
