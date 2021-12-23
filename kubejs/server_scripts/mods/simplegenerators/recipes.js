onEvent('recipes', event => {
  event.remove({ output: 'simplegens:simple_combustion' })
  event.shaped('simplegens:simple_combustion', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'immersiveengineering:coal_coke',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.remove({ output: 'simplegens:simple_culinary' })
  event.shaped('simplegens:simple_culinary', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'minecraft:honeycomb',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.remove({ output: 'simplegens:simple_ender' })
  event.shaped('simplegens:simple_ender', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'minecraft:ender_eye',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.remove({ output: 'simplegens:simple_nether' })
  event.shaped('simplegens:simple_nether', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'minecraft:netherite_ingot',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.remove({ output: 'simplegens:simple_soul' })
  event.shaped('simplegens:simple_soul', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: '#forge:heads',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.remove({ output: 'simplegens:simple_pink' })
  event.shaped('simplegens:simple_pink', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: '#forge:dyes/pink',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.remove({ output: 'simplegens:simple_tnt' })
  event.shaped('simplegens:simple_tnt', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'minecraft:tnt',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.remove({ output: 'simplegens:simple_potion' })
  event.shaped('simplegens:simple_potion', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'minecraft:brewing_stand',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.remove({ output: 'simplegens:simple_geothermal' })
  event.shaped('simplegens:simple_geothermal', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'minecraft:magma_block',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.shaped('simplegens:simple_fluid_combustion', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'cyclic:biomass',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })

  event.shaped('simplegens:simple_turbine', [
  'BCB',
  'SFS',
  'MMM'
  ], {
    C: 'mekanismgenerators:turbine_blade',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone',
    B: 'mekanism:basic_control_circuit'
  })

  event.shaped('simplegens:simple_xp', [
  'CCC',
  'SFS',
  'MMM'
  ], {
    C: 'miniutilities:experience_pearl',
    S: 'mekanism:ingot_steel',
    F: 'ironfurnaces:iron_furnace',
    M: 'cyclic:mason_stone'
  })
});
