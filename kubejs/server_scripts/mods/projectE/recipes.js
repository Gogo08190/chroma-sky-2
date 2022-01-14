onEvent('recipes', event => {

  event.remove({ output: 'projecte:low_covalence_dust' })
  event.shaped('40x projecte:low_covalence_dust', [
  'ICC',
  'CCC',
  'CCC'
  ], {
    I: 'mysticalagradditions:insanium_coal',
    C: 'chromasky:3x_compressed_cobblestone'
  })

  event.remove({ output: 'projecte:medium_covalence_dust' })
  event.shaped('40x projecte:medium_covalence_dust', [
  'IR ',
  '   ',
  '   '
  ], {
    I: 'mysticalagradditions:insanium_ingot',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'projecte:high_covalence_dust' })
  event.shaped('40x projecte:high_covalence_dust', [
  'IC ',
  '   ',
  '   '
  ], {
    I: 'mysticalagradditions:insanium_gemstone',
    C: 'mysticalagradditions:insanium_coal_block'
  })

  event.remove({ output: 'projecte:dark_matter' })
  event.shaped('projecte:dark_matter', [
  'AAA',
  'ANA',
  'AAA'
  ], {
    N: 'powah:niotic_crystal_block',
    A: 'projecte:aeternalis_fuel'
  })

  event.remove({ output: 'projecte:repair_talisman' })
  event.shaped('projecte:repair_talisman', [
  'HML',
  'PAP',
  'LMH'
  ], {
    H: 'projecte:high_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    L: 'projecte:low_covalence_dust',
    P: 'chromasky:plant_string',
    A: 'astralsorcery:parchment'
  })

  event.remove({ output: 'projecte:harvest_goddess_band' })
  event.shaped('projecte:harvest_goddess_band', [
  'OLO',
  'RPR',
  'OLO'
  ], {
    O: 'occultism:otherworld_sapling',
    L: 'thebeginning:ruma_lily_pad',
    R: 'projecte:red_matter_block',
    P: 'bloodmagic:plantoil'
  })

  event.remove({ output: 'projecte:swiftwolf_rending_gale' })
  event.shaped('projecte:swiftwolf_rending_gale', [
  'RFR',
  'FIF',
  'RFR'
  ], {
    F: 'supplementaries:feather_block',
    I: 'projecte:iron_band',
    R: 'projecte:red_matter_block'
  })

  event.remove({ output: 'projecte:condenser_mk1' })
  event.shaped('projecte:condenser_mk1', [
  'RIR',
  'IAI',
  'RIR'
  ], {
    R: 'mekanism:block_refined_obsidian',
    A: 'projecte:alchemical_chest',
    I: 'mysticalagradditions:insanium_gemstone'
  })

  event.remove({ output: 'projecte:iron_band' })
  event.shaped('projecte:iron_band', [
  'CCC',
  'CVC',
  'CCC'
  ], {
    C: 'ftbjarmod:cast_iron_ingot',
    V: 'projecte:volcanite_amulet'
  })

  event.remove({ output: 'projecte:alchemical_chest' })
  event.shaped('projecte:alchemical_chest', [
  'LMH',
  'SPS',
  'CNC'
  ], {
    C: 'ftbjarmod:cast_iron_ingot',
    N: 'expandedstorage:netherite_chest',
    S: 'chromasky:3x_compressed_stone',
    P: 'mysticalagriculture:prosperity_gemstone',
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust'
  })

  event.remove({ output: 'projecte:collector_mk1' })
  event.shaped('projecte:collector_mk1', [
  'GOG',
  'GNG',
  'GIG'
  ], {
    G: 'mekanism:block_refined_glowstone',
    I: 'mysticaladaptations:insanium_furnace',
    N: 'powah:niotic_crystal_block',
    O: 'thermal:obsidian_glass'
  })

  event.remove({ output: 'projecte:collector_mk2' })
  event.shaped('projecte:collector_mk2', [
  'GDG',
  'GCG',
  'GGG'
  ], {
    G: 'mekanism:block_refined_glowstone',
    C: 'projecte:collector_mk1',
    D: 'projecte:dark_matter'
  })

  event.remove({ output: 'projecte:collector_mk3' })
  event.shaped('projecte:collector_mk3', [
  'GRG',
  'GCG',
  'GGG'
  ], {
    G: 'mekanism:block_refined_glowstone',
    C: 'projecte:collector_mk2',
    R: 'projecte:red_matter'
  })

  event.remove({ output: 'projecte:relay_mk1' })
  event.shaped('projecte:relay_mk1', [
  'ROR',
  'RNR',
  'RRR'
  ], {
    R: 'mekanism:block_refined_obsidian',
    N: 'powah:niotic_crystal_block',
    O: 'thermal:obsidian_glass'
  })

  event.remove({ output: 'projecte:relay_mk2' })
  event.shaped('projecte:relay_mk2', [
  'RDR',
  'RMR',
  'RRR'
  ], {
    R: 'mekanism:block_refined_obsidian',
    M: 'projecte:relay_mk1',
    D: 'projecte:dark_matter'
  })

  event.remove({ output: 'projecte:relay_mk3' })
  event.shaped('projecte:relay_mk3', [
  'RPR',
  'RMR',
  'RRR'
  ], {
    R: 'mekanism:block_refined_obsidian',
    M: 'projecte:relay_mk2',
    P: 'projecte:red_matter'
  })

  event.remove({ output: 'projecte:soul_stone' })
  event.shaped('projecte:soul_stone', [
  'CCC',
  'RSR',
  'CCC'
  ], {
    C: 'powah:crystal_niotic',
    S: 'astralsorcery:starmetal',
    P: 'projecte:red_matter'
  })

  event.remove({ output: 'projecte:body_stone' })
  event.shaped('projecte:body_stone', [
  'CCC',
  'RSR',
  'CCC'
  ], {
    C: 'powah:crystal_nitro',
    S: 'astralsorcery:starmetal',
    P: 'projecte:red_matter'
  })

  event.remove({ output: 'projecte:mind_stone' })
  event.shaped('projecte:mind_stone', [
  'CCC',
  'RSR',
  'CCC'
  ], {
    C: 'powah:crystal_spirited',
    S: 'astralsorcery:starmetal',
    P: 'projecte:red_matter'
  })

  event.remove({ output: 'projecte:ignition_ring' })
  event.shaped('projecte:ignition_ring', [
  'DFD',
  'FMF',
  'DFD'
  ], {
    D: 'projecte:dark_matter_block',
    M: 'mekanism:flamethrower',
    F: 'projecte:mobius_fuel'
  })

  event.remove({ output: 'projecte:white_alchemical_bag' })
  event.shaped('projecte:white_alchemical_bag', [
  'HHH',
  'PSP',
  'PAP'
  ], {
    A: 'projecte:alchemical_chest',
    P: 'projecte:dark_matter',
    S: 'occultism:satchel',
    H: 'projecte:high_covalence_dust'
  })

  event.remove({ output: 'projectex:knowledge_sharing_book' })
  event.shaped('projectex:knowledge_sharing_book', [
  'VCV',
  'EME',
  'VCV'
  ], {
    V: 'projectex:violet_matter',
    C: 'cyclic:soulstone',
    E: 'extendedcrafting:ender_star',
    M: 'chromasky:magical_infuse_book'
  })

  event.remove({ output: 'projectex:energy_link' })
  event.shaped('projectex:energy_link', [
  'LMH',
  'RCR',
  'HML'
  ], {
    H: 'projecte:high_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    L: 'projecte:low_covalence_dust',
    C: 'chromasky:3x_compressed_stone',
    R: 'projecte:red_matter'
  })

  event.remove({ output: 'projectex:basic_collector' })
  event.shaped('projectex:basic_collector', [
  'GOG',
  'GFG',
  'GIG'
  ], {
    G: 'mekanism:block_refined_glowstone',
    I: 'mysticaladaptations:insanium_furnace',
    F: 'projecte:aeternalis_fuel_block',
    O: 'thermal:obsidian_glass'
  })

  event.remove({ output: 'projectex:final_star_shard' })
  event.shaped('projectex:final_star_shard', [
  'CCC',
  'CEC',
  'CCC'
  ], {
    C: 'projectex:colossal_star_omega',
    E: 'extendedcrafting:ender_star'
  })

  event.remove({ output: 'projecte:philosophers_stone' })
  event.custom(
    {
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  ABBBA  ",
      " ABCDCBA ",
      "ABEFGFEBA",
      "BHIJKJIHB",
      "BLGMNMGLB",
      "BHIJKJIHB",
      "OBEFGFEBO",
      " OBCDCBO ",
      "  OBBBO  "
    ],
    "key": {
      "A": {
        "item": "mana-and-artifice:greater_mote_fire"
      },
      "B": {
        "item": "chromasky:shard_star"
      },
      "C": {
        "item": "mysticalagradditions:insanium_ingot"
      },
      "D": {
        "item": "chromasky:drop_of_darkness"
      },
      "E": {
        "item": "projecte:red_matter"
      },
      "F": {
        "item": "projecte:dark_matter"
      },
      "G": {
        "item": "chromasky:mechanic_core_tier_1"
      },
      "H": {
        "item": "powah:nitro_crystal_block"
      },
      "I": {
        "item": "envirocore:xerothium"
      },
      "J": {
        "item": "chromasky:mechanic_core_tier_2"
      },
      "K": {
        "item": "chromasky:mechanic_core_tier_4"
      },
      "L": {
        "item": "extendedcrafting:ender_star"
      },
      "M": {
        "item": "chromasky:mechanic_core_tier_3"
      },
      "N": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "O": {
        "item": "extendedcrafting:luminessence"
      }
    },
    "result": {
      "item": "projecte:philosophers_stone"
    }
  }
  )

    event.remove({ output: 'projecte:tome' })
    event.custom(
      {
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCCDCCBA",
      "BAEFDFGAB",
      "CEHIDIHGC",
      "CFIJJJIFC",
      "DDDJKJDDD",
      "CFIJJJIFC",
      "CGHIDIHEC",
      "BAGFDFEAB",
      "ABCCDCCBA"
    ],
    "key": {
      "A": {
        "item": "projectex:white_matter"
      },
      "B": {
        "item": "chromasky:mechanic_core_tier_4"
      },
      "C": {
        "item": "projectex:fading_matter"
      },
      "D": {
        "item": "projecte:red_matter_block"
      },
      "E": {
        "item": "chromasky:mechanic_core_tier_2"
      },
      "F": {
        "item": "chromasky:mechanic_core_tier_3"
      },
      "G": {
        "item": "chromasky:mechanic_core_tier_1"
      },
      "H": {
        "item": "projectex:final_star_shard"
      },
      "I": {
        "item": "projecte:dark_matter_block"
      },
      "J": {
        "item": "projectex:knowledge_sharing_book"
      },
      "K": {
        "item": "extendedcrafting:ultimate_singularity"
      }
    },
    "result": {
      "item": "projecte:tome"
    }
  }
  )
    event.remove({ output: 'projecte:archangel_smite' })
    event.custom(
      {
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABBBA",
      "CDDDC",
      "DDEDD",
      "CDDDC",
      "ABBBA"
    ],
    "key": {
      "A": {
        "item": "draconicevolution:wyvern_bow"
      },
      "B": {
        "item": "supplementaries:feather_block"
      },
      "C": {
        "item": "projecte:dark_matter"
      },
      "D": {
        "item": "projecte:dark_matter_block"
      },
      "E": {
        "item": "projecte:iron_band"
      }
    },
    "result": {
      "item": "projecte:archangel_smite"
    }
  }
  )

    event.remove({ output: 'projecte:watch_of_flowing_time' })
    event.custom(
      {
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "BDDDB",
      "BDEDB",
      "BDDDB",
      "ABBBA"
    ],
    "key": {
      "A": {
        "item": "mekanism:ingot_steel"
      },
      "B": {
        "item": "projecte:dark_matter"
      },
      "C": {
        "item": "supplementaries:clock_block"
      },
      "D": {
        "item": "projecte:red_matter_block"
      },
      "E": {
        "type": "forge:nbt",
        "item": "minecraft:clock",
        "count": 1,
        "nbt": "{\"quark:clock_calculated\":1b}"
      }
    },
    "result": {
      "item": "projecte:watch_of_flowing_time"
    }
  }
  )
  event.remove({ output: 'projecte:transmutation_table' })
  event.custom(
    {
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBCBBBA",
      "ABDEFEDBA",
      "ABEFGFEBA",
      "ACFGHGFCA",
      "ABEFGFEBA",
      "ABDEFEDBA",
      "ABBBCBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "mekanism:block_refined_obsidian"
      },
      "B": {
        "item": "projecte:dark_matter_block"
      },
      "C": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "D": {
        "item": "chromasky:mechanic_core_tier_1"
      },
      "E": {
        "item": "chromasky:mechanic_core_tier_2"
      },
      "F": {
        "item": "chromasky:mechanic_core_tier_3"
      },
      "G": {
        "item": "chromasky:mechanic_core_tier_4"
      },
      "H": {
        "item": "projecte:philosophers_stone"
      }
    },
    "result": {
      "item": "projecte:transmutation_table"
    }
  }
  )
  event.remove({ output: 'projecte:transmutation_tablet' })
  event.custom(
      {
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABCDEDFBA",
      "ACDEGEDHA",
      "ADEGIGEDA",
      "AEGIJIGEA",
      "ADEGIGEDA",
      "AKDEGEDLA",
      "ABMDEDNBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "projecte:dark_matter_block"
      },
      "B": {
        "item": "extendedcrafting:ender_star"
      },
      "C": {
        "item": "industrialforegoing:plastic"
      },
      "D": {
        "item": "chromasky:mechanic_core_tier_1"
      },
      "E": {
        "item": "chromasky:mechanic_core_tier_2"
      },
      "F": {
        "item": "immersiveengineering:component_steel"
      },
      "G": {
        "item": "chromasky:mechanic_core_tier_3"
      },
      "H": {
        "item": "thermal:ruby_gear"
      },
      "I": {
        "item": "chromasky:mechanic_core_tier_4"
      },
      "J": {
        "item": "projecte:transmutation_table"
      },
      "K": {
        "item": "rftoolsbase:dimensionalshard"
      },
      "L": {
        "item": "refinedstorage:advanced_processor"
      },
      "M": {
        "item": "industrialforegoing:pink_slime_ingot"
      },
      "N": {
        "item": "powah:crystal_nitro"
      }
    },
    "result": {
      "item": "projecte:transmutation_tablet"
    }
  }
  )

});
