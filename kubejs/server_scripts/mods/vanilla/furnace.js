// priority: 99
onEvent("recipes", (event) => {
    global.types
        .map((t) => t.toLowerCase())
        .forEach((t) => {
            event.shaped("chromasky:" + t + "_cluster", ["CC", "CC"], {
                C: "chromasky:" + t + "_chunk",
            });
        });

    global.types
        .map((t) => t.toLowerCase())
        .forEach((t) => {
            event.shapeless("4x chromasky:" + t + "_chunk", "chromasky:" + t + "_cluster");
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

    multiSmelt("minecraft:iron_nugget", "#forge:chunks/iron");
    multiSmelt("minecraft:gold_nugget", "#forge:chunks/gold");
    multiSmelt("thermal:copper_nugget", "#forge:chunks/copper");
    multiSmelt("tconstruct:cobalt_nugget", "#forge:chunks/cobalt");
    multiSmelt("thermal:tin_nugget", "#forge:chunks/tin");
    multiSmelt("thermal:nickel_nugget", "#forge:chunks/nickel");
    multiSmelt("thermal:silver_nugget", "#forge:chunks/silver");
    multiSmelt("thermal:lead_nugget", "#forge:chunks/lead");
    multiSmelt("mekanism:nugget_uranium", "#forge:chunks/uranium");
    multiSmelt("mekanism:nugget_osmium", "#forge:chunks/osmium");
    multiSmelt("mekanism:fluorite_gem", "#forge:clusters/fluorite");
    multiSmelt("immersiveengineering:ingot_aluminum", "#forge:clusters/aluminum");

    multiSmelt("tconstruct:cobalt_ingot", "chromasky:cobalt_dust");
});
