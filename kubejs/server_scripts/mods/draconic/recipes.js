onEvent('recipes', event => {

  event.remove({ output: 'draconicevolution:draconium_core' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'chromasky:draconium_gear'},
      {"item": 'chromasky:draconium_gear'},
      {"item": 'powah:crystal_niotic'},
      {"item": 'powah:crystal_niotic'},
      {"item": 'thermal:gold_gear'},
      {"item": 'thermal:gold_gear'}
      ],
      "energy": 5000,
      "result": {
      "item": 'draconicevolution:draconium_core',
      "count": 1
      }
    }
  )

  event.remove({ output: 'draconicevolution:wyvern_core' })
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'chromasky:draconium_gear'},
      {"item": 'minecraft:nether_star'},
      {"item": 'draconicevolution:draconium_core'},
      {"item": 'draconicevolution:draconium_core'},
      {"item": 'draconicevolution:draconium_core'},
      {"item": 'draconicevolution:draconium_core'}
      ],
      "energy": 10000,
      "result": {
      "item": 'draconicevolution:wyvern_core',
      "count": 1
      }
    }
  )

  event.remove({ output: 'draconicevolution:basic_crafting_injector' })
  event.shaped('draconicevolution:basic_crafting_injector', [
  'DCD',
  'BSB',
  'BBB'
  ], {
    D: 'thermal:diamond_gear',
    C: 'draconicevolution:draconium_core',
    B: 'minecraft:blackstone',
    S: 'mekanism:block_steel'
  })

  event.remove({ output: 'draconicevolution:wyvern_energy_core' })
  event.shaped('draconicevolution:wyvern_energy_core', [
  'PRP',
  'RCR',
  'PRP'
  ], {
    P: 'chromasky:draconium_plate',
    R: 'extendedcrafting:redstone_ingot_block',
    C: 'draconicevolution:draconium_core'
  })

  event.remove({ output: 'draconicevolution:wyvern_energy_core' })
  event.shaped('draconicevolution:wyvern_energy_core', [
  'PRP',
  'RCR',
  'PRP'
  ], {
    P: 'chromasky:draconium_plate',
    R: 'extendedcrafting:redstone_ingot_block',
    C: 'draconicevolution:draconium_core'
  })

  event.remove({ output: 'draconicevolution:particle_generator' })
  event.shaped('draconicevolution:particle_generator', [
  'PRP',
  'RCR',
  'PRP'
  ], {
    P: 'extendedcrafting:redstone_ingot_block',
    R: 'powah:crystal_blazing',
    C: 'draconicevolution:draconium_core'
  })

  event.remove({ output: 'draconicevolution:crafting_core' })
  event.shaped('draconicevolution:crafting_core', [
  'LDL',
  'DCD',
  'LDL'
  ], {
    D: 'thermal:diamond_gear',
    L: 'minecraft:lapis_block',
    C: 'draconicevolution:draconium_core'
  })

  event.remove({ output: 'draconicevolution:dislocator' })
  event.shaped('draconicevolution:dislocator', [
  'BDB',
  'DPD',
  'BDB'
  ], {
    B: 'powah:crystal_blazing',
    D: 'draconicevolution:draconium_dust',
    P: 'rftoolsbase:infused_enderpearl'
  })

  event.remove({ output: 'draconicevolution:dislocator_pedestal' })
  event.shaped('draconicevolution:dislocator_pedestal', [
  ' P ',
  ' B ',
  'SCS'
  ], {
    S: 'tconstruct:seared_stone_slab',
    C: 'powah:crystal_blazing',
    B: 'minecraft:blackstone',
    P: 'quark:obsidian_pressure_plate'
  })

  event.remove({ output: 'draconicevolution:grinder' })
  event.shaped('draconicevolution:grinder', [
  'SDS',
  'ECE',
  'SFS'
  ], {
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:gold_furnace',
    C: 'draconicevolution:draconium_core',
    E: 'miniutilities:etheric_sword',
    D: 'draconicevolution:draconium_ingot'
  })

  event.remove({ output: 'draconicevolution:generator' })
  event.shaped('draconicevolution:generator', [
  'SBS',
  'BCB',
  'SFS'
  ], {
    S: 'mekanism:ingot_steel',
    B: 'immersiveengineering:blastbrick',
    C: 'draconicevolution:draconium_core',
    F: 'cyclic:generator_fuel'
  })

  event.remove({ output: 'draconicevolution:dislocator_receptacle' })
  event.shaped('draconicevolution:dislocator_receptacle', [
  'SCS',
  ' O ',
  'SBS'
  ], {
    S: 'mekanism:ingot_steel',
    B: 'draconicevolution:dislocator',
    C: 'draconicevolution:draconium_core',
    O: 'draconicevolution:infused_obsidian'
  })
});