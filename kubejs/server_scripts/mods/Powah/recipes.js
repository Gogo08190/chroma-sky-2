onEvent('recipes', event => {

  // Dielectric Casing
  event.remove({ output: 'powah:dielectric_casing' })
  event.shaped('powah:dielectric_casing', [
  'SHS',
  'RCR',
  'SHS'
  ], {
    S: 'mekanism:ingot_steel',
    H: 'powah:dielectric_rod_horizontal',
    R: 'powah:dielectric_rod',
    C: 'chromasky:mechanic_core_tier_3'
  })

  // Dielectric Rod
  event.remove({ output: 'powah:dielectric_rod' })
  event.shaped('powah:dielectric_rod', [
  'PBP',
  'PRP',
  'PBP'
  ], {
    P: 'powah:dielectric_paste',
    B: 'extendedcrafting:black_iron_ingot',
    R: 'thermal:rf_coil'
  })

  // Dielectric Rod Horizontal
  event.remove({ output: 'powah:dielectric_rod_horizontal' })
  event.shaped('powah:dielectric_rod_horizontal', [
  'PPP',
  'BRB',
  'PPP'
  ], {
    P: 'powah:dielectric_paste',
    B: 'extendedcrafting:black_iron_ingot',
    R: 'thermal:rf_coil'
  })

  // Basic Capacitor
  event.remove({ output: 'powah:capacitor_basic' })
  event.shaped('2x powah:capacitor_basic', [
  ' SP',
  'SRS',
  'PS '
  ], {
    P: 'powah:dielectric_paste',
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot_block'
  })

  // Energie cable(Starter)
  event.remove({ output: 'powah:energy_cable_starter' })
  event.shaped('12x powah:energy_cable_starter', [
  'HHH',
  'SBS',
  'HHH'
  ], {
    H: 'powah:dielectric_rod_horizontal',
    B: 'powah:capacitor_basic_tiny',
    S: 'mekanism:nugget_steel'
  })

  // Battery(Starter)
  event.remove({ output: 'powah:battery_starter' })
  event.shaped('powah:battery_starter', [
  'PBP',
  'BRB',
  'PBP'
  ], {
    P: 'powah:dielectric_paste',
    R: 'extendedcrafting:redstone_ingot_block',
    B: 'powah:capacitor_basic'
  })

  // Wrench
  event.remove({ output: 'powah:wrench' })
  event.shaped('powah:wrench', [
  ' MP',
  ' PM',
  'P  '
  ], {
    P: 'powah:dielectric_paste',
    M: 'tconstruct:manyullyn_ingot'
  })

  // Photoelectric Pane
  event.remove({ output: 'powah:photoelectric_pane' })
  event.shaped('powah:photoelectric_pane', [
  'PCP',
  'CGC',
  'PCP'
  ], {
    P: 'powah:dielectric_paste',
    G: 'minecraft:glass_pane',
    C: 'tconstruct:cobalt_ingot'
  })

  // Thermo Plate
  event.remove({ output: 'powah:thermoelectric_plate' })
  event.shaped('powah:thermoelectric_plate', [
  'BRB',
  'RTR',
  'BRB'
  ], {
    B: 'minecraft:blaze_powder',
    R: 'extendedcrafting:redstone_ingot',
    T: 'powah:capacitor_basic_tiny'
  })

  // Thermo Plate
  event.remove({ output: 'powah:energizing_orb' })
  event.shaped('powah:energizing_orb', [
  'OOO',
  'OCO',
  'RRR'
  ], {
    R: 'powah:dielectric_rod_horizontal',
    O: 'thermal:obsidian_glass',
    C: 'powah:dielectric_casing'
  })

  // Energizing Rod (Starter)
  event.remove({ output: 'powah:energizing_rod_starter' })
  event.shaped('powah:energizing_rod_starter', [
  ' Q ',
  'BCB',
  ' D '
  ], {
    D: 'powah:dielectric_rod',
    B: 'powah:capacitor_basic_tiny',
    C: 'powah:dielectric_casing',
    Q: 'refinedstorage:quartz_enriched_iron'
  })

  // Energizing Rod (Basic)
  event.remove({ output: 'powah:energizing_rod_starter' })
  event.shaped('powah:energizing_rod_starter', [
  ' Q ',
  'BCB',
  ' D '
  ], {
    D: 'powah:dielectric_rod',
    B: 'powah:capacitor_basic_tiny',
    C: 'powah:dielectric_casing',
    Q: 'refinedstorage:quartz_enriched_iron_block'
  })

  event.remove({ output: 'powah:dielectric_paste' })

  event.custom(
    {
        "input": [
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "minecraft:clay_ball"
            },
            {
                "item": "minecraft:clay_ball"
            },
            {
                "item": "minecraft:clay_ball"
            }
        ],
        "inputFluid": "{FluidName:\"minecraft:lava\",Amount:1000}",
        "processingTime": 100,
        "output": {
            "item": "powah:dielectric_paste",
            "count": 24
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": 'powah:crystal_nitro'},
      {"item": 'powah:ender_core'},
      {"item": 'refinedstorage:advanced_processor'},
      {"item": 'thermal:redstone_servo'},
      {"item": 'thermal:rf_coil'},
      {"item": 'powah:crystal_nitro'}
      ],
      "energy": 5000,
      "result": {
      "item": 'chromasky:mechanic_core_tier_4',
      "count": 1
      }
    }
  )

});
