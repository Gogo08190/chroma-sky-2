onEvent("recipes", (event) => {
  const jar = event.recipes.ftbjarmod.jar;

  jar("minecraft:cobblestone", [Fluid.of("minecraft:water", 125), Fluid.of("minecraft:lava", 125)]).time(60);

  jar("minecraft:basalt", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 125)]).time(60).subzeroTemp()

  jar("minecraft:ice", [Fluid.of("minecraft:water", 1000)]).time(60).subzeroTemp()

  jar("minecraft:stone", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 125)]).time(60);

  jar("minecraft:obsidian", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 1000)]).time(60);

  jar("minecraft:netherrack", ["minecraft:redstone", Fluid.of("minecraft:lava", 1000)]).time(20);
  jar("refinedstorage:silicon", ["minecraft:quartz"]).time(20).highTemp();
  jar("16x minecraft:netherrack", ["16x minecraft:redstone", Fluid.of("minecraft:lava", 16000)]).time(20);

  jar("minecraft:end_stone", ["minecraft:glowstone_dust", Fluid.of("minecraft:lava", 1000)]).time(20);
  jar("16x minecraft:end_stone", ["16x minecraft:glowstone_dust", Fluid.of("minecraft:lava", 16000)]).time(20);

  jar("cobblefordays:tier_3", ["cobblefordays:tier_2", "4x ftbjarmod:cast_iron_gear", "ftbjarmod:cast_iron_block"]).time(300).highTemp();

  jar("cobblefordays:tier_4", ["cobblefordays:tier_3", "2x chromasky:3x_compressed_cobblestone", Fluid.of("tconstruct:molten_rose_gold", 1000)]).time(400).highTemp();

  jar('tconstruct:seared_heater', ["8x tconstruct:seared_brick", "minecraft:furnace"]).time(200).lowTemp();
  jar('tconstruct:seared_melter', ["5x tconstruct:seared_brick", "tconstruct:seared_ingot_gauge"]).time(200).lowTemp();
  jar('tconstruct:seared_fuel_tank', ["8x tconstruct:seared_brick", "#forge:glass"]).time(200).lowTemp();
  jar('tconstruct:seared_basin', ["5x tconstruct:seared_brick", "minecraft:cauldron"]).time(200).lowTemp();
  jar('tconstruct:seared_table', ["5x tconstruct:seared_brick", "tconstruct:pattern"]).time(200).lowTemp();
  jar('tconstruct:seared_faucet', ["3x tconstruct:seared_brick", "minecraft:flower_pot"]).time(200).lowTemp();
  jar('tconstruct:seared_drain', ["4x tconstruct:seared_brick", "2x thermal:copper_ingot", "tconstruct:seared_faucet"]).time(200).lowTemp();
  jar('tconstruct:seared_chute', ["4x tconstruct:seared_brick", "2x thermal:copper_ingot", "minecraft:hopper"]).time(200).lowTemp();
  jar('tconstruct:seared_duct', ["4x tconstruct:seared_brick", "2x tconstruct:cobalt_ingot", "speedyhoppers:speedyhopper_mk1"]).time(200).lowTemp();

  jar('tconstruct:seared_brick', ["tconstruct:grout"]).time(200).lowTemp();
  jar('8x tconstruct:seared_brick', ["8x tconstruct:grout"]).time(600).highTemp();
  jar('16x tconstruct:seared_brick', ["16x tconstruct:grout"]).time(800).highTemp();

  jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(3200).lowTemp();
  jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(300).highTemp();

  jar(Fluid.of("minecraft:water", 10), "#minecraft:leaves").time(100).lowTemp();


  jar("minecraft:iron_ingot", "chromasky:iron_cluster").time(400).lowTemp();
  jar("minecraft:iron_ingot", "chromasky:iron_cluster").time(100).highTemp();
  jar("minecraft:iron_block", "9x chromasky:iron_cluster").time(250).highTemp();

  jar("minecraft:gold_ingot", "chromasky:gold_cluster").time(400).lowTemp();
  jar("minecraft:gold_ingot", "chromasky:gold_cluster").time(100).highTemp();
  jar("minecraft:gold_block", "9x chromasky:gold_cluster").time(250).highTemp();

  jar("4x minecraft:redstone", "chromasky:redstone_cluster").time(175).lowTemp();
  jar("4x minecraft:redstone_block", "9x chromasky:redstone_cluster").time(300).highTemp();

  jar("4x minecraft:coal", "chromasky:coal_cluster").time(175).lowTemp();
  jar("4x minecraft:coal_block", "9x chromasky:coal_cluster").time(300).highTemp();

  jar("minecraft:lapis_lazuli", "chromasky:lapis_cluster").time(175).lowTemp();
  jar("minecraft:lapis_block", "9x chromasky:lapis_cluster").time(300).highTemp();

  jar("minecraft:quartz", "chromasky:quartz_cluster").time(175).lowTemp();
  jar("minecraft:quartz_block", "4x chromasky:quartz_cluster").time(300).highTemp();

  jar("minecraft:diamond", "chromasky:diamond_cluster").time(250).highTemp();
  jar("minecraft:diamond_block", "9x chromasky:diamond_cluster").time(500).highTemp();

  jar("minecraft:emerald", "chromasky:emerald_cluster").time(250).highTemp();
  jar("minecraft:emerald_block", "9x chromasky:emerald_cluster").time(500).highTemp();

  jar("mekanism:ingot_uranium", "chromasky:uranium_cluster").time(250).highTemp();
  jar("mekanism:block_uranium", "9x chromasky:uranium_cluster").time(500).highTemp();

  jar("mekanism:ingot_osmium", "chromasky:osmium_cluster").time(250).highTemp();
  jar("mekanism:block_osmium", "9x chromasky:osmium_cluster").time(500).highTemp();

  jar("mekanism:fluorite_gem", "chromasky:fluorite_cluster").time(250).highTemp();
  jar("9x mekanism:fluorite_gem", "9x chromasky:fluorite_cluster").time(500).highTemp();

  jar("minecraft:netherite_scrap", "9x tconstruct:debris_nugget").time(250).highTemp();
  jar("9x minecraft:netherite_scrap", "81x tconstruct:debris_nugget").time(500).highTemp();

  jar("immersiveengineering:ingot_aluminum", "chromasky:aluminum_cluster").time(400).lowTemp();
  jar("immersiveengineering:ingot_aluminum", "chromasky:aluminum_cluster").time(100).highTemp();
  jar("immersiveengineering:storage_aluminum", "9x chromasky:aluminum_cluster").time(250).highTemp();

  jar("thermal:nickel_ingot", "chromasky:nickel_cluster").time(400).lowTemp();
  jar("thermal:nickel_ingot", "chromasky:nickel_cluster").time(100).highTemp();
  jar("thermal:nickel_block", "9x chromasky:nickel_cluster").time(250).highTemp();

  jar("thermal:silver_ingot", "chromasky:silver_cluster").time(400).lowTemp();
  jar("thermal:silver_ingot", "chromasky:silver_cluster").time(100).highTemp();
  jar("thermal:silver_block", "9x chromasky:silver_cluster").time(250).highTemp();

  jar("thermal:tin_ingot", "chromasky:tin_cluster").time(400).lowTemp();
  jar("thermal:tin_ingot", "chromasky:tin_cluster").time(100).highTemp();
  jar("thermal:tin_block", "9x chromasky:tin_cluster").time(250).highTemp();

  jar("thermal:lead_ingot", "chromasky:lead_cluster").time(400).lowTemp();
  jar("thermal:lead_ingot", "chromasky:lead_cluster").time(100).highTemp();
  jar("thermal:lead_block", "9x chromasky:lead_cluster").time(250).highTemp();

  jar("thermal:copper_ingot", "chromasky:copper_cluster").time(400).lowTemp();
  jar("thermal:copper_ingot", "chromasky:copper_cluster").time(100).highTemp();
  jar("thermal:copper_block", "9x chromasky:copper_cluster").time(250).highTemp();

  jar("tconstruct:cobalt_ingot", "chromasky:cobalt_cluster").time(400).lowTemp();
  jar("tconstruct:cobalt_ingot", "chromasky:cobalt_cluster").time(100).highTemp();
  jar("tconstruct:cobalt_block", "9x chromasky:cobalt_cluster").time(250).highTemp();

  jar("minecraft:dirt", "8x #minecraft:saplings").time(800);
  jar("minecraft:dirt", "8x #forge:seeds").time(800);

  jar("minecraft:grass_block", ["8x #forge:seeds", "minecraft:dirt"]).time(800);
  jar("8x minecraft:grass_block", ["64x #forge:seeds", "8x minecraft:dirt"]).time(1200);

  jar("8x minecraft:dirt", "64x #minecraft:saplings").time(1200);
  jar("8x minecraft:dirt", "64x #forge:seeds").time(1200);

  jar('naturesaura:gold_brick', ["naturesaura:gold_fiber", "minecraft:stone_bricks" , Fluid.of("minecraft:water", 1000)]).time(50).lowTemp();
  jar('naturesaura:gold_nether_brick', ["naturesaura:gold_fiber", "minecraft:nether_bricks" , Fluid.of("minecraft:lava", 1000)]).time(50).highTemp();

  jar("32x minecraft:clay_ball", ["1x #minecraft:sand", "1x #forge:gravel", Fluid.of("minecraft:water", 1000)]).time(20);

  jar("fluxnetworks:flux_dust", "minecraft:redstone").time(100).highTemp();
  jar("8x fluxnetworks:flux_dust", "8x minecraft:redstone").time(250).highTemp();
  jar("16x fluxnetworks:flux_dust", "16x minecraft:redstone").time(400).highTemp();
});
