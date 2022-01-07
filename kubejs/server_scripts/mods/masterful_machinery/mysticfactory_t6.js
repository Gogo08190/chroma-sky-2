events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "mystic_factory6",
  "controllerId": "mysticfactory6",
  "name": "Mystical Factory Tier 6",
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
      "block": "masterfulmachinery:mysticfactory6_mystical_item_port_items_input"
    },
    "2": {
      "block": "immersiveengineering:fluid_placer"
    },
    "3": {
      "block": "simplylight:illuminant_red_block_on"
    },
    ")": {
      "block": "mysticalagriculture:supremium_gemstone_block"
    },
    "*": {
      "block": "mysticalagriculture:witherproof_block"
    },
    "+": {
      "block": "masterfulmachinery:mysticfactory6_mystical_energy_port_energy_input"
    },
    ",": {
      "block": "masterfulmachinery:mysticfactory6_mystical_item_port_items_output"
    },
    "-": {
      "block": "mysticalagriculture:witherproof_glass"
    },
    ".": {
      "block": "immersiveengineering:conveyor_basic"
    },
    "/": {
      "block": "mysticalagriculture:supremium_reprocessor"
    }
  }
})

  function mystic(rf, input, count, output, countout) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "mystic_factory6",
      "controllerId": "mysticfactory6",
      "ticks": 50,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input,"count": count}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  mystic(1750, 'mysticalagriculture:hepatizon_essence', 8, 'tconstruct:hepatizon_ingot', 6)
  mystic(1750, 'mysticalagriculture:nether_quartz_essence', 8, 'minecraft:quartz', 12)
  mystic(1750, 'mysticalagriculture:sapphire_essence', 8, 'thermal:sapphire', 6)
  mystic(1750, 'mysticalagriculture:refined_obsidian_essence', 8, 'mekanism:ingot_refined_obsidian', 6)
  mystic(1750, 'mysticalagriculture:draconium_essence', 8, 'draconicevolution:draconium_ingot', 6)
  mystic(1750, 'mysticalagriculture:iron_essence', 8, 'minecraft:iron_ingot', 6)
  mystic(1750, 'mysticalagriculture:gold_essence', 8, 'minecraft:gold_ingot', 6)
  mystic(1750, 'mysticalagriculture:glowstone_essence', 8, 'minecraft:glowstone_dust', 12)
  mystic(1750, 'mysticalagriculture:lead_essence', 8, 'thermal:lead_ingot', 6)
  mystic(1750, 'mysticalagriculture:bronze_essence', 8, 'thermal:bronze_ingot', 6)
  mystic(1750, 'mysticalagriculture:osmium_essence', 8, 'mekanism:ingot_osmium', 6)
  mystic(1750, 'mysticalagriculture:uraninite_essence', 8, 'powah:uraninite', 6)
  mystic(1750, 'mysticalagriculture:coal_essence', 8, 'minecraft:coal', 12)
  mystic(1750, 'mysticalagriculture:silver_essence', 8, 'thermal:silver_ingot', 6)
  mystic(1750, 'mysticalagriculture:queens_slime_essence', 8, 'tconstruct:queens_slime_ingot', 6)
  mystic(1750, 'mysticalagriculture:blazing_crystal_essence', 8, 'powah:crystal_blazing', 6)
  mystic(1750, 'mysticalagriculture:slimesteel_essence', 8, 'tconstruct:slimesteel_ingot', 6)
  mystic(1750, 'mysticalagriculture:cobalt_essence', 8, 'tconstruct:cobalt_ingot', 6)
  mystic(1750, 'mysticalagriculture:sulfur_essence', 8, 'mekanism:dust_sulfur', 12)
  mystic(1750, 'mysticalagriculture:invar_essence', 8, 'thermal:invar_ingot', 6)
  mystic(1750, 'mysticalagriculture:netherite_essence', 8, 'minecraft:netherite_scrap', 6)
  mystic(1750, 'mysticalagriculture:uranium_essence', 8, 'mekanism:ingot_uranium', 6)
  mystic(1750, 'mysticalagriculture:redstone_essence', 8, 'minecraft:redstone', 12)
  mystic(1750, 'mysticalagriculture:saltpeter_essence', 8, 'thermal:niter_dust', 12)
  mystic(1750, 'mysticalagriculture:refined_glowstone_essence', 8, 'mekanism:ingot_refined_glowstone', 6)
  mystic(1750, 'mysticalagriculture:enderium_essence', 8, 'thermal:enderium_ingot', 6)
  mystic(1750, 'mysticalagriculture:quartz_enriched_iron_essence', 8, 'refinedstorage:quartz_enriched_iron', 6)
  mystic(1750, 'mysticalagriculture:manyullyn_essence', 8, 'tconstruct:manyullyn_ingot', 6)
  mystic(1750, 'mysticalagriculture:hop_graphite_essence', 8, 'immersiveengineering:ingot_hop_graphite', 6)
  mystic(1750, 'mysticalagriculture:electrum_essence', 8, 'thermal:electrum_ingot', 6)
  mystic(1750, 'mysticalagriculture:rose_gold_essence', 8, 'tconstruct:rose_gold_ingot', 6)
  mystic(1750, 'mysticalagriculture:ruby_essence', 8, 'thermal:ruby', 6)
  mystic(1750, 'mysticalagriculture:signalum_essence', 8, 'thermal:signalum_ingot', 6)
  mystic(1750, 'mysticalagriculture:starmetal_essence', 8, 'astralsorcery:starmetal_ingot', 6)
  mystic(1750, 'mysticalagriculture:copper_essence', 8, 'thermal:copper_ingot', 6)
  mystic(1750, 'mysticalagriculture:diamond_essence', 8, 'minecraft:diamond', 6)
  mystic(1750, 'mysticalagriculture:fluorite_essence', 8, 'mekanism:fluorite_gem', 12)
  mystic(1750, 'mysticalagriculture:energized_steel_essence', 8, 'powah:steel_energized', 6)
  mystic(1750, 'mysticalagriculture:pig_iron_essence', 8, 'tconstruct:pig_iron_ingot', 6)
  mystic(1750, 'mysticalagriculture:tin_essence', 8, 'thermal:tin_ingot', 6)
  mystic(1750, 'mysticalagriculture:tinkers_bronze_essence', 8, 'tconstruct:tinkers_bronze_ingot', 6)
  mystic(1750, 'mysticalagriculture:aluminum_essence', 8, 'immersiveengineering:ingot_aluminum', 6)
  mystic(1750, 'mysticalagriculture:lumium_essence', 8, 'thermal:lumium_ingot', 6)
  mystic(1750, 'mysticalagriculture:emerald_essence', 8, 'minecraft:emerald', 6)
  mystic(1750, 'mysticalagriculture:awakened_draconium_essence', 8, 'draconicevolution:awakened_draconium_nugget', 6)
  })
})
