onEvent('recipes', event => {

  // Cast Iron Gear
  event.remove({ output: 'ftbjarmod:cast_iron_gear' })
  event.shaped('ftbjarmod:cast_iron_gear', [
  ' C ',
  'CNC',
  ' C '
  ], {
    N: 'ftbjarmod:cast_iron_nugget',
    C: 'ftbjarmod:cast_iron_ingot'
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

  // Auto Processing Block
  event.remove({ output: 'ftbjarmod:auto_processing_block' })
  event.shaped('ftbjarmod:auto_processing_block', [
  'BDB',
  'GPG',
  'BHB'
  ], {
    B: 'ftbjarmod:cast_iron_block',
    G: 'ftbjarmod:cast_iron_gear',
    H: 'minecraft:hopper',
    P: 'minecraft:piston',
    D: 'minecraft:dropper'
  })
});