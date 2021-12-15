onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:crushed_basalt", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).mb(50);

    sluice(["iron"], "ftbsluice:crushed_basalt", [
        ["minecraft:flint", 0.22],
    ]);

    sluice(["gold"], "ftbsluice:crushed_basalt", [
        ["minecraft:coal", 0.22],
    ]);

    sluice(["diamond"], "ftbsluice:crushed_basalt", [
        ["minecraft:coal", 0.26],
    ]);

    sluice(["blazing"], "ftbsluice:crushed_basalt", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
