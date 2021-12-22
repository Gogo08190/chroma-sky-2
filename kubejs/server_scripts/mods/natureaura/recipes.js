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

  // Golden Stone Brick
  event.remove({ output: 'naturesaura:gold_brick' })
  event.shaped('naturesaura:gold_brick', [
  'GSG',
  'SGS',
  'GSG'
  ], {
    G: 'naturesaura:gold_fiber',
    S: 'minecraft:stone_bricks'
  })
});
