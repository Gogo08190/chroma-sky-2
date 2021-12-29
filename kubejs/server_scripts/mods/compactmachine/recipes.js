onEvent('recipes', event => {

  event.remove({id: 'compactmachines:wall'})
  event.remove({ output: 'compactmachines:machine_tiny' })
  event.remove({ output: 'compactmachines:machine_small' })
  event.remove({ output: 'compactmachines:machine_normal' })
  event.remove({ output: 'compactmachines:machine_large' })
  event.remove({ output: 'compactmachines:machine_giant' })
  event.remove({ output: 'compactmachines:machine_maximum' })

  // Field Projector
  event.remove({ output: 'compactcrafting:field_projector' })
  event.shaped('4x compactcrafting:field_projector', [
  ' S ',
  ' R ',
  'NMN'
  ], {
    M: 'thermal:machine_frame',
    N: 'thermal:redstone_servo',
    R: 'immersiveengineering:stick_steel',
    S: 'rftoolsbase:information_screen'
  })

  // Personnal Shrinking Device
  event.remove({ output: 'compactmachines:personal_shrinking_device' })
  event.shaped('compactmachines:personal_shrinking_device', [
  ' G ',
  'CBC',
  ' I '
  ], {
    C: 'immersiveengineering:component_steel',
    B: 'immersiveengineering:circuit_board',
    I: 'ftbjarmod:cast_iron_ingot',
    G: '#forge:glass_panes'
  })
});