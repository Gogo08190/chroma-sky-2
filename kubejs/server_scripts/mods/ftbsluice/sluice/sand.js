onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:sand", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).max(2); //.time().mb();

    sluice(["iron"], "#forge:sand", [
        ["minecraft:flint", 0.22],
        ["chromasky:lead_chunk", 0.12],
        ["chromasky:aluminum_chunk", 0.11],
        ["chromasky:nickel_chunk", 0.21],
        ["chromasky:lapis_chunk", 0.11],
        ["chromasky:emerald_chunk", 0.02],
        ["chromasky:diamond_chunk", 0.02],
        ["chromasky:gold_chunk", 0.02],
    ]);

    sluice(["gold"], "#forge:sand", [
        ["minecraft:coal", 0.22],
    ]);

    sluice(["diamond"], "#forge:sand", [
        ["minecraft:coal", 0.26],
    ]);

    sluice(["blazing"], "#forge:sand", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
