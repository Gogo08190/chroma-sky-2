onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:sand", [
      ["minecraft:flint", 0.50],
      ["projectred-core:electrotine_dust", 0.20],
      ["chromasky:iron_chunk", 0.22],
      ["chromasky:coal_chunk", 0.18],
    ]).mb(50);

    sluice(["iron"], "#forge:sand", [
        ["minecraft:flint", 0.22],
        ["chromasky:lead_chunk", 0.12],
        ["chromasky:aluminum_chunk", 0.11],
        ["chromasky:nickel_chunk", 0.11],
        ["chromasky:lapis_chunk", 0.11],
        ["chromasky:emerald_chunk", 0.02],
        ["chromasky:diamond_chunk", 0.02],
        ["chromasky:gold_chunk", 0.12],
    ]);

    sluice(["gold"], "#forge:sand", [
        ["chromasky:nickel_chunk", 0.22],
        ["chromasky:emerald_chunk", 0.04],
        ["chromasky:diamond_chunk", 0.03],
        ["chromasky:uranium_chunk", 0.15],
        ["chromasky:iron_chunk", 0.30],
        ["chromasky:gold_chunk", 0.22],
        ["chromasky:lapis_chunk", 0.19],
        ["chromasky:lead_chunk", 0.26],
        ["chromasky:aluminum_chunk", 0.18],
        ["astralsorcery:aquamarine", 0.11],
    ]);

    sluice(["diamond"], "#forge:sand", [
        ["chromasky:gold_chunk", 0.35],
        ["chromasky:emerald_chunk", 0.09],
        ["chromasky:diamond_chunk", 0.08],
        ["chromasky:nickel_chunk", 0.30],
        ["chromasky:iron_chunk", 0.40],
        ["chromasky:uranium_chunk", 0.2],
        ["chromasky:lead_chunk", 0.29],
        ["chromasky:lapis_chunk", 0.21],
        ["chromasky:aluminum_chunk", 0.23],
        ["astralsorcery:aquamarine", 0.24],
    ]);

    sluice(["blazing"], "#forge:sand", [
        ["tmechworks:aluminum_ingot", 0.25],
        ["minecraft:lapis_lazuli", 0.23],
        ["thermal:lead_ingot", 0.31],
        ["minecraft:gold_ingot", 0.36],
        ["minecraft:iron_ingot", 0.45],
        ["mekanism:ingot_uranium", 0.23],
        ["thermal:nickel_ingot", 0.33],
        ["minecraft:diamond", 0.09],
        ["minecraft:emerald", 0.09],
        ["astralsorcery:aquamarine", 0.28],
    ]).fluid("minecraft:lava");
});
