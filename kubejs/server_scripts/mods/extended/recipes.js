onEvent("recipes", (event) => {
  event.remove({ output: 'extendedcrafting:redstone_ingot' })
  event.shapeless('extendedcrafting:redstone_ingot', '9x extendedcrafting:redstone_nugget')
  event.shaped('9x extendedcrafting:redstone_ingot', 'extendedcrafting:redstone_ingot_block')
});
