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
        ["pamhc2trees:pistachio_sapling", 0.17],
        ["pamhc2trees:soursop_sapling", 0.17],
        ["pamhc2trees:almond_sapling", 0.17],
        ["pamhc2trees:apricot_sapling", 0.17],
        ["pamhc2trees:banana_sapling", 0.17],
        ["pamhc2trees:pecan_sapling", 0.17],
        ["pamhc2trees:date_sapling", 0.17],
        ["pamhc2trees:coconut_sapling", 0.17],
        ["pamhc2trees:pawpaw_sapling", 0.17],
        ["pamhc2trees:peppercorn_sapling", 0.17],
        ["pamhc2trees:dragonfruit_sapling", 0.17],
        ["pamhc2trees:persimmon_sapling", 0.17],
        ["pamhc2trees:pomegranate_sapling", 0.17],
    ]);

    sluice(["diamond"], "#minecraft:leaves", [
        ["pamhc2trees:nutmeg_sapling", 0.17],
        ["pamhc2trees:gooseberry_sapling", 0.17],
        ["pamhc2trees:lemon_sapling", 0.17],
        ["pamhc2trees:avocado_sapling", 0.17],
        ["pamhc2trees:candlenut_sapling", 0.17],
        ["pamhc2trees:vanillabean_sapling", 0.17],
        ["pamhc2trees:starfruit_sapling", 0.17],
        ["pamhc2trees:hazelnut_sapling", 0.17],
        ["pamhc2trees:breadfruit_sapling", 0.17],
        ["pamhc2trees:guava_sapling", 0.17],
        ["pamhc2trees:papaya_sapling", 0.17],
        ["pamhc2trees:apple_sapling", 0.17],
        ["pamhc2trees:cherry_sapling", 0.17],
    ]);

    sluice(["blazing"], "#minecraft:leaves", [
        ["minecraft:charcoal", 0.75],
    ]).fluid("minecraft:lava");
});
