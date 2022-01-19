onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:gravel", [
        ["minecraft:flint", 0.17],
        ["projectred-core:electrotine_dust", 0.20],
        ["chromasky:iron_chunk", 0.44],
        ["chromasky:coal_chunk", 0.28],
        ["chromasky:copper_chunk", 0.64],
        ["thermal:apatite", 0.24],
        ["thermal:cinnabar", 0.24],
        ["thermal:niter", 0.24],
        ["thermal:sulfur", 0.24],
        ["chromasky:lead_chunk", 0.07],
        ["chromasky:tin_chunk", 0.1],
        ["chromasky:fluorite_chunk", 0.1],
        ["chromasky:osmium_chunk", 0.06],
        ["chromasky:aluminum_chunk", 0.09],
    ]).max(2);

    sluice(["iron"], "#forge:gravel", [
        ["chromasky:iron_chunk", 0.54],
        ["minecraft:flint", 0.22],
        ["chromasky:coal_chunk", 0.40],
        ["chromasky:copper_chunk", 0.14],
        ["thermal:apatite", 0.34],
        ["thermal:cinnabar", 0.34],
        ["thermal:niter", 0.34],
        ["thermal:sulfur", 0.34],
        ["chromasky:lead_chunk", 0.1],
        ["chromasky:tin_chunk", 0.12],
        ["chromasky:fluorite_chunk", 0.15],
        ["chromasky:osmium_chunk", 0.09],
        ["chromasky:aluminum_chunk", 0.13],
        ["projectred-core:electrotine_dust", 0.28],
    ]);

    sluice(["gold"], "#forge:gravel", [
        ["minecraft:flint", 0.45],
        ["projectred-core:electrotine_dust", 0.32],
        ["chromasky:coal_chunk", 0.45],
        ["chromasky:iron_chunk", 0.64],
        ["chromasky:lapis_chunk", 0.14],
        ["chromasky:diamond_chunk", 0.03],
        ["chromasky:emerald_chunk", 0.04],
        ["chromasky:copper_chunk", 0.18],
        ["thermal:apatite", 0.44],
        ["thermal:cinnabar", 0.44],
        ["thermal:niter", 0.44],
        ["thermal:sulfur", 0.44],
        ["chromasky:lead_chunk", 0.13],
        ["chromasky:tin_chunk", 0.14],
        ["powah:uraninite_raw", 0.15],
        ["powah:uraninite_raw_dense", 0.07],
        ["mysticalagriculture:inferium_essence", 0.2],
        ["chromasky:osmium_chunk", 0.13],
        ["chromasky:aluminum_chunk", 0.16],
        ["thermal:sapphire", 0.1],
        ["thermal:ruby", 0.12],
    ]);

    sluice(["diamond"], "#forge:gravel", [
        ["chromasky:coal_chunk", 0.59],
        ["projectred-core:electrotine_dust", 0.35],
        ["mana-and-artifice:chimerite_gem", 0.16],
        ["chromasky:iron_chunk", 0.69],
        ["chromasky:lapis_chunk", 0.16],
        ["chromasky:diamond_chunk", 0.04],
        ["chromasky:emerald_chunk", 0.05],
        ["chromasky:copper_chunk", 0.22],
        ["thermal:apatite", 0.49],
        ["thermal:cinnabar", 0.49],
        ["thermal:niter", 0.49],
        ["thermal:sulfur", 0.49],
        ["chromasky:lead_chunk", 0.16],
        ["chromasky:tin_chunk", 0.16],
        ["powah:uraninite_raw", 0.22],
        ["powah:uraninite_raw_dense", 0.09],
        ["mysticalagriculture:inferium_essence", 0.3],
        ["chromasky:osmium_chunk", 0.17],
        ["chromasky:aluminum_chunk", 0.19],
        ["thermal:sapphire", 0.13],
        ["thermal:ruby", 0.17],
    ]);

    sluice(["blazing"], "#forge:gravel", [
        ["projectred-core:electrotine_dust", 0.36],
        ["mana-and-artifice:chimerite_gem", 0.21],
        ["minecraft:coal", 0.45],
        ["minecraft:iron_ingot", 0.71],
        ["minecraft:lapis_lazuli", 0.18],
        ["minecraft:diamond", 0.06],
        ["minecraft:emerald", 0.07],
        ["thermal:copper_ingot", 0.24],
        ["thermal:lead_ingot", 0.18],
        ["thermal:tin_ingot", 0.18],
        ["powah:uraninite", 0.17],
        ["mekanism:ingot_osmium", 0.19],
        ["immersiveengineering:ingot_aluminum", 0.21],
    ]).fluid("minecraft:lava");
});
