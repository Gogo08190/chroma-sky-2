onEvent("recipes", (event) => {
  const jar = event.recipes.ftbjarmod.jar;

  jar("minecraft:cobblestone", [Fluid.of("minecraft:water", 125), Fluid.of("minecraft:lava", 125)]).time(60);

  jar("minecraft:stone", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 125)]).time(60);

  jar("minecraft:obsidian", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 1000)]).time(60);

  jar("minecraft:netherrack", ["minecraft:redstone", Fluid.of("minecraft:lava", 1000)]).time(20);
  jar("16x minecraft:netherrack", ["16x minecraft:redstone", Fluid.of("minecraft:lava", 16000)]).time(20);

  jar("minecraft:end_stone", ["minecraft:glowstone_dust", Fluid.of("minecraft:lava", 1000)]).time(20);
  jar("16x minecraft:end_stone", ["16x minecraft:glowstone_dust", Fluid.of("minecraft:lava", 16000)]).time(20);

  jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(3200).lowTemp();
  jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(300).highTemp();
});
