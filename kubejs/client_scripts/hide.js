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
    'ftbjarmod:creative_subzero_temperature_source',
    'titanium:iron_gear',
    'pedestals:dustiron',
    'occultism:iron_dust',
    'immersiveengineering:dust_iron',
    'mekanism:dust_iron',
    'immersiveengineering:plate_iron',
    'occultism:gold_dust',
    'pedestals:dustgold',
    'mekanism:dust_gold',
    'immersiveengineering:dust_gold',
    'immersiveengineering:plate_gold',
    'titanium:gold_gear',
    'mekanism:dust_diamond',
    'titanium:diamond_gear',
    'mekanism:ingot_copper',
    'occultism:copper_ingot',
    'projectred-core:copper_ingot',
    'projectred-exploration:copper_ore',
    'occultism:copper_ore',
    'immersiveengineering:ore_copper',
    'tconstruct:copper_ore',
    'mekanism:copper_ore',
    'immersiveengineering:ingot_copper',
    'tconstruct:copper_ingot',
    'immersiveengineering:plate_copper',
    'occultism:copper_dust',
    'occultism:copper_nugget',
    'immersiveengineering:nugget_copper',
    'pedestals:dustcopper',
    'mekanism:nugget_copper',
    'immersiveengineering:dust_copper',
    'mekanism:dust_copper',
    'tconstruct:copper_nugget',
    'immersiveengineering:ore_lead',
    'mekanism:lead_ore',
    'immersiveengineering:plate_lead',
    'mekanism:nugget_lead',
    'immersiveengineering:nugget_lead',
    'mekanism:dust_lead',
    'pedestals:dustlead',
    'immersiveengineering:dust_lead',
    'immersiveengineering:ingot_lead',
    'mekanism:nugget_bronze',
    'immersiveengineering:ore_uranium',
    'pedestals:dusturanium',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:dust_uranium',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:plate_constantan',
    'immersiveengineering:dust_constantan',
    'immersiveengineering:nugget_constantan',
    'immersiveengineering:ingot_constantan',
    'immersiveengineering:nugget_electrum',
    'immersiveengineering:ingot_electrum',
    'immersiveengineering:plate_electrum',
    'immersiveengineering:dust_electrum',
    'immersiveengineering:ore_silver',
    'projectred-exploration:silver_ore',
    'occultism:silver_ore',
    'immersiveengineering:plate_silver',
    'occultism:silver_dust',
    'pedestals:dustsilver',
    'immersiveengineering:nugget_silver',
    'occultism:silver_nugget',
    'immersiveengineering:dust_silver',
    'immersiveengineering:ingot_silver',
    'occultism:silver_ingot',
    'pedestals:dustnickel',
    'immersiveengineering:dust_nickel',
    'immersiveengineering:plate_nickel',
    'immersiveengineering:nugget_nickel',
    'immersiveengineering:ingot_nickel',
    'immersiveengineering:ore_nickel',
    'pedestals:dustaluminum',
    'immersiveengineering:dust_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:ingot_steel',
    'thermal:coal_coke',
    'immersiveengineering:dust_sulfur',
    'thermal:sulfur_dust',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_emerald',
    'mekanism:dust_netherite',
    'mekanism:dust_quartz',
    'occultism:obsidian_dust',
    'mekanism:tin_ore',
    'mekanism:nugget_tin',
    'mekanism:dust_tin',
    'pedestals:dusttin',
    'projectred-exploration:tin_ore',
    'mekanism:ingot_tin',
    'immersiveengineering:dust_wood',
    'mekanism:sawdust',
    'bloodmagic:ironsand',
    'bloodmagic:goldsand',
    'bloodmagic:coalsand',
    'bloodmagic:sulfur',
    'mekanism:block_charcoal',
    'quark:charcoal_block',
    'miniutilities:ender_dust',
    'projectred-core:ruby',
    'projectred-core:sapphire',
    'projectred-exploration:ruby_ore',
    'projectred-exploration:sapphire_ore',
    'mekanism:ingot_lead',
    'projectred-core:ruby';
    'projectred-core:sapphire',
    'projectred-exploration:ruby_ore',
    'projectred-exploration:sapphire_ore'

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
