onEvent('recipes', event => {
    event.remove({output: 'naturesaura:offering'})
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