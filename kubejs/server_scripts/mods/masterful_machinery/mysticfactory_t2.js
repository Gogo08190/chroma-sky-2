events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "mystic_factory2",
  "controllerId": "mysticfactory2",
  "name": "Mystical Factory Tier 2",
  "layout": [
    [
      "))))+))))",
      ")*******)",
      "))))C))))"
    ],
    [
      ")-------)",
      "1./.0./.,",
      ")-------)"
    ],
    [
      ")-------)",
      "2       2",
      ")-------)"
    ],
    [
      ")))))))))",
      ")*3*3*3*)",
      ")))))))))"
    ]
  ],
  "legend": {
    "0": {
      "block": "thermal:machine_crafter"
    },
    "1": {
      "block": "masterfulmachinery:mysticfactory2_mystical_item_port_items_input"
    },
    "2": {
      "block": "immersiveengineering:fluid_placer"
    },
    "3": {
      "block": "simplylight:illuminant_lime_block_on"
    },
    ")": {
      "block": "mysticalagriculture:inferium_gemstone_block"
    },
    "*": {
      "block": "mysticalagriculture:witherproof_block"
    },
    "+": {
      "block": "masterfulmachinery:mysticfactory2_mystical_energy_port_energy_input"
    },
    ",": {
      "block": "masterfulmachinery:mysticfactory2_mystical_item_port_items_output"
    },
    "-": {
      "block": "mysticalagriculture:witherproof_glass"
    },
    ".": {
      "block": "immersiveengineering:conveyor_basic"
    },
    "/": {
      "block": "mysticalagriculture:inferium_reprocessor"
    }
  }
})

  function mystic(rf, input, count, output, countout) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "mystic_factory2",
      "controllerId": "mysticfactory2",
      "ticks": 20,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input,"count": count}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  mystic(750, 'mysticalagriculture:hepatizon_essence', 8, 'tconstruct:hepatizon_ingot', 2)
  mystic(750, 'mysticalagriculture:nether_quartz_essence', 8, 'minecraft:quartz', 4)
  mystic(750, 'mysticalagriculture:sapphire_essence', 8, 'thermal:sapphire', 2)
  mystic(750, 'mysticalagriculture:refined_obsidian_essence', 8, 'mekanism:ingot_refined_obsidian', 2)
  mystic(750, 'mysticalagriculture:draconium_essence', 8, 'draconicevolution:draconium_ingot', 2)
  mystic(750, 'mysticalagriculture:iron_essence', 8, 'minecraft:iron_ingot', 2)
  mystic(750, 'mysticalagriculture:gold_essence', 8, 'minecraft:gold_ingot', 2)
  mystic(750, 'mysticalagriculture:glowstone_essence', 8, 'minecraft:glowstone_dust', 4)
  mystic(750, 'mysticalagriculture:lead_essence', 8, 'thermal:lead_ingot', 2)
  mystic(750, 'mysticalagriculture:bronze_essence', 8, 'thermal:bronze_ingot', 2)
  mystic(750, 'mysticalagriculture:osmium_essence', 8, 'mekanism:ingot_osmium', 2)
  mystic(750, 'mysticalagriculture:uraninite_essence', 8, 'powah:uraninite', 2)
  mystic(750, 'mysticalagriculture:coal_essence', 8, 'minecraft:coal', 4)
  mystic(750, 'mysticalagriculture:silver_essence', 8, 'thermal:silver_ingot', 2)
  mystic(750, 'mysticalagriculture:queens_slime_essence', 8, 'tconstruct:queens_slime_ingot', 2)
  mystic(750, 'mysticalagriculture:blazing_crystal_essence', 8, 'powah:crystal_blazing', 2)
  mystic(750, 'mysticalagriculture:slimesteel_essence', 8, 'tconstruct:slimesteel_ingot', 2)
  mystic(750, 'mysticalagriculture:cobalt_essence', 8, 'tconstruct:cobalt_ingot', 2)
  mystic(750, 'mysticalagriculture:sulfur_essence', 8, 'mekanism:dust_sulfur', 4)
  mystic(750, 'mysticalagriculture:invar_essence', 8, 'thermal:invar_ingot', 2)
  mystic(750, 'mysticalagriculture:netherite_essence', 8, 'minecraft:netherite_scrap', 2)
  mystic(750, 'mysticalagriculture:uranium_essence', 8, 'mekanism:ingot_uranium', 2)
  mystic(750, 'mysticalagriculture:redstone_essence', 8, 'minecraft:redstone', 4)
  mystic(750, 'mysticalagriculture:saltpeter_essence', 8, 'thermal:niter_dust', 4)
  mystic(750, 'mysticalagriculture:refined_glowstone_essence', 8, 'mekanism:ingot_refined_glowstone', 2)
  mystic(750, 'mysticalagriculture:enderium_essence', 8, 'thermal:enderium_ingot', 2)
  mystic(750, 'mysticalagriculture:quartz_enriched_iron_essence', 8, 'refinedstorage:quartz_enriched_iron', 2)
  mystic(750, 'mysticalagriculture:manyullyn_essence', 8, 'tconstruct:manyullyn_ingot', 2)
  mystic(750, 'mysticalagriculture:hop_graphite_essence', 8, 'immersiveengineering:ingot_hop_graphite', 2)
  mystic(750, 'mysticalagriculture:electrum_essence', 8, 'thermal:electrum_ingot', 2)
  mystic(750, 'mysticalagriculture:rose_gold_essence', 8, 'tconstruct:rose_gold_ingot', 2)
  mystic(750, 'mysticalagriculture:ruby_essence', 8, 'thermal:ruby', 2)
  mystic(750, 'mysticalagriculture:signalum_essence', 8, 'thermal:signalum_ingot', 2)
  mystic(750, 'mysticalagriculture:starmetal_essence', 8, 'astralsorcery:starmetal_ingot', 2)
  mystic(750, 'mysticalagriculture:copper_essence', 8, 'thermal:copper_ingot', 2)
  mystic(750, 'mysticalagriculture:diamond_essence', 8, 'minecraft:diamond', 2)
  mystic(750, 'mysticalagriculture:fluorite_essence', 8, 'mekanism:fluorite_gem', 4)
  mystic(750, 'mysticalagriculture:energized_steel_essence', 8, 'powah:steel_energized', 2)
  mystic(750, 'mysticalagriculture:pig_iron_essence', 8, 'tconstruct:pig_iron_ingot', 2)
  mystic(750, 'mysticalagriculture:tin_essence', 8, 'thermal:tin_ingot', 2)
  mystic(750, 'mysticalagriculture:tinkers_bronze_essence', 8, 'tconstruct:tinkers_bronze_ingot', 2)
  mystic(750, 'mysticalagriculture:aluminum_essence', 8, 'immersiveengineering:ingot_aluminum', 2)
  mystic(750, 'mysticalagriculture:lumium_essence', 8, 'thermal:lumium_ingot', 2)
  mystic(750, 'mysticalagriculture:emerald_essence', 8, 'minecraft:emerald', 2)
  mystic(750, 'mysticalagriculture:awakened_draconium_essence', 8, 'draconicevolution:awakened_draconium_nugget', 2)
  mystic(750, 'mysticalagriculture:spirited_crystal_essence', 9, 'powah:crystal_spirited', 2)
  mystic(750, 'mysticalagriculture:niotic_crystal_essence', 9, 'powah:crystal_niotic', 2)
  mystic(750, 'mysticalagriculture:nitro_crystal_essence', 9, 'powah:crystal_nitro', 2)
  mystic(750, 'mysticalagriculture:apatite_essence', 8, 'thermal:apatite', 4)
  mystic(750, 'mysticalagriculture:aquamarine_essence', 8, 'astralsorcery:aquamarine', 4)
  mystic(750, 'mysticalagriculture:ender_biotite_essence', 8, 'quark:biotite', 4)
  mystic(750, 'mysticalagriculture:lapis_lazuli_essence', 8, 'minecraft:lapis_lazuli', 4)
  mystic(750, 'mysticalagriculture:constantan_essence', 8, 'thermal:constantan_ingot', 2)
  mystic(750, 'mysticalagriculture:nickel_essence', 8, 'thermal:nickel_ingot', 2)
  mystic(750, 'mysticalagriculture:steel_essence', 8, 'mekanism:ingot_steel', 2)
  mystic(750, 'mysticalagriculture:silicon_essence', 3, 'refinedstorage:silicon', 4)
})
