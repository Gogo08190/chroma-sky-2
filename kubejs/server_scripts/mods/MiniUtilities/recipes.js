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
  event.shaped('4x miniutilities:cursed_earth', [
  'DCD',
  'CEC',
  'DCD'
  ], {
    D: 'minecraft:dirt',
    C: 'minecraft:coarse_dirt',
    E: 'chromasky:drop_of_darkness'
  })

  event.remove({ output: 'miniutilities:blessed_earth' })
  event.shaped('4x miniutilities:blessed_earth', [
  'DCD',
  'CEC',
  'DCD'
  ], {
    D: 'minecraft:dirt',
    C: 'minecraft:coarse_dirt',
    E: 'chromasky:drop_of_peacefulless'
  })

  event.remove({ output: 'miniutilities:blursed_earth' })
  event.shaped('4x miniutilities:blursed_earth', [
  'DCD',
  'CEC',
  'DCD'
  ], {
    D: 'miniutilities:cursed_earth',
    C: 'miniutilities:blessed_earth',
    E: 'miniutilities:unstable_block'
  })

  event.remove({ output: 'mob_grinding_utils:saw' })
  event.shaped('mob_grinding_utils:saw', [
  'SDS',
  'IRI',
  'GCG'
  ], {
    S: 'minecraft:iron_sword',
    D: 'minecraft:diamond',
    I: 'miniutilities:iron_spikes',
    R: 'extendedcrafting:redstone_ingot_block',
    G: 'thermal:diamond_gear',
    C: 'ftbjarmod:cast_iron_block'
  })

  event.remove({ output: 'miniutilities:mechanical_miner' })
  event.shaped('miniutilities:mechanical_miner', [
  'CNC',
  'GRG',
  'CGC'
  ], {
    C: 'ftbjarmod:cast_iron_ingot',
    G: 'minecraft:gold_ingot',
    R: 'extendedcrafting:redstone_ingot_block',
    N: 'minecraft:netherite_pickaxe'
  })

  event.shaped('8x miniutilities:dark_glass', [
  'GGG',
  'GIG',
  'GGG'
  ], {
    I: 'minecraft:ink_sac',
    G: 'minecraft:glass'
  })

});
