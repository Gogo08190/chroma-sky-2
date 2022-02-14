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

});
