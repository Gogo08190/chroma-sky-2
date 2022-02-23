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
    hammer("chromasky:2x_compressed_cobblestone", ["81x minecraft:gravel"]);
    hammer("chromasky:3x_compressed_cobblestone", ["729x minecraft:gravel"]);
    hammer("chromasky:1x_compressed_gravel", ["9x minecraft:dirt"]);
    hammer("chromasky:2x_compressed_gravel", ["81x minecraft:dirt"]);
    hammer("chromasky:3x_compressed_gravel", ["729x minecraft:dirt"]);
    hammer("chromasky:1x_compressed_dirt", ["9x minecraft:sand"]);
    hammer("chromasky:2x_compressed_dirt", ["81x minecraft:sand"]);
    hammer("chromasky:3x_compressed_dirt", ["729x minecraft:sand"]);
    hammer("chromasky:1x_compressed_sand", ["9x ftbsluice:dust"]);
    hammer("chromasky:2x_compressed_sand", ["81x ftbsluice:dust"]);
    hammer("chromasky:3x_compressed_sand", ["729x ftbsluice:dust"]);
    hammer("chromasky:1x_compressed_basalt", ["9x ftbsluice:crushed_basalt"]);
    hammer("chromasky:2x_compressed_basalt", ["81x ftbsluice:crushed_basalt"]);
    hammer("chromasky:3x_compressed_basalt", ["729x ftbsluice:crushed_basalt"]);
    hammer("chromasky:1x_compressed_netherrack", ["9x ftbsluice:crushed_netherrack"]);
    hammer("chromasky:2x_compressed_netherrack", ["81x ftbsluice:crushed_netherrack"]);
    hammer("chromasky:3x_compressed_netherrack", ["729x ftbsluice:crushed_netherrack"]);
    hammer("chromasky:1x_compressed_endstone", ["9x ftbsluice:crushed_endstone"]);
    hammer("chromasky:2x_compressed_endstone", ["81x ftbsluice:crushed_endstone"]);
    hammer("chromasky:3x_compressed_endstone", ["729x ftbsluice:crushed_endstone"]);

});
