onEvent('recipes', event => {

  event.custom({
        "type": "naturesaura:animal_spawner",
        "ingredients": [
            {
                "item": "naturesaura:birth_spirit"
            },
            {
                "item": "minecraft:emerald"
            },
            {
                "item": "minecraft:anvil"
            }
        ],
        "entity": "minecraft:villager",
        "aura": 50000,
        "time": 60
    })
});
