onEvent('recipes', event => {
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

    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "masterfulmachinery:autoastral_autoastral_item_port_items_output"
        },
        "output": {
            "item": "masterfulmachinery:autoastral_autoastral_item_port_items_input"
        },
        "aura_type": "naturesaura:nether",
        "aura": 5000,
        "time": 50
    })

    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "theabyss:ricom_flower"
        },
        "output": {
            "item": "thebeginning:lazarus_flower"
        },
        "aura_type": "naturesaura:overworld",
        "aura": 200,
        "time": 80
    })

});
