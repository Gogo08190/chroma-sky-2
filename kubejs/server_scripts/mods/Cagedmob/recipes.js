onEvent('recipes', event => {

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:phantom_abyss_entity",
    "conditions": [
    	{
    		"type": "forge:mod_loaded",
    		"modid": "cagedmobs"
    	}
    ],
    "samplerTier": 2,
    "environments": ["abyss"],
    "growTicks": 1200,
    "results": [
    	{
    		"chance": 0.1,
    		"output": {
    			"item": "theabyss:phantom_soul_item"
    		},
    		"minAmount": 1,
    		"maxAmount": 2
    	},
    	{
    		"chance": 0.2,
    		"output": {
    			"item": "minecraft:phantom_membrane"
    		},
    		"minAmount": 1,
    		"maxAmount": 2
    	}
    ]

  })

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:slime_spider",
    "conditions": [
    	{
    		"type": "forge:mod_loaded",
    		"modid": "cagedmobs"
    	}
    ],
    "samplerTier": 3,
    "environments": ["node"],
    "growTicks": 1200,
    "results": [
    	{
    		"chance": 0.1,
    		"output": {
    			"item": "theabyss:slime_stage_1"
    		},
    		"minAmount": 1,
    		"maxAmount": 2
    	},
      {
      "lightning": true,
      "chance": 0.01,
        "output": {
          "item": "theabyss:slime_stage_4"
        },
      "minAmount": 1,
      "maxAmount": 1
      },
      {
      "lightning": true,
      "chance": 0.02,
        "output": {
          "item": "theabyss:slime_stage_3"
        },
        "minAmount": 1,
        "maxAmount": 1
        },
    	{
    		"chance": 0.05,
    		"output": {
    			"item": "theabyss:slime_stage_2"
    		},
    		"minAmount": 1,
    		"maxAmount": 4
    	}
    ]

  })

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:eot_light_fish",
    "conditions": [
    	{
    		"type": "forge:mod_loaded",
    		"modid": "cagedmobs"
    	}
    ],
    "samplerTier": 1,
    "environments": ["black"],
    "growTicks": 1200,
    "results": [
    	{
    		"chance": 0.3,
    		"output": {
    			"item": "minecraft:light_blue_dye"
    		},
    		"minAmount": 1,
    		"maxAmount": 2
    	},
    	{
    		"chance": 0.3,
    		"output": {
    			"item": "minecraft:light_gray_dye"
    		},
    		"minAmount": 1,
    		"maxAmount": 2
    	}
    ]

  })

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:eot_light_fish_4",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "cagedmobs"
      }
    ],
    "samplerTier": 1,
    "environments": ["black"],
    "growTicks": 1200,
    "results": [
      {
        "chance": 0.3,
        "output": {
          "item": "minecraft:orange_dye"
        },
        "minAmount": 1,
        "maxAmount": 2
      },
      {
        "chance": 0.3,
        "output": {
          "item": "minecraft:yellow_dye"
        },
        "minAmount": 1,
        "maxAmount": 2
      }
    ]

  })

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:eot_light_fish_3",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "cagedmobs"
      }
    ],
    "samplerTier": 1,
    "environments": ["black"],
    "growTicks": 1200,
    "results": [
      {
        "chance": 0.3,
        "output": {
          "item": "minecraft:pink_dye"
        },
        "minAmount": 1,
        "maxAmount": 2
      },
      {
        "chance": 0.3,
        "output": {
          "item": "minecraft:purple_dye"
        },
        "minAmount": 1,
        "maxAmount": 2
      }
    ]

  })

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:jungle_light_fish_green",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "cagedmobs"
      }
    ],
    "samplerTier": 1,
    "environments": ["black"],
    "growTicks": 1200,
    "results": [
      {
        "chance": 0.3,
        "output": {
          "item": "minecraft:green_dye"
        },
        "minAmount": 1,
        "maxAmount": 2
      },
      {
        "chance": 0.3,
        "output": {
          "item": "minecraft:lime_dye"
        },
        "minAmount": 1,
        "maxAmount": 2
      }
    ]

  })

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:the_abyss_golem",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "cagedmobs"
      }
    ],
    "samplerTier": 3,
    "environments": ["black"],
    "growTicks": 1200,
    "results": [
      {
        "chance": 0.1,
        "output": {
          "item": "theabyss:node_shard"
        },
        "minAmount": 1,
        "maxAmount": 2
      },
      {
        "chance": 0.1,
        "output": {
          "item": "theabyss:node_crystal"
        },
        "minAmount": 1,
        "maxAmount": 2
      }
    ]

  })

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:carlos_end_fight",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "cagedmobs"
      }
    ],
    "samplerTier": 3,
    "environments": ["black"],
    "growTicks": 1200,
    "results": [
      {
        "chance": 0.1,
        "output": {
          "item": "minecraft:sponge"
        },
        "minAmount": 1,
        "maxAmount": 2
      },
      {
        "chance": 0.3,
        "output": {
          "item": "minecraft:ink_sac"
        },
        "minAmount": 1,
        "maxAmount": 2
      }
    ]

  })

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:abyss_elder",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "cagedmobs"
      }
    ],
    "samplerTier": 3,
    "environments": ["black"],
    "growTicks": 1200,
    "results": [
      {
        "chance": 0.2,
        "output": {
          "item": "minecraft:ender_pearl"
        },
        "minAmount": 1,
        "maxAmount": 2
      },
      {
        "chance": 0.1,
        "output": {
          "item": "theabyss:loran_energy"
        },
        "minAmount": 1,
        "maxAmount": 2
      }
    ]

  })

});
