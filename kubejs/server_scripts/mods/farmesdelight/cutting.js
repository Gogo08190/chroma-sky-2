// priority: 10

events.listen('recipes', function (event) {

  // Cutting Board Knife Cutting
  const knifeCutting = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        input
      ],
      tool: {
        "tag": "forge:tools/knives"
      },
      result: output
    })
  }

  // Cutting Board Shovel Cutting
  const shovelCutting = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        input
      ],
      tool: {
        "tag": "forge:tools/shovel"
      },
      result: output
    })
  }

  // ----- Knife Recipes -----

  knifeCutting([Item.of('4x chromasky:leaf')], Ingredient.of('#minecraft:leaves'))
  knifeCutting([Item.of('chromasky:plant_string')], Ingredient.of('chromasky:leaf'))

  // -----Shovel Recipes -----

  shovelCutting([Item.of('chromasky:flint_shard')], Ingredient.of('minecraft:flint'))

})
