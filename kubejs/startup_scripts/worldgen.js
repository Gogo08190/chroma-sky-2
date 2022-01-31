onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks =
      [ 'minecraft:coal_ore',
        'minecraft:iron_ore',
        'minecraft:gold_ore',
        'minecraft:diamond_ore',
        'minecraft:emerald_ore',
        'minecraft:redstone_ore',
        'minecraft:lapis_ore',
        'projectred-exploration:copper_ore',
        'occultism:copper_ore',
        'immersiveengineering:ore_copper',
        'tconstruct:copper_ore',
        'mekanism:copper_ore',
        'thermal:copper_ore',
        'thermal:lead_ore',
        'mekanism:lead_ore',
        'immersiveengineering:ore_lead',
        'mekanism:uranium_ore',
        'immersiveengineering:ore_uranium',
        'occultism:silver_ore',
        'projectred-exploration:silver_ore',
        'immersiveengineering:ore_silver',
        'thermal:silver_ore',
        'immersiveengineering:ore_nickel',
        'thermal:nickel_ore',
        'immersiveengineering:ore_aluminum',
        'thermal:ruby_ore',
        'thermal:sapphire_ore',
        'projectred-exploration:sapphire_ore',
        'projectred-exploration:ruby_ore',
        'projectred-exploration:tin_ore',
        'mekanism:tin_ore',
        'thermal:tin_ore'
      ]
  })
})

onEvent("worldgen.add", (event) => {
    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:pig";
        spawn.weight = 10;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:cow";
        spawn.weight = 8;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:chicken";
        spawn.weight = 8;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:donkey";
        spawn.weight = 1;
        spawn.minCount = 3;
        spawn.maxCount = 3;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:horse";
        spawn.weight = 5;
        spawn.minCount = 2;
        spawn.maxCount = 6;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:llama";
        spawn.weight = 5;
        spawn.minCount = 4;
        spawn.maxCount = 6;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:pig";
        spawn.weight = 10;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:rabbit";
        spawn.weight = 3;
        spawn.minCount = 1;
        spawn.maxCount = 3;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "creature";
        spawn.entity = "minecraft:sheep";
        spawn.weight = 12;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:spider";
        spawn.weight = 100;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:zombie";
        spawn.weight = 95;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:zombie_villager";
        spawn.weight = 5;
        spawn.minCount = 1;
        spawn.maxCount = 1;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:skeleton";
        spawn.weight = 100;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:creeper";
        spawn.weight = 100;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:slime";
        spawn.weight = 20;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:enderman";
        spawn.weight = 10;
        spawn.minCount = 1;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:witch";
        spawn.weight = 5;
        spawn.minCount = 1;
        spawn.maxCount = 1;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "minecraft:drowned";
        spawn.weight = 5;
        spawn.minCount = 1;
        spawn.maxCount = 1;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "thermal:basalz";
        spawn.weight = 10;
        spawn.minCount = 1;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "thermal:blitz";
        spawn.weight = 10;
        spawn.minCount = 1;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "monster";
        spawn.entity = "thermal:blizz";
        spawn.weight = 10;
        spawn.minCount = 1;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "ambient";
        spawn.entity = "minecraft:bat";
        spawn.weight = 10;
        spawn.minCount = 8;
        spawn.maxCount = 8;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "water_creature";
        spawn.entity = "minecraft:squid";
        spawn.weight = 14;
        spawn.minCount = 2;
        spawn.maxCount = 8;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "water_creature";
        spawn.entity = "minecraft:dolphin";
        spawn.weight = 2;
        spawn.minCount = 1;
        spawn.maxCount = 2;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "water_ambient";
        spawn.entity = "minecraft:pufferfish";
        spawn.weight = 15;
        spawn.minCount = 1;
        spawn.maxCount = 3;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
          "minecraft:ocean",
          "minecraft:cold_ocean",
          "minecraft:deep_cold_ocean",
          "minecraft:deep_lukewarm_ocean",
          "minecraft:deep_ocean",
          "minecraft:lukewarm_ocean",
          "minecraft:warm_ocean",
        ];
        spawn.category = "water_ambient";
        spawn.entity = "minecraft:tropical_fish";
        spawn.weight = 19;
        spawn.minCount = 1;
        spawn.maxCount = 2;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
          "minecraft:ocean",
          "minecraft:cold_ocean",
          "minecraft:deep_cold_ocean",
          "minecraft:deep_lukewarm_ocean",
          "minecraft:deep_ocean",
          "minecraft:lukewarm_ocean",
          "minecraft:warm_ocean",
        ];
        spawn.category = "water_ambient";
        spawn.entity = "minecraft:cod";
        spawn.weight = 15;
        spawn.minCount = 1;
        spawn.maxCount = 2;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
          "minecraft:ocean",
          "minecraft:cold_ocean",
          "minecraft:deep_cold_ocean",
          "minecraft:deep_lukewarm_ocean",
          "minecraft:deep_ocean",
          "minecraft:lukewarm_ocean",
          "minecraft:warm_ocean",
        ];
        spawn.category = "water_ambient";
        spawn.entity = "minecraft:salmon";
        spawn.weight = 15;
        spawn.minCount = 1;
        spawn.maxCount = 2;
    });
});

onEvent('worldgen.remove', event => {
  event.removeSpawnsByID((spawn) => {
    spawn.biomes.values = [
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
      '#nether',
      '#end',
    ];

    spawn.entities.values = [
      'mana-and-artifice:skeleton_assassin_bolo',
      'mana-and-artifice:skeleton_assassin',
      'mana-and-artifice:spell_breaker',
      'mana-and-artifice:witch_hunter',
      'mana-and-artifice:pixie';
      'mana-and-artifice:mushroom_soldier',
      'mana-and-artifice:hulking_zombie',
      'mana-and-artifice:skeleton_assassin',
      'mana-and-artifice:demon_imp',
      'mana-and-artifice:lantern_wraith',
    ];
  });
});
