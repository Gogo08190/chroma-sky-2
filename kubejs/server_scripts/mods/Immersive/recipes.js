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
    W: 'thermal:ruby_gear',
    S: 'immersiveengineering:treated_wood_horizontal',
    B: 'thermal:copper_gear',
    H: 'integrateddynamics:energy_battery', '{capacity:2000000}',
    I: 'ftbjarmod:cast_iron_ingot'
  })
  
  });
