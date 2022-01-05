onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:dirt", [
        ["chromasky:pebble", 0.95],
        ["chromasky:pebble", 0.70],
        ["chromasky:pebble", 0.60],
        ["chromasky:pebble", 0.30],
        ["minecraft:pumpkin_seeds", 0.15],
        ["minecraft:melon_seeds", 0.15],
        ["minecraft:beetroot_seeds", 0.15],
        ["minecraft:cocoa_beans", 0.15],
        ["minecraft:bamboo", 0.15],
        ["minecraft:sugar_cane", 0.15],
        ["minecraft:cactus", 0.15],
        ["immersiveengineering:seed", 0.15],
        ["minecraft:wheat_seeds", 0.20],
    ]).mb(50);

    sluice(["iron"], "#forge:dirt", [
        ["occultism:datura_seeds", 0.22],
        ["minecraft:sweet_berries", 0.22]
    ]);

    sluice(["gold"], "#forge:dirt", [
        ["minecraft:kelp", 0.23],
    ]);

    sluice(["diamond"], "#forge:dirt", [
        ["minecraft:kelp", 0.28],
    ]);

    sluice(["blazing"], "#forge:dirt", [
    ]).fluid("minecraft:lava");
});
