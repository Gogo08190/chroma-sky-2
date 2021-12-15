onEvent('recipes', event => {
    event.remove({ output: 'mana-and-artifice:runeforge' })

    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "tag": "#mana-and-artifice:stone_runes"
            },
            {
                "tag": "#mana-and-artifice:stone_runes"
            },
            {
                "tag": "#mana-and-artifice:stone_runes"
            },
            {
                "tag": "#mana-and-artifice:stone_runes"
            },
            {
                "item": "naturesaura:infused_stone"
            },
            {
                "item": "naturesaura:infused_stone"
            }/*,
            {
                "item": "naturesaura:infused_stone"
            },
            {
                "item": "naturesaura:infused_stone"
            }*/
        ],
        "sapling": {
            "item": "integrateddynamics:menril_sapling"
        },
        "output": {
            "item": "mana-and-artifice:runeforge",
            "count": 1
        },
        "time": 200
    })


});