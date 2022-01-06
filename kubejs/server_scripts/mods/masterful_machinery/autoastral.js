events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "auto_astral",
  "controllerId": "autoastral",
  "name": "Auto Iridescent Altar",
  "layout": [
    [
      ")))     )))",
      ")*+)))))+*)",
      ")+-------+)",
      " )-**-**-) ",
      " )-*****-) ",
      " .--***--/ ",
      " )-*****-) ",
      " )-**-**-) ",
      ")+-------+)",
      ")*+))C))+*)",
      ")))     )))"
    ],
    [
      "000     000",
      "01 00000 10",
      "0         0",
      " 0       0 ",
      " 0       0 ",
      " 0   2   0 ",
      " 0       0 ",
      " 0       0 ",
      "0         0",
      "01 00000 10",
      "000     000"
    ],
    [
      "           ",
      " 3       3 ",
      "           ",
      "           ",
      "           ",
      "           ",
      "           ",
      "           ",
      "           ",
      " 3       3 ",
      "           "
    ],
    [
      "           ",
      " 3       3 ",
      "           ",
      "           ",
      "           ",
      "           ",
      "           ",
      "           ",
      "           ",
      " 3       3 ",
      "           "
    ],
    [
      "           ",
      " 4)     )4 ",
      " )       ) ",
      "           ",
      "           ",
      "           ",
      "           ",
      "           ",
      " )       ) ",
      " 4)     )4 ",
      "           "
    ],
    [
      "           ",
      "           ",
      "  ))) )))  ",
      "  )     )  ",
      "  )     )  ",
      "     5     ",
      "  )     )  ",
      "  )     )  ",
      "  ))) )))  ",
      "           ",
      "           "
    ]
  ],
  "legend": {
    ")": {
      "block": "astralsorcery:black_marble_bricks"
    },
    "*": {
      "block": "astralsorcery:black_marble_raw"
    },
    "+": {
      "block": "simplylight:illuminant_black_block_on"
    },
    "-": {
      "block": "astralsorcery:marble_raw"
    },
    ".": {
      "block": "masterfulmachinery:autoastral_autoastral_item_port_items_output"
    },
    "/": {
      "block": "masterfulmachinery:autoastral_autoastral_item_port_items_input"
    },
    "0": {
      "block": "astralsorcery:infused_wood_slab"
    },
    "1": {
      "block": "astralsorcery:black_marble_runed"
    },
    "2": {
      "block": "astralsorcery:altar_radiance"
    },
    "3": {
      "block": "astralsorcery:marble_pillar"
    },
    "4": {
      "block": "astralsorcery:black_marble_chiseled"
    },
    "5": {
      "block": "masterfulmachinery:autoastral_autoastral_starlight_port_astral_starlight_input"
    }
  }
})

  function astral2(input1, count1, input2, count2, output, countout, starlight) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "auto_astral",
      "controllerId": "autoastral",
      "ticks": 100,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
          {"type": "masterfulmachinery:items","data": {"item": input2,"count": count2}},
          {"type": "masterfulmachinery:astral_starlight","data": {"amount": starlight}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  function astral4(input1, count1, input2, count2, input3, count3, input4, count4, output, countout, starlight) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "auto_astral",
      "controllerId": "autoastral",
      "ticks": 100,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
          {"type": "masterfulmachinery:items","data": {"item": input2,"count": count2}},
          {"type": "masterfulmachinery:items","data": {"item": input3,"count": count3}},
          {"type": "masterfulmachinery:items","data": {"item": input4,"count": count4}},
          {"type": "masterfulmachinery:astral_starlight","data": {"amount": starlight}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  function astral3(input1, count1, input2, count2, input3, count3, output, countout, starlight) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "auto_astral",
      "controllerId": "autoastral",
      "ticks": 100,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
          {"type": "masterfulmachinery:items","data": {"item": input2,"count": count2}},
          {"type": "masterfulmachinery:items","data": {"item": input3,"count": count3}},
          {"type": "masterfulmachinery:astral_starlight","data": {"amount": starlight}}
      ],
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": countout}}]
    })
  }

  // Astral 2 Items
  astral2('astralsorcery:aquamarine', 2, 'minecraft:glowstone_dust', 2, 'astralsorcery:illumination_powder', 16, 100)

  // Astral 3 Items
  astral3(input1, count1, input2, count2, input3, count3, output, countout, starlight)
  
  // Astral 4 Items
  astral4(input1, count1, input2, count2, input3, count3, input4, count4, output, countout, starlight)

})
