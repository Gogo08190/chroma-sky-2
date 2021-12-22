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
});
