onEvent("recipes", (event) => {

  const drip = event.recipes.ftbdripperDrip;

  drip({
    inputBlock: "minecraft:dirt",
    outputBlock: 'minecraft:clay',
    chance: 1.0,
  });

  drip({
    inputBlock: "minecraft:oak_sapling",
    outputBlock: 'minecraft:spruce_sapling',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:spruce_sapling',
    outputBlock: 'minecraft:birch_sapling',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:birch_sapling',
    outputBlock: 'minecraft:acacia_sapling',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:acacia_sapling',
    outputBlock: 'minecraft:dark_oak_sapling',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:dark_oak_sapling',
    outputBlock: 'minecraft:jungle_sapling',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:jungle_sapling',
    outputBlock: 'integrateddynamics:menril_sapling',
    chance: 1.0,
  });

  drip({
    inputBlock: 'tconstruct:earth_slime_sapling',
    outputBlock: 'tconstruct:sky_slime_sapling',
    chance: 1.0,
  });

  drip({
    inputBlock: 'tconstruct:sky_slime_sapling',
    outputBlock: 'tconstruct:ender_slime_sapling',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:poppy',
    outputBlock: 'minecraft:cornflower',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:cornflower',
    outputBlock: 'minecraft:white_tulip',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:white_tulip',
    outputBlock: 'minecraft:orange_tulip',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:orange_tulip',
    outputBlock: 'minecraft:red_tulip',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:red_tulip',
    outputBlock: 'minecraft:azure_bluet',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:dandelion',
    outputBlock: 'minecraft:allium',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:allium',
    outputBlock: 'minecraft:blue_orchid',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:blue_orchid',
    outputBlock: 'minecraft:lily_of_the_valley',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:lily_of_the_valley',
    outputBlock: 'minecraft:pink_tulip',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:pink_tulip',
    outputBlock: 'minecraft:oxeye_daisy',
    chance: 1.0,
  });

  drip({
    inputBlock: 'minecraft:oxeye_daisy',
    outputBlock: 'minecraft:peony',
    chance: 1.0,
  });

});
