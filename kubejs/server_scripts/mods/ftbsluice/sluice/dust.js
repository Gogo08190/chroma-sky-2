onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:dust", [
      ["minecraft:flint", 0.48],
      ["projectred-core:electrotine_dust", 0.23],
      ["chromasky:iron_chunk", 0.30],
      ["chromasky:coal_chunk", 0.21],
    ]).mb(50);

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
        ["mana-and-artifice:vinteum_dust", 0.25],
        ["projectred-core:ruby", 0.25],
        ["projectred-core:peridot", 0.29],
        ["projectred-core:sapphire", 0.31],
        ["mekanism:fluorite_gem", 0.26],
        ["mekanism:ingot_osmium", 0.25],
        ["minecraft:lapis_lazuli", 0.30],
        ["minecraft:redstone", 0.35],
    ]).fluid("minecraft:lava");
});
