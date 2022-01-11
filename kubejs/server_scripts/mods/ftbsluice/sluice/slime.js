onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "tconstruct:ichor_slime_dirt", [
        ["tconstruct:earth_slime_sapling", 0.1]
    ]).mb(50);
  });
