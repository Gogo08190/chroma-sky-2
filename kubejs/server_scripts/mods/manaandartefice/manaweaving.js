onEvent('recipes', event => {

    event.custom({
        "type": "mana-and-artifice:manaweaving-recipe",
        "output": "chromasky:enderessence",
        "tier": 1,
        "items": [
            "minecraft:ender_eye",
            "minecraft:ender_pearl",
            "minecraft:obsidian",
            "minecraft:nether_star"
        ],
        "patterns": [
            "mana-and-artifice:circle",
            "mana-and-artifice:triangle",
            "mana-and-artifice:circle"
        ]
    })
})