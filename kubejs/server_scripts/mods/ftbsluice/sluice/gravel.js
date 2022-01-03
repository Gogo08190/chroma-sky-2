onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:gravel", [
        ["minecraft:flint", 0.63],
        ["projectred-core:electrotine_dust", 0.20],
        ["chromasky:iron_chunk", 0.26],
        ["chromasky:coal_chunk", 0.14],
    ]).mb(50);

    sluice(["iron"], "#forge:gravel", [
        ["minecraft:flint", 0.42],
        ["chromasky:tin_chunk", 0.12],
        ["chromasky:silver_chunk", 0.13],
        ["chromasky:coal_chunk", 0.25],
        ["chromasky:diamond_chunk", 0.01],
        ["chromasky:redstone_chunk", 0.1],
        ["projectred-core:electrotine_dust", 0.3],
        ["chromasky:iron_chunk", 0.25],
    ]);

    sluice(["gold"], "#forge:gravel", [
        ["minecraft:flint", 0.45],
        ["chromasky:diamond_chunk", 0.05],
        ["projectred-core:electrotine_dust", 0.32],
        ["chromasky:redstone_chunk", 0.2],
        ["chromasky:silver_chunk", 0.2],
        ["chromasky:coal_chunk", 0.35],
        ["chromasky:tin_chunk", 0.24],
        ["chromasky:iron_chunk", 0.40],
        ["chromasky:gold_chunk", 0.21],
    ]);

    sluice(["diamond"], "#forge:gravel", [
        ["chromasky:gold_chunk", 0.26],
        ["chromasky:iron_chunk", 0.46],
        ["chromasky:tin_chunk", 0.29],
        ["chromasky:coal_chunk", 0.39],
        ["chromasky:silver_chunk", 0.25],
        ["chromasky:redstone_chunk", 0.28],
        ["projectred-core:electrotine_dust", 0.35],
        ["minecraft:flint", 0.47],
        ["chromasky:diamond_chunk", 0.1],
        ["mana-and-artifice:chimerite_gem", 0.16],
    ]);

    sluice(["blazing"], "#forge:gravel", [
        ["minecraft:iron_ingot", 0.40],
        ["thermal:silver_ingot", 0.30],
        ["thermal:tin_ingot", 0.30],
        ["minecraft:coal", 0.45],
        ["minecraft:diamond", 0.1],
        ["minecraft:redstone", 0.30],
        ["minecraft:flint", 0.48],
        ["minecraft:gold_ingot", 0.27],
        ["projectred-core:electrotine_dust", 0.36],
        ["mana-and-artifice:chimerite_gem", 0.21],
    ]).fluid("minecraft:lava");
});
