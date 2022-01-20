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
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:spirited_crystal_block",
            },
            {
                item: "powah:spirited_crystal_block",
            },
            {
                item: "mekanism:basic_energy_cube",
            },
            {
                item: "mekanism:basic_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.remove({ output: 'draconicevolution:wyvern_chestpiece' })
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "draconicevolution:wyvern_chestpiece",
        },
        catalyst: {
            item: "theabyss:abyss_a_netherithe_chestplate",
        },
        total_energy: 8000000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "draconicevolution:draconium_core",
            },
            {
                item: "draconicevolution:draconium_ingot",
            },
            {
                item: "draconicevolution:draconium_ingot",
            },
            {
                item: "draconicevolution:basic_relay_crystal",
            },
            {
                item: "draconicevolution:wyvern_energy_core",
            },
            {
                item: "draconicevolution:basic_relay_crystal",
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
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:blazing_crystal_block",
            },
            {
                item: "powah:blazing_crystal_block",
            },
            {
                item: "mekanism:advanced_energy_cube",
            },
            {
                item: "mekanism:advanced_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
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
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "powah:niotic_crystal_block",
            },
            {
                item: "powah:niotic_crystal_block",
            },

            {
                item: "mekanism:elite_energy_cube",
            },
            {
                item: "mekanism:elite_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
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
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "mekanism:ultimate_energy_cube",
            },
            {
                item: "mekanism:ultimate_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
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
                item: "powah:blazing_crystal_block",
            },
            {
                item: "minecraft:netherite_ingot",
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
                item: "minecraft:blaze_rod",
            },
            {
                item: "simplyjetpacks:armorplating_ie1",
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
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "draconicevolution:draconium_chest",
        },
        catalyst: {
            item: "minecraft:chest",
        },
        total_energy: 200000,
        tier: "DRACONIUM",
        ingredients: [
            {
                item: "draconicevolution:draconium_core",
            },
            {
                item: "draconicevolution:draconium_core",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:crafting_table",
            },
            {
                item: "minecraft:crafting_table",
            },
            {
                item: "draconicevolution:draconium_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "masterfulmachinery:mysticfactory7_controller",
        },
        catalyst: {
            item: "masterfulmachinery:mysticfactory6_controller",
        },
        total_energy: 2000000,
        tier: "DRACONIUM",
        ingredients: [
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "masterfulmachinery:mysticfactory7_mystical_item_port_items_input",
        },
        catalyst: {
            item: "masterfulmachinery:mysticfactory6_mystical_item_port_items_input",
        },
        total_energy: 2000000,
        tier: "DRACONIUM",
        ingredients: [
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_chest",
            },
            {
                item: "draconicevolution:draconium_chest",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "masterfulmachinery:mysticfactory7_mystical_item_port_items_output",
        },
        catalyst: {
            item: "masterfulmachinery:mysticfactory6_mystical_item_port_items_output",
        },
        total_energy: 2000000,
        tier: "DRACONIUM",
        ingredients: [
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_chest",
            },
            {
                item: "draconicevolution:draconium_chest",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "masterfulmachinery:mysticfactory7_mystical_energy_port_energy_input",
        },
        catalyst: {
            item: "masterfulmachinery:mysticfactory6_mystical_energy_port_energy_input",
        },
        total_energy: 2000000,
        tier: "DRACONIUM",
        ingredients: [
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconic_energy_core",
            },
            {
                item: "draconicevolution:draconic_energy_core",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
            {
                item: "mysticalagradditions:insanium_gemstone_block",
            },
        ],
    });
});
