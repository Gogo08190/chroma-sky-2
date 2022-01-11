onEvent("recipes", (event) => {

  event.recipes.thermal
    .smelter(Item.of('animalcrops:seeds', '{entity:"minecraft:villager"}'), ["immersiveengineering:seed", "minecraft:emerald_block", "minecraft:anvil"])
    .energy(3000);

    event.recipes.thermal
      .smelter(Item.of('animalcrops:anemonemal', '{entity:"minecraft:turtle"}'), ["immersiveengineering:seed", "minecraft:kelp", "minecraft:water_bucket"])
      .energy(3000);

    event.shaped(Item.of('animalcrops:anemonemal', '{entity:"minecraft:squid"}'), [
      'SC'
    ], {
      C: 'minecraft:cod',
      S: 'immersiveengineering:seed'
    })

    event.shaped(Item.of('animalcrops:seeds', '{entity:"minecraft:sheep"}'), [
      'SC'
    ], {
      C: 'minecraft:white_wool',
      S: 'immersiveengineering:seed'
    })

    event.shaped(Item.of('animalcrops:seeds', '{entity:"minecraft:rabbit"}'), [
      'SC'
    ], {
      C: 'minecraft:golden_carrot',
      S: 'immersiveengineering:seed'
    })

    event.shaped(Item.of('animalcrops:seeds', '{entity:"minecraft:pig"}'), [
      'SCD'
    ], {
      C: 'minecraft:potato',
      D: 'chromasky:compost',
      S: 'immersiveengineering:seed'
    })

    event.shaped(Item.of('animalcrops:seeds', '{entity:"minecraft:bee"}'), [
      'SCD'
    ], {
      C: 'minecraft:honeycomb_block',
      D: 'minecraft:poppy',
      S: 'immersiveengineering:seed'
    })

    event.shaped(Item.of('animalcrops:seeds', '{entity:"minecraft:cow"}'), [
      'SC'
    ], {
      C: 'minecraft:wheat',
      S: 'immersiveengineering:seed'
    })

    event.shaped(Item.of('animalcrops:seeds', '{entity:"minecraft:chicken"}'), [
      'SC'
    ], {
      C: 'minecraft:wheat_seeds',
      S: 'immersiveengineering:seed'
    })
});
