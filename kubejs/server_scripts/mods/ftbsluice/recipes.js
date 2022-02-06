onEvent('recipes', event => {

  // Oak Sluice
  event.remove({ output: 'ftbsluice:oak_sluice' })
  event.shaped('ftbsluice:oak_sluice', [
  ' H ',
  'WBS',
  'WWW'
  ], {
    W: 'minecraft:oak_wood',
    S: 'minecraft:stick',
    B: 'minecraft:bowl',
    H: 'cyclic:hopper'
  })

  // Iron Sluice
  event.remove({ output: 'ftbsluice:iron_sluice' })
  event.shaped('ftbsluice:iron_sluice', [
  'IB ',
  'SCC',
  'LLL'
  ], {
    I: 'minecraft:iron_block',
    S: 'ftbsluice:oak_sluice',
    C: 'minecraft:chain',
    B: 'minecraft:bucket',
    L: '#forge:ingots/iron'
  })

  // Diamond Sluice
  event.remove({ output: 'ftbsluice:diamond_sluice' })
  event.shaped('ftbsluice:diamond_sluice', [
  'IB ',
  'SCC',
  'LLL'
  ], {
    I: 'minecraft:diamond_block',
    S: 'ftbsluice:iron_sluice',
    C: 'minecraft:chain',
    B: 'tconstruct:copper_can',
    L: '#forge:gems/diamond'
  })

  // Netherite Sluice
  event.remove({ output: 'ftbsluice:netherite_sluice' })
  event.shaped('ftbsluice:netherite_sluice', [
  'IB ',
  'SEC',
  'LLL'
  ], {
    I: 'minecraft:netherite_block',
    S: 'ftbsluice:diamond_sluice',
    C: 'minecraft:chain',
    B: 'mob_grinding_utils:jumbo_tank',
    E: 'powah:battery_starter',
    L: '#forge:ingots/netherite'
  })

  event.remove({ output: 'ftbsluice:sluice_fortune_upgrade' })
  event.shaped('ftbsluice:sluice_fortune_upgrade', [
  'III',
  'IEI',
  'III'
  ], {
    I: 'thermal:iron_plate',
    E: 'thermal:emerald_gear'
  })

  event.remove({ output: 'ftbsluice:sluice_speed_upgrade' })
  event.shaped('ftbsluice:sluice_speed_upgrade', [
  'III',
  'IEI',
  'III'
  ], {
    I: 'thermal:iron_plate',
    E: 'minecraft:blaze_rod'
  })

  event.remove({ output: 'ftbsluice:sluice_consumption_upgrade' })
  event.shaped('ftbsluice:sluice_consumption_upgrade', [
  'III',
  'GEG',
  'III'
  ], {
    I: 'thermal:iron_plate',
    E: 'minecraft:lava_bucket',
    G: 'thermal:gold_plate'
  })

  // Cloth Mesh
  event.remove({ output: 'ftbsluice:cloth_mesh' })
  event.shaped('ftbsluice:cloth_mesh', [
  'RSR',
  'SSS',
  'RSR'
  ], {
    S: 'minecraft:string',
    R: 'minecraft:stick'
  })

  // Iron Mesh
  event.remove({ output: 'ftbsluice:iron_mesh' })
  event.shaped('ftbsluice:iron_mesh', [
  'RSR',
  'SMS',
  'RSR'
  ], {
    S: '#forge:ingots/iron',
    R: 'immersiveengineering:stick_iron',
    M: 'ftbsluice:cloth_mesh'
  })

  // Gold Mesh
  event.remove({ output: 'ftbsluice:gold_mesh' })
  event.shaped('ftbsluice:gold_mesh', [
  'RSR',
  'SMS',
  'RSR'
  ], {
    S: '#forge:ingots/gold',
    R: 'immersiveengineering:stick_iron',
    M: 'ftbsluice:iron_mesh'
  })

  // Diamond Mesh
  event.remove({ output: 'ftbsluice:diamond_mesh' })
  event.shaped('ftbsluice:diamond_mesh', [
  'RSR',
  'SMS',
  'RSR'
  ], {
    S: '#forge:gems/diamond',
    R: 'immersiveengineering:stick_iron',
    M: 'ftbsluice:gold_mesh'
  })

  // Iron Auto Hammer
  event.remove({ output: 'ftbsluice:iron_auto_hammer' })
  event.shaped('ftbsluice:iron_auto_hammer', [
  'FIF',
  'VHV',
  'CGC'
  ], {
    C: 'ftbjarmod:cast_iron_block',
    G: 'ftbjarmod:cast_iron_gear',
    I: '#forge:ingots/gold',
    V: '#forge:glass',
    F: '#forge:ingots/iron',
    H: 'ftbsluice:iron_hammer'
  })

  // Gold Auto Hammer
  event.remove({ output: 'ftbsluice:gold_auto_hammer' })
  event.shaped('ftbsluice:gold_auto_hammer', [
  'FIF',
  'VHV',
  'CGC'
  ], {
    C: 'ftbjarmod:cast_iron_block',
    G: 'ftbsluice:iron_auto_hammer',
    I: '#forge:ingots/gold',
    V: '#forge:glass',
    F: '#forge:ingots/iron',
    H: 'ftbsluice:gold_hammer'
  })

  // Diamond Auto Hammer
  event.remove({ output: 'ftbsluice:diamond_auto_hammer' })
  event.shaped('ftbsluice:diamond_auto_hammer', [
  'FIF',
  'VHV',
  'CGC'
  ], {
    C: 'ftbjarmod:cast_iron_block',
    G: 'ftbsluice:gold_auto_hammer',
    I: '#forge:ingots/gold',
    V: '#forge:glass',
    F: '#forge:ingots/iron',
    H: 'ftbsluice:diamond_hammer'
  })

  // Netherite Auto Hammer
  event.remove({ output: 'ftbsluice:netherite_auto_hammer' })
  event.shaped('ftbsluice:netherite_auto_hammer', [
  'FIF',
  'VHV',
  'CGC'
  ], {
    C: 'ftbjarmod:cast_iron_block',
    G: 'ftbsluice:diamond_auto_hammer',
    I: 'powah:steel_energized',
    V: '#forge:glass',
    F: 'minecraft:netherite_ingot',
    H: 'ftbsluice:netherite_hammer'
  })

  // Manual Pump
  event.remove({ output: 'ftbsluice:pump' })
  event.shaped('ftbsluice:pump', [
  'CGC',
  'CTC',
  'LTL'
  ], {
    T: 'ftbjarmod:tube',
    C: 'ftbjarmod:cast_iron_ingot',
    G: 'ftbjarmod:cast_iron_gear',
    L: 'minecraft:stripped_oak_log'
  })
});
