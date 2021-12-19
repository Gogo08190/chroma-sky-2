onEvent('recipes', event => {

  // LV Capacitor
  event.remove({ output: 'immersiveengineering:capacitor_lv' })
  event.shaped('immersiveengineering:capacitor_lv', [
  'III',
  'BHB',
  'SRS'
  ], {
    R: 'chromasky:redstone_gear',
    S: 'immersiveengineering:treated_wood_horizontal',
    B: 'thermal:copper_gear',
    H: 'integrateddynamics:energy_battery',
    I: 'ftbjarmod:cast_iron_ingot'
  })

  // MV Capacitor
  event.remove({ output: 'immersiveengineering:capacitor_mv' })
  event.shaped('immersiveengineering:capacitor_mv', [
  'III',
  'BHB',
  'SWS'
  ], {
    W: 'thermal:bronze_gear',
    S: 'immersiveengineering:treated_wood_horizontal',
    B: 'thermal:electrum_gear',
    H: 'immersiveengineering:capacitor_lv',
    I: 'tconstruct:pig_iron_ingot'
  })

  // HV Capacitor
  event.remove({ output: 'immersiveengineering:capacitor_hv' })
  event.shaped('immersiveengineering:capacitor_hv', [
  'III',
  'BHB',
  'SWS'
  ], {
    W: 'thermal:signalum_gear',
    S: 'immersiveengineering:treated_wood_horizontal',
    B: 'thermal:invar_gear',
    H: 'immersiveengineering:capacitor_mv',
    I: 'thermal:lumium_ingot'
  })

  // Redstone Engineering Block
  event.remove({ output: 'immersiveengineering:rs_engineering' })
  event.shaped('4x immersiveengineering:rs_engineering', [
  'BRB',
  'RIR',
  'BRB'
  ], {
    B: 'immersiveengineering:sheetmetal_iron',
    R: 'projectred-core:red_ingot',
    I: 'ftbjarmod:cast_iron_gear'
  })

  // Heavy Engineering Block
  event.remove({ output: 'immersiveengineering:heavy_engineering' })
  event.shaped('4x immersiveengineering:heavy_engineering', [
  'SCS',
  'CEC',
  'SCS'
  ], {
    S: 'immersiveengineering:sheetmetal_steel',
    C: 'immersiveengineering:component_steel',
    E: 'thermal:electrum_gear'
  })

  // Light Engineering Block
  event.remove({ output: 'immersiveengineering:light_engineering' })
  event.shaped('4x immersiveengineering:light_engineering', [
  'ICI',
  'CGC',
  'ICI'
  ], {
    I: 'immersiveengineering:sheetmetal_iron',
    C: 'immersiveengineering:component_iron',
    G: 'thermal:copper_gear'
  })

  // Engineer's Hammer
  event.remove({ output: 'immersiveengineering:hammer' })
  event.shaped('immersiveengineering:hammer', [
  ' MC',
  ' SM',
  'S  '
  ], {
    S: 'immersiveengineering:stick_treated',
    M: 'minecraft:string',
    C: 'chromasky:hammer_head'
  })

  // Water Wheel
  event.remove({ output: 'immersiveengineering:watermill' })
  event.shaped('immersiveengineering:watermill', [
  'SSS',
  'SWS',
  'SSS'
  ], {
    S: 'immersiveengineering:waterwheel_segment',
    W: 'chromasky:treated_wood_gear'
  })

  // Windmill
  event.remove({ output: 'immersiveengineering:windmill' })
  event.shaped('immersiveengineering:windmill', [
  'BBB',
  'BGB',
  'BBB'
  ], {
    B: 'immersiveengineering:windmill_blade',
    G: 'thermal:invar_gear'
  })

  // Kiln Brick
  event.remove({ output: 'immersiveengineering:alloybrick' })
  event.shaped('2x immersiveengineering:alloybrick', [
  'BGB',
  'BSB',
  'BGB'
  ], {
    B: 'minecraft:brick',
    G: 'tconstruct:grout',
    S: 'chromasky:1x_compressed_sand'
  })

  // Kinetic Dynamo
  event.remove({ output: 'immersiveengineering:dynamo' })
  event.shaped('immersiveengineering:dynamo', [
  'SSS',
  'RCR',
  'SSS'
  ], {
    R: 'chromasky:redstone_gear',
    C: 'immersiveengineering:coil_lv',
    S: 'mekanism:ingot_steel'
  })

  // Copper Coil Block
  event.remove({ output: 'immersiveengineering:coil_lv' })
  event.shaped('immersiveengineering:coil_lv', [
  'CCC',
  'CSC',
  'CCC'
  ], {
    C: 'immersiveengineering:wirecoil_copper',
    S: 'ftbjarmod:cast_iron_ingot'
  })

  // Electrum Coil Block
  event.remove({ output: 'immersiveengineering:coil_mv' })
  event.shaped('immersiveengineering:coil_mv', [
  'CCC',
  'CSC',
  'CCC'
  ], {
    C: 'immersiveengineering:wirecoil_electrum',
    S: 'mekanism:ingot_steel'
  })

  // High Voltage Coil Block
  event.remove({ output: 'immersiveengineering:coil_hv' })
  event.shaped('immersiveengineering:coil_hv', [
  'CCC',
  'CSC',
  'CCC'
  ], {
    C: 'immersiveengineering:wirecoil_steel',
    S: 'mekanism:ingot_steel'
  })

  // Blueprint Components
  event.remove({ output: Item.of('immersiveengineering:blueprint', '{blueprint:"components"}') })
  event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), [
  'CES',
  'BBB',
  'PPP'
  ], {
    C: 'thermal:constantan_ingot',
    S: 'mekanism:ingot_steel',
    E: 'thermal:electrum_ingot',
    B: 'minecraft:blue_dye',
    P: 'minecraft:paper'
  })

  });
