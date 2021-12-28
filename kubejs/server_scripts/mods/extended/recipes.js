onEvent("recipes", (event) => {
  event.remove({ output: 'extendedcrafting:redstone_ingot' })
  event.shapeless('extendedcrafting:redstone_ingot', '9x extendedcrafting:redstone_nugget')
  event.shaped('9x extendedcrafting:redstone_ingot', 'extendedcrafting:redstone_ingot_block')

  event.remove({ output: 'extendedcrafting:black_iron_ingot' })
  event.shapeless('extendedcrafting:black_iron_ingot', '9x extendedcrafting:black_iron_nugget')
  event.shaped('9x extendedcrafting:black_iron_ingot', 'extendedcrafting:black_iron_block')

  event.recipes.thermal
    .smelter("extendedcrafting:black_iron_ingot", ['immersiveengineering:coal_coke', 'mekanism:ingot_steel'])
    .energy(6400);
});
