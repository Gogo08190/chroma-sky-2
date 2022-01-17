events.listen('recipes', function (e) {
    //Seed
    function seedPot(seed, categorie, growth) {
        e.remove({ id: "mysticalagriculture:crops/" + seed })
        e.custom({
            "type": "botanypots:crop",
            "seed": { "item": "mysticalagriculture:" + seed + "_seeds" },
            "categories": [categorie],
            "growthTicks": growth,
            "display": { "block": "mysticalagriculture:" + seed + "_crop", "properties": { "age": 7 } },
            "results": [
                {
                    "chance": 0.75, "minRolls": 1, "maxRolls": 1,
                    "output": { "item": "mysticalagriculture:" + seed + "_essence", "count": 1 }
                },
                {
                    "chance": 0.01, "minRolls": 1, "maxRolls": 1,
                    "output": { "item": "mysticalagriculture:fertilized_essence", "count": 1 }
                }]
        })
    }

    var seed1 = ["air", "earth", "water", "fire", "inferium", "stone", "dirt", "wood", "ice"]
    seed1.forEach(S => { seedPot(S, "Farmland_all", 1200) })
    var seed2 = ["nature", "dye", "nether", "coal", "coral", "honey", "pig", "chicken", "cow", "sheep", "squid", "fish", "slime", "turtle", "rubber", "silicon", "sulfur", "aluminum", "copper", "saltpeter", "mystical_flower", "apatite", "marble", "limestone", "basalt"]
    seed2.forEach(S => { seedPot(S, "Farmland_t2", 2400) })
    var seed3 = ["iron", "nether_quartz", "glowstone", "redstone", "obsidian", "prismarine", "zombie", "skeleton", "creeper", "spider", "rabbit", "tin", "bronze", "silver", "lead", "graphite", "blizz", "blitz", "basalz", "ender_biotite", "aquamarine", "rose_gold", "steeleaf", "slimesteel", "pig_iron", "tinkers_bronze", "quartz_enriched_iron"]
    seed3.forEach(S => { seedPot(S, "Farmland_t3", 3600) })
    var seed4 = ["gold", "lapis_lazuli", "end", "experience", "blaze", "ghast", "enderman", "steel", "nickel", "constantan", "electrum", "invar", "uranium", "signalum", "lumium", "hop_graphite", "osmium", "refined_glowstone", "refined_obsidian", "energized_steel", "blazing_crystal", "starmetal", "fluorite", "knightmetal", "cobalt", "hepatizon", "sapphire", "ruby",]
    seed4.forEach(S => { seedPot(S, "Farmland_t4", 4000) })
    var seed5 = ["platinum", "diamond", "emerald", "netherite", "wither_skeleton", "enderium", "niotic_crystal", "spirited_crystal", "uraninite", "rock_crystal", "manyullyn", "queens_slime", "draconium"]
    seed5.forEach(S => { seedPot(S, "Farmland_t5", 4500) })
    seedPot("nitro_crystal", "nitro_crystal_crux", 3000)
    seedPot("nether_star", "nether_star_crux", 3000)
    seedPot("dragon_egg", "dragon_egg_crux", 3000)
    seedPot("awakened_draconium", "draconium_crux", 3000)

    e.custom({
        "type": "botanypots:crop",
        "seed": { "item": "mysticalagriculture:chaos_seeds" },
        "categories": ["chaos_crux"],
        "growthTicks": 3000,
        "display": { "block": "mysticalagriculture:chaos_crop", "properties": { "age": 7 } },
        "results": [
            {
                "chance": 0.75, "minRolls": 1, "maxRolls": 1,
                "output": { "item": "mysticalagriculture:chaos_essence", "count": 1 }
            },
            {
                "chance": 0.01, "minRolls": 1, "maxRolls": 1,
                "output": { "item": "mysticalagriculture:fertilized_essence", "count": 1 }
            }]
    })

    //soil
    function soil(item, categorie, growth) {
        e.recipes.botanypots.soil({
            input: { item: item },
            display: { block: item },
            categories: categorie,
            growthModifier: growth
        })
    }

    soil("mysticalagradditions:nether_star_crux", ["nether_star_crux"], 0.90)
    soil("mysticalagradditions:dragon_egg_crux", ["dragon_egg_crux"], 0.90)
    soil("mysticalagradditions:nitro_crystal_crux", ["nitro_crystal_crux"], 0.90)
    soil("mysticalagradditions:awakened_draconium_crux", ["draconium_crux"], 0.90)
    soil("chromasky:chaos_crux", ["chaos_crux"], 0.90)

    e.remove({ id: "mysticalagriculture:soils/inferium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/prudentium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/tertium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/imperium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/supremium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/insanium_farmland" })
    soil("minecraft:farmland", ["Farmland_all"], 0.10)
    soil("mysticalagriculture:inferium_farmland", ["Farmland_all", "Farmland_t1"], 0.20)
    soil("mysticalagriculture:prudentium_farmland", ["Farmland_all", "Farmland_t1", "Farmland_t2"], 0.30)
    soil("mysticalagriculture:tertium_farmland", ["Farmland_all", "Farmland_t1", "Farmland_t2", "Farmland_t3"], 0.40)
    soil("mysticalagriculture:imperium_farmland", ["Farmland_all", "Farmland_t1", "Farmland_t2", "Farmland_t3", "Farmland_t4"], 0.50)
    soil("mysticalagriculture:supremium_farmland", ["Farmland_all", "Farmland_t1", "Farmland_t2", "Farmland_t3", "Farmland_t4", "Farmland_t5"], 0.60)
    soil('mysticalagradditions:insanium_farmland', ["Farmland_all", "Farmland_t1", "Farmland_t2", "Farmland_t3", "Farmland_t4", "Farmland_t5"], 0.75)

})
