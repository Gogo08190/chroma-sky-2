// priority: 99
onEvent("recipes", (event) => {
    event.shapeless(item.of("minecraft:clay_ball", 4), ["#forge:storage_blocks/clay"]);

    event.shapeless(item.of("minecraft:wheat_seeds"), ["#forge:crops/wheat"]);

    event.shapeless("9x minecraft:ender_pearl", "miniutilities:ender_pearl_block");
});
