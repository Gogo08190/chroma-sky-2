onEvent("recipes", (event) => {
  event.recipes.thermal
    .smelter("thermal:machine_frame", ["chromasky:top_frame", "chromasky:mechanic_core_tier_1", "chromasky:bottom_frame"])
    .energy(5000);

  event.recipes.thermal
    .smelter("extendedcrafting:redstone_ingot", ["ftbjarmod:cast_iron_ingot", "projectred-core:red_ingot"])
    .energy(2000);
});
