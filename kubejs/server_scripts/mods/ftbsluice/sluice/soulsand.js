onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["iron"], "minecraft:soul_sand", [
        ["minecraft:warped_fungus", 0.25],
        ["minecraft:twisting_vines", 0.30],
        ["minecraft:crimson_fungus", 0.25],
        ["minecraft:crimson_roots", 0.26],
        ["minecraft:weeping_vines", 0.18],
        ["minecraft:warped_roots", 0.23],
    ]).fluid("minecraft:lava");

    sluice(["gold"], "minecraft:soul_sand", [
        ["minecraft:warped_fungus", 0.29],
        ["minecraft:twisting_vines", 0.35],
        ["minecraft:crimson_fungus", 0.28],
        ["minecraft:crimson_roots", 0.31],
        ["minecraft:weeping_vines", 0.26],
        ["minecraft:warped_roots", 0.30],
    ]).fluid("minecraft:lava");

    sluice(["diamond"], "minecraft:soul_sand", [
        ["minecraft:warped_fungus", 0.34],
        ["minecraft:twisting_vines", 0.38],
        ["minecraft:crimson_fungus", 0.36],
        ["minecraft:crimson_roots", 0.38],
        ["minecraft:weeping_vines", 0.30],
        ["minecraft:warped_roots", 0.35],
    ]).fluid("minecraft:lava");

});
