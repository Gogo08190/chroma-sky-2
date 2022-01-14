onEvent("recipes", (event) => {
  event.remove({ output: 'extendedcrafting:redstone_ingot' })
  event.shapeless('extendedcrafting:redstone_ingot', '9x extendedcrafting:redstone_nugget')
  event.shaped('9x extendedcrafting:redstone_ingot', 'extendedcrafting:redstone_ingot_block')

  event.remove({ output: 'extendedcrafting:black_iron_ingot' })
  event.shapeless('extendedcrafting:black_iron_ingot', '9x extendedcrafting:black_iron_nugget')
  event.shaped('9x extendedcrafting:black_iron_ingot', 'extendedcrafting:black_iron_block')

event.remove({ output: 'miniutilities:quantum_quarry' })
event.remove({ output: 'miniutilities:angel_ring' })

  event.recipes.thermal
    .smelter("extendedcrafting:black_iron_ingot", ['immersiveengineering:coal_coke', 'mekanism:ingot_steel', 'rats:little_black_squash_balls'])
    .energy(6400);

    event.shaped('9x extendedcrafting:ender_ingot', 'extendedcrafting:ender_ingot_block')
    event.shapeless('extendedcrafting:ender_ingot', '9x extendedcrafting:ender_nugget')

    event.remove({ output: 'extendedcrafting:ender_ingot' })
    event.shaped('2x extendedcrafting:ender_ingot', [
    'SI'
    ], {
      S: 'powah:steel_energized',
      I: 'rftoolsbase:infused_enderpearl'
    })
});
