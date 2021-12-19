onEvent("recipes", (event) => {
  event.recipes.thermal
    .smelter("thermal:machine_frame", ["chromasky:top_frame", "chromasky:mechanic_core_tier_1", "chromasky:bottom_frame"])
    .energy(5000);
});
