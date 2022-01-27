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
"environments": ["minecraft:diamond_ore"],
"growTicks": 1200,
"results": [
	{
		"chance": 0.5,
		"output": {
			"item": "minecraft:feather"
		},
		"minAmount": 1,
		"maxAmount": 2
	},
	{
		"chance": 0.8,
			"output": {
				"item": "minecraft:chicken"
			},
			"output_cooked": {
				"item": "minecraft:cooked_chicken"
			},
			"minAmount": 1,
			"maxAmount": 1
	},
	{
		"chance": 0.4,
		"output": {
			"item": "minecraft:egg"
		},
		"minAmount": 1,
		"maxAmount": 1
	}
]

})
