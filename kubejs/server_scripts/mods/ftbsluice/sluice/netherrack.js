onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["iron"], "ftbsluice:crushed_netherrack", [
        ["projectred-core:electrotine_dust", 0.22],
        ["thermal:ruby", 0.30],
        ["tconstruct:debris_nugget", 0.01],
        ["chromasky:quartz_chunk", 0.15],
        ["minecraft:glowstone_dust", 0.11],
        ["minecraft:blaze_powder", 0.10],
    ]).fluid("minecraft:lava");

    sluice(["gold"], "ftbsluice:crushed_netherrack", [
        ["chromasky:quartz_chunk", 0.23],
        ["projectred-core:electrotine_dust", 0.30],
        ["tconstruct:debris_nugget", 0.04],
        ["thermal:ruby", 0.35],
        ["chromasky:cobalt_chunk", 0.15],
        ["minecraft:glowstone_dust", 0.18],
        ["minecraft:blaze_powder", 0.17],
    ]).fluid("minecraft:lava");

    sluice(["diamond"], "ftbsluice:crushed_netherrack", [
        ["minecraft:netherite_scrap", 0.06],
        ["chromasky:gold_chunk", 0.29],
        ["chromasky:emerald_chunk", 0.07],
        ["chromasky:diamond_chunk", 0.08],
        ["chromasky:quartz_chunk", 0.30],
        ["chromasky:cobalt_chunk", 0.18],
        ["minecraft:glowstone_dust", 0.24],
        ["minecraft:blaze_powder", 0.23],
    ]).fluid("minecraft:lava");;

    sluice(["blazing"], "ftbsluice:crushed_netherrack", [
        ["minecraft:gold_ingot", 0.35],
        ["minecraft:quartz", 0.40],
        ["minecraft:diamond", 0.06],
        ["minecraft:emerald", 0.04],
        ["tconstruct:cobalt_ingot", 0.07],
        ["minecraft:netherite_scrap", 0.08],
        ["minecraft:glowstone_dust", 0.26],
        ["minecraft:blaze_powder", 0.30],
    ]).fluid("minecraft:lava");
});
