onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:gravel", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).max(2); //.time().mb();

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
        ["minecraft:coal", 0.26],
    ]);

    sluice(["blazing"], "#forge:gravel", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
