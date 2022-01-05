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

  function assembling(ticks, rf, input1, count1, input2, count2, input3, count3, output) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "assembling_factory",
      "controllerId": "assemblingfactory",
      "ticks": ticks,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
          {"type": "masterfulmachinery:items","data": {"item": input2,"count": count2}},
          {"type": "masterfulmachinery:items","data": {"item": input3,"count": count3}},
          {"type": "masterfulmachinery:energy","perTick": true,"data": {"amount": rf}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": 1}}]
    })
  }

  assembling(20, 500, 'chromasky:bottom_frame', 1, 'chromasky:mechanic_core_tier_1', 1, 'chromasky:top_frame', 1, 'thermal:machine_frame')
})
