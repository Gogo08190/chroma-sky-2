// priority: 99
onEvent("recipes", (event) => {

    event.shapeless(item.of("minecraft:wheat_seeds"), ["#forge:crops/wheat"]);

    event.shapeless("9x minecraft:ender_pearl", "miniutilities:ender_pearl_block");

    event.shapeless('4x minecraft:clay_ball', 'minecraft:clay');

    event.shapeless('minecraft:string', '3x chromasky:plant_string');

    event.shapeless('minecraft:oak_leaves', '9x chromasky:leaf');

    event.shapeless('chromasky:1x_compressed_stone', '9x minecraft:stone');
    event.shapeless('chromasky:2x_compressed_stone', '9x chromasky:1x_compressed_stone');
    event.shapeless('chromasky:3x_compressed_stone', '9x chromasky:2x_compressed_stone');

    event.shapeless('chromasky:1x_compressed_cobblestone', '9x minecraft:cobblestone');
    event.shapeless('chromasky:2x_compressed_cobblestone', '9x chromasky:1x_compressed_cobblestone');
    event.shapeless('chromasky:3x_compressed_cobblestone', '9x chromasky:2x_compressed_cobblestone');

    event.shapeless('chromasky:1x_compressed_gravel', '9x minecraft:gravel');
    event.shapeless('chromasky:2x_compressed_gravel', '9x chromasky:1x_compressed_gravel');
    event.shapeless('chromasky:3x_compressed_gravel', '9x chromasky:2x_compressed_gravel');

    event.shapeless('chromasky:1x_compressed_dirt', '9x minecraft:dirt');
    event.shapeless('chromasky:2x_compressed_dirt', '9x chromasky:1x_compressed_dirt');
    event.shapeless('chromasky:3x_compressed_dirt', '9x chromasky:2x_compressed_dirt');

    event.shapeless('chromasky:1x_compressed_sand', '9x minecraft:sand');
    event.shapeless('chromasky:2x_compressed_sand', '9x chromasky:1x_compressed_sand');
    event.shapeless('chromasky:3x_compressed_sand', '9x chromasky:2x_compressed_sand');

    event.shapeless('chromasky:1x_compressed_basalt', '9x minecraft:basalt');
    event.shapeless('chromasky:2x_compressed_basalt', '9x chromasky:1x_compressed_basalt');
    event.shapeless('chromasky:3x_compressed_basalt', '9x chromasky:2x_compressed_basalt');

    event.shapeless('chromasky:1x_compressed_endstone', '9x minecraft:end_stone');
    event.shapeless('chromasky:2x_compressed_endstone', '9x chromasky:1x_compressed_endstone');
    event.shapeless('chromasky:3x_compressed_endstone', '9x chromasky:2x_compressed_endstone');

    event.shapeless('chromasky:1x_compressed_netherrack', '9x minecraft:netherrack');
    event.shapeless('chromasky:2x_compressed_netherrack', '9x chromasky:1x_compressed_netherrack');
    event.shapeless('chromasky:3x_compressed_netherrack', '9x chromasky:2x_compressed_netherrack');

    event.shaped('minecraft:dirt', [
    'CC ',
    'CC '
    ], {
      C: 'chromasky:compost'
    });

    event.shaped('minecraft:cobblestone', [
    'CC ',
    'CC '
    ], {
      C: 'chromasky:pebble'
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

    event.remove({ output: 'minecraft:furnace' })
    event.shaped('chromasky:compost', [
    'CCC',
    'D D',
    'CCC'
    ], {
      C: 'minecraft:cobblestone',
      D: 'chromasky:1x_compressed_cobblestone'
    });
});
