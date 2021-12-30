onEvent("recipes", (event) => {
    event.remove({ output: 'occultism:book_of_binding_foliot' })
    event.shaped('occultism:book_of_binding_foliot', [
        'IQ ',
        'QWQ',
        ' Q '
    ], {
        I: 'occultism:purified_ink',
        Q: 'minecraft:quartz',
        W: 'minecraft:writable_book'
    })

    event.remove({ output: 'occultism:book_of_binding_afrit' })
    event.shaped('occultism:book_of_binding_afrit', [
        'IP ',
        'PWP',
        ' P '
    ], {
        I: 'occultism:purified_ink',
        P: 'projectred-core:purple_illumar',
        W: 'minecraft:writable_book'
    })

    event.remove({ output: 'occultism:book_of_binding_djinni' })
    event.shaped('occultism:book_of_binding_djinni', [
        'IO ',
        'PWP',
        ' O '
    ], {
        I: 'occultism:purified_ink',
        P: 'projectred-core:purple_illumar',
        W: 'minecraft:writable_book',
        O: 'projectred-core:orange_illumar'
    })

    event.remove({ output: 'occultism:book_of_binding_djinni' })
    event.shaped('occultism:book_of_binding_djinni', [
        'IG ',
        'GWG',
        ' G '
    ], {
        I: 'occultism:purified_ink',
        G: 'projectred-core:green_illumar',
        W: 'minecraft:writable_book'
    })

    event.remove({ output: 'occultism:golden_sacrificial_bowl' })
    event.shaped('occultism:golden_sacrificial_bowl', [
        'GGG',
        'GBG',
        'GGG'
    ], {
        G: 'minecraft:gold_block',
        B: 'occultism:sacrificial_bowl'
    })

    event.remove({ output: 'occultism:brush' })
    event.shaped('occultism:brush', [
        '   ',
        'WWW',
        'RRC'
    ], {
        W: 'immersiveengineering:treated_wood_horizontal',
        R: 'thermal:white_rockwool',
        C: 'projectred-core:woven_cloth'
    })

    event.remove({ output: 'occultism:wormhole_frame' })
    event.shaped('occultism:wormhole_frame', [
        ' G ',
        'GFG',
        ' G '
    ], {
        F: 'occultism:otherstone_frame',
        G: 'minecraft:gold_block'
    })

    event.remove({ output: 'occultism:butcher_knife' })
    event.shaped('occultism:butcher_knife', [
        ' II',
        'II ',
        'S  '
    ], {
        I: 'minecraft:iron_block',
        S: 'immersiveengineering:stick_treated'
    })

    event.remove({ output: 'occultism:divination_rod' })
    event.shaped('occultism:divination_rod', [
        'SIS',
        'SIS',
        ' S '
    ], {
        I: 'occultism:spirit_attuned_gem',
        S: 'immersiveengineering:stick_treated'
    })

    event.remove({ output: 'occultism:storage_remote_inert' })
    event.shaped('occultism:storage_remote_inert', [
        'GTG',
        'BGB',
        'BBB'
    ], {
        G: 'minecraft:gold_block',
        T: 'occultism:otherstone_tablet',
        B: 'quark:iron_button'
    })
});