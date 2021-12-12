onEvent("recipes", (event) => {

  const drip = event.recipes.ftbdripperDrip;

  drip({
    inputBlock: "minecraft:dirt",
    outputBlock: 'minecraft:clay',
    chance: 1.0,
  });

  drip({
    inputBlock: "minecraft:gravel",
    outputBlock: 'minecraft:cobblestone',
    chance: 1.0,
  });
});
