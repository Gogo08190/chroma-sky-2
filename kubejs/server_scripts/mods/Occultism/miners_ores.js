onEvent('recipes', (event) => {
    data = {
        recipes: [
            { result : 'chromasky:aluminum_cluster', weight: 1200 },
            { result : 'chromasky:coal_cluster', weight: 2500 },
            { result : 'chromasky:copper_cluster', weight: 2000 },
            { result : 'chromasky:diamond_cluster', weight: 400 },
            { result : 'chromasky:emerald_cluster', weight: 350 },
            { result : 'chromasky:fluorite_cluster', weight: 450 },
            { result : 'chromasky:gold_cluster', weight: 550 },
            { result : 'chromasky:iron_cluster', weight: 2000 },
            { result : 'chromasky:lapis_cluster', weight: 500 },
            { result : 'chromasky:lead_cluster', weight: 1500 },
            { result : 'chromasky:nickel_cluster', weight: 1000 },
            { result : 'chromasky:osmium_cluster', weight: 1500 },
            { result : 'chromasky:redstone_cluster', weight: 700 },
            { result : 'chromasky:silver_cluster', weight: 1000 },
            { result : 'chromasky:tin_cluster', weight: 1200 },
            { result : 'chromasky:uranium_cluster', weight: 500 },
            { result : 'chromasky:quartz_cluster', weight: 400 },
            { result : 'astralsorcery:rock_crystal_ore', weight: 250 },
            { result: 'minecraft:ancient_debris', weight: 80 },
            { result : 'chromasky:cobalt_cluster', weight: 100 },
            { result: 'occultism:iesnium_ore', weight: 100 }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'occultism:miner',
            ingredient: {
                tag: 'occultism:miners/ores'
            },
            result: {
                item: recipe.result
            },
            weight: recipe.weight
        });
    });
});