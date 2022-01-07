events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "mystic_factory5",
  "controllerId": "mysticfactory5",
  "name": "Mystical Factory Tier 5",
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
      "block": "masterfulmachinery:mysticfactory5_mystical_item_port_items_input"
    },
    "2": {
      "block": "immersiveengineering:fluid_placer"
    },
    "3": {
      "block": "simplylight:illuminant_cyan_block_on"
    },
    ")": {
      "block": "mysticalagriculture:imperium_gemstone_block"
    },
    "*": {
      "block": "mysticalagriculture:witherproof_block"
    },
    "+": {
      "block": "masterfulmachinery:mysticfactory5_mystical_energy_port_energy_input"
    },
    ",": {
      "block": "masterfulmachinery:mysticfactory5_mystical_item_port_items_output"
    },
    "-": {
      "block": "mysticalagriculture:witherproof_glass"
    },
    ".": {
      "block": "immersiveengineering:conveyor_basic"
    },
    "/": {
      "block": "mysticalagriculture:imperium_reprocessor"
    }
  }
})

  function mystic(rf, input, count, output, countout) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "mystic_factory5",
      "controllerId": "mysticfactory5",
      "ticks": 50,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input,"count": count}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  mystic(1500, 'mysticalagriculture:hepatizon_essence', 8, 'tconstruct:hepatizon_ingot', 5)
  mystic(1500, 'mysticalagriculture:nether_quartz_essence', 8, 'minecraft:quartz', 10)
  mystic(1500, 'mysticalagriculture:sapphire_essence', 8, 'thermal:sapphire', 5)
  mystic(1500, 'mysticalagriculture:refined_obsidian_essence', 8, 'mekanism:ingot_refined_obsidian', 5)
  mystic(1500, 'mysticalagriculture:draconium_essence', 8, 'draconicevolution:draconium_ingot', 5)
  mystic(1500, 'mysticalagriculture:iron_essence', 8, 'minecraft:iron_ingot', 5)
  mystic(1500, 'mysticalagriculture:gold_essence', 8, 'minecraft:gold_ingot', 5)
  mystic(1500, 'mysticalagriculture:glowstone_essence', 8, 'minecraft:glowstone_dust', 10)
  mystic(1500, 'mysticalagriculture:lead_essence', 8, 'thermal:lead_ingot', 5)
  mystic(1500, 'mysticalagriculture:bronze_essence', 8, 'thermal:bronze_ingot', 5)
  mystic(1500, 'mysticalagriculture:osmium_essence', 8, 'mekanism:ingot_osmium', 5)
  mystic(1500, 'mysticalagriculture:uraninite_essence', 8, 'powah:uraninite', 5)
  mystic(1500, 'mysticalagriculture:coal_essence', 8, 'minecraft:coal', 10)
  mystic(1500, 'mysticalagriculture:silver_essence', 8, 'thermal:silver_ingot', 5)
  mystic(1500, 'mysticalagriculture:queens_slime_essence', 8, 'tconstruct:queens_slime_ingot', 5)
  mystic(1500, 'mysticalagriculture:blazing_crystal_essence', 8, 'powah:crystal_blazing', 5)
  mystic(1500, 'mysticalagriculture:slimesteel_essence', 8, 'tconstruct:slimesteel_ingot', 5)
  mystic(1500, 'mysticalagriculture:cobalt_essence', 8, 'tconstruct:cobalt_ingot', 5)
  mystic(1500, 'mysticalagriculture:sulfur_essence', 8, 'mekanism:dust_sulfur', 10)
  mystic(1500, 'mysticalagriculture:invar_essence', 8, 'thermal:invar_ingot', 5)
  mystic(1500, 'mysticalagriculture:netherite_essence', 8, 'minecraft:netherite_scrap', 5)
  mystic(1500, 'mysticalagriculture:uranium_essence', 8, 'mekanism:ingot_uranium', 5)
  mystic(1500, 'mysticalagriculture:redstone_essence', 8, 'minecraft:redstone', 10)
  mystic(1500, 'mysticalagriculture:saltpeter_essence', 8, 'thermal:niter_dust', 10)
  mystic(1500, 'mysticalagriculture:refined_glowstone_essence', 8, 'mekanism:ingot_refined_glowstone', 5)
  mystic(1500, 'mysticalagriculture:enderium_essence', 8, 'thermal:enderium_ingot', 5)
  mystic(1500, 'mysticalagriculture:quartz_enriched_iron_essence', 8, 'refinedstorage:quartz_enriched_iron', 5)
  mystic(1500, 'mysticalagriculture:manyullyn_essence', 8, 'tconstruct:manyullyn_ingot', 5)
  mystic(1500, 'mysticalagriculture:hop_graphite_essence', 8, 'immersiveengineering:ingot_hop_graphite', 5)
  mystic(1500, 'mysticalagriculture:electrum_essence', 8, 'thermal:electrum_ingot', 5)
  mystic(1500, 'mysticalagriculture:rose_gold_essence', 8, 'tconstruct:rose_gold_ingot', 5)
  mystic(1500, 'mysticalagriculture:ruby_essence', 8, 'thermal:ruby', 5)
  mystic(1500, 'mysticalagriculture:signalum_essence', 8, 'thermal:signalum_ingot', 5)
  mystic(1500, 'mysticalagriculture:starmetal_essence', 8, 'astralsorcery:starmetal_ingot', 5)
  mystic(1500, 'mysticalagriculture:copper_essence', 8, 'thermal:copper_ingot', 5)
  mystic(1500, 'mysticalagriculture:diamond_essence', 8, 'minecraft:diamond', 5)
  mystic(1500, 'mysticalagriculture:fluorite_essence', 8, 'mekanism:fluorite_gem', 10)
  mystic(1500, 'mysticalagriculture:energized_steel_essence', 8, 'powah:steel_energized', 5)
  mystic(1500, 'mysticalagriculture:pig_iron_essence', 8, 'tconstruct:pig_iron_ingot', 5)
  mystic(1500, 'mysticalagriculture:tin_essence', 8, 'thermal:tin_ingot', 5)
  mystic(1500, 'mysticalagriculture:tinkers_bronze_essence', 8, 'tconstruct:tinkers_bronze_ingot', 5)
  mystic(1500, 'mysticalagriculture:aluminum_essence', 8, 'immersiveengineering:ingot_aluminum', 5)
  mystic(1500, 'mysticalagriculture:lumium_essence', 8, 'thermal:lumium_ingot', 5)
  mystic(1500, 'mysticalagriculture:emerald_essence', 8, 'minecraft:emerald', 5)
  mystic(1500, 'mysticalagriculture:awakened_draconium_essence', 8, 'draconicevolution:awakened_draconium_nugget', 5)
  mystic(1500, 'mysticalagriculture:spirited_crystal_essence', 9, 'powah:crystal_spirited', 5)
  mystic(1500, 'mysticalagriculture:niotic_crystal_essence', 9, 'powah:crystal_niotic', 5)
  mystic(1500, 'mysticalagriculture:nitro_crystal_essence', 9, 'powah:crystal_nitro', 5)
  mystic(1500, 'mysticalagriculture:apatite_essence', 8, 'thermal:apatite', 10)
  mystic(1500, 'mysticalagriculture:aquamarine_essence', 8, 'astralsorcery:aquamarine', 10)
  mystic(1500, 'mysticalagriculture:ender_biotite_essence', 8, 'quark:biotite', 10)
  mystic(1500, 'mysticalagriculture:lapis_lazuli_essence', 8, 'minecraft:lapis_lazuli', 10)
  mystic(1500, 'mysticalagriculture:constantan_essence', 8, 'thermal:constantan_ingot', 5)
  mystic(1500, 'mysticalagriculture:nickel_essence', 8, 'thermal:nickel_ingot', 5)
  mystic(1500, 'mysticalagriculture:steel_essence', 8, 'mekanism:ingot_steel', 5)
})
