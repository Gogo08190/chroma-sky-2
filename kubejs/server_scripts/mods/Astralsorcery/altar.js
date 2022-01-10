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
            "item": "masterfulmachinery:mysticfactory5_controller"
          },
          "R": {
            "item": "thermal:rf_coil"
          }
        },
        "output": [
          {"item": "masterfulmachinery:mysticfactory6_controller","count": 1}
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
      }
    )

    event.custom(
      {
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
          "G___G",
          "_DHG_",
          "_NIG_",
          "_RCG_",
          "G___G"
        ],
        "key": {
          "G": {
            "item": "mysticalagriculture:supremium_gemstone_block"
          },
          "C": {
            "item": "expandedstorage:netherite_chest"
          },
          "R": {
            "item": "chromasky:redstone_gear"
          },
          "N": {
            "item": "powah:capacitor_nitro"
          },
          "D": {
            "item": "theabyss:abyssfirediamond"
          },
          "H": {
            "item": "naturesaura:grated_chute"
          },
          "I": {
            "item": "masterfulmachinery:mysticfactory5_mystical_item_port_items_input"
          }
        },
        "output": [
          {
            "item": "masterfulmachinery:mysticfactory6_mystical_item_port_items_input",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
      }
    )

    event.custom(
      {
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
          "G___G",
          "_GCD_",
          "_GON_",
          "_GHR_",
          "G___G"
        ],
        "key": {
          "G": {
            "item": "mysticalagriculture:supremium_gemstone_block"
          },
          "C": {
            "item": "expandedstorage:netherite_chest"
          },
          "R": {
            "item": "chromasky:redstone_gear"
          },
          "N": {
            "item": "powah:capacitor_nitro"
          },
          "D": {
            "item": "theabyss:abyssfirediamond"
          },
          "H": {
            "item": "naturesaura:grated_chute"
          },
          "O": {
            "item": "masterfulmachinery:mysticfactory5_mystical_item_port_items_output"
          }
        },
        "output": [
          {
            "item": "masterfulmachinery:mysticfactory6_mystical_item_port_items_output",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
      }
    )

    event.custom(
      {
        "type": "astralsorcery:altar",
        "altar_type": 0,
        "duration": 100,
        "starlight": 100,
        "pattern": [
          "_____",
          "_PME_",
          "_NIN_",
          "_EMP_",
          "_____"
        ],
        "key": {
          "E": {
            "item": "theabyss:loran_energy"
          },
          "M": {
            "item": "mekanism:upgrade_energy"
          },
          "P": {
            "item": "pipez:energy_pipe"
          },
          "N": {
            "item": "powah:battery_nitro"
          },
          "I": {
            "item": "masterfulmachinery:mysticfactory5_mystical_energy_port_energy_input"
            }
        },
        "output": [
          {
            "item": "masterfulmachinery:mysticfactory6_mystical_energy_port_energy_input",
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam"
        ]
      }
    )

  event.remove({ output: 'matc:supremium_crystal' })
    event.custom(
      {
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
          "G___G",
          "_SPS_",
          "_SOS_",
          "_SPS_",
          "G___G"
        ],
        "key": {
          "G": {
            "item": "mysticalagriculture:supremium_gemstone_block"
          },
          "S": {
            "item": "mysticalagriculture:supremium_gemstone"
          },
          "P": {
            "item": "mysticalagriculture:prosperity_shard"
          },
          "O": {
            "item": "matc:imperium_crystal"
          }
        },
        "output": [
          {
            "item": 'matc:supremium_crystal'
            "count": 1
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
      }
    )
});
