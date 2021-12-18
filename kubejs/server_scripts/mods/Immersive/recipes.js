onEvent('recipes', event => {

  // LV Capacitor
  event.remove({ output: 'immersiveengineering:capacitor_lv' })
  event.shaped('immersiveengineering:capacitor_lv', [
  'III',
  'BHB',
  'SWS'
  ], {
    W: 'thermal:ruby_gear',
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

  });
