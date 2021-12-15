onEvent('recipes', event => {
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "chromasky:magiccrystal"
        },
        "output": {
            "item": "naturesaura:infused_iron"
        },
        "aura_type": "naturesaura:overworld",
        "aura": 15000,
        "time": 80
    })


});