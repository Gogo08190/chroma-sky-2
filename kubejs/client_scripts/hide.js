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
    'thermal:slag',
    'thermal:bitumen',
    'occultism:obsidian_dust',
    'mekanism:tin_ore',
    'mekanism:nugget_tin',
    'mekanism:dust_tin',
    'pedestals:dusttin',
    'projectred-exploration:tin_ore',
    'mekanism:ingot_tin',
    'immersiveengineering:dust_wood',
    'mekanism:sawdust',
    'cyclic:hopper_gold',
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
    'projectred-core:tin_ingot',
    'projectred-core:silver_ingot',
    'mekanism:ingot_bronze',
    'mysticalagriculture:brass_essence',
    'mysticalagriculture:brass_seeds',
    'mysticalagriculture:iridium_seeds',
    'mysticalagriculture:iridium_essence',
    'mysticalagriculture:chrome_seeds',
    'mysticalagriculture:platinum_seeds',
    'mysticalagriculture:graphite_seeds',
    'mysticalagriculture:tungsten_seeds',
    'mysticalagriculture:mithril_seeds',
    'mysticalagriculture:titanium_seeds',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:graphite_essence',
    'mysticalagriculture:tungsten_essence',
    'mysticalagriculture:mithril_essence',
    'mysticalagriculture:titanium_essence',
    'mysticalagriculture:chrome_essence',
    'mekanism:upgrade_anchor',
    'thermal:creosote_bucket',
    'cyclic:fluid_pipe',
    'cyclic:item_pipe',
    'cyclic:energy_pipe',
    'cyclic:uncrafter',
    'rats:raw_plastic',
    'simplegens:simple_statue',
    'extendedcrafting:handheld_table',
    'masterfulmachinery:autoblood_blood_fluid_port_fluids_output',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_seeds',
    'mekanism:dust_bronze',
    'masterfulmachinery:mysticfactory1_mystical_energy_port_energy_output',
    'masterfulmachinery:autoastral_autoastral_starlight_port_astral_starlight_output',
    'masterfulmachinery:mysticfactory2_mystical_energy_port_energy_output',
    'masterfulmachinery:mysticfactory6_mystical_energy_port_energy_output',
    'masterfulmachinery:mysticfactory4_mystical_energy_port_energy_output',
    'masterfulmachinery:mysticfactory5_mystical_energy_port_energy_output',
    'masterfulmachinery:mysticfactory3_mystical_energy_port_energy_output',
    'masterfulmachinery:mysticfactory7_mystical_energy_port_energy_output',
    'masterfulmachinery:assemblingfactory_assemblingenergy_port_energy_output',
    'mob_grinding_utils:golden_egg',
    'mob_grinding_utils:rotten_egg',
    'mob_grinding_utils:gm_chicken_feed_cursed',
    'mob_grinding_utils:nutritious_chicken_feed',
    'mob_grinding_utils:entity_spawner',
    'mob_grinding_utils:dreadful_dirt',
    'mob_grinding_utils:delightful_dirt',
    'tombstone:book_of_recycling',
    'pedestals:coin/rfmobgen',
    'mob_grinding_utils:spikes',
    'extendedcrafting:nether_star_block',
    'overloaded:almost_infinite_tank',
    'overloaded:true_infinite_tank',
    'overloaded:almost_infinite_barrel',
    'overloaded:true_infinite_barrel',
    'overloaded:almost_infinite_capacitor',
    'overloaded:true_infinite_capacitor',
    'animalcrops:pollen',
    'projectex:stone_table',
    'projectex:alchemy_table',
    'projectex:personal_link',
    'projectex:refined_link',
    'projectex:compressed_refined_link',
    'projectex:arcane_tablet',
    'projectex:final_star',
    'cyclic:battery',
    'cyclic:battery_infinite',
    'overloaded:creative_generator',
    'masterfulmachinery:emcflower_assemblingenergy_port_energy_output',
    'masterfulmachinery:structure_generator',
    'masterfulmachinery:structure_gen_device',
    'envirocore:creative_energy_source',
    'integrateddynamics:energy_battery_creative',
    'mysticalagriculture:creative_soulium_dagger',
    'buildinggadgets:construction_paste_container_creative',
    'rftoolsutility:creative_screen',
    'rftoolspower:dimensionalcell_creative',
    'theoneprobe:creativeprobe',
    'losttrinkets:magical_feathers',
    'losttrinkets:mossy_ring',
    'losttrinkets:mossy_belt',
    'losttrinkets:dragon_breath',
    'losttrinkets:book_o_enchanting',
    'overloaded:ray_gun',
    'buildersaddition:iron_rod',
    Item.of('animalcrops:magnemone', '{entity:"minecraft:strider"}'),
    Item.of('animalcrops:spores', '{entity:"minecraft:piglin"}'),
    Item.of('animalcrops:spores', '{entity:"minecraft:hoglin"}'),
    Item.of('animalcrops:anemonemal', '{entity:"minecraft:tropical_fish"}'),
    Item.of('animalcrops:anemonemal', '{entity:"minecraft:salmon"}'),
    Item.of('animalcrops:anemonemal', '{entity:"minecraft:pufferfish"}'),
    Item.of('animalcrops:anemonemal', '{entity:"minecraft:dolphin"}'),
    Item.of('animalcrops:anemonemal', '{entity:"minecraft:cod"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:wolf"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:polar_bear"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:panda"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:ocelot"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:mooshroom"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:parrot"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:llama"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:horse"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:fox"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:donkey"}'),
    Item.of('animalcrops:seeds', '{entity:"minecraft:cat"}'),
    Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'),
    Item.of('modularrouters:creative_module', '{modularrouters:{ModuleFilter:{}}}'),
    Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:"thermal:creosote",Amount:2147483647}}]}}'),
    'theabyss:auto_smelt_pick_axe',
    'thermal:glowstone_mushroom_spores',
    'thermal:gunpowder_mushroom_spores',
    'thermal:redstone_mushroom_spores',
    'thermal:slime_mushroom_spores',
    'naturesaura:chunk_loader'
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
    event.add(Item.of("thermal:ruby_gear"));
    event.add(Item.of("thermal:ruby"));
    event.add(Item.of("thermal:sapphire"));
});
