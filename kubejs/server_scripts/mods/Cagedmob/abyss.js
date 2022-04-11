onEvent('recipes', event => {

  event.custom(
    {
  	"type": "cagedmobs:env_data",
  	"conditions": [
  		{
  			"type": "forge:mod_loaded",
  			"modid": "theabyss"
  		}
  	],
  	"input": {
  		"item": "theabyss:abyssiceore"
  	},
  	"render": "theabyss:abyssiceore",
  	"growModifier": 1.0,
  	"categories": ["abyss"]
  })

  event.custom(
    {
  	"type": "cagedmobs:env_data",
  	"conditions": [
  		{
  			"type": "forge:mod_loaded",
  			"modid": "theabyss"
  		}
  	],
  	"input": {
  		"item": "theabyss:node_crystal_block"
  	},
  	"render": "theabyss:node_crystal_block",
  	"growModifier": 1.0,
  	"categories": ["node"]
  })

  event.custom(
    {
    "type": "cagedmobs:env_data",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "theabyss"
      }
    ],
    "input": {
      "item": "theabyss:eot_block"
    },
    "render": "theabyss:eot_block",
    "growModifier": 1.0,
    "categories": ["black"]
  })

});
