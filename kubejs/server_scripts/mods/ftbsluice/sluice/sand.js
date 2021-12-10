onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:sand", [
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
    ]).max(2); //.time().mb();

    sluice(["iron"], "#forge:sand", [
        ["minecraft:flint", 0.22],
    ]);

    sluice(["gold"], "#forge:sand", [
        ["minecraft:coal", 0.22],
    ]);

    sluice(["diamond"], "#forge:sand", [
        ["minecraft:coal", 0.26],
    ]);

    sluice(["blazing"], "#forge:sand", [
        ["minecraft:iron_ingot", 0.71],
    ]).fluid("minecraft:lava");
});
