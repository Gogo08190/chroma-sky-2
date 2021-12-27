onEvent('recipes', event => {

  event.remove({ output: 'easy_villagers:trader' })
  event.shaped('easy_villagers:trader', [
  'GGG',
  'GRG',
  'SSS'
  ], {
    S: 'mekanism:ingot_steel',
    G: 'thermal:obsidian_glass',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'easy_villagers:auto_trader' })
  event.shaped('easy_villagers:auto_trader', [
  'GGG',
  'GRG',
  'SNS'
  ], {
    S: 'mekanism:ingot_steel',
    G: 'thermal:obsidian_glass',
    R: 'extendedcrafting:redstone_ingot',
    N: 'minecraft:netherite_ingot'
  })

  event.remove({ output: 'easy_villagers:farmer' })
  event.shaped('easy_villagers:farmer', [
  'GGG',
  'GRG',
  'SNS'
  ], {
    S: 'mekanism:ingot_steel',
    G: 'thermal:obsidian_glass',
    R: 'cookingforblockheads:sink',
    N: 'chromasky:3x_compressed_dirt'
  })

  event.remove({ output: 'easy_villagers:breeder' })
  event.shaped('easy_villagers:breeder', [
  'GGG',
  'GRG',
  'SNS'
  ], {
    S: 'mekanism:ingot_steel',
    G: 'thermal:obsidian_glass',
    R: '#minecraft:beds',
    N: 'immersiveengineering:treated_wood_horizontal'
  })

  event.remove({ output: 'easy_villagers:converter' })
  event.shaped('easy_villagers:converter', [
  'GGG',
  'GRG',
  'SNS'
  ], {
    S: 'mekanism:ingot_steel',
    G: 'thermal:obsidian_glass',
    R: 'minecraft:zombie_head',
    N: 'minecraft:mossy_cobblestone'
  })

  event.remove({ output: 'easy_villagers:iron_farm' })
  event.shaped('easy_villagers:iron_farm', [
  'GGG',
  'GRG',
  'SNS'
  ], {
    S: 'mekanism:ingot_steel',
    G: 'thermal:obsidian_glass',
    R: 'minecraft:lava_bucket',
    N: 'chromasky:3x_compressed_stone'
  })

  event.remove({ output: 'easy_villagers:incubator' })
  event.shaped('easy_villagers:incubator', [
  'GGG',
  'G G',
  'SNS'
  ], {
    S: 'mekanism:ingot_steel',
    G: 'thermal:obsidian_glass',
    N: 'thermal:white_rockwool'
  })
});
