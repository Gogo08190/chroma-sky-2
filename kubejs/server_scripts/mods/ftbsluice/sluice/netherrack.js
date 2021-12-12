onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "ftbsluice:crushed_netherrack", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).max(2); //.time().mb();

    sluice(["iron"], "ftbsluice:crushed_netherrack", [
        ["projectred-core:electrotine_dust", 0.22],
        ["projectred-core:ruby", 0.30],
        ["tconstruct:debris_nugget", 0.01],
    ]);

    sluice(["gold"], "ftbsluice:crushed_netherrack", [
        ["minecraft:coal", 0.22],
    ]);

    sluice(["diamond"], "ftbsluice:crushed_netherrack", [
        ["minecraft:coal", 0.26],
    ]);

    sluice(["blazing"], "ftbsluice:crushed_netherrack", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
