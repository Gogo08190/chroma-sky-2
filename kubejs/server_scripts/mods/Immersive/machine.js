onEvent("recipes", (event) => {
  event.recipes.immersiveengineeringAlloy('extendedcrafting:redstone_ingot', 'ftbjarmod:cast_iron_ingot', 'projectred-core:red_ingot')

  event.custom({
      "type": "immersiveengineering:blueprint",
      "inputs": [{
          "item": "minecraft:obsidian"
      },{
          "item": "minecraft:sand"
      },{
          "item": "minecraft:quartz"
      },{
          "item": "minecraft:fire_charge"
      }],
      "category": "components",
      "result": {
          "item": "thermal:obsidian_glass",
          "count": 2
      }
    })
});
