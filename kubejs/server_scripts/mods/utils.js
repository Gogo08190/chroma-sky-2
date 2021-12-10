// priority: 99
onEvent("recipes", (event) => {
    event.shapeless(item.of("minecraft:clay_ball", 4), ["#forge:storage_blocks/clay"]);

    event.shapeless(item.of("minecraft:wheat_seeds"), ["#forge:crops/wheat"]);

    event.shapeless("9x minecraft:ender_pearl", "miniutilities:ender_pearl_block");

    event.shapeless('minecraft:string', '3x chromasky:plant_string');

    event.shapeless('minecraft:oak_leaves', '9x chromasky:leaf');

    event.shaped('minecraft:dirt', [
    'CC ',
    'CC '
    ], {
      C: 'chromasky:compost'
    });

    event.shaped('chromasky:compost', [
    'LLL',
    'LBL',
    'LLL'
    ], {
      L: 'chromasky:leaf',
      B: 'minecraft:bone_meal'
    });
});
