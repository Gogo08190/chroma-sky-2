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
});
