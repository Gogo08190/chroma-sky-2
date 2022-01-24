onEvent("recipes", (event) => {
  // Plate
  event.recipes.immersiveengineering.metal_press(
      "chromasky:draconium_plate",
      "draconicevolution:draconium_ingot",
      "immersiveengineering:mold_plate"
  );

  event.remove({id: 'immersiveengineering:crafting/plate_constantan_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_electrum_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_nickel_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_silver_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_lead_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_tin_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_copper_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_gold_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_iron_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_steel_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_uranium_hammering'})
  event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'})
});
