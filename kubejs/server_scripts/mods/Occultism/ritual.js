onEvent('recipes', (event) => {

    event.remove({ output: 'matc:prudentium:crystal' });

    event.custom(
        {
            type: 'occultism:ritual',
            activation_item: 'matc:inferium:crystal',
            pentacle_id: 'occultism:craft_foliot',
            duration: 240,
            ritual_dummy: 'matc:prudentium:crystal',
            ingredients: [
                { item: 'mysticalagriculture:prudentium_gemstone' },
                { item: 'mysticalagriculture:prudentium_essence' },
                { item: 'mysticalagriculture:prudentium_gemstone' },
                { item: 'mysticalagriculture:prosperity_shard' },
                { item: 'mysticalagriculture:prosperity_shard' },
                { item: 'mysticalagriculture:prudentium_gemstone' },
                { item: 'mysticalagriculture:prudentium_essence' },
                { item: 'mysticalagriculture:prudentium_gemstone' },
            ],
            result: { item: 'matc:prudentium:crystal' },
            id: 'occultism/ritual/prudentium_crystal'
        }
    )
})