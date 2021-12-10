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

  // ----- Knife Recipes -----

  knifeCutting([Item.of('4x chromasky:leaf')], Ingredient.of('#minecraft:leaves'))
  knifeCutting([Item.of('chromasky:plant_string')], Ingredient.of('chromasky:leaf'))

})
