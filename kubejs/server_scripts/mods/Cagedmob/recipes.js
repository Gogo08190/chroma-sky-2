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

});
