onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:crushed_endstone", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).max(2); //.time().mb();

    sluice(["iron"], "ftbsluice:crushed_endstone", [
        ["mysticalagriculture:prosperity_shard", 0.25],
        ["miniutilities:ender_dust", 0.3],
    ]);

    sluice(["gold"], "ftbsluice:crushed_endstone", [
        ["miniutilities:ender_dust", 0.30],
        ["mysticalagriculture:prosperity_shard", 0.30],
        ["tconstruct:manyullyn_nugget", 0.05],
    ]);

    sluice(["diamond"], "ftbsluice:crushed_endstone", [
        ["mysticalagriculture:prosperity_shard", 0.35],
        ["miniutilities:ender_dust", 0.35],
        ["tconstruct:manyullyn_nugget", 0.09],
    ]);

    sluice(["blazing"], "ftbsluice:crushed_endstone", [
    ]).fluid("minecraft:lava");
});
