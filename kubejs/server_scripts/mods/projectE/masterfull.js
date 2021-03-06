onEvent('recipes', event => {

  event.remove({ output: 'projectex:basic_power_flower' })
  event.remove({ output: 'projectex:dark_power_flower' })
  event.remove({ output: 'projectex:red_power_flower' })
  event.remove({ output: 'projectex:magenta_power_flower' })
  event.remove({ output: 'projectex:pink_power_flower' })
  event.remove({ output: 'projectex:purple_power_flower' })
  event.remove({ output: 'projectex:violet_power_flower' })
  event.remove({ output: 'projectex:blue_power_flower' })
  event.remove({ output: 'projectex:cyan_power_flower' })
  event.remove({ output: 'projectex:green_power_flower' })
  event.remove({ output: 'projectex:lime_power_flower' })
  event.remove({ output: 'projectex:yellow_power_flower' })
  event.remove({ output: 'projectex:orange_power_flower' })
  event.remove({ output: 'projectex:white_power_flower' })
  event.remove({ output: 'projectex:fading_power_flower' })
  event.remove({ output: 'projectex:final_power_flower' })
  
  event.shaped('masterfulmachinery:emcflower_assembing_item_port_items_input', [
  'DDD',
  'HHH',
  'DCD'
  ], {
    D: 'projecte:dark_matter_block',
    C: 'projecte:alchemical_chest',
    H: 'speedyhoppers:speedyhopper_mk3'
  })
  event.shaped('masterfulmachinery:emcflower_assembing_item_port_items_output', [
  'DCD',
  'HHH',
  'DDD'
  ], {
    D: 'projecte:dark_matter_block',
    C: 'projecte:alchemical_chest',
    H: 'speedyhoppers:speedyhopper_mk3'
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABBBAA",
      "ACDEDCA",
      "BDFGFDB",
      "BEGHGEB",
      "BDFGFDB",
      "ACDEDCA",
      "AABBBAA"
    ],
    "key": {
      "A": {
        "item": "projecte:dark_matter"
      },
      "B": {
        "item": "projecte:dark_matter_block"
      },
      "C": {
        "item": "projecte:red_matter"
      },
      "D": {
        "item": "mekanism:ultimate_control_circuit"
      },
      "E": {
        "item": "extendedcrafting:luminessence"
      },
      "F": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "G": {
        "item": "astralsorcery:resonating_gem"
      },
      "H": {
        "item": "xnet:controller"
      }
    },
    "result": {
      "item": "masterfulmachinery:emcflower_controller"
    }
  })

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABBBAA",
      "ACDEDCA",
      "BDFGFDB",
      "BEGHGEB",
      "BDFGFDB",
      "ACDEDCA",
      "AABBBAA"
    ],
    "key": {
      "A": {
        "item": "projecte:dark_matter"
      },
      "B": {
        "item": "projecte:dark_matter_block"
      },
      "C": {
        "item": "projecte:red_matter"
      },
      "D": {
        "item": "mekanism:ultimate_control_circuit"
      },
      "E": {
        "item": "mekanism:ultimate_induction_cell"
      },
      "F": {
        "item": "extendedcrafting:crystaltine_catalyst"
      },
      "G": {
        "item": "draconicevolution:draconic_energy_core"
      },
      "H": {
        "item": "thermal:energy_cell"
      }
    },
    "result": {
      "item": "masterfulmachinery:emcflower_assemblingenergy_port_energy_input"
    }
  })
});
