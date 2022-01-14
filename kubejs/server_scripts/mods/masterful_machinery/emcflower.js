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

  powerflower(120, 10000, 'projectex:basic_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:basic_relay', 6, 'projectex:basic_power_flower')
  powerflower(120, 10000, 'projectex:dark_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:dark_relay', 6, 'projectex:dark_power_flower')
  powerflower(120, 10000, 'projectex:red_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:red_relay', 6, 'projectex:red_power_flower')
  powerflower(120, 100000, 'projectex:magenta_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:magenta_relay', 6, 'projectex:magenta_power_flower')
  powerflower(120, 100000, 'projectex:pink_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:pink_relay', 6, 'projectex:pink_power_flower')
  powerflower(120, 100000, 'projectex:purple_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:purple_relay', 6, 'projectex:purple_power_flower')
  powerflower(256, 1000000, 'projectex:violet_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:violet_relay', 6, 'projectex:violet_power_flower')
  powerflower(256, 1000000, 'projectex:blue_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:blue_relay', 6, 'projectex:blue_power_flower')
  powerflower(256, 1000000, 'projectex:cyan_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:cyan_relay', 6, 'projectex:cyan_power_flower')
  powerflower(256, 2000000, 'projectex:green_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:green_relay', 6, 'projectex:green_power_flower')
  powerflower(256, 3000000, 'projectex:lime_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:lime_relay', 6, 'projectex:lime_power_flower')
  powerflower(256, 4000000, 'projectex:yellow_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:yellow_relay', 6, 'projectex:yellow_power_flower')
  powerflower(512, 5000000, 'projectex:orange_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:orange_relay', 6, 'projectex:orange_power_flower')
  powerflower(512, 6000000, 'projectex:white_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:white_relay', 6, 'projectex:white_power_flower')
  powerflower(512, 7000000, 'projectex:fading_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:fading_relay', 6, 'projectex:fading_power_flower')
  powerflower(1024, 10000000, 'projectex:final_compressed_collector', 2, 'projectex:energy_link', 1, 'projectex:final_relay', 6, 'projectex:final_power_flower')
})
