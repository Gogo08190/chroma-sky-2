onEvent("recipes", (event) => {
  const jar = event.recipes.ftbjarmod.jar;

  jar("minecraft:cobblestone", [Fluid.of("minecraft:water", 125), Fluid.of("minecraft:lava", 125)]).time(60);

  jar("minecraft:stone", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 125)]).time(60);

  jar("minecraft:obsidian", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 1000)]).time(60);

  jar("minecraft:netherrack", ["minecraft:redstone", Fluid.of("minecraft:lava", 1000)]).time(20);
  jar("16x minecraft:netherrack", ["16x minecraft:redstone", Fluid.of("minecraft:lava", 16000)]).time(20);

  jar("minecraft:end_stone", ["minecraft:glowstone_dust", Fluid.of("minecraft:lava", 1000)]).time(20);
  jar("16x minecraft:end_stone", ["16x minecraft:glowstone_dust", Fluid.of("minecraft:lava", 16000)]).time(20);

  jar("cobblefordays:tier_3", ["cobblefordays:tier_2", "4x ftbjarmod:cast_iron_gear", "ftbjarmod:cast_iron_block"]).time(300).highTemp();

  jar("cobblefordays:tier_4", ["cobblefordays:tier_3", "2x chromasky:3x_compressed_cobblestone", Fluid.of("tconstruct:molten_rose_gold", 1000)]).time(400).highTemp();

  jar('tconstruct:seared_heater', ["8x tconstruct:seared_brick", "minecraft:furnace"]).time(800).highTemp();
  jar('tconstruct:seared_melter', ["5x tconstruct:seared_brick", "tconstruct:seared_ingot_gauge"]).time(800).highTemp();
  jar('tconstruct:seared_brick', ["tconstruct:grout"]).time(200).highTemp();
  jar('8x tconstruct:seared_brick', ["8x tconstruct:grout"]).time(600).highTemp();
  jar('16x tconstruct:seared_brick', ["16x tconstruct:grout"]).time(800).highTemp();

  jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(3200).lowTemp();
  jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(300).highTemp();
});
