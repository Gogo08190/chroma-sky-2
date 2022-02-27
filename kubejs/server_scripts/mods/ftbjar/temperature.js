onEvent("recipes", (event) => {
    const temp = event.recipes.ftbjarmod.temperature_source;

    event.remove({ id: "ftbjarmod:temperature_sources/blue_ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/packed_ice" });

    const source = (temperature, block, efficiency) => {
        temp({
            temperature: temperature,
            block: block,
            efficiency: efficiency,
        });
    };

    const source2 = (temperature, block, item, efficiency) => {
        temp({
            temperature: temperature,
            block: block,
            item: item,
            efficiency: efficiency,
        });
    };

    //Sub temp
    source("subzero", "minecraft:packed_ice", 2.0);
    source("subzero", "minecraft:snow_block", 0.45);
    source("subzero", "minecraft:ice", 0.75);
    source("subzero", "minecraft:blue_ice", 4.0);
    source("subzero", "powah:dry_ice", 6.0);


    source2("low", "tconstruct:blazing_blood_fluid", "tconstruct:blazing_blood_bucket", 6.0);

    source2("subzero", "kubejs:cryotheum", "kubejs:cryotheum_bucket", 3.0);
    source2("subzero", "minecraft:water", "minecraft:water_bucket", 0.20);
});
