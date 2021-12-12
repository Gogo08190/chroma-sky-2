onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:crushed_netherrack", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).max(2); //.time().mb();

    sluice(["iron"], "ftbsluice:crushed_netherrack", [
        ["projectred-core:electrotine_dust", 0.22],
        ["projectred-core:ruby", 0.30],
        ["tconstruct:debris_nugget", 0.01],
        ["chromasky:quartz_chunk", 0.15],
    ]);

    sluice(["gold"], "ftbsluice:crushed_netherrack", [
        ["chromasky:quartz_chunk", 0.23],
        ["projectred-core:electrotine_dust", 0.30],
        ["tconstruct:debris_nugget", 0.04],
        ["projectred-core:ruby", 0.35],
        ["chromasky:cobalt_chunk", 0.15],
    ]);

    sluice(["diamond"], "ftbsluice:crushed_netherrack", [
        ["minecraft:netherite_scrap", 0.06],
        ["chromasky:gold_chunk", 0.29],
        ["chromasky:emerald_chunk", 0.07],
        ["chromasky:diamond_chunk", 0.08],
        ["chromasky:quartz_chunk", 0.30],
        ["chromasky:cobalt_chunk", 0.18],
    ]);

    sluice(["blazing"], "ftbsluice:crushed_netherrack", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
