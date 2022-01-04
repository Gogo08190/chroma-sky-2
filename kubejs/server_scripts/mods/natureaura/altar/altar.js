onEvent('recipes', event => {
    event.remove({output: 'naturesaura:altar'})
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "mana-and-artifice:chimerite_gem"
        },
        "output": {
            "item": "chromasky:magiccrystal"
        },
        "aura_type": "naturesaura:overworld",
        "aura": 15000,
        "time": 80
    })

    event.remove({output: 'naturesaura:altar'})
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "rats:little_black_worm"
        },
        "output": {
            "item": "theabyss:loranflower"
        },
        "aura_type": "naturesaura:nether",
        "aura": 5000,
        "time": 50
    })

});
