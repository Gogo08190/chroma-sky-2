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
        ["chromasky:osmium_chunk", 0.15],
        ["chromasky:fluorite_chunk", 0.15],
        ["projectred-core:peridot", 0.2],
        ["projectred-core:sapphire", 0.2],
        ["chromasky:lapis_chunk", 0.28],
        ["chromasky:redstone_chunk", 0.21],
        ["projectred-core:ruby", 0.2],
        ["mana-and-artifice:vinteum_dust", 0.05],
    ]);

    sluice(["diamond"], "ftbsluice:dust", [
        ["mana-and-artifice:vinteum_dust", 0.1],
        ["chromasky:iron_chunk", 0.30],
        ["chromasky:redstone_chunk", 0.3],
        ["chromasky:lapis_chunk", 0.33],
        ["chromasky:osmium_chunk", 0.2],
        ["chromasky:fluorite_chunk", 0.21],
        ["projectred-core:sapphire", 0.24],
        ["projectred-core:peridot", 0.23],
        ["projectred-core:ruby", 0.22],
    ]);

    sluice(["blazing"], "ftbsluice:dust", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
