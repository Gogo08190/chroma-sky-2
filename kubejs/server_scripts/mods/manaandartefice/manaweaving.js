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

  event.remove({ output: 'matc:tertium_crystal' })
  event.custom({
    "type": "mana-and-artifice:manaweaving-recipe",
    "output": "matc:tertium_crystal",
    "tier": 2,
    "items": [
        "mysticalagriculture:tertium_gemstone",
        "mysticalagriculture:tertium_gemstone",
        "mysticalagriculture:tertium_gemstone",
        "mysticalagriculture:prosperity_ingot",
        "matc:prudentium_crystal",
        "mysticalagriculture:prosperity_ingot",
        "mysticalagriculture:tertium_essence",
        "mysticalagriculture:tertium_essence",
        "mysticalagriculture:tertium_essence"
    ],
    "patterns": [
        "mana-and-artifice:diamond",
        "mana-and-artifice:circle",
        "mana-and-artifice:triangle"
    ]
  })
  event.remove({ output: 'astralsorcery:tome' })
  event.custom({
    "type": "mana-and-artifice:manaweaving-recipe",
    "output": "astralsorcery:tome",
    "tier": 1,
    "items": [
        "chromasky:magical_infuse_book",
        "chromasky:shard_star"
    ],
    "patterns": [
        "mana-and-artifice:slash",
        "mana-and-artifice:circle",
        "mana-and-artifice:backslash"
    ]
  })
})
