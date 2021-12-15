onEvent('recipes', event => {
    //removed



    //blank glyph
    event.remove({ output: 'mana-and-artifice:stone_rune_blank' })
    event.shaped('mana-and-artifice:stone_rune_blank', [
        ' I ',
        'III',
        ' I '
    ], {
        I: 'naturesaura:infused_stone'
    })

    //Codex
    event.shapeless('mana-and-artifice:guide_book', ['mana-and-artifice:chimerite_gem', 'minecraft:book'])
});