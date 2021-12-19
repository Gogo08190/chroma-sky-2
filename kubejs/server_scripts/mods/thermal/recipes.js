onEvent("recipes", (event) => {
  event.shaped('thermal:sapphire_gear', [
  ' R ',
  'RCR',
  ' R '
  ], {
    R: 'thermal:sapphire',
    C: 'ftbjarmod:cast_iron_nugget'
  })

  event.shaped('thermal:ruby_gear', [
  ' R ',
  'RCR',
  ' R '
  ], {
    R: 'thermal:ruby',
    C: 'ftbjarmod:cast_iron_nugget'
  })

  event.shaped('chromasky:redstone_gear', [
  ' R ',
  'RCR',
  ' R '
  ], {
    R: 'extendedcrafting:redstone_ingot',
    C: 'ftbjarmod:cast_iron_nugget'
  })

  event.shaped('chromasky:treated_wood_gear', [
  ' R ',
  'RCR',
  ' R '
  ], {
    R: 'immersiveengineering:treated_wood_horizontal',
    C: 'ftbjarmod:cast_iron_nugget'
  })

  event.shaped('chromasky:bottom_frame', [
  '   ',
  'R R',
  'CSC'
  ], {
    C: 'immersiveengineering:component_steel',
    S: 'immersiveengineering:plate_steel',
    R: 'immersiveengineering:stick_steel'
  })

  event.shaped('chromasky:top_frame', [
  'CSC',
  'R R',
  '   '
  ], {
    C: 'immersiveengineering:component_steel',
    S: 'immersiveengineering:plate_steel',
    R: 'immersiveengineering:stick_steel'
  })

  event.shaped('chromasky:mechanic_core_tier_1', [
  ' C ',
  'CGC',
  ' C '
  ], {
    C: 'immersiveengineering:component_steel',
    G: 'thermal:ruby_gear'
  })

  event.remove({ output: 'thermal:rf_coil' })
  event.shaped('thermal:rf_coil', [
  ' WG',
  'WRW',
  'GW '
  ], {
    W: 'immersiveengineering:wire_electrum',
    G: 'minecraft:gold_ingot',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'thermal:redstone_servo' })
  event.shaped('thermal:redstone_servo', [
  'RSR',
  ' S ',
  'RSR'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'thermal:dynamo_stirling' })
  event.shaped('thermal:dynamo_stirling', [
  ' C ',
  'IGI',
  'BRB'
  ], {
    C: 'chromasky:excitationcoil',
    G: 'ftbjarmod:cast_iron_gear',
    I: 'ftbjarmod:cast_iron_ingot',
    B: 'minecraft:basalt',
    R: 'extendedcrafting:redstone_ingot'

  })
});
