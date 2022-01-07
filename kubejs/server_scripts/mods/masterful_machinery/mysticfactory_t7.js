events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "mystic_factory7",
  "controllerId": "mysticfactory7",
  "name": "Mystical Factory Tier 7",
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
      "block": "masterfulmachinery:mysticfactory7_mystical_item_port_items_input"
    },
    "2": {
      "block": "immersiveengineering:fluid_placer"
    },
    "3": {
      "block": "simplylight:illuminant_magenta_block_on"
    },
    ")": {
      "block": "mysticalagradditions:insanium_gemstone_block"
    },
    "*": {
      "block": "mysticalagriculture:witherproof_block"
    },
    "+": {
      "block": "masterfulmachinery:mysticfactory7_mystical_energy_port_energy_input"
    },
    ",": {
      "block": "masterfulmachinery:mysticfactory7_mystical_item_port_items_output"
    },
    "-": {
      "block": "mysticalagriculture:witherproof_glass"
    },
    ".": {
      "block": "immersiveengineering:conveyor_basic"
    },
    "/": {
      "block": "mysticaladaptations:insanium_reprocessor"
    }
  }
})

  function mystic(rf, input, count, output, countout) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "mystic_factory7",
      "controllerId": "mysticfactory7",
      "ticks": 50,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input,"count": count}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  mystic(2000, 'mysticalagriculture:hepatizon_essence', 8, 'tconstruct:hepatizon_ingot', 7)
  mystic(2000, 'mysticalagriculture:nether_quartz_essence', 8, 'minecraft:quartz', 14)
  mystic(2000, 'mysticalagriculture:sapphire_essence', 8, 'thermal:sapphire', 7)
  mystic(2000, 'mysticalagriculture:refined_obsidian_essence', 8, 'mekanism:ingot_refined_obsidian', 7)
  mystic(2000, 'mysticalagriculture:draconium_essence', 8, 'draconicevolution:draconium_ingot', 7)
  mystic(2000, 'mysticalagriculture:iron_essence', 8, 'minecraft:iron_ingot', 7)
  mystic(2000, 'mysticalagriculture:gold_essence', 8, 'minecraft:gold_ingot', 7)
  mystic(2000, 'mysticalagriculture:glowstone_essence', 8, 'minecraft:glowstone_dust', 14)
  mystic(2000, 'mysticalagriculture:lead_essence', 8, 'thermal:lead_ingot', 7)
  mystic(2000, 'mysticalagriculture:bronze_essence', 8, 'thermal:bronze_ingot', 7)
  mystic(2000, 'mysticalagriculture:osmium_essence', 8, 'mekanism:ingot_osmium', 7)
  mystic(2000, 'mysticalagriculture:uraninite_essence', 8, 'powah:uraninite', 7)
  mystic(2000, 'mysticalagriculture:coal_essence', 8, 'minecraft:coal', 14)
  mystic(2000, 'mysticalagriculture:silver_essence', 8, 'thermal:silver_ingot', 7)
  mystic(2000, 'mysticalagriculture:queens_slime_essence', 8, 'tconstruct:queens_slime_ingot', 7)
  mystic(2000, 'mysticalagriculture:blazing_crystal_essence', 8, 'powah:crystal_blazing', 7)
  mystic(2000, 'mysticalagriculture:slimesteel_essence', 8, 'tconstruct:slimesteel_ingot', 7)
  mystic(2000, 'mysticalagriculture:cobalt_essence', 8, 'tconstruct:cobalt_ingot', 7)
  mystic(2000, 'mysticalagriculture:sulfur_essence', 8, 'mekanism:dust_sulfur', 14)
  mystic(2000, 'mysticalagriculture:invar_essence', 8, 'thermal:invar_ingot', 7)
  mystic(2000, 'mysticalagriculture:netherite_essence', 8, 'minecraft:netherite_scrap', 7)
  mystic(2000, 'mysticalagriculture:uranium_essence', 8, 'mekanism:ingot_uranium', 7)
  mystic(2000, 'mysticalagriculture:redstone_essence', 8, 'minecraft:redstone', 14)
  mystic(2000, 'mysticalagriculture:saltpeter_essence', 8, 'thermal:niter_dust', 14)
  mystic(2000, 'mysticalagriculture:refined_glowstone_essence', 8, 'mekanism:ingot_refined_glowstone', 7)
  mystic(2000, 'mysticalagriculture:enderium_essence', 8, 'thermal:enderium_ingot', 7)
  mystic(2000, 'mysticalagriculture:quartz_enriched_iron_essence', 8, 'refinedstorage:quartz_enriched_iron', 7)
  mystic(2000, 'mysticalagriculture:manyullyn_essence', 8, 'tconstruct:manyullyn_ingot', 7)
  mystic(2000, 'mysticalagriculture:hop_graphite_essence', 8, 'immersiveengineering:ingot_hop_graphite', 7)
  mystic(2000, 'mysticalagriculture:electrum_essence', 8, 'thermal:electrum_ingot', 7)
  mystic(2000, 'mysticalagriculture:rose_gold_essence', 8, 'tconstruct:rose_gold_ingot', 7)
  mystic(2000, 'mysticalagriculture:ruby_essence', 8, 'thermal:ruby', 7)
  mystic(2000, 'mysticalagriculture:signalum_essence', 8, 'thermal:signalum_ingot', 7)
  mystic(2000, 'mysticalagriculture:starmetal_essence', 8, 'astralsorcery:starmetal_ingot', 7)
  mystic(2000, 'mysticalagriculture:copper_essence', 8, 'thermal:copper_ingot', 7)
  mystic(2000, 'mysticalagriculture:diamond_essence', 8, 'minecraft:diamond', 7)
  mystic(2000, 'mysticalagriculture:fluorite_essence', 8, 'mekanism:fluorite_gem', 14)
  mystic(2000, 'mysticalagriculture:energized_steel_essence', 8, 'powah:steel_energized', 7)
  mystic(2000, 'mysticalagriculture:pig_iron_essence', 8, 'tconstruct:pig_iron_ingot', 7)
  mystic(2000, 'mysticalagriculture:tin_essence', 8, 'thermal:tin_ingot', 7)
  mystic(2000, 'mysticalagriculture:tinkers_bronze_essence', 8, 'tconstruct:tinkers_bronze_ingot', 7)
  mystic(2000, 'mysticalagriculture:aluminum_essence', 8, 'immersiveengineering:ingot_aluminum', 7)
  mystic(2000, 'mysticalagriculture:lumium_essence', 8, 'thermal:lumium_ingot', 7)
  mystic(2000, 'mysticalagriculture:emerald_essence', 8, 'minecraft:emerald', 7)
  mystic(2000, 'mysticalagriculture:awakened_draconium_essence', 8, 'draconicevolution:awakened_draconium_nugget', 7)
})
