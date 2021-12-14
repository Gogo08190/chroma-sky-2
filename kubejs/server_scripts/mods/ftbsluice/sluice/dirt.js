onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:dirt", [
        ["chromasky:pebble", 0.85],
    ]).max(2); //.time().mb();

    sluice(["iron"], "#forge:dirt", [
        ["minecraft:flint", 0.22],
    ]);

    sluice(["gold"], "#forge:dirt", [
        ["minecraft:coal", 0.22],
    ]);

    sluice(["diamond"], "#forge:dirt", [
        ["minecraft:coal", 0.26],
    ]);

    sluice(["blazing"], "#forge:dirt", [
    ]).fluid("minecraft:lava");
});
