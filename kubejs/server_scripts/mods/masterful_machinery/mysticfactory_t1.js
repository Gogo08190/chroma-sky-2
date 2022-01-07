events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "mystic_factory1",
  "controllerId": "mysticfactory1",
  "name": "Mystical Factory Tier 1",
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
      "block": "masterfulmachinery:mysticfactory1_mystical_item_port_items_input"
    },
    "2": {
      "block": "immersiveengineering:fluid_placer"
    },
    "3": {
      "block": "simplylight:illuminant_block_on"
    },
    ")": {
      "block": "mysticalagriculture:prosperity_gemstone_block"
    },
    "*": {
      "block": "mysticalagriculture:witherproof_block"
    },
    "+": {
      "block": "masterfulmachinery:mysticfactory1_mystical_energy_port_energy_input"
    },
    ",": {
      "block": "masterfulmachinery:mysticfactory1_mystical_item_port_items_output"
    },
    "-": {
      "block": "mysticalagriculture:witherproof_glass"
    },
    ".": {
      "block": "immersiveengineering:conveyor_basic"
    },
    "/": {
      "block": "mysticalagriculture:basic_reprocessor"
    }
  }
})

  function mystic(rf, input, count, output, countout) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "mystic_factory1",
      "controllerId": "mysticfactory1",
      "ticks": 50,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input,"count": count}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  mystic(500, 'mysticalagriculture:hepatizon_essence', 8, 'tconstruct:hepatizon_ingot', 1)
  mystic(500, 'mysticalagriculture:nether_quartz_essence', 8, 'minecraft:quartz', 2)
  mystic(500, 'mysticalagriculture:sapphire_essence', 8, 'thermal:sapphire', 1)
  mystic(500, 'mysticalagriculture:refined_obsidian_essence', 8, 'mekanism:ingot_refined_obsidian', 1)
  mystic(500, 'mysticalagriculture:draconium_essence', 8, 'draconicevolution:draconium_ingot', 1)
  mystic(500, 'mysticalagriculture:iron_essence', 8, 'minecraft:iron_ingot', 1)
  mystic(500, 'mysticalagriculture:gold_essence', 8, 'minecraft:gold_ingot', 1)
  mystic(500, 'mysticalagriculture:glowstone_essence', 8, 'minecraft:glowstone_dust', 2)
  mystic(500, 'mysticalagriculture:lead_essence', 8, 'thermal:lead_ingot', 1)
  mystic(500, 'mysticalagriculture:bronze_essence', 8, 'thermal:bronze_ingot', 1)
  mystic(500, 'mysticalagriculture:osmium_essence', 8, 'mekanism:ingot_osmium', 1)
  mystic(500, 'mysticalagriculture:uraninite_essence', 8, 'powah:uraninite', 1)
  mystic(500, 'mysticalagriculture:coal_essence', 8, 'minecraft:coal', 2)
  mystic(500, 'mysticalagriculture:silver_essence', 8, 'thermal:silver_ingot', 1)
  mystic(500, 'mysticalagriculture:queens_slime_essence', 8, 'tconstruct:queens_slime_ingot', 1)
  mystic(500, 'mysticalagriculture:blazing_crystal_essence', 8, 'powah:crystal_blazing', 1)
  mystic(500, 'mysticalagriculture:slimesteel_essence', 8, 'tconstruct:slimesteel_ingot', 1)
  mystic(500, 'mysticalagriculture:cobalt_essence', 8, 'tconstruct:cobalt_ingot', 1)
  mystic(500, 'mysticalagriculture:sulfur_essence', 8, 'mekanism:dust_sulfur', 2)
  mystic(500, 'mysticalagriculture:invar_essence', 8, 'thermal:invar_ingot', 1)
  mystic(500, 'mysticalagriculture:netherite_essence', 8, 'minecraft:netherite_scrap', 1)
  mystic(500, 'mysticalagriculture:uranium_essence', 8, 'mekanism:ingot_uranium', 1)
  mystic(500, 'mysticalagriculture:redstone_essence', 8, 'minecraft:redstone', 2)
  mystic(500, 'mysticalagriculture:saltpeter_essence', 8, 'thermal:niter_dust', 2)
  mystic(500, 'mysticalagriculture:refined_glowstone_essence', 8, 'mekanism:ingot_refined_glowstone', 1)
  mystic(500, 'mysticalagriculture:enderium_essence', 8, 'thermal:enderium_ingot', 1)
  mystic(500, 'mysticalagriculture:quartz_enriched_iron_essence', 8, 'refinedstorage:quartz_enriched_iron', 1)
  mystic(500, 'mysticalagriculture:manyullyn_essence', 8, 'tconstruct:manyullyn_ingot', 1)
  mystic(500, 'mysticalagriculture:hop_graphite_essence', 8, 'immersiveengineering:ingot_hop_graphite', 1)
  mystic(500, 'mysticalagriculture:electrum_essence', 8, 'thermal:electrum_ingot', 1)
  mystic(500, 'mysticalagriculture:rose_gold_essence', 8, 'tconstruct:rose_gold_ingot', 1)
  mystic(500, 'mysticalagriculture:ruby_essence', 8, 'thermal:ruby', 1)
  mystic(500, 'mysticalagriculture:signalum_essence', 8, 'thermal:signalum_ingot', 1)
  mystic(500, 'mysticalagriculture:starmetal_essence', 8, 'astralsorcery:starmetal_ingot', 1)
  mystic(500, 'mysticalagriculture:copper_essence', 8, 'thermal:copper_ingot', 1)
  mystic(500, 'mysticalagriculture:diamond_essence', 8, 'minecraft:diamond', 1)
  mystic(500, 'mysticalagriculture:fluorite_essence', 8, 'mekanism:fluorite_gem', 2)
  mystic(500, 'mysticalagriculture:energized_steel_essence', 8, 'powah:steel_energized', 1)
  mystic(500, 'mysticalagriculture:pig_iron_essence', 8, 'tconstruct:pig_iron_ingot', 1)
  mystic(500, 'mysticalagriculture:tin_essence', 8, 'thermal:tin_ingot', 1)
  mystic(500, 'mysticalagriculture:tinkers_bronze_essence', 8, 'tconstruct:tinkers_bronze_ingot', 1)
  mystic(500, 'mysticalagriculture:aluminum_essence', 8, 'immersiveengineering:ingot_aluminum', 1)
  mystic(500, 'mysticalagriculture:lumium_essence', 8, 'thermal:lumium_ingot', 1)
  mystic(500, 'mysticalagriculture:emerald_essence', 8, 'minecraft:emerald', 1)
  mystic(500, 'mysticalagriculture:awakened_draconium_essence', 8, 'draconicevolution:awakened_draconium_nugget', 1)
})
