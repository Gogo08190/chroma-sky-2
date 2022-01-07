// priority: 100
onEvent("entity.death", (event) => {
    if (event.entity.type == "minecraft:wither_skeleton" && Utils.random.nextDouble() < 0.25) {
        const entity = event.world.createEntity("item");
        entity.item = "chromasky:drop_of_darkness";
        entity.setPosition(event.entity.x, event.entity.y, event.entity.z);
        entity.spawn();
    }
});
