onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:dust", [
        ["chromasky:gold_chunk", 0.04],
        ["minecraft:bone_meal", 0.11],
        ["chromasky:silver_chunk", 0.05],
        ["chromasky:nickel_chunk", 0.04],
    ]).max(2);

    sluice(["iron"], "ftbsluice:dust", [
        ["projectred-core:peridot", 0.16],
        ["chromasky:gold_chunk", 0.07],
        ["minecraft:bone_meal", 0.16],
        ["minecraft:gunpowder", 0.09],
        ["chromasky:fluorite_chunk", 0.15],
        ["chromasky:silver_chunk", 0.09],
        ["chromasky:nickel_chunk", 0.07],
    ]);

    sluice(["gold"], "ftbsluice:dust", [
        ["projectred-core:peridot", 0.2],
        ["mana-and-artifice:vinteum_dust", 0.05],
        ["chromasky:fluorite_chunk", 0.2],
        ["chromasky:gold_chunk", 0.11],
        ["minecraft:bone_meal", 0.21],
        ["minecraft:gunpowder", 0.14],
        ["chromasky:redstone_chunk", 0.21],
        ["chromasky:silver_chunk", 0.13],
        ["chromasky:nickel_chunk", 0.11],
    ]);

    sluice(["diamond"], "ftbsluice:dust", [
        ["mana-and-artifice:vinteum_dust", 0.1],
        ["chromasky:redstone_chunk", 0.3],
        ["chromasky:fluorite_chunk", 0.21],
        ["projectred-core:peridot", 0.23],
        ["chromasky:gold_chunk", 0.16],
        ["minecraft:bone_meal", 0.25],
        ["minecraft:gunpowder", 0.19],
        ["chromasky:redstone_chunk", 0.21],
        ["chromasky:silver_chunk", 0.15],
        ["chromasky:nickel_chunk", 0.14],
    ]);

    sluice(["blazing"], "ftbsluice:dust", [
        ["mana-and-artifice:vinteum_dust", 0.25],
        ["projectred-core:peridot", 0.29],
        ["mekanism:fluorite_gem", 0.26],
        ["minecraft:gold_ingot", 0.18],
        ["2x minecraft:redstone", 0.23],
        ["thermal:silver_ingot", 0.17],
        ["thermal:nickel_ingot", 0.16],
    ]).fluid("minecraft:lava");
});
