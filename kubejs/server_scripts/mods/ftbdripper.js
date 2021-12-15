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
});
