onEvent('recipes', event => {

  // Dielectric Casing
  event.remove({ output: 'powah:dielectric_casing' })

  // Dielectric Rod
  event.remove({ output: 'powah:dielectric_rod' })
  event.shaped('8x powah:dielectric_rod', [
  'PBP',
  'PRP',
  'PBP'
  ], {
    P: 'powah:dielectric_paste',
    B: 'extendedcrafting:black_iron_ingot',
    R: 'thermal:rf_coil'
  })

  // Dielectric Rod Horizontal
  event.remove({ output: 'powah:dielectric_rod_horizontal' })
  event.shapeless('powah:dielectric_rod', 'powah:dielectric_rod_horizontal');
  event.shapeless('powah:dielectric_rod_horizontal', 'powah:dielectric_rod');
  event.shaped('8x powah:dielectric_rod_horizontal', [
  'PPP',
  'BRB',
  'PPP'
  ], {
    P: 'powah:dielectric_paste',
    B: 'extendedcrafting:black_iron_ingot',
    R: 'thermal:rf_coil'
  })

  // Basic Capacitor
  event.remove({ output: 'powah:capacitor_basic' })
  event.shaped('2x powah:capacitor_basic', [
  ' SP',
  'SRS',
  'PS '
  ], {
    P: 'powah:dielectric_paste',
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot_block'
  })

  // Energie cable(Starter)
  event.remove({ output: 'powah:energy_cable_starter' })
  event.shaped('12x powah:energy_cable_starter', [
  'HHH',
  'SBS',
  'HHH'
  ], {
    H: 'powah:dielectric_rod_horizontal',
    B: 'powah:capacitor_basic_tiny',
    S: 'mekanism:nugget_steel'
  })

  // Battery(Starter)
  event.remove({ output: 'powah:battery_starter' })
  event.shaped('powah:battery_starter', [
  'PBP',
  'BRB',
  'PBP'
  ], {
    P: 'powah:dielectric_paste',
    R: 'extendedcrafting:redstone_ingot_block',
    B: 'powah:capacitor_basic'
  })

  // Wrench
  event.remove({ output: 'powah:wrench' })
  event.shaped('powah:wrench', [
  ' MP',
  ' PM',
  'P  '
  ], {
    P: 'powah:dielectric_paste',
    M: 'tconstruct:manyullyn_ingot'
  })

  // Photoelectric Pane
  event.remove({ output: 'powah:photoelectric_pane' })
  event.shaped('powah:photoelectric_pane', [
  'PCP',
  'CGC',
  'PCP'
  ], {
    P: 'powah:dielectric_paste',
    G: 'minecraft:glass_pane',
    C: 'tconstruct:cobalt_ingot'
  })

  // Thermo Plate
  event.remove({ output: 'powah:thermoelectric_plate' })
  event.shaped('powah:thermoelectric_plate', [
  'BRB',
  'RTR',
  'BRB'
  ], {
    B: 'minecraft:blaze_powder',
    R: 'extendedcrafting:redstone_ingot',
    T: 'powah:capacitor_basic_tiny'
  })

  // Thermo Plate
  event.remove({ output: 'powah:energizing_orb' })
  event.shaped('powah:energizing_orb', [
  'OOO',
  'OCO',
  'RRR'
  ], {
    R: 'powah:dielectric_rod_horizontal',
    O: 'thermal:obsidian_glass',
    C: 'powah:dielectric_casing'
  })

  // Energizing Rod (Starter)
  event.remove({ output: 'powah:energizing_rod_starter' })
  event.shaped('powah:energizing_rod_starter', [
  ' Q ',
  'BCB',
  ' D '
  ], {
    D: 'powah:dielectric_rod',
    B: 'powah:capacitor_basic_tiny',
    C: 'powah:dielectric_casing',
    Q: 'refinedstorage:quartz_enriched_iron'
  })
});
