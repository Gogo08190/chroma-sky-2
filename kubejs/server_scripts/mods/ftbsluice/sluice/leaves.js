onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#minecraft:leaves", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).max(2); //.time().mb();

    sluice(["iron"], "#minecraft:leaves", [
        ["minecraft:flint", 0.22],
    ]);

    sluice(["gold"], "#minecraft:leaves", [
        ["minecraft:coal", 0.22],
    ]);

    sluice(["diamond"], "#minecraft:leaves", [
        ["minecraft:coal", 0.26],
    ]);

    sluice(["blazing"], "#minecraft:leaves", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
