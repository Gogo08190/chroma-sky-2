onEvent('recipes', event => {

  // Solar Panel I
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
  event.shaped('solarflux:sp_2', [
  'SSS',
  'SMS',
  'SSS'
  ], {
    S: 'solarflux:sp_1',
    M: 'chromasky:mechanic_core_tier_1'
  })

  // Solar Panel III
  event.shaped('2x solarflux:sp_3', [
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
  event.shaped('2x solarflux:sp_4', [
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
  event.shaped('2x solarflux:sp_5', [
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
  event.shaped('2x solarflux:sp_6', [
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
  event.shaped('2x solarflux:sp_7', [
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
  event.shaped('2x solarflux:sp_8', [
  'PPP',
  'SMS',
  'SDS'
  ], {
    S: 'solarflux:sp_7',
    D: 'draconicevolution:dragon_heart',
    M: 'chromasky:mechanic_core_tier_4',
    P: 'solarflux:photovoltaic_cell_6'
  })

  // Mirror
  event.shaped('3x solarflux:mirror', [
  '   ',
  'OOO',
  ' S '
  ], {
    O: 'thermal:obsidian_glass',
    S: 'mekanism:ingot_steel'
  })

  // Photovoltaic Cell 1
  event.shaped('solarflux:photovoltaic_cell_1', [
  'OOO',
  'LLL',
  'MMM'
  ], {
    O: 'thermal:obsidian_glass',
    M: 'solarflux:mirror',
    L: 'minecraft:lapis_block'
  })

  // Photovoltaic Cell 2
  event.shaped('solarflux:photovoltaic_cell_2', [
  'CLC',
  'LCL',
  'MPM'
  ], {
    P: 'solarflux:photovoltaic_cell_1',
    M: 'solarflux:mirror',
    L: 'minecraft:lapis_block',
    C: 'minecraft:clay'
  })

  // Photovoltaic Cell 3
  event.shaped('solarflux:photovoltaic_cell_3', [
  'OOO',
  'GGG',
  'VPV'
  ], {
    O: 'thermal:obsidian_glass',
    G: 'mekanism:ingot_refined_glowstone',
    P: 'solarflux:photovoltaic_cell_2',
    V: 'minecraft:obsidian'
  })

  // Photovoltaic Cell 4
  event.shaped('solarflux:photovoltaic_cell_4', [
  'BBB',
  'RNR',
  'EPE'
  ], {
    B: 'solarflux:blazing_coating',
    P: 'solarflux:photovoltaic_cell_3',
    E: 'refinedstorage:quartz_enriched_iron_block',
    R: 'mekanism:ingot_refined_glowstone',
    N: 'powah:crystal_niotic'
  })

  // Photovoltaic Cell 5
  event.shaped('solarflux:photovoltaic_cell_5', [
  'EEE',
  'RNR',
  'PQP'
  ], {
    E: 'solarflux:emerald_glass',
    P: 'solarflux:photovoltaic_cell_4',
    Q: 'refinedstorage:quartz_enriched_iron_block',
    R: 'mekanism:block_refined_glowstone',
    N: 'powah:niotic_crystal_block'
  })

  // Photovoltaic Cell 6
  event.shaped('solarflux:photovoltaic_cell_6', [
  'EEE',
  'RSR',
  'PQP'
  ], {
    E: 'solarflux:ender_glass',
    P: 'solarflux:photovoltaic_cell_5',
    Q: 'refinedstorage:quartz_enriched_iron_block',
    R: 'mekanism:block_refined_glowstone',
    S: 'powah:spirited_crystal_block'
  })

  // Blasing coating
  event.shaped('2x solarflux:blazing_coating', [
  ' M ',
  ' B ',
  ' M '
  ], {
    M: 'solarflux:mirror',
    B: 'powah:crystal_blazing'
  })

  // Emerald glass
  event.shaped('2x solarflux:emerald_glass', [
  ' M ',
  ' S ',
  ' M '
  ], {
    M: 'solarflux:mirror',
    S: 'powah:crystal_spirited'
  })

  // Ender glass
  event.shaped('3x solarflux:ender_glass', [
  '   ',
  'EEE',
  'PCP'
  ], {
    E: 'solarflux:emerald_glass',
    C: 'powah:ender_core',
    P: 'miniutilities:ender_pearl_block'
  })

  // Blank Upgrade
  event.shaped('solarflux:blank_upgrade', [
  ' B ',
  'BMB',
  ' B '
  ], {
    B: 'tconstruct:seared_stone',
    M: 'solarflux:mirror'
  })

});
