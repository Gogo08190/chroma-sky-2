onEvent("recipes", (event) => {
  event.remove({ output: 'rftoolsbase:machine_base' })
  event.shaped('rftoolsbase:machine_base', [
  'PGP',
  'SSS'
  ], {
    S: 'thermal:polished_slag',
    G: 'thermal:gold_gear',
    P: 'thermal:gold_plate'
  })

  event.remove({ output: 'rftoolsbase:machine_frame' })
  event.shaped('rftoolsbase:machine_frame', [
  'SGS',
  'PCP',
  'SGS'
  ], {
    S: 'mekanism:ingot_steel',
    G: 'thermal:lapis_gear',
    P: 'thermal:gold_plate',
    C: 'chromasky:mechanic_core_tier_2'
  })

  event.remove({ output: 'rftoolsbase:smartwrench' })
  event.shaped('rftoolsbase:smartwrench', [
  ' S ',
  ' PS',
  'P  '
  ], {
    S: 'mekanism:ingot_steel',
    P: 'thermal:enderium_plate'
  })

  event.remove({ output: 'rftoolsbase:tablet' })
  event.shaped('rftoolsbase:tablet', [
  'PEP',
  'RQR',
  'PRP'
  ], {
    Q: 'thermal:quartz_gear',
    P: 'thermal:gold_plate',
    R: 'extendedcrafting:redstone_ingot_block',
    E: 'minecraft:emerald'
  })

  event.remove({ output: 'rftoolsstorage:modular_storage' })
  event.shaped('rftoolsstorage:modular_storage', [
  'RCR',
  'PFP',
  'RPR'
  ], {
    C: 'immersiveengineering:crate',
    P: 'thermal:invar_plate',
    R: 'extendedcrafting:redstone_ingot',
    F: 'rftoolsbase:machine_frame'
  })

  event.remove({ output: 'rftoolsutility:crafter1' })
  event.shaped('rftoolsutility:crafter1', [
  ' R ',
  'CFC',
  ' R '
  ], {
    C: 'immersiveengineering:craftingtable',
    R: 'extendedcrafting:redstone_ingot',
    F: 'rftoolsbase:machine_frame'
  })

  event.remove({ output: 'rftoolsutility:crafter2' })
  event.shaped('rftoolsutility:crafter2', [
  ' R ',
  'CFC',
  ' R '
  ], {
    C: 'immersiveengineering:craftingtable',
    R: 'extendedcrafting:redstone_ingot',
    F: 'rftoolsutility:crafter1'
  })

  event.remove({ output: 'rftoolsutility:crafter3' })
  event.shaped('rftoolsutility:crafter3', [
  ' R ',
  'CFC',
  ' R '
  ], {
    C: 'immersiveengineering:craftingtable',
    R: 'extendedcrafting:redstone_ingot',
    F: 'rftoolsutility:crafter2'
  })
});
