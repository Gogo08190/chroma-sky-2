// priority: 0

events.listen('jei.hide.items', function (event) {
  event.hide([
    /mysticalagriculture:soul_jar/,
    /ftblibrary:fluid_container/,
    /tconstruct:part_builder/,
    /tconstruct:tinker_station/,
    /tconstruct:crafting_station/,
    'ftbquests:missing_item',
    'ftbquests:custom_icon',
    'ftbquests:barrier',
    'ftbquests:stage_barrier',
    'ftbquests:detector',
    'ftbjarmod:creative_low_temperature_source',
    'ftbjarmod:creative_high_temperature_source',
    'ftbjarmod:creative_subzero_temperature_source'
  ])
})

onEvent('jei.add.items', e => {
  e.add([
    'tconstruct:crafting_station',
    'mysticalagriculture:soul_jar',
    Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
    Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}')
  ])
});

onEvent("jei.add.items", (event) => {
    event.add(Item.of("thermal:sapphire_block"));
    event.add(Item.of("thermal:sapphire_dust"));
    event.add(Item.of("thermal:sapphire_gear"));
    event.add(Item.of("thermal:ruby_block"));
    event.add(Item.of("thermal:ruby_dust"));
    event.add(Item.of("thermal:ruby_gear"));
});

onEvent("jei.hide.items", (event) => {
    //Item Filters
    // event.hide(/^itemfilters:/g);

    //Mob Grinding Utils
    event.hide("mob_grinding_utils:spikes");
    event.hide("mob_grinding_utils:delightful_dirt");
    event.hide("mob_grinding_utils:dreadful_dirt");
    event.hide("mob_grinding_utils:rotten_egg");
    event.hide("mob_grinding_utils:golden_egg");
    event.hide("mob_grinding_utils:gm_chicken_feed_cursed");
    event.hide("mob_grinding_utils:nutritious_chicken_feed");

    //Compact Machines
    event.hide("compactmachines:solid_wall");

    //Simply Jetpacks
    event.hide("simplyjetpacks:jetpack_te1");
    event.hide("simplyjetpacks:jetpack_te1_armored");
    event.hide("simplyjetpacks:jetpack_te2");
    event.hide("simplyjetpacks:jetpack_te2_armored");
    event.hide("simplyjetpacks:jetpack_te3");
    event.hide("simplyjetpacks:jetpack_te3_armored");
    event.hide("simplyjetpacks:jetpack_te4");
    event.hide("simplyjetpacks:jetpack_te4_armored");
    event.hide("simplyjetpacks:jetpack_te5");
    event.hide("simplyjetpacks:thruster_te1");
    event.hide("simplyjetpacks:thruster_te2");
    event.hide("simplyjetpacks:thruster_te3");
    event.hide("simplyjetpacks:thruster_te4");
    event.hide("simplyjetpacks:thruster_te5");
    event.hide("simplyjetpacks:armorplating_te1");
    event.hide("simplyjetpacks:armorplating_te2");
    event.hide("simplyjetpacks:armorplating_te3");
    event.hide("simplyjetpacks:armorplating_te4");

    //Thermal
    event.hide("thermal:sapphire_gear");
    event.hide("thermal:ruby_gear");

    //Ores / Duplicate resources
    event.hide("bloodmagic:coalsand");
    event.hide("bloodmagic:goldsand");
    event.hide("bloodmagic:ironsand");
    event.hide("bloodmagic:saltpeter");
    event.hide("bloodmagic:sulfur");
    event.hide("mekanism:block_bronze");
    event.hide("mekanism:block_copper");
    event.hide("mekanism:block_lead");
    event.hide("mekanism:block_steel");
    event.hide("mekanism:block_tin");
    event.hide("mekanism:copper_ore");
    event.hide("mekanism:dust_bronze");
    event.hide("mekanism:dust_copper");
    event.hide("mekanism:dust_diamond");
    event.hide("mekanism:dust_emerald");
    event.hide("mekanism:dust_gold");
    event.hide("mekanism:dust_iron");
    event.hide("mekanism:dust_lapis_lazuli");
    event.hide("mekanism:dust_lead");
    event.hide("mekanism:dust_quartz");
    event.hide("mekanism:dust_sulfur");
    event.hide("mekanism:dust_tin");
    event.hide("mekanism:ingot_bronze");
    event.hide("mekanism:ingot_copper");
    event.hide("mekanism:ingot_lead");
    event.hide("mekanism:ingot_tin");
    event.hide("mekanism:lead_ore");
    event.hide("mekanism:nugget_bronze");
    event.hide("mekanism:nugget_copper");
    event.hide("mekanism:nugget_lead");
    event.hide("mekanism:nugget_tin");
    event.hide("mekanism:sawdust");
    event.hide("mekanism:tin_ore");
    event.hide("miniutilities:ender_dust");
    event.hide("tconstruct:copper_block");
    event.hide("tconstruct:copper_ingot");
    event.hide("tconstruct:copper_nugget");
    event.hide("tconstruct:copper_ore");
    event.hide("mekanism:block_charcoal");
    event.hide("quark:charcoal_block");
    event.hide("draconicevolution:nether_draconium_ore");
    event.hide("projectred-core:copper_ingot");
    event.hide("projectred-core:tin_ingot");
    event.hide("projectred-core:silver_ingot");
});
