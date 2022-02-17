onEvent('recipes', event => {

  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:crystal_nitro'},
      {"item": 'powah:ender_core'},
      {"item": 'refinedstorage:advanced_processor'},
      {"item": 'thermal:redstone_servo'},
      {"item": 'thermal:rf_coil'},
      {"item": 'powah:crystal_nitro'}
      ],
      "energy": 5000,
      "result": {
      "item": 'chromasky:mechanic_core_tier_4',
      "count": 1
      }
    }
  )

  event.remove({ output: 'extendedcrafting:luminessence' })
  event.shapeless('9x extendedcrafting:luminessence', 'extendedcrafting:luminessence_block');
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'astralsorcery:illumination_powder'},
      {"item": 'astralsorcery:illumination_powder'},
      {"item": 'minecraft:redstone'},
      {"item": 'minecraft:gunpowder'}
      ],
      "energy": 5000,
      "result": {
      "item": 'extendedcrafting:luminessence',
      "count": 2
      }
    }
  )

  event.remove({ output: 'powah:energizing_rod_basic' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:energizing_rod_starter'},
      {"item": 'powah:dielectric_casing'},
      {"item": 'powah:capacitor_basic'},
      {"item": 'powah:capacitor_basic'},
      {"item": 'refinedstorage:quartz_enriched_iron_block'}
      ],
      "energy": 2000,
      "result": {
      "item": 'powah:energizing_rod_basic',
      "count": 1
      }
    }
  )

  event.remove({ output: 'powah:energizing_rod_hardened' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:energizing_rod_basic'},
      {"item": 'powah:dielectric_casing'},
      {"item": 'powah:capacitor_hardened'},
      {"item": 'powah:capacitor_hardened'},
      {"item": 'refinedstorage:quartz_enriched_iron_block'}
      ],
      "energy": 5000,
      "result": {
      "item": 'powah:energizing_rod_hardened',
      "count": 1
      }
    }
  )

  event.remove({ output: 'powah:energizing_rod_blazing' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:energizing_rod_hardened'},
      {"item": 'powah:dielectric_casing'},
      {"item": 'powah:capacitor_blazing'},
      {"item": 'powah:capacitor_blazing'},
      {"item": 'refinedstorage:quartz_enriched_iron_block'}
      ],
      "energy": 10000,
      "result": {
      "item": 'powah:energizing_rod_blazing',
      "count": 1
      }
    }
  )

  event.remove({ output: 'powah:energizing_rod_niotic' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:energizing_rod_blazing'},
      {"item": 'powah:dielectric_casing'},
      {"item": 'powah:capacitor_niotic'},
      {"item": 'powah:capacitor_niotic'},
      {"item": 'refinedstorage:quartz_enriched_iron_block'}
      ],
      "energy": 15000,
      "result": {
      "item": 'powah:energizing_rod_niotic',
      "count": 1
      }
    }
  )

  event.remove({ output: 'powah:energizing_rod_spirited' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:energizing_rod_niotic'},
      {"item": 'powah:dielectric_casing'},
      {"item": 'powah:capacitor_spirited'},
      {"item": 'powah:capacitor_spirited'},
      {"item": 'refinedstorage:quartz_enriched_iron_block'}
      ],
      "energy": 20000,
      "result": {
      "item": 'powah:energizing_rod_spirited',
      "count": 1
      }
    }
  )

  event.remove({ output: 'powah:energizing_rod_nitro' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:energizing_rod_spirited'},
      {"item": 'powah:dielectric_casing'},
      {"item": 'powah:capacitor_nitro'},
      {"item": 'powah:capacitor_nitro'},
      {"item": 'refinedstorage:quartz_enriched_iron_block'}
      ],
      "energy": 25000,
      "result": {
      "item": 'powah:energizing_rod_nitro',
      "count": 1
      }
    }
  )

  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'mysticalagriculture:prudentium_gemstone_block'},
      {"item": 'powah:spirited_crystal_block'},
      {"item": 'masterfulmachinery:mysticfactory2_controller'},
      {"item": 'powah:ender_core'},
      {"item": 'powah:spirited_crystal_block'},
      {"item": 'mysticalagriculture:prudentium_gemstone_block'}
      ],
      "energy": 10000,
      "result": {
      "item": 'masterfulmachinery:mysticfactory3_controller',
      "count": 1
      }
    }
  )

  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'mysticalagriculture:prudentium_gemstone_block'},
      {"item": 'powah:energy_hopper_spirited'},
      {"item": 'masterfulmachinery:mysticfactory2_mystical_item_port_items_input'},
      {"item": 'powah:energy_hopper_spirited'},
      {"item": 'mysticalagriculture:prudentium_gemstone_block'}
      ],
      "energy": 10000,
      "result": {
      "item": 'masterfulmachinery:mysticfactory3_mystical_item_port_items_input',
      "count": 1
      }
    }
  )

  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'mysticalagriculture:prudentium_gemstone_block'},
      {"item": 'powah:energy_hopper_spirited'},
      {"item": 'masterfulmachinery:mysticfactory2_mystical_item_port_items_output'},
      {"item": 'powah:energy_hopper_spirited'},
      {"item": 'mysticalagriculture:prudentium_gemstone_block'}
      ],
      "energy": 10000,
      "result": {
      "item": 'masterfulmachinery:mysticfactory3_mystical_item_port_items_output',
      "count": 1
      }
    }
  )

  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'mysticalagriculture:prudentium_gemstone_block'},
      {"item": 'powah:energy_cell_spirited'},
      {"item": 'masterfulmachinery:mysticfactory2_mystical_energy_port_energy_input'},
      {"item": 'powah:energy_cell_spirited'},
      {"item": 'mysticalagriculture:prudentium_gemstone_block'}
      ],
      "energy": 10000,
      "result": {
      "item": 'masterfulmachinery:mysticfactory3_mystical_energy_port_energy_input',
      "count": 1
      }
    }
  )

});
