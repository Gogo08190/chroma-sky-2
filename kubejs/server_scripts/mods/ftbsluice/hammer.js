onEvent("recipes", (event) => {
    const hammer = event.recipes.ftbsluice.hammer;

    hammer("#forge:stone", ["minecraft:cobblestone"]);
    hammer("#forge:cobblestone", ["minecraft:gravel"]);
    hammer("#forge:gravel", ["minecraft:dirt"]);
    hammer("minecraft:dirt", ["minecraft:sand"]);
    hammer("#forge:sand", ["ftbsluice:dust"]);
    hammer("#forge:netherrack", ["ftbsluice:crushed_netherrack"]);
    hammer("minecraft:basalt", ["ftbsluice:crushed_basalt"]);
    hammer("#forge:end_stones", ["ftbsluice:crushed_endstone"]);
    hammer("chromasky:1x_compressed_stone", ["9x minecraft:cobblestone"]);
    hammer("chromasky:2x_compressed_stone", ["18x minecraft:cobblestone"]);
    hammer("chromasky:3x_compressed_stone", ["27x minecraft:cobblestone"]);
    hammer("chromasky:1x_compressed_cobblestone", ["9x minecraft:gravel"]);
    hammer("chromasky:2x_compressed_cobblestone", ["18x minecraft:gravel"]);
    hammer("chromasky:3x_compressed_cobblestone", ["27x minecraft:gravel"]);
    hammer("chromasky:1x_compressed_gravel", ["9x minecraft:dirt"]);
    hammer("chromasky:2x_compressed_gravel", ["18x minecraft:dirt"]);
    hammer("chromasky:3x_compressed_gravel", ["27x minecraft:dirt"]);
    hammer("chromasky:1x_compressed_dirt", ["9x minecraft:sand"]);
    hammer("chromasky:2x_compressed_dirt", ["18x minecraft:sand"]);
    hammer("chromasky:3x_compressed_dirt", ["27x minecraft:sand"]);
    hammer("chromasky:1x_compressed_sand", ["9x ftbsluice:dust"]);
    hammer("chromasky:2x_compressed_sand", ["18x ftbsluice:dust"]);
    hammer("chromasky:3x_compressed_sand", ["27x ftbsluice:dust"]);
    hammer("chromasky:1x_compressed_basalt", ["9x ftbsluice:crushed_basalt"]);
    hammer("chromasky:2x_compressed_basalt", ["18x ftbsluice:crushed_basalt"]);
    hammer("chromasky:3x_compressed_basalt", ["27x ftbsluice:crushed_basalt"]);
    hammer("chromasky:1x_compressed_netherrack", ["9x ftbsluice:crushed_netherrack"]);
    hammer("chromasky:2x_compressed_netherrack", ["18x ftbsluice:crushed_netherrack"]);
    hammer("chromasky:3x_compressed_netherrack", ["27x ftbsluice:crushed_netherrack"]);
    hammer("chromasky:1x_compressed_endstone", ["9x ftbsluice:crushed_endstone"]);
    hammer("chromasky:2x_compressed_endstone", ["18x ftbsluice:crushed_endstone"]);
    hammer("chromasky:3x_compressed_endstone", ["27x ftbsluice:crushed_endstone"]);

});
