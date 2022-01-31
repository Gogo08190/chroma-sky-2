// priority: 0
onEvent("item.tooltip", (event) => {
    event.add(/minecraft:(wooden|stone|iron|golden|diamond|netherite)_(sword|shovel|(pick)?axe|hoe)/, [
        Text.red("This item is for crafting only!"),
    ]);

    event.add(/miniutilities:experience_pearl*/, [
        Text.red("Experience pearls are gotten when you kill a mob with experience harvester enchant."),
    ]);

    event.add(/^losttrinkets:(?!treasure_bag).+$/, [Text.green("Right-click to learn!")]);

    event.add("miniutilities:cursed_earth", [Text.green("Spawns hostile mobs")]);
    event.add("miniutilities:blessed_earth", [Text.green("Spawns passive mobs")]);
    event.add("miniutilities:blursed_earth", [Text.green("Spawns all mobs")]);

    event.add('farmersdelight:netherite_knife', [
        Text.red("Do not use on a Stuffed Hoglin due to client crash."),
    ]);
    event.add('farmersdelight:golden_knife', [
        Text.red("Do not use on a Stuffed Hoglin due to client crash."),
    ]);
});
