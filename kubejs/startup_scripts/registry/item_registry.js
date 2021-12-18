// priority: 100
onEvent("item.registry", (event) => {
    global.types.forEach((t) => {
        event.create("chromasky:" + t.toLowerCase() + "_chunk").displayName(t + " Chunk");
        event.create("chromasky:" + t.toLowerCase() + "_cluster").displayName(t + " Cluster");
    });

    event.create("chromasky:cobalt_dust").displayName("Cobalt Dust");

    event.create("chromasky:compost").displayName("Compost");
    event.create("chromasky:leaf").displayName("Leaf");
    event.create("chromasky:plant_string").displayName("Plant String");
    event.create("chromasky:pebble").displayName("Pebble");
    event.create("chromasky:flint_shard").displayName("Flint Shard");
    event.create("chromasky:magiccrystal").displayName("Magic Crystal");
    event.create("chromasky:excitationcoil").displayName("Excitation Coil");
    event.create("chromasky:top_frame").displayName("Top Machine Frame");
    event.create("chromasky:bottom_frame").displayName("Bottom Machine Frame");
    event.create("chromasky:redstone_gear").displayName("Redstone Gear");
    event.create("chromasky:treated_wood_gear").displayName("Treated Wood Gear");
    event.create("chromasky:ultimategear").displayName("Ultimate Gear");
    event.create("chromasky:hammer_head").displayName("Hammer Head");
});
