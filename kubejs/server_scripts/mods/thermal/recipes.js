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
});
