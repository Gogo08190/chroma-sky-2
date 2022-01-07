events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "mystic_factory3",
  "controllerId": "mysticfactory3",
  "name": "Mystical Factory Tier 3",
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
      "block": "masterfulmachinery:mysticfactory3_mystical_item_port_items_input"
    },
    "2": {
      "block": "immersiveengineering:fluid_placer"
    },
    "3": {
      "block": "simplylight:illuminant_green_block_on"
    },
    ")": {
      "block": "mysticalagriculture:prudentium_gemstone_block"
    },
    "*": {
      "block": "mysticalagriculture:witherproof_block"
    },
    "+": {
      "block": "masterfulmachinery:mysticfactory3_mystical_energy_port_energy_input"
    },
    ",": {
      "block": "masterfulmachinery:mysticfactory3_mystical_item_port_items_output"
    },
    "-": {
      "block": "mysticalagriculture:witherproof_glass"
    },
    ".": {
      "block": "immersiveengineering:conveyor_basic"
    },
    "/": {
      "block": "mysticalagriculture:prudentium_reprocessor"
    }
  }
})

  function mystic(rf, input, count, output, countout) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "mystic_factory3",
      "controllerId": "mysticfactory3",
      "ticks": 50,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input,"count": count}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  mystic(1000, 'mysticalagriculture:hepatizon_essence', 8, 'tconstruct:hepatizon_ingot', 3)
  mystic(1000, 'mysticalagriculture:nether_quartz_essence', 8, 'minecraft:quartz', 6)
  mystic(1000, 'mysticalagriculture:sapphire_essence', 8, 'thermal:sapphire', 3)
  mystic(1000, 'mysticalagriculture:refined_obsidian_essence', 8, 'mekanism:ingot_refined_obsidian', 3)
  mystic(1000, 'mysticalagriculture:draconium_essence', 8, 'draconicevolution:draconium_ingot', 3)
  mystic(1000, 'mysticalagriculture:iron_essence', 8, 'minecraft:iron_ingot', 3)
  mystic(1000, 'mysticalagriculture:gold_essence', 8, 'minecraft:gold_ingot', 3)
  mystic(1000, 'mysticalagriculture:glowstone_essence', 8, 'minecraft:glowstone_dust', 6)
  mystic(1000, 'mysticalagriculture:lead_essence', 8, 'thermal:lead_ingot', 3)
  mystic(1000, 'mysticalagriculture:bronze_essence', 8, 'thermal:bronze_ingot', 3)
  mystic(1000, 'mysticalagriculture:osmium_essence', 8, 'mekanism:ingot_osmium', 3)
  mystic(1000, 'mysticalagriculture:uraninite_essence', 8, 'powah:uraninite', 3)
  mystic(1000, 'mysticalagriculture:coal_essence', 8, 'minecraft:coal', 6)
  mystic(1000, 'mysticalagriculture:silver_essence', 8, 'thermal:silver_ingot', 3)
  mystic(1000, 'mysticalagriculture:queens_slime_essence', 8, 'tconstruct:queens_slime_ingot', 3)
  mystic(1000, 'mysticalagriculture:blazing_crystal_essence', 8, 'powah:crystal_blazing', 3)
  mystic(1000, 'mysticalagriculture:slimesteel_essence', 8, 'tconstruct:slimesteel_ingot', 3)
  mystic(1000, 'mysticalagriculture:cobalt_essence', 8, 'tconstruct:cobalt_ingot', 3)
  mystic(1000, 'mysticalagriculture:sulfur_essence', 8, 'mekanism:dust_sulfur', 6)
  mystic(1000, 'mysticalagriculture:invar_essence', 8, 'thermal:invar_ingot', 3)
  mystic(1000, 'mysticalagriculture:netherite_essence', 8, 'minecraft:netherite_scrap', 3)
  mystic(1000, 'mysticalagriculture:uranium_essence', 8, 'mekanism:ingot_uranium', 3)
  mystic(1000, 'mysticalagriculture:redstone_essence', 8, 'minecraft:redstone', 6)
  mystic(1000, 'mysticalagriculture:saltpeter_essence', 8, 'thermal:niter_dust', 6)
  mystic(1000, 'mysticalagriculture:refined_glowstone_essence', 8, 'mekanism:ingot_refined_glowstone', 3)
  mystic(1000, 'mysticalagriculture:enderium_essence', 8, 'thermal:enderium_ingot', 3)
  mystic(1000, 'mysticalagriculture:quartz_enriched_iron_essence', 8, 'refinedstorage:quartz_enriched_iron', 3)
  mystic(1000, 'mysticalagriculture:manyullyn_essence', 8, 'tconstruct:manyullyn_ingot', 3)
  mystic(1000, 'mysticalagriculture:hop_graphite_essence', 8, 'immersiveengineering:ingot_hop_graphite', 3)
  mystic(1000, 'mysticalagriculture:electrum_essence', 8, 'thermal:electrum_ingot', 3)
  mystic(1000, 'mysticalagriculture:rose_gold_essence', 8, 'tconstruct:rose_gold_ingot', 3)
  mystic(1000, 'mysticalagriculture:ruby_essence', 8, 'thermal:ruby', 3)
  mystic(1000, 'mysticalagriculture:signalum_essence', 8, 'thermal:signalum_ingot', 3)
  mystic(1000, 'mysticalagriculture:starmetal_essence', 8, 'astralsorcery:starmetal_ingot', 3)
  mystic(1000, 'mysticalagriculture:copper_essence', 8, 'thermal:copper_ingot', 3)
  mystic(1000, 'mysticalagriculture:diamond_essence', 8, 'minecraft:diamond', 3)
  mystic(1000, 'mysticalagriculture:fluorite_essence', 8, 'mekanism:fluorite_gem', 6)
  mystic(1000, 'mysticalagriculture:energized_steel_essence', 8, 'powah:steel_energized', 3)
  mystic(1000, 'mysticalagriculture:pig_iron_essence', 8, 'tconstruct:pig_iron_ingot', 3)
  mystic(1000, 'mysticalagriculture:tin_essence', 8, 'thermal:tin_ingot', 3)
  mystic(1000, 'mysticalagriculture:tinkers_bronze_essence', 8, 'tconstruct:tinkers_bronze_ingot', 3)
  mystic(1000, 'mysticalagriculture:aluminum_essence', 8, 'immersiveengineering:ingot_aluminum', 3)
  mystic(1000, 'mysticalagriculture:lumium_essence', 8, 'thermal:lumium_ingot', 3)
  mystic(1000, 'mysticalagriculture:emerald_essence', 8, 'minecraft:emerald', 3)
  mystic(1000, 'mysticalagriculture:awakened_draconium_essence', 8, 'draconicevolution:awakened_draconium_nugget', 3)
})
