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

});
