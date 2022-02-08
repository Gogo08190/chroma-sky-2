onEvent("recipes", (event) => {

  event.recipes.thermal
    .smelter("extendedcrafting:redstone_ingot", ["ftbjarmod:cast_iron_ingot", "projectred-core:red_ingot"])
    .energy(2000);

  event.remove({ output: 'thermal:obsidian_glass' })
  event.recipes.thermal
    .smelter("2x thermal:obsidian_glass", ["#forge:gems/quartz", "minecraft:obsidian", "#forge:sand"])
    .energy(2000);

  event
    .custom({"type": "thermal:refinery","ingredient": {"fluid": "thermal:latex","amount": 100},"result": [{"item": "thermal:rubber","chance": 1}],"energy": 10000});

  event
    .custom({"type": "thermal:pyrolyzer","ingredient": {"item": "thermal:rubber"},"result": [{"item": "thermal:cured_rubber"},{"item": 'thermal:cured_rubber',"chance": 0.5},{"item": 'industrialforegoing:dryrubber',"chance": 0.05}],"energy": 5000,"experience": 0.00});

  event.recipes.thermal
    .smelter("masterfulmachinery:mysticfactory1_controller", ["mysticalagriculture:prosperity_gemstone_block", "xnet:controller", "thermal:upgrade_augment_3"])
    .energy(10000);

  event.recipes.thermal
    .smelter("masterfulmachinery:mysticfactory1_mystical_item_port_items_input", ["mysticalagriculture:prosperity_gemstone_block", "#forge:chests", "speedyhoppers:speedyhopper_mk3"])
    .energy(10000);

  event
    .custom({"type": "thermal:pyrolyzer","ingredient": {"item": "masterfulmachinery:mysticfactory1_mystical_item_port_items_input"},"result": [{"item": "masterfulmachinery:mysticfactory1_mystical_item_port_items_output"}],"energy": 10000,"experience": 0.00});

  event.recipes.thermal
    .smelter("masterfulmachinery:mysticfactory1_mystical_energy_port_energy_input", ["mysticalagriculture:prosperity_gemstone_block", "thermal:energy_cell", "thermal:charge_bench"])
    .energy(10000);


  event.remove({ output: 'refinedstorage:construction_core' })
  event.recipes.thermal
    .smelter("refinedstorage:construction_core", ['refinedstorage:basic_processor', 'minecraft:quartz'])
    .energy(5000);

  event.remove({ output: 'refinedstorage:destruction_core' })
  event.recipes.thermal
    .smelter("refinedstorage:destruction_core", ['refinedstorage:basic_processor', 'minecraft:glowstone_dust'])
    .energy(5000);

  event.recipes.thermal
    .smelter("rats:rat_upgrade_basic", ['2x rats:block_of_cheese', 'thermal:diamond_gear'])
    .energy(5000);

  event.recipes.thermal
    .smelter(["2x mekanism:ingot_steel", "2x immersiveengineering:slag"], ['immersiveengineering:coal_coke', 'minecraft:iron_ingot'])
    .energy(5000);

  event.recipes.thermal
    .crucible(Fluid.of('kubejs:cryotheum', 100), 'thermal:blizz_powder')

  event.recipes.thermal
    .bottler("simplyjetpacks:unit_glowstone", ['simplyjetpacks:unit_glowstone_empty', Fluid.of('thermal:glowstone', 1000)])
    .energy(500);

  event.recipes.thermal
    .bottler("simplyjetpacks:unit_cryotheum", ['simplyjetpacks:unit_cryotheum_empty', Fluid.of('kubejs:cryotheum', 1000)])
    .energy(500);
});
