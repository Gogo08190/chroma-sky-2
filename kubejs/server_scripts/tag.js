// priority: 100
onEvent("item.tags", (event) => {
    event.add("tconstruct:tables/station", /^tconstruct:tinker_station/g);
    event.add("tconstruct:tables/builder", /^tconstruct:part_builder/g);
    event.add("forge:rubber", "thermal:rubber");
    event.add("itemfilters:check_nbt", ["extendedcrafting:singularity", "patchouli:guide_book", "immersiveengineering:blueprint", "animalcrops:seeds", "animalcrops:anemonemal", "naturesaura:aura_bottle", "naturesaura:effect_powder"]);
    event.add("forge:ingots/inferium", "mysticalagriculture:inferium_ingot");
    event.add("forge:uraninite", "powah:uraninite");
    event.add("forge:dusts/ender", "thermal:ender_pearl_dust");

    event.add("chisel:basalt", ["minecraft:basalt", "minecraft:polished_basalt"]);

    event.add("chisel:sandstone", [
        "minecraft:sandstone",
        "minecraft:chiseled_sandstone",
        "minecraft:cut_sandstone",
        "minecraft:smooth_sandstone",
    ]);
    event.add("chisel:metals/bronze", ["thermal:bronze_block"]);
    event.add("chisel:emerald", ["minecraft:emerald_block"]);
    event.add("chisel:redstone", ["minecraft:redstone_block"]);
    event.remove("chisel:prismarine", "minecraft:prismarine");

    event.add("forge:dusts/cobalt", "chromasky:cobalt_dust");

    event.get('forge:dusts/gold').remove('immersiveengineering:dust_gold')
    event.get('forge:dusts/copper').remove('immersiveengineering:dust_copper')
    event.get('forge:dusts/lead').remove('immersiveengineering:dust_lead')
    event.get('forge:dusts/silver').remove('immersiveengineering:dust_silver')
    event.get('forge:dusts/nickel').remove('immersiveengineering:dust_nickel')
    event.get('forge:dusts/uranium').remove('immersiveengineering:dust_uranium')
    event.get('forge:dusts/constantan').remove('immersiveengineering:dust_constantan')
    event.get('forge:dusts/electrum').remove('immersiveengineering:dust_electrum')
    event.get('forge:dusts/steel').remove('immersiveengineering:dust_steel')
    event.get('forge:dusts/iron').remove('immersiveengineering:dust_iron')

    // Resources
    global.types
        .map((t) => t.toLowerCase())
        .forEach((t) => {
            event.add("forge:chunks/" + t, "chromasky:" + t + "_chunk");
            event.add("forge:chunks", "chromasky:" + t + "_chunk");
            event.add("forge:clusters/" + t, "chromasky:" + t + "_cluster");
            event.add("forge:clusters", "chromasky:" + t + "_cluster");
            event.add("forge:ores/" + t, "#forge:clusters/" + t);
            event.add("forge:ores", "#forge:clusters");
        });

    event.add("forge:dust", "ftbsluice:dust");

    // compressed stuff
    for (let type in global.compressables) {
        let props = global.compressables[type];
        let maxLevel = props.maxLevel || global.maxCompress;
        for (let i = 0; i <= maxLevel; i++) {
            let input = i > 0 ? `chromasky:${i}x_compressed_${type}` : props.original;
            event.add(`resource:${type}/${i}x`, input);
        }
    }
});

onEvent("block.tags", (event) => {
    event.add("ftbultimine:excluded_blocks", ["cb_multipart:multipart"]);
    event.add("chisel:basalt", ["minecraft:basalt", "minecraft:polished_basalt"]);

    event.add("chisel:sandstone", [
        "minecraft:sandstone",
        "minecraft:chiseled_sandstone",
        "minecraft:cut_sandstone",
        "minecraft:smooth_sandstone",
    ]);
    event.add("chisel:metals/aluminum", ["immersiveengineering:storage_aluminum"]);
    event.add("chisel:metals/bronze", ["thermal:bronze_block"]);
    event.add("chisel:emerald", ["minecraft:emerald_block"]);
    event.add("chisel:redstone", ["minecraft:redstone_block"]);
    event.remove("chisel:prismarine", "minecraft:prismarine");
});
