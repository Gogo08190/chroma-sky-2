onEvent("recipes", (event) => {

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk1",
        },
        catalyst: {
            tag: "botanypots:hopper_botany_pots",
        },
        total_energy: 50000000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:spirited_crystal_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "mekanism:basic_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:spirited_crystal_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk2",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk1",
        },
        total_energy: 100000000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:blazing_crystal_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "mekanism:advanced_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:blazing_crystal_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk3",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk2",
        },
        total_energy: 200000000,
        tier: "DRACONIC",
        ingredients: [
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:niotic_crystal_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "mekanism:elite_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:niotic_crystal_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk4",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk3",
        },
        total_energy: 400000000,
        tier: "CHAOTIC",
        ingredients: [
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "mekanism:ultimate_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.remove({ id: "ftbsluice:empowered_sluice" });
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftbsluice:empowered_sluice",
        },
        catalyst: {
            item: "ftbsluice:netherite_sluice",
        },
        total_energy: 512000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "powah:blazing_crystal_block",
            },
            {
                item: "minecraft:netherite_ingot",
            },
            {
                item: "powah:blazing_crystal_block",
            },
            {
                item: "powah:blazing_crystal_block",
            },
            {
                item: "minecraft:netherite_ingot",
            },
            {
                item: "powah:blazing_crystal_block",
            },
        ],
    });

    event.remove({ id: "ftbsluice:blazing_mesh" });
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftbsluice:blazing_mesh",
        },
        catalyst: {
            item: "ftbsluice:diamond_mesh",
        },
        total_energy: 512000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "minecraft:blaze_rod",
            },
            {
                item: "simplyjetpacks:armorplating_ie1",
            },
            {
                item: "minecraft:blaze_rod",
            },
            {
                item: "minecraft:blaze_rod",
            },
            {
                item: "simplyjetpacks:armorplating_ie1",
            },
            {
                item: "minecraft:blaze_rod",
            },
        ],
    });
});
