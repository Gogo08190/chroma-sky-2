onEvent("recipes", (event) => {
  event.recipes.ftbdripperDrip({
    inputBlock: "minecraft:dirt",
    outputBlock: 'minecraft:clay',
    chance: 1.0,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "#minecraft:leaves",
    outputItem: 'minecraft:dirt',
    chance: 1.0,
  });

});
