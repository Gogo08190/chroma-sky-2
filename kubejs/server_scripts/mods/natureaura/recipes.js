onEvent('recipes', event => {

  // Gold Fiber
  event.remove({ output: 'naturesaura:gold_fiber' })
  event.shaped('4x naturesaura:gold_fiber', [
  'LRL',
  'GTG',
  'LRL'
  ], {
    L: '#minecraft:leaves',
    R: 'tconstruct:rose_gold_nugget',
    G: 'minecraft:gold_nugget',
    T: 'quark:turf'
  })

  // Everlasting Spring
  event.remove({ output: 'naturesaura:spring' })
  event.shaped('naturesaura:spring', [
  'LGL',
  'GTG',
  'LGL'
  ], {
    L: 'minecraft:stone_bricks',
    G: 'thermal:device_water_gen',
    T: 'naturesaura:token_euphoria'
  })

});
