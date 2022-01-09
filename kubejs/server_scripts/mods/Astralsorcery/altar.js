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

    event.custom(
      {
        "type": "astralsorcery:altar",
        "altar_type": 2,
        "duration": 400,
        "starlight": 3200,
        "pattern": [
          "GG_GG",
          "GNRNG",
          "_MCM_",
          "GNSNG",
          "GG_GG"
        ],
        "key": {
          "G": {
            "item": "mysticalagriculture:supremium_gemstone_block"
          },
          "N": {
            "item": "powah:capacitor_nitro"
          },
          "S": {
            "item": "thermal:redstone_servo"
          },
          "M": {
            "item": "mekanism:steel_casing"
          },
          "C": {
            "type": "masterfulmachinery:mysticfactory5_controller"
          },
          "R": {
            "type": "thermal:rf_coil"
          }
        },
        "output": [
          {
            "item": "masterfulmachinery:mysticfactory6_controller",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:pillar_sparkle",
          "astralsorcery:luminescence_flare",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
      })
});
