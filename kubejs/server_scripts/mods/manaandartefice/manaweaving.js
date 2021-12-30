onEvent('recipes', event => {

    event.custom({
        "type": "mana-and-artifice:manaweaving-recipe",
        "output": "minecraft:grass_block",
        "tier": 1,
        "items": [
            "minecraft:ender_eye",
            "minecraft:ender_pearl",
            "ironfurnaces:obsidian_furnace",
            "minecraft:nether_star"
        ],
        "patterns": [
            "mana-and-artifice:circle",
            "mana-and-artifice:triangle",
            "mana-and-artifice:circle"
        ]
    })
})