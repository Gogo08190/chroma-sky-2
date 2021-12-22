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

});
