onEvent('recipes', event => {
    event.remove({output: 'mana-and-artifice:occulus'})
    event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": "tconstruct:crafting_station"
        },
        "start_item": {
            "item": "chromasky:magiccrystal"
        },
        "output": {
            "item": "mana-and-artifice:occulus"
        }
    })


});
