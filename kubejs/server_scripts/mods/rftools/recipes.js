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

  event.remove({ output: 'rftoolsstorage:storage_scanner' })
  event.shaped('rftoolsstorage:storage_scanner', [
  'RPR',
  'GFG',
  'RPR'
  ], {
    G: 'thermal:gold_plate',
    R: 'extendedcrafting:redstone_ingot',
    F: 'rftoolsbase:machine_frame',
    P: 'minecraft:ender_pearl'
  })

  event.remove({ output: 'rftoolsbuilder:builder' })
  event.shaped('rftoolsbuilder:builder', [
  'BPB',
  'RFR',
  'BRB'
  ], {
    B: 'minecraft:polished_blackstone_bricks',
    R: 'extendedcrafting:redstone_ingot',
    F: 'rftoolsbase:machine_frame',
    P: 'rftoolsbase:infused_enderpearl'
  })

  event.remove({ output: 'rftoolsbuilder:shield_block1' })
  event.shaped('rftoolsbuilder:shield_block1', [
  'PRP',
  'IFI',
  'OOO'
  ], {
    O: 'minecraft:obsidian',
    I: 'extendedcrafting:redstone_ingot',
    R: 'minecraft:redstone_block',
    F: 'rftoolsbase:machine_frame',
    P: 'thermal:gold_plate'
  })

  event.remove({ output: 'rftoolsbuilder:shield_block2' })
  event.shaped('rftoolsbuilder:shield_block2', [
  'ROR',
  'OSO',
  'ROR'
  ], {
    O: 'minecraft:obsidian',
    R: 'extendedcrafting:redstone_ingot_block',
    S: 'rftoolsbuilder:shield_block1'
  })

  event.remove({ output: 'rftoolsbuilder:shield_block3' })
  event.shaped('rftoolsbuilder:shield_block3', [
  'ROR',
  'OSO',
  'ROR'
  ], {
    O: 'minecraft:obsidian',
    R: 'rftoolsbase:infused_diamond',
    S: 'rftoolsbuilder:shield_block2'
  })

  event.remove({ output: 'rftoolsbuilder:shield_block4' })
  event.shaped('rftoolsbuilder:shield_block4', [
  'NOR',
  'OSO',
  'RON'
  ], {
    O: 'minecraft:obsidian',
    R: 'rftoolsbase:infused_diamond',
    S: 'rftoolsbuilder:shield_block3',
    N: 'minecraft:nether_star'
  })
});
