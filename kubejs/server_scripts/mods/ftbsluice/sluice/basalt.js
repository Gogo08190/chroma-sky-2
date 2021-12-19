onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:crushed_basalt", [
        ["minecraft:soul_sand", 0.17],
        ["minecraft:nether_wart", 0.16],
        ["tconstruct:netherite_nugget", 0.05],
        ["minecraft:gold_nugget", 0.16],
        ["minecraft:netherrack", 0.26],
        ["minecraft:brown_mushroom", 0.13],
        ["minecraft:red_mushroom", 0.13],
    ]).mb(50);

    sluice(["iron"], "ftbsluice:crushed_basalt", [
      ["minecraft:soul_sand", 0.23],
      ["minecraft:nether_wart", 0.21],
      ["tconstruct:netherite_nugget", 0.06],
      ["minecraft:gold_nugget", 0.26],
      ["minecraft:netherrack", 0.36],
      ["farmersdelight:brown_mushroom_colony", 0.13],
      ["farmersdelight:red_mushroom_colony", 0.13],
    ]);

    sluice(["gold"], "ftbsluice:crushed_basalt", [
      ["minecraft:soul_sand", 0.29],
      ["minecraft:nether_wart", 0.23],
      ["tconstruct:netherite_nugget", 0.07],
      ["minecraft:gold_nugget", 0.29],
      ["minecraft:netherrack", 0.38],
    ]);

    sluice(["diamond"], "ftbsluice:crushed_basalt", [
      ["minecraft:soul_sand", 0.31],
      ["minecraft:nether_wart", 0.26],
      ["tconstruct:netherite_nugget", 0.08],
      ["minecraft:gold_nugget", 0.31],
      ["minecraft:netherrack", 0.41],
    ]);

    sluice(["blazing"], "ftbsluice:crushed_basalt", [
      ["minecraft:soul_sand", 0.31],
      ["minecraft:nether_wart", 0.27],
      ["tconstruct:netherite_nugget", 0.09],
      ["minecraft:gold_nugget", 0.33],
      ["minecraft:netherrack", 0.43],
    ]).fluid("minecraft:lava");
});
