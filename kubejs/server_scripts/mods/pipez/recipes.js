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
    R: 'immersiveengineering:stick_aluminum',
    S: 'mekanism:ingot_steel'
  })

  event.remove({ output: 'pipez:filter_destination_tool' })
  event.shaped('pipez:filter_destination_tool', [
  'SSS',
  'RGR',
  'SBS'
  ], {
    B: '#minecraft:buttons',
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot',
    G: '#forge:glass_panes'
  })

  event.shaped('pipez:infinity_upgrade', [
  'CUC',
  'UMU',
  'CUC'
  ], {
    C: 'overloaded:item_core',
    U: 'pipez:ultimate_upgrade',
    M: 'chromasky:mechanic_core_tier_4'
  })
});
