// priority: 99
onEvent("recipes", (event) => {
    global.types
        .map((t) => t.toLowerCase())
        .forEach((t) => {
            event.shaped("chromasky:" + t + "_cluster", ["CC", "CC"], {
                C: "chromasky:" + t + "_chunk",
            });
        });

    // compression and decompression recipes
    for (let type in global.compressables) {
        let props = global.compressables[type];
        let maxLevel = props.maxLevel || global.maxCompress;
        for (let i = 1; i <= maxLevel; i++) {
            let sm = Ingredient.of(`#resource:${type}/${i - 1}x`);
            let lg = Ingredient.of(`#resource:${type}/${i}x`);

            event.shaped(lg, ["CCC", "CCC", "CCC"], {
                C: sm,
            });

            event.shapeless(Item.of(sm, 9), lg);
        }
    }

    const multiSmelt = (output, input) => {
        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    };

    multiSmelt("minecraft:iron_nugget", "chromasky:iron_cluster");
    multiSmelt("minecraft:gold_nugget", "chromasky:gold_cluster");
    multiSmelt("thermal:copper_nugget", "chromasky:copper_cluster");
    multiSmelt("tconstruct:cobalt_nugget", "chromasky:cobalt_cluster");
    multiSmelt("thermal:tin_nugget", "chromasky:tin_cluster");
    multiSmelt("thermal:nickel_nugget", "chromasky:nickel_cluster");
    multiSmelt("thermal:silver_nugget", "chromasky:silver_cluster");
    multiSmelt("thermal:lead_nugget", "chromasky:lead_cluster");
    multiSmelt("mekanism:nugget_uranium", "chromasky:uranium_cluster");
    multiSmelt("mekanism:nugget_osmium", "chromasky:osmium_cluster");
    multiSmelt("mekanism:fluorite_gem", "chromasky:fluorite_cluster");
    multiSmelt("immersiveengineering:ingot_aluminum", "chromasky:aluminum_cluster");

    multiSmelt("tconstruct:cobalt_ingot", "chromasky:cobalt_dust");
});
