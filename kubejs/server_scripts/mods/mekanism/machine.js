onEvent('recipes', event => {
  var machine = [
    "smelting",
    "enriching",
    "crushing",
    "compressing",
    "combining",
    "purifying",
    "injecting",
    "infusing",
    "sawing"
  ]

  machine.forEach(function (item, index) {
    event.remove({output: 'mekanism:basic_' + item + '_factory'})
  })

  function basic(input, output){
    event.shaped(output, [
    'RFR',
    'GCG',
    'RFR'
    ], {
      G: 'ftbjarmod:cast_iron_ingot',
      R: 'extendedcrafting:redstone_ingot',
      C: input,
      F: 'mekanism:basic_control_circuit'
    })
  }

  basic('mekanism:energized_smelter','mekanism:basic_smelting_factory')
  basic('mekanism:enrichment_chamber','mekanism:basic_enriching_factory')
  basic('mekanism:crusher','mekanism:basic_crushing_factory')
  basic('mekanism:osmium_compressor','mekanism:basic_compressing_factory')
  basic('mekanism:combiner','mekanism:basic_combining_factory')
  basic('mekanism:purification_chamber','mekanism:basic_purifying_factory')
  basic('mekanism:chemical_injection_chamber','mekanism:basic_injecting_factory')
  basic('mekanism:metallurgic_infuser','mekanism:basic_infusing_factory')
  basic('mekanism:precision_sawmill','mekanism:basic_sawing_factory')

  event.recipes.mekanism.enriching("2x chromasky:cobalt_dust", "#forge:clusters/cobalt");
  event.recipes.mekanism.enriching("5x draconicevolution:draconium_dust", "#forge:ores/draconium");
  event.recipes.mekanism.enriching("2x immersiveengineering:dust_aluminum", "#forge:clusters/aluminum");
  event.recipes.mekanism.enriching("2x thermal:nickel_dust", "#forge:clusters/nickel");
  event.recipes.mekanism.enriching("2x thermal:silver_dust", "#forge:clusters/silver");
  event.recipes.mekanism.enriching("2x rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard_overworld");
  event.recipes.mekanism.enriching("2x rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard_end");

  event.recipes.mekanism.crushing("thermal:silver_dust", "#forge:ingots/silver");
  event.recipes.mekanism.crushing("thermal:nickel_dust", "#forge:ingots/nickel");
  event.recipes.mekanism.crushing("thermal:electrum_dust", "#forge:ingots/electrum");
  event.recipes.mekanism.crushing("thermal:invar_dust", "#forge:ingots/invar");
  event.recipes.mekanism.crushing("thermal:constantan_dust", "#forge:ingots/constantan");
  event.recipes.mekanism.crushing("thermal:signalum_dust", "#forge:ingots/signalum");
  event.recipes.mekanism.crushing("thermal:lumium_dust", "#forge:ingots/lumium");
  event.recipes.mekanism.crushing("thermal:enderium_dust", "#forge:ingots/enderium");
  event.recipes.mekanism.crushing("draconicevolution:draconium_dust", "#forge:ingots/draconium");
  event.recipes.mekanism.crushing("3x minecraft:blaze_powder", "#forge:rods/blaze");
  event.recipes.mekanism.crushing("mekanism:dust_sulfur", "#forge:gems/sulfur");
});
