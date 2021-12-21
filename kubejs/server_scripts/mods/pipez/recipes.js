onEvent("recipes", (event) => {
  event.remove({ output: 'pipez:gas_pipe' })
  event.shaped('16x pipez:gas_pipe', [
  'SSS',
  'ARA',
  'SSS'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot',
    A: 'mekanism:alloy_infused'
  })

  event.remove({ output: 'pipez:energy_pipe' })
  event.shaped('16x pipez:energy_pipe', [
  'SSS',
  'ARA',
  'SSS'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot',
    A: 'thermal:electrum_block'
  })

  event.remove({ output: 'pipez:fluid_pipe' })
  event.shaped('16x pipez:fluid_pipe', [
  'SSS',
  'ARA',
  'SSS'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot',
    A: 'thermal:cured_rubber'
  })

  event.remove({ output: 'pipez:item_pipe' })
  event.shaped('16x pipez:item_pipe', [
  'SSS',
  'ARA',
  'SSS'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot',
    A: 'thermal:lead_plate'
  })

  event.remove({ output: 'pipez:wrench' })
  event.shaped('pipez:wrench', [
  ' S ',
  ' RS',
  'R  '
  ], {
    R: 'immersiveposts:stick_lead',
    S: 'mekanism:ingot_steel'
  })
});
