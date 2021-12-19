onEvent("recipes", (event) => {
  event.recipes.immersiveengineeringAlloy('extendedcrafting:redstone_ingot', 'ftbjarmod:cast_iron_ingot', 'projectred-core:red_ingot')

  event.remove({ output: 'thermal:machine_frame' })
  event.custom({
      "type": "immersiveengineering:blueprint",
      "inputs": [{
          "item": "chromasky:top_frame"
      },{
          "item": "chromasky:mechanic_core_tier_1"
      },{
          "item": "chromasky:bottom_frame"
      }],
      "category": "components",
      "result": {
          "item": "thermal:machine_frame"
      }
    })
});
