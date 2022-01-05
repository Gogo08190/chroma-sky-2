onEvent("recipes", (event) => {

  event.recipes.thermal
    .smelter("extendedcrafting:redstone_ingot", ["ftbjarmod:cast_iron_ingot", "projectred-core:red_ingot"])
    .energy(2000);

  event.remove({ output: 'thermal:obsidian_glass' })
  event.recipes.thermal
    .smelter("2x thermal:obsidian_glass", ["#forge:gems/quartz", "minecraft:obsidian", "#forge:sand"])
    .energy(2000);

  event
    .custom({"type": "thermal:refinery","ingredient": {"fluid": "thermal:latex","amount": 100},"result": [{"item": "thermal:rubber","chance": 1}],"energy": 10000})

  event
    .custom({"type": "thermal:pyrolyzer","ingredient": {"item": "thermal:rubber"},"result": [{"item": "thermal:cured_rubber"},{"item": 'thermal:cured_rubber',"chance": 0.5},{"item": 'industrialforegoing:dryrubber',"chance": 0.05}],"energy": 5000,"experience": 0.00})
});
