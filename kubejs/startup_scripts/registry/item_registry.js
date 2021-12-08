// priority: 100
onEvent("item.registry", (event) => {
    global.types.forEach((t) => {
        event.create("chromasky:" + t.toLowerCase() + "_chunk").displayName(t + " Chunk");
        event.create("chromasky:" + t.toLowerCase() + "_cluster").displayName(t + " Cluster");
    });

    event.create("chromasky:cobalt_dust").displayName("Cobalt Dust");
});
