onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:dust", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).max(2); //.time().mb();

    sluice(["iron"], "ftbsluice:dust", [
        ["minecraft:flint", 0.22],
        ["chromasky:lapis_chunk", 0.21],
        ["chromasky:redstone_chunk", 0.19],
        ["projectred-core:ruby", 0.15],
        ["projectred-core:sapphire", 0.14],
        ["projectred-core:peridot", 0.16],
    ]);

    sluice(["gold"], "ftbsluice:dust", [
        ["minecraft:coal", 0.22],
    ]);

    sluice(["diamond"], "ftbsluice:dust", [
        ["minecraft:coal", 0.26],
    ]);

    sluice(["blazing"], "ftbsluice:dust", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
