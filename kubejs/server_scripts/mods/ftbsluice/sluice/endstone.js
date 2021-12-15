onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["iron"], "ftbsluice:crushed_endstone", [
        ["mysticalagriculture:prosperity_shard", 0.25],
        ["thermal:ender_pearl_dust", 0.3],
    ]);

    sluice(["gold"], "ftbsluice:crushed_endstone", [
        ["thermal:ender_pearl_dust", 0.30],
        ["mysticalagriculture:prosperity_shard", 0.30],
        ["tconstruct:manyullyn_nugget", 0.05],
    ]);

    sluice(["diamond"], "ftbsluice:crushed_endstone", [
        ["mysticalagriculture:prosperity_shard", 0.35],
        ["thermal:ender_pearl_dust", 0.35],
        ["tconstruct:manyullyn_nugget", 0.09],
    ]);

    sluice(["blazing"], "ftbsluice:crushed_endstone", [
    ]).fluid("minecraft:lava");
});
