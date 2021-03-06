// priority: 100
onEvent("recipes", (event) => {
    const rec = event.recipes.recyclerRecycler;

    rec("4x minecraft:oak_planks", "krate:krate_small");
    rec("2x minecraft:black_dye", "#minecraft:music_discs");
    rec("2x minecraft:white_wool", "#minecraft:beds");
    rec("2x minecraft:iron_ingot", "minecraft:chainmail_helmet");
    rec("3x minecraft:iron_ingot", "minecraft:chainmail_chestplate");
    rec("3x minecraft:iron_ingot", "minecraft:chainmail_leggings");
    rec("2x minecraft:iron_ingot", "minecraft:chainmail_boots");
    rec("2x minecraft:leather", "minecraft:leather_helmet");
    rec("3x minecraft:leather", "minecraft:leather_chestplate");
    rec("3x minecraft:leather", "minecraft:leather_leggings");
    rec("2x minecraft:leather", "minecraft:leather_boots");
    rec("2x minecraft:slime_ball", "tconstruct:earth_slime_sling");
    rec("2x minecraft:leather", "minecraft:leather_horse_armor");
    rec("2x minecraft:iron_ingot", "minecraft:iron_horse_armor");
    rec("2x minecraft:diamond", "minecraft:diamond_horse_armor");
    rec("2x minecraft:gold_ingot", "minecraft:golden_boots");
    rec("3x minecraft:gold_ingot", "minecraft:golden_leggings");
    rec("3x minecraft:gold_ingot", "minecraft:golden_chestplate");
    rec("2x minecraft:gold_ingot", "minecraft:golden_helmet");
    rec("1x minecraft:iron_ingot", "farmersdelight:iron_knife");
    rec("1x minecraft:iron_ingot", "chiselsandbits:chisel_iron");
    rec("1x minecraft:iron_ingot", "chisel:iron_chisel");
    rec("1x minecraft:iron_ingot", "mekanismtools:iron_paxel");
    rec("1x minecraft:iron_ingot", "ftbsluice:iron_hammer");
    rec("2x minecraft:stick", "tconstruct:pattern");
    rec("3x minecraft:cobblestone", "trashcans:item_trash_can");
    rec("3x minecraft:cobblestone", "trashcans:ultimate_trash_can");
    rec("3x minecraft:cobblestone", "trashcans:energy_trash_can");
    rec("3x minecraft:cobblestone", "trashcans:liquid_trash_can");
    rec(["3x minecraft:oak_planks", "1x minecraft:diamond"], "minecraft:jukebox");
    rec(["1x minecraft:obsidian", "1x minecraft:blaze_powder"], "enderstorage:ender_chest");
    rec(["1x minecraft:obsidian", "1x minecraft:blaze_powder"], "enderstorage:ender_tank");
    rec("2x mysticalagriculture:prudentium_essence", "mysticalagriculture:prudentium_shovel");
    rec("2x mysticalagriculture:inferium_essence", "mysticalagriculture:inferium_hoe");
    rec("2x mysticalagriculture:inferium_essence", "mysticalagriculture:inferium_watering_can");
    rec("1x minecraft:gold_ingot", "ftbsluice:gold_hammer");
    rec("2x minecraft:gold_ingot", "minecraft:golden_horse_armor");
    rec("4x minecraft:gold_ingot", "minecraft:bell");
    rec("3x minecraft:diamond", "mekanismtools:diamond_paxel");
    rec(["2x minecraft:leather", "1x minecraft:blaze_powder"], "enderstorage:ender_pouch");
    rec("1x minecraft:iron_ingot", "minecraft:name_tag");
    rec("1x minecraft:iron_ingot", "minecraft:chain");
    rec("4x minecraft:iron_ingot", "miniutilities:iron_spikes");
    rec("3x minecraft:iron_nugget", "minecraft:iron_bars");
    rec("3x minecraft:iron_ingot", "minecraft:minecart");
    rec("2x minecraft:string", "minecraft:lead");
    rec("3x minecraft:oak_planks", "miniutilities:wooden_spikes");
    rec(
        ["2x draconicevolution:draconium_ingot", "2x minecraft:redstone", "1x minecraft:diamond"],
        "draconicevolution:wyvern_energy_core"
    );
    rec("2x minecraft:cyan_dye", "tconstruct:drowned_head");
    rec("1x minecraft:flint", "tconstruct:flint_and_bronze");
    rec(["2x minecraft:leather", "2x minecraft:iron_nugget"], "minecraft:saddle");

    rec("mysticalagriculture:inferium_essence", "mysticalagriculture:inferium_farmland");
    rec("mysticalagriculture:prudentium_essence", "mysticalagriculture:prudentium_farmland");
    rec("mysticalagriculture:tertium_essence", "mysticalagriculture:tertium_farmland");
    rec("mysticalagriculture:imperium_essence", "mysticalagriculture:imperium_farmland");
    rec("mysticalagriculture:supremium_essence", "mysticalagriculture:supremium_farmland");
    rec("mysticalagradditions:insanium_essence", "mysticalagradditions:insanium_farmland");

    rec(["1x minecraft:string", "1x minecraft:stick"], "minecraft:bow");
    rec(["1x minecraft:string", "1x minecraft:stick"], "minecraft:fishing_rod");
    rec(["1x minecraft:glass"], "minecraft:glass_bottle");
    rec(["4x mysticalagriculture:wither_skeleton_essence"], "minecraft:wither_skeleton_skull");
    rec(["mysticalagriculture:wither_skeleton_essence"], "chromasky:drop_of_darkness");
    rec(['occultism:datura_seeds'], 'occultism:dictionary_of_spirits');
    rec(['minecraft:brick'], 'pamhc2foodcore:potitem');
    rec(['ftbjarmod:cast_iron_ingot'], 'ftbjarmod:cast_iron_gear');
    rec(['integrateddynamics:crystalized_menril_chunk'], 'integrateddynamics:on_the_dynamics_of_integration');
    rec(['minecraft:black_dye'], 'darkutils:blank_plate');
    rec(['minecraft:iron_ingot'], 'thermal:wrench');
    rec(['minecraft:iron_ingot'], 'thermal:wrench');
    rec(['minecraft:glass'], Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'));
    rec(['industrialforegoing:plastic'], 'chromasky:mechanic_core_tier_2');
    rec(['minecraft:paper'], 'modularrouters:blank_upgrade');
    rec(['minecraft:string'], 'refinedstorage:processor_binding');
    rec(['immersiveengineering:component_steel'], 'chromasky:mechanic_core_tier_1');
    rec(['minecraft:iron_ingot'], 'rats:trash_can');
    rec(['cyclic:mason_cobble'], Item.of('patchouli:guide_book', '{"patchouli:book":"cyclic:cyclic_guide_book"}'));

    rec(['projectex:basic_compressed_collector', '5x projectex:basic_relay'], 'projectex:basic_power_flower');
    rec(['projectex:dark_compressed_collector', '5x projectex:dark_relay'], 'projectex:dark_power_flower');
    rec(['projectex:red_compressed_collector', '5x projectex:red_relay'], 'projectex:red_power_flower');
    rec(['projectex:magenta_compressed_collector', '5x projectex:magenta_relay'], 'projectex:magenta_power_flower');
    rec(['projectex:pink_compressed_collector', '5x projectex:pink_relay'], 'projectex:pink_power_flower');
    rec(['projectex:purple_compressed_collector', '5x projectex:purple_relay'], 'projectex:purple_power_flower');
    rec(['projectex:violet_compressed_collector', '5x projectex:violet_relay'], 'projectex:violet_power_flower');
    rec(['projectex:blue_compressed_collector', '5x projectex:blue_relay'], 'projectex:blue_power_flower');
    rec(['projectex:cyan_compressed_collector', '5x projectex:cyan_relay'], 'projectex:cyan_power_flower');
    rec(['projectex:green_compressed_collector', '5x projectex:green_relay'], 'projectex:green_power_flower');
    rec(['projectex:lime_compressed_collector', '5x projectex:lime_relay'], 'projectex:lime_power_flower');
    rec(['projectex:yellow_compressed_collector', '5x projectex:yellow_relay'], 'projectex:yellow_power_flower');
    rec(['projectex:orange_compressed_collector', '5x projectex:orange_relay'], 'projectex:orange_power_flower');
    rec(['projectex:white_compressed_collector', '5x projectex:white_relay'], 'projectex:white_power_flower');
    rec(['projectex:fading_compressed_collector', '5x projectex:fading_relay'], 'projectex:fading_power_flower');
});
