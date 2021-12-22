onEvent('recipes', event => {
  event.remove({ output: 'industrialforegoing:machine_frame_pity' })
  event.shaped('industrialforegoing:machine_frame_pity', [
  'TST',
  'SCS',
  'TST'
  ], {
    C: 'chromasky:mechanic_core_tier_2',
    S: 'mekanism:ingot_steel',
    T: 'immersiveengineering:treated_wood_horizontal'
  })

  event.remove({ output: 'industrialforegoing:ore_laser_base' })
  event.shaped('industrialforegoing:ore_laser_base', [
  'POP',
  'DFD',
  'GRG'
  ], {
    P: 'industrialforegoing:plastic',
    O: 'cyclic:crystal_pickaxe',
    F: 'industrialforegoing:machine_frame_advanced',
    D: '#forge:ores/diamond',
    G: 'thermal:enderium_gear',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'industrialforegoing:fluid_laser_base' })
  event.shaped('industrialforegoing:fluid_laser_base', [
  'POP',
  'DFD',
  'GRG'
  ], {
    P: 'industrialforegoing:plastic',
    O: 'cyclic:crystal_pickaxe',
    F: 'industrialforegoing:machine_frame_advanced',
    D: 'naturesaura:color_changer',
    G: 'thermal:enderium_gear',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'industrialforegoing:laser_drill' })
  event.shaped('industrialforegoing:laser_drill', [
  'POP',
  'DFD',
  'GRG'
  ], {
    P: 'industrialforegoing:plastic',
    O: 'thermal:enderium_gear',
    F: 'industrialforegoing:machine_frame_simple',
    D: 'immersiveengineering:drillhead_steel',
    G: 'thermal:electrum_gear',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'industrialforegoing:latex_processing_unit' })
  event.shaped('industrialforegoing:latex_processing_unit', [
  'SRS',
  'WPL',
  'SFS'
  ], {
    S: 'mekanism:ingot_steel',
    W: 'minecraft:water_bucket',
    F: 'thermal:machine_furnace',
    P: 'industrialforegoing:machine_frame_pity',
    L: 'industrialforegoing:latex_bucket',
    R: 'extendedcrafting:redstone_ingot_block'
  })

  event.remove({ output: 'industrialforegoing:mob_crusher' })
  event.shaped('industrialforegoing:mob_crusher', [
  'PSP',
  'BFB',
  'GRG'
  ], {
    P: 'industrialforegoing:plastic',
    F: 'industrialforegoing:machine_frame_advanced',
    R: 'extendedcrafting:redstone_ingot_block',
    G: 'thermal:electrum_gear',
    S: 'miniutilities:etheric_sword',
    B: 'minecraft:book'
  })

  event.remove({ output: 'industrialforegoing:mob_slaughter_factory' })
  event.shaped('industrialforegoing:mob_slaughter_factory', [
  'PGP',
  'SFS',
  'ARA'
  ], {
    P: 'industrialforegoing:plastic',
    F: 'industrialforegoing:machine_frame_pity',
    R: 'extendedcrafting:redstone_ingot_block',
    G: 'thermal:electrum_gear',
    S: 'miniutilities:etheric_sword',
    A: 'miniutilities:healing_axe'
  })

  event.remove({ output: 'industrialforegoing:mob_duplicator' })
  event.shaped('industrialforegoing:mob_duplicator', [
  'PWP',
  'MFM',
  'GRG'
  ], {
    P: 'industrialforegoing:plastic',
    F: 'industrialforegoing:machine_frame_advanced',
    R: 'extendedcrafting:redstone_ingot_block',
    G: 'thermal:emerald_gear',
    M: 'minecraft:magma_block',
    W: 'minecraft:nether_wart_block'
  })

  event.remove({ output: 'industrialforegoing:fluid_extractor' })
  event.shaped('industrialforegoing:fluid_extractor', [
  'SGS',
  'BFB',
  'SPS'
  ], {
    S: 'mekanism:ingot_steel',
    P: 'minecraft:piston',
    B: 'thermal:polished_slag',
    F: 'industrialforegoing:machine_frame_pity',
    G: 'thermal:gold_plate'
  })
});
