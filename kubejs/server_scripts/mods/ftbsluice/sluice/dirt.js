onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:dirt", [
        ["chromasky:pebble", 0.95],
        ["chromasky:pebble", 0.70],
        ["chromasky:pebble", 0.60],
        ["chromasky:pebble", 0.30],
    ]).mb(50);

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
