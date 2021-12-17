onEvent('recipes', event => {
    event.remove({ output: 'mana-and-artifice:runeforge' })

    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "tag": "mana-and-artifice:stone_runes"
            },
            {
                "tag": "mana-and-artifice:stone_runes"
            },
            {
                "tag": "mana-and-artifice:stone_runes"
            },
            {
                "tag": "mana-and-artifice:stone_runes"
            },
            {
                "item": "naturesaura:infused_stone"
            },
            {
                "item": "naturesaura:infused_stone"
            },
            {
                "item": "naturesaura:infused_stone"
            },
            {
                "item": "naturesaura:infused_stone"
            }
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

    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "immersiveengineering:electric_lantern"
            },
            {
                "item": "immersiveengineering:fluid_pump"
            },
            {
                "item": "immersiveengineering:component_steel"
            },
            {
                "item": "immersiveengineering:component_steel"
            },
            {
                "item": "minecraft:glass"
            },
            {
                "item": "minecraft:glass"
            },
            {
                "item": "immersiveengineering:treated_wood_horizontal"
            },
            {
                "item": "immersiveengineering:treated_wood_horizontal"
            }
        ],
        "sapling": {
            "item": "minecraft:acacia_sapling"
        },
        "output": {
            "item": "immersiveengineering:cloche",
            "count": 1
        },
        "time": 200
    })



});
