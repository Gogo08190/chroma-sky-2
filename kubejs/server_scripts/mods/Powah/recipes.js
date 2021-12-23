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
    R: 'thermal:rf_coil',
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
    R: 'thermal:rf_coil',
  })

  event.custom(
    {
        "input": [
            {
                "item": "mekanism:ingot_steel"
            },
            {
                "item": "industrialforegoing:pink_slime_ingot"
            },
            {
                "item": "mekanism:ingot_steel"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "mekanism:ingot_steel"
            },
            {
                "item": "industrialforegoing:pink_slime_ingot"
            },
            {
                "item": "mekanism:ingot_steel"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:1000}",
        "processingTime": 320,
        "output": {
            "item": "chromasky:mechanic_core_tier_3",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

});
