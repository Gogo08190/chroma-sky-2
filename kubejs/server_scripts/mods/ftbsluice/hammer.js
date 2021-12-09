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
    
});
