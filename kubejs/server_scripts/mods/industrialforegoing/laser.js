onEvent('recipes', e => {
  function drillB(result, min, max, weight, lens, bList) {
    let calc_weight = Math.ceil(weight * 0.15)

    if (calc_weight > 1) {
      e.custom({
        type: 'industrialforegoing:laser_drill_ore',
        output: Item.of(result).toResultJson(),
        rarity: [{
          whitelist: {},
          blacklist: bList,
          depth_min: min,
          depth_max: max,
          weight: weight
        }, {
          whitelist: {},
          blacklist: bList,
          depth_min: 0,
          depth_max: 255,
          weight: calc_weight
        }],
        pointer: 0,
        catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
      })
    } else {
      e.custom({
        type: 'industrialforegoing:laser_drill_ore',
        output: Item.of(result).toResultJson(),
        rarity: [{
          whitelist: {},
          blacklist: bList,
          depth_min: min,
          depth_max: max,
          weight: weight
        }],
        pointer: 0,
        catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
      })
    }
  }

  function drillW(result, min, max, weight, lens, wList) {
    let calc_weight = Math.ceil(weight * 0.15)

    if (calc_weight > 1) {
      e.custom({
        type: 'industrialforegoing:laser_drill_ore',
        output: Item.of(result).toResultJson(),
        rarity: [{
          whitelist: wList,
          blacklist: {},
          depth_min: min,
          depth_max: max,
          weight: weight
        }, {
          whitelist: wList,
          blacklist: {},
          depth_min: 0,
          depth_max: 255,
          weight: calc_weight
        }],
        pointer: 0,
        catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
      })
    } else {
      e.custom({
        type: 'industrialforegoing:laser_drill_ore',
        output: Item.of(result).toResultJson(),
        rarity: [{
          whitelist: wList,
          blacklist: {},
          depth_min: min,
          depth_max: max,
          weight: weight
        }],
        pointer: 0,
        catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
      })
    }
  }

  function drillOw(result, min, max, weight, lens) {
    drillB(result, min, max, weight, lens, {
      type: 'minecraft:worldgen/biome',
      values: [
        'minecraft:the_end',
        'minecraft:the_void',
        'minecraft:small_end_islands',
        'minecraft:end_barrens',
        'minecraft:end_highlands',
        'minecraft:end_midlands',
        "minecraft:nether_wastes",
        "minecraft:basalt_deltas",
        "minecraft:warped_forest",
        "minecraft:crimson_forest",
        "minecraft:soul_sand_valley"
      ]
    })
  }

  function drillNet(result, min, max, weight, lens) {
    drillW(result, min, max, weight, lens, {
      type: 'minecraft:worldgen/biome',
      values: [
        "minecraft:nether_wastes",
        "minecraft:basalt_deltas",
        "minecraft:warped_forest",
        "minecraft:crimson_forest",
        "minecraft:soul_sand_valley"
      ]
    })
  }

  function drillEnd(result, min, max, weight, lens) {
    drillW(result, min, max, weight, lens, {
      type: 'minecraft:worldgen/biome',
      values: [
        'minecraft:the_end',
        'minecraft:the_void',
        'minecraft:small_end_islands',
        'minecraft:end_barrens',
        'minecraft:end_highlands',
        'minecraft:end_midlands'
      ]
    })
  }

  function drillAby(result, min, max, weight, lens) {
    drillW(result, min, max, weight, lens, {
      type: 'minecraft:worldgen/biome',
      values: [
        'theabyss:mud_plains',
        'thebeginning:ruma_forest',
        'theabyss:abyss_phantom_biome',
        'theabyss:aybssmountain',
        'theabyss:bossuselessbiome',
        'theabyss:eot_biome',
        'theabyss:eot_biome_2',
        'theabyss:forgottenmountains',
        'theabyss:slime_forest_biome',
        'theabyss:the_abyss_jungle',
        'theabyss:the_abyss_plains_biome',
        'theabyss:theabyssbiome',
        'theabyss:waywardsea',
        'thebeginning:flora_forest',
        'thebeginning:roggen_forest',
      ]
    })
  }

  drillOw('rftoolsbase:dimensionalshard_overworld', 0, 32, 6, 0)
  drillOw('astralsorcery:rock_crystal_ore', 8, 32, 10, 0)
  drillOw('astralsorcery:aquamarine_sand_ore', 54, 72, 6, 3)
  drillOw('mysticalagriculture:prosperity_ore', 0, 80, 20, 0)
  drillOw('mysticalagriculture:inferium_ore', 0, 32, 20, 5)
  drillOw('powah:uraninite_ore', 4, 36, 7, 13)
  drillOw('thermal:apatite_ore', 39, 48, 6, 3)
  drillOw('mana-and-artifice:vinteum_ore', 39, 48, 6, 3)
  drillOw('projectred-exploration:electrotine_ore', 20, 46, 6, 11)

  drillNet('mysticalagriculture:soulium_ore', 0, 32, 20, 12)
  drillNet('rftoolsbase:dimensionalshard_nether', 0, 32, 6, 0)
  drillNet('mysticalagradditions:nether_inferium_ore', 0, 32, 20, 5)
  drillNet('mysticalagradditions:nether_prosperity_ore', 0, 80, 20, 0)

  drillEnd('rftoolsbase:dimensionalshard_end', 0, 32, 6, 0)
  drillEnd('mysticalagradditions:end_inferium_ore', 0, 32, 20, 5)
  drillEnd('mysticalagradditions:end_prosperity_ore', 0, 80, 20, 0)

  drillAby('theabyss:abyssiceore', 10, 30, 20, 11)
  drillAby('theabyss:abyssfireore', 20, 30, 20, 6)
  drillAby('theabyss:abyssore', 0, 10, 4, 10)
  drillAby('theabyss:fusionore', 0, 80, 20, 13)
  drillAby('theabyss:loranore', 15, 45, 14, 3)
  drillAby('theabyss:unknown_ore', 0, 20, 8, 9)
  drillAby('theabyss:garnite_ore', 0, 10, 4, 15)
  drillAby('thebeginning:florite_ore', 50, 70, 8, 3)
  //drill(ore, min_height, max_height, weight, lens)
})
