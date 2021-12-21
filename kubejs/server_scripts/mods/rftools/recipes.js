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
});
