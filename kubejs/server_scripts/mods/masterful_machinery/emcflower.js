events.listen('recipes', function (e) {
  e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "emcflower_fabricator",
    "controllerId": "emcflower",
    "name": "Power Flower Fabricator",
    "layout": [
      [
        ")))*)))",
        ")+++++)",
        ")+++++)",
        "-+++++,",
        ")+++++)",
        ")+++++)",
        ")))C)))"
      ],
      [
        ".     .",
        "       ",
        "       ",
        "   /   ",
        "       ",
        "       ",
        ".     ."
      ],
      [
        "       ",
        "       ",
        "   /   ",
        "  ///  ",
        "   /   ",
        "       ",
        "       "
      ],
      [
        "       ",
        "   /   ",
        "  ///  ",
        " ///// ",
        "  ///  ",
        "   /   ",
        "       "
      ],
      [
        "       ",
        "       ",
        "   /   ",
        "  ///  ",
        "   /   ",
        "       ",
        "       "
      ],
      [
        "       ",
        "       ",
        "       ",
        "   /   ",
        "       ",
        "       ",
        "       "
      ]
    ],
    "legend": {
      ")": {
        "block": "projecte:dark_matter_block"
      },
      "*": {
        "block": "masterfulmachinery:emcflower_assemblingenergy_port_energy_input"
      },
      "+": {
        "block": "minecraft:polished_blackstone_bricks"
      },
      ",": {
        "block": "masterfulmachinery:emcflower_assembing_item_port_items_output"
      },
      "-": {
        "block": "masterfulmachinery:emcflower_assembing_item_port_items_input"
      },
      ".": {
        "block": "projectex:energy_link"
      },
      "/": {
        "block": "projectex:basic_collector"
      }
    }
  })

  function powerflower(ticks, rf, input1, count1, input2, count2, input3, count3, output) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "emcflower_fabricator",
      "controllerId": "emcflower",
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

  powerflower(60, 10000, 'projectex:basic_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:basic_relay', 6, 'projectex:basic_power_flower')
})
