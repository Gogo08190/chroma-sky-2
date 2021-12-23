onEvent('recipes', event => {

  // Dielectric Casing
  event.remove({ output: 'powah:dielectric_casing' })
  event.shaped('powah:dielectric_casing', [
  'SHS',
  'RCR',
  'SHS'
  ], {
    S: 'mekanism:ingot_steel',
    H: 'powah:dielectric_rod_horizontal',
    R: 'powah:dielectric_rod',
    C: 'chromasky:mechanic_core_tier_3'
  })

  // Dielectric Rod
  event.remove({ output: 'powah:dielectric_rod' })
  event.shaped('powah:dielectric_rod', [
  'PBP',
  'PRP',
  'PBP'
  ], {
    P: 'powah:dielectric_paste',
    B: 'extendedcrafting:black_iron_ingot',
    R: 'thermal:rf_coil',
  })

  // Dielectric Rod Horizontal
  event.remove({ output: 'powah:dielectric_rod_horizontal' })
  event.shaped('powah:dielectric_rod_horizontal', [
  'PPP',
  'BRB',
  'PPP'
  ], {
    P: 'powah:dielectric_paste',
    B: 'extendedcrafting:black_iron_ingot',
    R: 'thermal:rf_coil',
  })

});
