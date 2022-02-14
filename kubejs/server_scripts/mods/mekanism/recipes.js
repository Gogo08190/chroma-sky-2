onEvent("recipes", (event) => {
  event.remove({ output: 'mekanism:metallurgic_infuser' })
  event.shaped('mekanism:metallurgic_infuser', [
  'SFS',
  'RCR',
  'SFS'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot',
    C: 'mekanism:steel_casing',
    F: 'industrialforegoing:resourceful_furnace'
  })

  event.remove({ output: 'mekanism:energized_smelter' })
  event.shaped('mekanism:energized_smelter', [
  'RFR',
  'GCG',
  'RFR'
  ], {
    G: 'thermal:machine_furnace',
    R: 'extendedcrafting:redstone_ingot',
    C: 'mekanism:steel_casing',
    F: 'mekanism:basic_control_circuit'
  })

  event.remove({ output: 'mekanism:enrichment_chamber' })
  event.shaped('mekanism:enrichment_chamber', [
  'RFR',
  'GCG',
  'RFR'
  ], {
    G: 'thermal:machine_pulverizer',
    R: 'extendedcrafting:redstone_ingot',
    C: 'mekanism:steel_casing',
    F: 'mekanism:basic_control_circuit'
  })

  event.remove({ output: 'mekanism:basic_tier_installer' })
  event.shaped('mekanism:basic_tier_installer', [
  'RFR',
  'GCG',
  'RFR'
  ], {
    G: 'ftbjarmod:cast_iron_ingot',
    R: 'extendedcrafting:redstone_ingot',
    C: '#minecraft:planks',
    F: 'mekanism:basic_control_circuit'
  })

  event.remove({ output: 'mekanism:teleportation_core' })
  event.shaped('mekanism:teleportation_core', [
  'RFR',
  'GCG',
  'RFR'
  ], {
    G: 'powah:crystal_blazing',
    R: 'powah:crystal_niotic',
    C: 'rftoolsbase:infused_diamond',
    F: 'mekanism:alloy_atomic'
  })

  event.remove({ output: 'mekanism:logistical_sorter' })
  event.shaped('mekanism:logistical_sorter', [
  'IPI',
  'ICI',
  'III'
  ], {
    I: 'powah:steel_energized',
    P: 'minecraft:piston',
    C: 'mekanism:basic_control_circuit'
  })

  event.remove({ output: 'mekanism:enrgy_tablet' })
  event.shaped('mekanism:enrgy_tablet', [
  'RGR',
  'AGA',
  'RGR'
  ], {
    G: 'powah:steel_energized',
    R: 'extendedcrafting:redstone_ingot',
    A: 'mekanism:alloy_infused'
  })

  event.remove({ output: 'mekanism:crusher' })
  event.shaped('mekanism:crusher', [
  'RFR',
  'GCG',
  'RFR'
  ], {
    G: 'minecraft:lava_bucket',
    R: 'extendedcrafting:redstone_ingot',
    C: 'mekanism:steel_casing',
    F: 'mekanism:basic_control_circuit'
  })

  event.remove({ output: 'mekanism:steel_casing' })

  event.remove({ output: 'mekanismgenerators:heat_generator' })
  event.shaped('mekanismgenerators:heat_generator', [
  'SSS',
  'RCR',
  'BFB'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'immersiveengineering:plate_aluminum',
    C: 'mekanism:block_osmium',
    F: 'ironfurnaces:iron_furnace',
    B: 'thermal:copper_ingot'
  })

  event.remove({ output: 'mekanism:basic_fluid_tank' })
  event.shaped('mekanism:basic_fluid_tank', [
  'RIR',
  'IGI',
  'RIR'
  ], {
    R: 'extendedcrafting:redstone_ingot',
    I: 'ftbjarmod:cast_iron_ingot',
    G: 'ftbjarmod:tempered_glass'
  })

  event.remove({ output: 'mekanismgenerators:solar_panel' })
  event.shaped('mekanismgenerators:solar_panel', [
  'GGG',
  'RAR',
  'SSS'
  ], {
    G: 'thermal:obsidian_glass',
    R: 'extendedcrafting:redstone_ingot',
    A: 'mekanism:alloy_infused',
    S: 'mekanism:ingot_steel'
  })

  event.remove({ output: 'mekanismgenerators:solar_generator' })
  event.shaped('mekanismgenerators:solar_generator', [
  'SSS',
  'ATA',
  'OCO'
  ], {
    S: 'mekanismgenerators:solar_panel',
    A: 'mekanism:alloy_infused',
    T: 'thermal:redstone_servo',
    O: 'mekanism:ingot_osmium',
    C: 'mekanism:basic_energy_cube'
  })

  event.remove({ output: 'mekanismgenerators:bio_generator' })
  event.shaped('mekanismgenerators:bio_generator', [
  'RAR',
  'FCF',
  'SAS'
  ], {
    S: 'mekanism:ingot_steel',
    A: 'mekanism:alloy_reinforced',
    F: 'mekanism:bio_fuel',
    R: 'extendedcrafting:redstone_ingot',
    C: 'mekanism:advanced_control_circuit'
  })

  event.remove({ output: 'mekanismgenerators:wind_generator' })
  event.shaped('mekanismgenerators:wind_generator', [
  ' O ',
  'ORO',
  'CAC'
  ], {
    C: 'mekanism:basic_energy_cube',
    A: 'mekanism:advanced_control_circuit',
    R: 'mekanism:alloy_reinforced',
    O: 'mekanism:ingot_osmium'
  })

  event.remove({ output: 'mekanism:mekasuit_helmet' })
  event.shaped('mekanism:mekasuit_helmet', [
  'HCH',
  'HAH',
  'PBP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    B: 'mekanism:basic_induction_cell',
    A: 'theabyss:unorithe_a_netherithe_helmet'
  })

  event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
  event.shaped('mekanism:mekasuit_bodyarmor', [
  'HCH',
  'HAH',
  'PBP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    B: 'mekanism:basic_induction_cell',
    A: 'theabyss:unorithe_a_netherithe_chestplate'
  })

  event.remove({ output: 'mekanism:mekasuit_pants' })
  event.shaped('mekanism:mekasuit_pants', [
  'HCH',
  'HAH',
  'PBP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    B: 'mekanism:basic_induction_cell',
    A: 'theabyss:unorithe_a_netherithe_leggings'
  })

  event.remove({ output: 'mekanism:mekasuit_boots' })
  event.shaped('mekanism:mekasuit_boots', [
  'HCH',
  'HAH',
  'PBP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    B: 'mekanism:basic_induction_cell',
    A: 'theabyss:unorithe_a_netherithe_boots'
  })

  event.remove({ output: 'mekanism:module_base' })
  event.shaped('2x mekanism:module_base', [
  'BTB',
  'THT',
  'BTB'
  ], {
    B: 'thermal:bronze_nugget',
    T: 'thermal:tin_plate',
    H: 'mekanism:hdpe_sheet'
  })
});
