onEvent('recipes', event => {
  event.remove({ output: 'industrialforegoing:machine_frame_pity' })
  event.shaped('industrialforegoing:machine_frame_pity', [
  'TRT',
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
    O: 'occultism:infused_pickaxe',
    F: 'industrialforegoing:machine_frame_advanced',
    D: '#forge:ores/diamond',
    G: 'thermal:enderium_gear',
    R: 'extendedcrafting:redstone_ingot'
  })
});
