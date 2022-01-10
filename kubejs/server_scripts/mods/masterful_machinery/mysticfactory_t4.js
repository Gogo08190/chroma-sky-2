events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "mystic_factory4",
  "controllerId": "mysticfactory4",
  "name": "Mystical Factory Tier 4",
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
      "block": "masterfulmachinery:mysticfactory4_mystical_item_port_items_input"
    },
    "2": {
      "block": "immersiveengineering:fluid_placer"
    },
    "3": {
      "block": "simplylight:illuminant_orange_block_on"
    },
    ")": {
      "block": "mysticalagriculture:tertium_gemstone_block"
    },
    "*": {
      "block": "mysticalagriculture:witherproof_block"
    },
    "+": {
      "block": "masterfulmachinery:mysticfactory4_mystical_energy_port_energy_input"
    },
    ",": {
      "block": "masterfulmachinery:mysticfactory4_mystical_item_port_items_output"
    },
    "-": {
      "block": "mysticalagriculture:witherproof_glass"
    },
    ".": {
      "block": "immersiveengineering:conveyor_basic"
    },
    "/": {
      "block": "mysticalagriculture:tertium_reprocessor"
    }
  }
})

  function mystic(rf, input, count, output, countout) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "mystic_factory4",
      "controllerId": "mysticfactory4",
      "ticks": 20,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input,"count": count}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  mystic(1250, 'mysticalagriculture:hepatizon_essence', 8, 'tconstruct:hepatizon_ingot', 4)
  mystic(1250, 'mysticalagriculture:nether_quartz_essence', 8, 'minecraft:quartz', 8)
  mystic(1250, 'mysticalagriculture:sapphire_essence', 8, 'thermal:sapphire', 4)
  mystic(1250, 'mysticalagriculture:refined_obsidian_essence', 8, 'mekanism:ingot_refined_obsidian', 4)
  mystic(1250, 'mysticalagriculture:draconium_essence', 8, 'draconicevolution:draconium_ingot', 4)
  mystic(1250, 'mysticalagriculture:iron_essence', 8, 'minecraft:iron_ingot', 4)
  mystic(1250, 'mysticalagriculture:gold_essence', 8, 'minecraft:gold_ingot', 4)
  mystic(1250, 'mysticalagriculture:glowstone_essence', 8, 'minecraft:glowstone_dust', 8)
  mystic(1250, 'mysticalagriculture:lead_essence', 8, 'thermal:lead_ingot', 4)
  mystic(1250, 'mysticalagriculture:bronze_essence', 8, 'thermal:bronze_ingot', 4)
  mystic(1250, 'mysticalagriculture:osmium_essence', 8, 'mekanism:ingot_osmium', 4)
  mystic(1250, 'mysticalagriculture:uraninite_essence', 8, 'powah:uraninite', 4)
  mystic(1250, 'mysticalagriculture:coal_essence', 8, 'minecraft:coal', 8)
  mystic(1250, 'mysticalagriculture:silver_essence', 8, 'thermal:silver_ingot', 4)
  mystic(1250, 'mysticalagriculture:queens_slime_essence', 8, 'tconstruct:queens_slime_ingot', 4)
  mystic(1250, 'mysticalagriculture:blazing_crystal_essence', 8, 'powah:crystal_blazing', 4)
  mystic(1250, 'mysticalagriculture:slimesteel_essence', 8, 'tconstruct:slimesteel_ingot', 4)
  mystic(1250, 'mysticalagriculture:cobalt_essence', 8, 'tconstruct:cobalt_ingot', 4)
  mystic(1250, 'mysticalagriculture:sulfur_essence', 8, 'mekanism:dust_sulfur', 8)
  mystic(1250, 'mysticalagriculture:invar_essence', 8, 'thermal:invar_ingot', 4)
  mystic(1250, 'mysticalagriculture:netherite_essence', 8, 'minecraft:netherite_scrap', 4)
  mystic(1250, 'mysticalagriculture:uranium_essence', 8, 'mekanism:ingot_uranium', 4)
  mystic(1250, 'mysticalagriculture:redstone_essence', 8, 'minecraft:redstone', 8)
  mystic(1250, 'mysticalagriculture:saltpeter_essence', 8, 'thermal:niter_dust', 8)
  mystic(1250, 'mysticalagriculture:refined_glowstone_essence', 8, 'mekanism:ingot_refined_glowstone', 4)
  mystic(1250, 'mysticalagriculture:enderium_essence', 8, 'thermal:enderium_ingot', 4)
  mystic(1250, 'mysticalagriculture:quartz_enriched_iron_essence', 8, 'refinedstorage:quartz_enriched_iron', 4)
  mystic(1250, 'mysticalagriculture:manyullyn_essence', 8, 'tconstruct:manyullyn_ingot', 4)
  mystic(1250, 'mysticalagriculture:hop_graphite_essence', 8, 'immersiveengineering:ingot_hop_graphite', 4)
  mystic(1250, 'mysticalagriculture:electrum_essence', 8, 'thermal:electrum_ingot', 4)
  mystic(1250, 'mysticalagriculture:rose_gold_essence', 8, 'tconstruct:rose_gold_ingot', 4)
  mystic(1250, 'mysticalagriculture:ruby_essence', 8, 'thermal:ruby', 4)
  mystic(1250, 'mysticalagriculture:signalum_essence', 8, 'thermal:signalum_ingot', 4)
  mystic(1250, 'mysticalagriculture:starmetal_essence', 8, 'astralsorcery:starmetal_ingot', 4)
  mystic(1250, 'mysticalagriculture:copper_essence', 8, 'thermal:copper_ingot', 4)
  mystic(1250, 'mysticalagriculture:diamond_essence', 8, 'minecraft:diamond', 4)
  mystic(1250, 'mysticalagriculture:fluorite_essence', 8, 'mekanism:fluorite_gem', 8)
  mystic(1250, 'mysticalagriculture:energized_steel_essence', 8, 'powah:steel_energized', 4)
  mystic(1250, 'mysticalagriculture:pig_iron_essence', 8, 'tconstruct:pig_iron_ingot', 4)
  mystic(1250, 'mysticalagriculture:tin_essence', 8, 'thermal:tin_ingot', 4)
  mystic(1250, 'mysticalagriculture:tinkers_bronze_essence', 8, 'tconstruct:tinkers_bronze_ingot', 4)
  mystic(1250, 'mysticalagriculture:aluminum_essence', 8, 'immersiveengineering:ingot_aluminum', 4)
  mystic(1250, 'mysticalagriculture:lumium_essence', 8, 'thermal:lumium_ingot', 4)
  mystic(1250, 'mysticalagriculture:emerald_essence', 8, 'minecraft:emerald', 4)
  mystic(1250, 'mysticalagriculture:awakened_draconium_essence', 8, 'draconicevolution:awakened_draconium_nugget', 4)
  mystic(1250, 'mysticalagriculture:spirited_crystal_essence', 9, 'powah:crystal_spirited', 4)
  mystic(1250, 'mysticalagriculture:niotic_crystal_essence', 9, 'powah:crystal_niotic', 4)
  mystic(1250, 'mysticalagriculture:nitro_crystal_essence', 9, 'powah:crystal_nitro', 4)
  mystic(1250, 'mysticalagriculture:apatite_essence', 8, 'thermal:apatite', 8)
  mystic(1250, 'mysticalagriculture:aquamarine_essence', 8, 'astralsorcery:aquamarine', 8)
  mystic(1250, 'mysticalagriculture:ender_biotite_essence', 8, 'quark:biotite', 8)
  mystic(1250, 'mysticalagriculture:lapis_lazuli_essence', 8, 'minecraft:lapis_lazuli', 8)
  mystic(1250, 'mysticalagriculture:constantan_essence', 8, 'thermal:constantan_ingot', 4)
  mystic(1250, 'mysticalagriculture:nickel_essence', 8, 'thermal:nickel_ingot', 4)
  mystic(1250, 'mysticalagriculture:steel_essence', 8, 'mekanism:ingot_steel', 4)
})
