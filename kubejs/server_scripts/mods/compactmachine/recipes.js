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

  // Tunnel
  event.shaped(Item.of('compactmachines:tunnel', 2, '{definition:{id:"compactmachines:item"}}'), [
  ' W ',
  'WCW',
  ' W '
  ], {
    W: 'compactmachines:wall',
    C: '#forge:chests'
  })

  event.shaped(Item.of('compactmachines:tunnel', 2, '{definition:{id:"compactmachines:redstone_in"}}'), [
  ' W ',
  'WCW',
  ' W '
  ], {
    W: 'compactmachines:wall',
    C: 'extendedcrafting:redstone_ingot'
  })
});
