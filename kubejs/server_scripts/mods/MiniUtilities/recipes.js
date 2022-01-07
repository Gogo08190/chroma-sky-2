onEvent('recipes', event => {

  event.remove({ output: 'miniutilities:laser_port' })
  event.shaped('miniutilities:laser_port', [
  ' R ',
  'IGI',
  'RRR'
  ], {
    R: 'extendedcrafting:redstone_ingot',
    I: 'miniutilities:iron_opinium_core',
    G: 'minecraft:gold_block'
  })

  event.remove({ output: 'miniutilities:cursed_earth' })
  event.shaped('8x miniutilities:cursed_earth', [
  'DCD',
  'CEC',
  'DCD'
  ], {
    D: 'minecraft:dirt',
    C: 'minecraft:coarse_dirt',
    E: 'chromasky:drop_of_darkness'
  })

  event.remove({ output: 'miniutilities:blessed_earth' })
  event.shaped('miniutilities:blessed_earth', [
  'DCD',
  'CEC',
  'DCD'
  ], {
    D: 'minecraft:dirt',
    C: 'minecraft:coarse_dirt',
    E: 'chromasky:drop_of_darkness'
  })

});
