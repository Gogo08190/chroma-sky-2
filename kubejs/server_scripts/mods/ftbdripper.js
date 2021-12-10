onEvent("recipes", (event) => {
  event.recipes.ftbdripperDrip({
    inputBlock: "minecraft:dirt",
    outputBlock: 'minecraft:clay',
    chance: 1.0,
  });
});
