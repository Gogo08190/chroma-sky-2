onEvent("recipes", (event) => {
  event.recipes.thermal
    .smelter("thermal:machine_frame", ["chromasky:top_frame", "chromasky:mechanic_core_tier_1", "chromasky:bottom_frame"])
    .energy(5000);

  event.recipes.thermal
    .smelter("extendedcrafting:redstone_ingot", ["ftbjarmod:cast_iron_ingot", "projectred-core:red_ingot"])
    .energy(2000);

  event.custom({"type": "thermal:refinery","ingredient": {"fluid": "thermal:latex","amount": 100},"result": [{"item": "thermal:rubber","chance": 1}],"energy": 10000})
  event.custom({"type": "thermal:pyrolyzer","ingredient": {"item": "thermal:rubber"},"result": [{"item": "thermal:cured_rubber"},{"item": 'industrialforegoing:dryrubber',"chance": 0.05}],"energy": 5000,"experience": 0.00})
});
