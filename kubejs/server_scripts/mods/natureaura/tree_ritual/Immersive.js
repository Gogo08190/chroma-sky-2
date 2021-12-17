onEvent('recipes', event => {
    event.remove({ output: 'immersiveengineering:cloche' })

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
            "item": "immersiveengineering:treated_wood_horizontal"
        },
        {
            "item": "minecraft:glass"
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
