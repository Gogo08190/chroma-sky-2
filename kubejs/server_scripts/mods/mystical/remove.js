onEvent('recipes', event => {
  event.remove({output: 'minecraft:netherite_ingot', input: 'mysticalagriculture:netherite_essence'})
  event.remove({output: 'astralsorcery:starmetal_ingot', input: 'mysticalagriculture:starmetal_essence'})
  event.remove({output: 'tconstruct:queens_slime_ingot', input: 'mysticalagriculture:queens_slime_essence'})
  event.remove({output: 'tconstruct:slimesteel_ingot', input: 'mysticalagriculture:slimesteel_essence'})
  event.remove({output: 'powah:crystal_nitro', input: 'mysticalagriculture:nitro_crystal_essence'})
  event.remove({output: 'tconstruct:rose_gold_ingot', input: 'mysticalagriculture:rose_gold_essence'})
  event.remove({output: 'mekanism:ingot_osmium', input: 'mysticalagriculture:osmium_essence'})
  event.remove({output: 'minecraft:iron_ingot', input: 'mysticalagriculture:iron_essence'})
  event.remove({output: 'tconstruct:pig_iron_ingot', input: 'mysticalagriculture:pig_iron_essence'})
  event.remove({output: 'powah:uraninite', input: 'mysticalagriculture:uraninite_essence'})
  event.remove({output: 'refinedstorage:quartz_enriched_iron', input: 'mysticalagriculture:quartz_enriched_iron_essence'})
  event.remove({output: 'tconstruct:cobalt_ingot', input: 'mysticalagriculture:cobalt_essence'})
  event.remove({output: 'powah:crystal_spirited', input: 'mysticalagriculture:spirited_crystal_essence'})
  event.remove({output: 'minecraft:redstone', input: 'mysticalagriculture:redstone_essence'})
  event.remove({output: 'mekanism:fluorite_gem', input: 'mysticalagriculture:fluorite_essence'})
  event.remove({output: 'draconicevolution:draconium_ingot', input: 'mysticalagriculture:draconium_essence'})
  event.remove({output: 'tconstruct:hepatizon_ingot', input: 'mysticalagriculture:hepatizon_essence'})
  event.remove({output: 'tconstruct:tinkers_bronze_ingot', input: 'mysticalagriculture:tinkers_bronze_essence'})
  event.remove({output: 'immersiveengineering:ingot_hop_graphite', input: 'mysticalagriculture:hop_graphite_essence'})
  event.remove({output: 'minecraft:emerald', input: 'mysticalagriculture:emerald_essence'})
  event.remove({output: 'powah:crystal_niotic', input: 'mysticalagriculture:niotic_crystal_essence'})
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
  event.remove({output: 'thermal:constantan_ingot', input: 'mysticalagriculture:constantan_essence'})
  event.remove({output: 'thermal:nickel_ingot', input: 'mysticalagriculture:nickel_essence'})
  event.remove({output: 'mekanism:ingot_steel', input: 'mysticalagriculture:steel_essence'})
  event.remove({output: 'minecraft:lapis_lazuli', input: 'mysticalagriculture:lapis_lazuli_essence'})
  event.remove({output: 'quark:biotite', input: 'mysticalagriculture:ender_biotite_essence'})
  event.remove({output: 'astralsorcery:aquamarine', input: 'mysticalagriculture:aquamarine_essence'})
  event.remove({output: 'thermal:apatite', input: 'mysticalagriculture:apatite_essence'})
  event.remove({output: 'refinedstorage:silicon', input: 'mysticalagriculture:silicon_essence'})

  event.remove({ output: 'mysticalagriculture:infusion_altar' })
  event.remove({ output: 'mysticalagriculture:infusion_pedestal' })
  event.remove({ output: 'mysticalagriculture:prosperity_seed_base' })
  event.remove({ output: 'mysticalagriculture:soulium_seed_base' })
  event.remove({ output: 'mysticalagriculture:inferium_seeds' })


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
    'ruby',
    'steel',
    'nickel',
    'constantan',
    'apatite'
  ]

  essence.forEach(function (item, index) {
    event.remove({id: "mysticalagriculture:essence/common/" + item +"_ingot"})
    event.remove({id: "mysticalagriculture:essence/common/" + item})
    event.remove({id: "mysticalagriculture:essence/thermal/" + item +"_ingot"})
    event.remove({id: "mysticalagriculture:essence/gems/" + item})
  });
});
