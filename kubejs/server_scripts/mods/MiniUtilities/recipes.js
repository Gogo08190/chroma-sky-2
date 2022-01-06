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

  });
