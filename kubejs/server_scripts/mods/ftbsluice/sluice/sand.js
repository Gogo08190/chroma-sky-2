onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:sand", [
        ["chromasky:iron_chunk", 0.33],
        ["chromasky:gold_chunk", 0.06],
        ["chromasky:copper_chunk", 0.43],
        ["chromasky:lead_chunk", 0.06],
        ["chromasky:tin_chunk", 0.09],
        ["chromasky:silver_chunk", 0.07],
        ["chromasky:nickel_chunk", 0.06],
        ["chromasky:osmium_chunk", 0.05],
        ["chromasky:aluminum_chunk", 0.08],
    ]).mb(50);

    sluice(["iron"], "#forge:sand", [
        ["chromasky:iron_chunk", 0.43],
        ["chromasky:gold_chunk", 0.09],
        ["chromasky:copper_chunk", 0.53],
        ["chromasky:lead_chunk", 0.09],
        ["chromasky:tin_chunk", 0.12],
        ["chromasky:silver_chunk", 0.12],
        ["chromasky:nickel_chunk", 0.09],
        ["chromasky:osmium_chunk", 0.08],
        ["chromasky:aluminum_chunk", 0.12],
        ["projectred-core:electrotine_dust", 0.13],
    ]);

    sluice(["gold"], "#forge:sand", [
        ["chromasky:iron_chunk", 0.53],
        ["chromasky:gold_chunk", 0.13],
        ["chromasky:copper_chunk", 0.63],
        ["chromasky:lead_chunk", 0.12],
        ["chromasky:tin_chunk", 0.13],
        ["chromasky:silver_chunk", 0.15],
        ["chromasky:nickel_chunk", 0.13],
        ["mysticalagriculture:prosperity_shard", 0.12],
        ["chromasky:osmium_chunk", 0.12],
        ["chromasky:uranium_chunk", 0.11],
        ["chromasky:aluminum_chunk", 0.15],
        ["projectred-core:electrotine_dust", 0.15],
        ["astralsorcery:aquamarine", 0.11],
    ]);

    sluice(["diamond"], "#forge:sand", [
        ["chromasky:iron_chunk", 0.63],
        ["chromasky:gold_chunk", 0.18],
        ["chromasky:copper_chunk", 0.7],
        ["chromasky:lead_chunk", 0.15],
        ["chromasky:tin_chunk", 0.15],
        ["chromasky:silver_chunk", 0.17],
        ["chromasky:nickel_chunk", 0.16],
        ["mysticalagriculture:prosperity_shard", 0.19],
        ["chromasky:osmium_chunk", 0.16],
        ["chromasky:uranium_chunk", 0.13],
        ["chromasky:aluminum_chunk", 0.18],
        ["projectred-core:electrotine_dust", 0.16],
        ["astralsorcery:aquamarine", 0.24],
    ]);

    sluice(["blazing"], "#forge:sand", [
        ["minecraft:iron_ingot", 0.65],
        ["minecraft:gold_ingot", 0.2],
        ["thermal:copper_ingot", 0.72],
        ["thermal:lead_ingot", 0.17],
        ["thermal:tin_ingot", 0.17],
        ["thermal:silver_ingot", 0.19],
        ["thermal:nickel_ingot", 0.18],
        ["mekanism:ingot_osmium", 0.18],
        ["immersiveengineering:ingot_aluminum", 0.2],
        ["mekanism:ingot_uranium", 0.15],
        ["astralsorcery:aquamarine", 0.28],
    ]).fluid("minecraft:lava");
});
