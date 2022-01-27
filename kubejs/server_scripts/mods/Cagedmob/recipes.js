onEvent('recipes', event => {

  event.custom(
    {
    "type": "cagedmobs:mob_data",
    "entity": "theabyss:phantom_abyss_entity_lv_l_3",
    "conditions": [
    	{
    		"type": "forge:mod_loaded",
    		"modid": "cagedmobs"
    	}
    ],
    "samplerTier": 2,
    "environments": ["farm"],
    "growTicks": 1200,
    "results": [
    	{
    		"chance": 0.5,
    		"output": {
    			"item": "theabyss:phantom_soul_item"
    		},
    		"minAmount": 1,
    		"maxAmount": 4
    	},
    	{
    		"chance": 0.4,
    		"output": {
    			"item": "minecraft:phantom_membrane"
    		},
    		"minAmount": 1,
    		"maxAmount": 4
    	}
    ]

  })
});
