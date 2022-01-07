onEvent('recipes', event => {

  event.custom(
      {
        "type": "astralsorcery:altar",
        "altar_type": 3,
        "duration": 1200,
        "starlight": 6942,
        "pattern": ["AAAAA","ARSRA","ASSSA","ARIRA","AAAAA"],
        "key": {
          "A": {"item": "astralsorcery:black_marble_raw"},
          "R": {"item": "astralsorcery:resonating_gem"},
          "S": {"item": "powah:spirited_crystal_block"},
          "I": {"item": "naturesaura:infused_iron_block"}
        },
        "output": [
          {"item": "masterfulmachinery:autoastral_controller","count": 1}
        ],
        "focus_constellation": "astralsorcery:aevitas",
        "relay_inputs": [
          { "item": "mekanism:steel_casing" },
          { "item": "powah:dielectric_casing" },
          { "item": "thermal:machine_frame" },
          { "item": "immersiveengineering:light_engineering" },
          { "item": "industrialforegoing:machine_frame_supreme" },
          { "item": "extendedcrafting:frame" }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:built_in_effect_trait_relay_highlight",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_trait_focus_circle",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
      }
    )

});
