onEvent('recipes', event => {

  // Solar Panel I
  event.remove({ output: 'solarflux:sp_1' })
  event.shaped('solarflux:sp_1', [
  'MMM',
  'SRS',
  'SSS'
  ], {
    M: 'solarflux:mirror',
    S: 'mekanism:ingot_steel',
    R: 'thermal:rf_coil'
  })

  // Solar Panel II
  event.remove({ output: 'solarflux:sp_2' })
  event.shaped('solarflux:sp_2', [
  'SSS',
  'SMS',
  'SSS'
  ], {
    S: 'solarflux:sp_1',
    M: 'chromasky:mechanic_core_tier_1'
  })

  // Solar Panel III
  event.remove({ output: 'solarflux:sp_3' })
  event.shaped('solarflux:sp_3'), [
  'PPP',
  'SRS',
  'SMS'
  ], {
    S: 'solarflux:sp_2',
    M: 'mekanism:block_steel',
    R: 'projectred-integration:repeater_gate',
    P: 'solarflux:photovoltaic_cell_1'
  })

  // Solar Panel IV
  event.remove({ output: 'solarflux:sp_4' })
  event.shaped('solarflux:sp_4'), [
  'PPP',
  'SLS',
  'SMS'
  ], {
    S: 'solarflux:sp_3',
    M: 'mekanism:block_steel',
    L: 'thermal:lumium_plate',
    P: 'solarflux:photovoltaic_cell_2'
  })

  // Solar Panel V
  event.remove({ output: 'solarflux:sp_5' })
  event.shaped('solarflux:sp_5'), [
  'PPP',
  'SGS',
  'SES'
  ], {
    S: 'solarflux:sp_4',
    E: 'powah:energized_steel_block',
    G: 'mekanism:block_refined_glowstone',
    P: 'solarflux:photovoltaic_cell_3'
  })

  // Solar Panel VI
  event.remove({ output: 'solarflux:sp_6' })
  event.shaped('solarflux:sp_6'), [
  'PPP',
  'SMS',
  'SNS'
  ], {
    S: 'solarflux:sp_5',
    N: 'powah:niotic_crystal_block',
    M: 'chromasky:mechanic_core_tier_2',
    P: 'solarflux:photovoltaic_cell_4'
  })

  // Solar Panel VII
  event.remove({ output: 'solarflux:sp_7' })
  event.shaped('solarflux:sp_7'), [
  'PPP',
  'SMS',
  'SDS'
  ], {
    S: 'solarflux:sp_6',
    D: 'minecraft:dragon_breath',
    M: 'chromasky:mechanic_core_tier_3',
    P: 'solarflux:photovoltaic_cell_5'
  })

  // Solar Panel VIII
  event.remove({ output: 'solarflux:sp_8' })
  event.shaped('solarflux:sp_8'), [
  'PPP',
  'SMS',
  'SDS'
  ], {
    S: 'solarflux:sp_7',
    D: 'draconicevolution:dragon_heart',
    M: 'chromasky:mechanic_core_tier_4',
    P: 'solarflux:photovoltaic_cell_6'
  })

  });
