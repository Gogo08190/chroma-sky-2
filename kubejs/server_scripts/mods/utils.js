// priority: 99
onEvent("recipes", (event) => {

    event.shapeless(item.of("minecraft:wheat_seeds"), ["#forge:crops/wheat"]);

    event.shapeless("9x minecraft:ender_pearl", "miniutilities:ender_pearl_block");

    event.shapeless('4x minecraft:clay_ball', 'minecraft:clay');

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
    'LWL'
    ], {
      L: 'chromasky:leaf',
      B: 'minecraft:bone_meal',
      W: 'ftbdripper:water_bowl'
    });
});
