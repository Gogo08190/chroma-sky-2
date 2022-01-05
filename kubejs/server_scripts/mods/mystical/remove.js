onEvent('recipes', event => {
  event.remove({output: 'minecraft:netherite_ingot', input: 'mysticalagriculture:netherite_essence'})
  event.remove({output: 'astralsorcery:starmetal_ingot', input: 'mysticalagriculture:starmetal_essence'})
  event.remove({output: 'tconstruct:queens_slime_ingot', input: 'mysticalagriculture:queens_slime_essence'})
  event.remove({output: 'tconstruct:slimesteel_ingot', input: 'mysticalagriculture:slimesteel_essence'})
  event.remove({output: 'tconstruct:rose_gold_ingot', input: 'mysticalagriculture:rose_gold_essence'})
  event.remove({output: 'mekanism:ingot_osmium', input: 'mysticalagriculture:osmium_essence'})
  event.remove({output: 'minecraft:iron_ingot', input: 'mysticalagriculture:iron_essence'})
  event.remove({output: 'tconstruct:pig_iron_ingot', input: 'mysticalagriculture:pig_iron_essence'})
  event.remove({output: 'powah:uraninite', input: 'mysticalagriculture:uraninite_essence'})
  event.remove({output: 'refinedstorage:quartz_enriched_iron', input: 'mysticalagriculture:quartz_enriched_iron_essence'})
  event.remove({output: 'tconstruct:cobalt_ingot', input: 'mysticalagriculture:cobalt_essence'})
  event.remove({output: 'minecraft:redstone', input: 'mysticalagriculture:redstone_essence'})
  event.remove({output: 'mekanism:fluorite_gem', input: 'mysticalagriculture:fluorite_essence'})
  event.remove({output: 'draconicevolution:draconium_ingot', input: 'mysticalagriculture:draconium_essence'})
  event.remove({output: 'tconstruct:hepatizon_ingot', input: 'mysticalagriculture:hepatizon_essence'})
  event.remove({output: 'tconstruct:tinkers_bronze_ingot', input: 'mysticalagriculture:tinkers_bronze_essence'})
  event.remove({output: 'immersiveengineering:ingot_hop_graphite', input: 'mysticalagriculture:hop_graphite_essence'})
  event.remove({output: 'minecraft:emerald', input: 'mysticalagriculture:emerald_essence'})
  event.remove({output: 'powah:crystal_blazing', input: 'mysticalagriculture:blazing_crystal_essence'})
  event.remove({output: 'minecraft:quartz', input: 'mysticalagriculture:nether_quartz_essence'})
  event.remove({output: 'powah:steel_energized', input: 'mysticalagriculture:energized_steel_essence'})
  event.remove({output: 'minecraft:diamond', input: 'mysticalagriculture:diamond_essence'})
  event.remove({output: 'draconicevolution:awakened_draconium_nugget', input: 'mysticalagriculture:awakened_draconium_essence'})
  event.remove({output: 'mekanism:ingot_refined_obsidian', input: 'mysticalagriculture:refined_obsidian_essence'})
  event.remove({output: 'minecraft:gold_ingot', input: 'mysticalagriculture:gold_essence'})
  event.remove({output: 'tconstruct:manyullyn_ingot', input: 'mysticalagriculture:manyullyn_essence'})
  event.remove({output: 'mekanism:ingot_refined_glowstone', input: 'mysticalagriculture:refined_glowstone_essence'})
  event.remove({output: 'minecraft:glowstone_dust', input: 'mysticalagriculture:glowstone_essence'})
  event.remove({output: 'minecraft:coal', input: 'mysticalagriculture:coal_essence'})


  var essence = [
    'silver',
    'lead',
    'tin',
    'lumium',
    'signalum',
    'sulfur',
    'bronze',
    'niter',
    'enderium',
    'uranium',
    'invar',
    'electrum',
    'sapphire',
    'ruby'
  ]

  essence.forEach(function (item, index) {
    event.remove({id: "mysticalagriculture:essence/common/" + item +"_ingot"})
    event.remove({id: "mysticalagriculture:essence/common/" + item})
    event.remove({id: "mysticalagriculture:essence/thermal/" + item +"_ingot"})
    event.remove({id: "mysticalagriculture:essence/gems/" + item})
  });

  event.shaped('tconstruct:hepatizon_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:hepatizon_essence'
  })

  event.shaped('4x minecraft:quartz', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:nether_quartz_essence'
  })

  event.shaped('2x thermal:sapphire', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:sapphire_essence'
  })

  event.shaped('mekanism:ingot_refined_obsidian', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:refined_obsidian_essence'
  })

  event.shaped('draconicevolution:draconium_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:draconium_essence'
  })

  event.shaped('2x minecraft:iron_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:iron_essence'
  })

  event.shaped('minecraft:gold_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:gold_essence'
  })

  event.shaped('4x minecraft:glowstone_dust', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:glowstone_essence'
  })

  event.shaped('thermal:lead_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:lead_essence'
  })

  event.shaped('thermal:bronze_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:bronze_essence'
  })

  event.shaped('mekanism:ingot_osmium', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:osmium_essence'
  })

  event.shaped('powah:uraninite', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:uraninite_essence'
  })

  event.shaped('4x minecraft:coal', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:coal_essence'
  })

  event.shaped('thermal:silver_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:silver_essence'
  })

  event.shaped('tconstruct:queens_slime_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:queens_slime_essence'
  })

  event.shaped('powah:crystal_blazing', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:blazing_crystal_essence'
  })

  event.shaped('tconstruct:slimesteel_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:slimesteel_essence'
  })

  event.shaped('tconstruct:cobalt_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:cobalt_essence'
  })

  event.shaped('2x mekanism:dust_sulfur', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:sulfur_essence'
  })

  event.shaped('thermal:invar_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:invar_essence'
  })

  event.shaped('2x minecraft:netherite_scrap', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:netherite_essence'
  })

  event.shaped('mekanism:ingot_uranium', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:uranium_essence'
  })

  event.shaped('4x minecraft:redstone', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:redstone_essence'
  })

  event.shaped('4x thermal:niter_dust', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:saltpeter_essence'
  })

  event.shaped('mekanism:ingot_refined_glowstone', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:refined_glowstone_essence'
  })

  event.shaped('thermal:enderium_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:enderium_essence'
  })

  event.shaped('refinedstorage:quartz_enriched_iron', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:quartz_enriched_iron_essence'
  })

  event.shaped('tconstruct:manyullyn_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:manyullyn_essence'
  })

  event.shaped('immersiveengineering:ingot_hop_graphite', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:hop_graphite_essence'
  })

  event.shaped('thermal:electrum_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:electrum_essence'
  })

  event.shaped('tconstruct:rose_gold_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:rose_gold_essence'
  })

  event.shaped('thermal:ruby', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:ruby_essence'
  })

  event.shaped('thermal:signalum_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:signalum_essence'
  })

  event.shaped('astralsorcery:starmetal_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:starmetal_essence'
  })

  event.shaped('thermal:copper_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:copper_essence'
  })

  event.shaped('minecraft:diamond', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:diamond_essence'
  })

  event.shaped('2x mekanism:fluorite_gem', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:fluorite_essence'
  })

  event.shaped('powah:steel_energized', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:energized_steel_essence'
  })

  event.shaped('tconstruct:pig_iron_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:pig_iron_essence'
  })

  event.shaped('thermal:tin_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:tin_essence'
  })

  event.shaped('tconstruct:tinkers_bronze_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:tinkers_bronze_essence'
  })

  event.shaped('immersiveengineering:ingot_aluminum', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:aluminum_essence'
  })

  event.shaped('thermal:lumium_ingot', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:lumium_essence'
  })

  event.shaped('minecraft:emerald', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:emerald_essence'
  })

  event.shaped('draconicevolution:awakened_draconium_nugget', [
  'EEE',
  'E E',
  'EEE'
  ], {
    E: 'mysticalagriculture:awakened_draconium_essence'
  })

});
