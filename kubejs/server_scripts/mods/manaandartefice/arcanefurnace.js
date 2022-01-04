onEvent('recipes', event => {
    //Rune Pattern 
    event.remove({ output: 'mana-and-artifice:rune_pattern' })
    event.custom(
        {
            "type": "mana-and-artifice:arcane-furnace",
            "tier": 1,
            "input": "mana-and-artifice:rune_clay_plate",
            "output": "mana-and-artifice:rune_pattern",
            "burnTime": 200
        }
    )
})