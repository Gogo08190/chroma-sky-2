events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "assembling_factory",
  "controllerId": "assemblingfactory",
  "name": "Assembling Factory",
  "layout": [
    [
      ")))+)))",
      ")*****)",
      ")))C)))"
    ],
    [
      ")-----)",
      "/.....,",
      ")-----)"
    ],
    [
      ")-----)",
      "0 1 1 0",
      ")-----)"
    ],
    [
      ")))))))",
      ")*****)",
      ")))))))"
    ]
  ],
  "legend": {
    "0": {
      "block": "immersiveengineering:radiator"
    },
    "1": {
      "block": "miniutilities:laser_port"
    },
    ")": {
      "block": "immersiveengineering:sheetmetal_steel"
    },
    "*": {
      "block": "mekanism:block_steel"
    },
    "+": {
      "block": "masterfulmachinery:assemblingfactory_assemblingenergy_port_energy_input"
    },
    ",": {
      "block": "masterfulmachinery:assemblingfactory_assembing_item_port_items_output"
    },
    "-": {
      "block": "thermal:obsidian_glass"
    },
    ".": {
      "block": "immersiveengineering:conveyor_basic"
    },
    "/": {
      "block": "masterfulmachinery:assemblingfactory_assembing_item_port_items_input"
    }
  }
})

  function assembling3(ticks, rf, input1, count1, input2, count2, input3, count3, output) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "assembling_factory",
      "controllerId": "assemblingfactory",
      "ticks": ticks,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
          {"type": "masterfulmachinery:items","data": {"item": input2,"count": count2}},
          {"type": "masterfulmachinery:items","data": {"item": input3,"count": count3}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": 1}}]
    })
  }

  function assembling4(ticks, rf, input1, count1, input2, count2, input3, count3, input4, count4, output) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "assembling_factory",
      "controllerId": "assemblingfactory",
      "ticks": ticks,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
          {"type": "masterfulmachinery:items","data": {"item": input2,"count": count2}},
          {"type": "masterfulmachinery:items","data": {"item": input3,"count": count3}},
          {"type": "masterfulmachinery:items","data": {"item": input4,"count": count4}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": 1}}]
    })
  }

  function assembling5(ticks, rf, input1, count1, input2, count2, input3, count3, input4, count4, input5, count5, output) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "assembling_factory",
      "controllerId": "assemblingfactory",
      "ticks": ticks,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
          {"type": "masterfulmachinery:items","data": {"item": input2,"count": count2}},
          {"type": "masterfulmachinery:items","data": {"item": input3,"count": count3}},
          {"type": "masterfulmachinery:items","data": {"item": input4,"count": count4}},
          {"type": "masterfulmachinery:items","data": {"item": input5,"count": count5}},
          {"type": "masterfulmachinery:energy","data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": 1}}]
    })
  }

  // 3 Inputs
  assembling3(20, 2000, 'chromasky:bottom_frame', 1, 'chromasky:mechanic_core_tier_1', 1, 'chromasky:top_frame', 1, 'thermal:machine_frame')
  assembling3(40, 50000, 'refinedstorage:quartz_enriched_iron', 4, 'immersiveengineering:component_steel', 4, 'chromasky:mechanic_core_tier_3', 1, 'refinedstorage:machine_casing')
  assembling3(20, 10000, 'mekanism:ingot_steel', 4, 'immersiveengineering:treated_wood_horizontal', 4, 'chromasky:mechanic_core_tier_2', 1, 'industrialforegoing:machine_frame_pity')
  assembling3(20, 100000, 'mekanism:ingot_steel', 4, 'mekanism:ingot_osmium', 4, 'chromasky:mechanic_core_tier_4', 1, 'mekanism:steel_casing')
  assembling3(20, 100000, 'krate:krate_basic', 4, 'minecraft:obsidian', 4, 'minecraft:ender_pearl', 4, 'entangled:block')

  // 4 Inputs
  assembling4(20, 10000, 'mekanism:ingot_steel', 4, 'thermal:lapis_gear', 2, 'thermal:gold_plate', 2, 'chromasky:mechanic_core_tier_2', 1, 'rftoolsbase:machine_frame')
  assembling4(20, 20000, 'mekanism:ingot_steel', 4, 'powah:dielectric_rod', 2, 'powah:dielectric_rod_horizontal', 2, 'chromasky:mechanic_core_tier_3', 1, 'powah:dielectric_casing')
  assembling4(40, 100000, 'extendedcrafting:redstone_ingot_block', 8, 'powah:blazing_crystal_block', 8, 'powah:energized_steel_block', 8, 'extendedcrafting:pedestal', 1, 'mysticalagriculture:infusion_pedestal')
  assembling4(20, 5000, 'mob_grinding_utils:saw', 1, 'thermal:machine_frame', 1, 'extendedcrafting:redstone_ingot_block', 1, 'minecraft:iron_bars', 16, 'cagedmobs:mobcage')

  // 5 Inputs
  assembling5(20, 2000, 'thermal:electrum_plate', 2, 'thermal:redstone_servo', 1, 'thermal:rf_coil', 2, 'immersiveengineering:coil_hv', 1, 'extendedcrafting:redstone_ingot', 3, 'chromasky:excitationcoil')
  assembling5(80, 1000000, 'extendedcrafting:redstone_ingot_block', 64, 'powah:blazing_crystal_block', 64, 'powah:energized_steel_block', 64, 'immersiveengineering:rs_engineering', 3, 'naturesaura:nature_altar', 1, 'mysticalagriculture:infusion_altar')
})
