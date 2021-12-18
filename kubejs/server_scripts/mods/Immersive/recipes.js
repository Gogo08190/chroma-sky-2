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
  event.shaped('immersiveengineering:rs_engineering', [
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
  event.shaped('immersiveengineering:heavy_engineering', [
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
  event.shaped('immersiveengineering:light_engineering', [
  'ICI',
  'CGC',
  'ICI'
  ], {
    I: 'immersiveengineering:sheetmetal_iron',
    C: 'immersiveengineering:component_iron',
    G: 'thermal:copper_gear'
  })

  // Light Engineering Block
  event.remove({ output: 'immersiveengineering:light_engineering' })
  event.shaped('immersiveengineering:light_engineering', [
  'ICI',
  'CGC',
  'ICI'
  ], {
    I: 'immersiveengineering:sheetmetal_iron',
    C: 'immersiveengineering:component_iron',
    G: 'thermal:copper_gear'
  })

  });
