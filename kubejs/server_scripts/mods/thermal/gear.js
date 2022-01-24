onEvent("recipes", (event) => {
  event.recipes.thermal.press("thermal:lapis_gear", ["4x minecraft:lapis_lazuli", "thermal:press_gear_die"]);
  event.recipes.thermal.press("thermal:diamond_gear", ["4x minecraft:diamond", "thermal:press_gear_die"]);
  event.recipes.thermal.press("thermal:emerald_gear", ["4x minecraft:emerald", "thermal:press_gear_die"]);
  event.recipes.thermal.press("thermal:quartz_gear", ["4x minecraft:quartz", "thermal:press_gear_die"]);
  event.recipes.thermal.press("ftbjarmod:cast_iron_gear", ["4x ftbjarmod:cast_iron_ingot", "thermal:press_gear_die"])
  event.recipes.thermal.press("thermal:sapphire_gear", ["4x thermal:sapphire", "thermal:press_gear_die"])
  event.recipes.thermal.press("thermal:ruby_gear", ["4x thermal:ruby", "thermal:press_gear_die"])
  event.recipes.thermal.press("chromasky:redstone_gear", ["4x extendedcrafting:redstone_ingot", "thermal:press_gear_die"])
  event.recipes.thermal.press("chromasky:treated_wood_gear", ["4x immersiveengineering:treated_wood_horizontal", "thermal:press_gear_die"])
  event.recipes.thermal.press("chromasky:draconium_gear", ["4x draconicevolution:draconium_ingot", "thermal:press_gear_die"])
  event.recipes.thermal.press("chromasky:starmetal_gear", ["4x astralsorcery:starmetal_ingot", "thermal:press_gear_die"])

  event.remove({id: 'thermal:parts/iron_gear'})
  event.remove({id: 'thermal:parts/gold_gear'})
  event.remove({id: 'thermal:parts/netherite_gear'})
  event.remove({id: 'thermal:parts/lapis_gear'})
  event.remove({id: 'thermal:parts/diamond_gear'})
  event.remove({id: 'thermal:parts/emerald_gear'})
  event.remove({id: 'thermal:parts/quartz_gear'})
  event.remove({id: 'thermal:parts/copper_gear'})
  event.remove({id: 'thermal:parts/tin_gear'})
  event.remove({id: 'thermal:parts/lead_gear'})
  event.remove({id: 'thermal:parts/silver_gear'})
  event.remove({id: 'thermal:parts/nickel_gear'})
  event.remove({id: 'thermal:parts/bronze_gear'})
  event.remove({id: 'thermal:parts/electrum_gear'})
  event.remove({id: 'thermal:parts/invar_gear'})
  event.remove({id: 'thermal:parts/constantan_gear'})
  event.remove({id: 'thermal:parts/signalum_gear'})
  event.remove({id: 'thermal:parts/lumium_gear'})
  event.remove({id: 'thermal:parts/enderium_gear'})
});
