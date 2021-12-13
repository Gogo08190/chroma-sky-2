onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#minecraft:leaves", [
        ["pamhc2trees:durian_sapling", 0.17],
        ["pamhc2trees:walnut_sapling", 0.17],
        ["pamhc2trees:spiderweb_sapling", 0.17],
        ["pamhc2trees:olive_sapling", 0.17],
        ["pamhc2trees:lime_sapling", 0.17],
        ["pamhc2trees:paperbark_sapling", 0.17],
        ["pamhc2trees:cinnamon_sapling", 0.17],
        ["pamhc2trees:passionfruit_sapling", 0.17],
    ]).max(2); //.time().mb();

    sluice(["iron"], "#minecraft:leaves", [
        ["pamhc2trees:rambutan_sapling", 0.17],
        ["pamhc2trees:plum_sapling", 0.17],
        ["pamhc2trees:fig_sapling", 0.17],
        ["pamhc2trees:tamarind_sapling", 0.17],
        ["pamhc2trees:chestnut_sapling", 0.17],
        ["pamhc2trees:mango_sapling", 0.17],
        ["pamhc2trees:orange_sapling", 0.17],
        ["pamhc2trees:peach_sapling", 0.17],
        ["pamhc2trees:cashew_sapling", 0.17],
        ["pamhc2trees:grapefruit_sapling", 0.17],
        ["pamhc2trees:pear_sapling", 0.17],
        ["pamhc2trees:jackfruit_sapling", 0.17],
        ["pamhc2trees:lychee_sapling", 0.17],
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
