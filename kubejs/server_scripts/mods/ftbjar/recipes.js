onEvent('recipes', event => {

  // Removed
  event.remove({ output: 'tconstruct:seared_heater' })
  event.remove({ output: 'tconstruct:seared_melter' })
  event.remove({ output: 'tconstruct:seared_brick' })
  event.remove({ output: 'tconstruct:seared_fuel_tank' })
  event.remove({ output: 'tconstruct:seared_basin' })
  event.remove({ output: 'tconstruct:seared_table' })
  event.remove({ output: 'tconstruct:seared_faucet' })
  event.remove({ output: 'tconstruct:seared_chute' })
  event.remove({ output: 'tconstruct:seared_drain' })
  event.remove({ output: 'tconstruct:seared_duct' })
  event.remove({ output: 'tconstruct:seared_faucet' })

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
