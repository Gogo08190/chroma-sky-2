onEvent("recipes", (event) => {
    // Book of Binding : Foliot
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
    // Book of Binding : Afrit
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
    // Book of Binding : Marid
    event.remove({ output: 'occultism:book_of_binding_marid' })
    event.shaped('occultism:book_of_binding_marid', [
        'IO ',
        'PWP',
        ' O '
    ], {
        I: 'occultism:purified_ink',
        P: 'projectred-core:purple_illumar',
        W: 'minecraft:writable_book',
        O: 'projectred-core:orange_illumar'
    })
    // Book of Binding : Djinni
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
    // Golden Sacrificial Bowl
    event.remove({ output: 'occultism:golden_sacrificial_bowl' })
    event.shaped('occultism:golden_sacrificial_bowl', [
        'GGG',
        'GBG',
        'GGG'
    ], {
        G: 'minecraft:gold_block',
        B: 'occultism:sacrificial_bowl'
    })
    // Chalk Brush
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
    // Whormhole Frame
    event.remove({ output: 'occultism:wormhole_frame' })
    event.shaped('occultism:wormhole_frame', [
        ' G ',
        'GFG',
        ' G '
    ], {
        F: 'occultism:otherstone_frame',
        G: 'minecraft:gold_block'
    })
    // Butcher Knife
    event.remove({ output: 'occultism:butcher_knife' })
    event.shaped('occultism:butcher_knife', [
        ' II',
        'II ',
        'S  '
    ], {
        I: 'minecraft:iron_block',
        S: 'immersiveengineering:stick_treated'
    })
    //Divination Rod
    event.remove({ output: 'occultism:divination_rod' })
    event.shaped('occultism:divination_rod', [
        'SIS',
        'SIS',
        ' S '
    ], {
        I: 'occultism:spirit_attuned_gem',
        S: 'immersiveengineering:stick_treated'
    })
    // Remote inert
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