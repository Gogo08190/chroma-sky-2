onEvent('recipes', event => {
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
    event.remove({ output: 'mana-and-artifice:stone_rune_yellow' })
    event.shapeless('mana-and-artifice:stone_rune_yellow', ['mana-and-artifice:stone_rune_blank', 'minecraft:yellow_dye'])
});
