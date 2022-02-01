onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["iron"], "mysticalagriculture:inferium_farmland", [
          ["minecraft:tube_coral_block", 0.1],
          ["minecraft:brain_coral_block", 0.1],
          ["minecraft:bubble_coral_block", 0.1],
          ["minecraft:fire_coral_block", 0.1],
          ["minecraft:horn_coral_block", 0.1]
          ]).mb(50);

  });
