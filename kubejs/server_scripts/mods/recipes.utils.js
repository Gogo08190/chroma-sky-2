// priority: 99
onEvent("recipes", (event) => {

    event.shapeless(item.of("minecraft:wheat_seeds"), ["#forge:crops/wheat"]);

    event.shapeless("9x minecraft:ender_pearl", "miniutilities:ender_pearl_block");

    event.shapeless('4x minecraft:clay_ball', 'minecraft:clay');

    event.shapeless('minecraft:string', '3x chromasky:plant_string');

    event.shapeless('minecraft:flint', '3x chromasky:flint_shard');

    event.shapeless('minecraft:oak_leaves', '9x chromasky:leaf');

    event.shapeless('4x minecraft:quartz', 'minecraft:quartz_block');

    event.shaped(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:cs2-machine-manual"}'), [
    'BC'
    ], {
      C: 'immersiveengineering:component_steel',
      B: 'minecraft:book'
    });

    event.shaped('minecraft:dirt', [
    'CC ',
    'CC '
    ], {
      C: 'chromasky:compost'
    });

    event.shaped('minecraft:cobblestone', [
    'CC',
    'CC'
    ], {
      C: 'chromasky:pebble'
    });

    event.shaped('chromasky:compost', [
    ' L ',
    'LBL',
    ' L '
    ], {
      L: 'chromasky:leaf',
      B: 'minecraft:bone_meal'
    });

    event.remove({ output: 'minecraft:furnace' })
    event.shaped('minecraft:furnace', [
    'CCC',
    'D D',
    'CCC'
    ], {
      C: 'minecraft:cobblestone',
      D: 'chromasky:1x_compressed_cobblestone'
    });

    event.remove({ output: 'cyclic:cask' })
    event.shaped('cyclic:cask', [
    'RSR',
    'SBS',
    'RSR'
    ], {
      R: 'minecraft:rotten_flesh',
      S: 'minecraft:string',
      B: 'minecraft:barrel'
    });

    event.remove({ output: 'integrateddynamics:squeezer' })
    event.shaped('integrateddynamics:squeezer', [
    'BEB',
    'B B',
    'RSR'
    ], {
      R: 'minecraft:stripped_oak_wood',
      S: 'minecraft:bowl',
      B: 'minecraft:stick',
      E: 'pamhc2foodcore:rolleritem'
    });

    event.remove({ output: 'cookingforblockheads:sink' })
    event.shaped('cookingforblockheads:sink', [
    'CCC',
    'TAT',
    'TTT'
    ], {
      C: 'ftbjarmod:cast_iron_ingot',
      T: 'minecraft:terracotta',
      A: 'thermal:device_water_gen'
    });

    event.remove({ output: 'dimpaintings:overworld_painting' })
    event.shaped('dimpaintings:overworld_painting', [
    'SLC',
    'LPL',
    'CLS'
    ], {
      S: 'chromasky:3x_compressed_stone',
      C: 'chromasky:3x_compressed_cobblestone',
      L: '#minecraft:leaves',
      P: 'minecraft:painting'
    });

    event.remove({ output: 'dimpaintings:nether_painting' })
    event.shaped('dimpaintings:nether_painting', [
    'NON',
    'OPO',
    'NON'
    ], {
      N: 'chromasky:1x_compressed_netherrack',
      O: 'minecraft:obsidian',
      P: 'minecraft:painting'
    });

    event.remove({ output: 'dimpaintings:end_painting' })
    event.shaped('dimpaintings:end_painting', [
    'NON',
    'OPO',
    'NON'
    ], {
      N: 'chromasky:2x_compressed_endstone',
      O: 'chromasky:enderessence',
      P: 'minecraft:painting'
    });

    event.remove({ output: 'tconstruct:pattern' })
    event.shaped('3x tconstruct:pattern', [
    'PP',
    'SS'
    ], {
      S: 'minecraft:stick',
      P: 'minecraft:oak_planks'
    });

    event.remove({ output: 'chisel:iron_chisel' })
    event.shaped('chisel:iron_chisel', [
    'I',
    'S'
    ], {
      S: 'minecraft:stick',
      I: 'minecraft:iron_ingot'
    });

    event.remove({ output: 'entangled:block' })

    event.remove({ output: 'entangled:item' })
    event.shaped('entangled:item', [
    ' PK',
    ' OP',
    'O  '
    ], {
      P: 'minecraft:ender_eye',
      O: 'minecraft:obsidian',
      K: 'minecraft:emerald'
    });

    // Basalt
    event.shaped('8x chisel:basalt/raw', [
      'III',
      'ILI',
      'III'
    ], {
      L: '#forge:dyes/black',
      I: 'minecraft:stone'
    })

    // Limestone
    event.shaped('8x quark:limestone', [
      'III',
      'ILI',
      'III'
    ], {
      L: '#forge:dyes/yellow',
      I: 'minecraft:stone'
    })

    // Deepslate
    event.shaped('8x quark:cobbled_deepslate', [
      'BSB',
      'SBS',
      'BSB'
    ], {
      B: 'minecraft:basalt',
      S: 'minecraft:cobblestone'
    })

    // Jasper
    event.shaped('8x quark:jasper', [
      'III',
      'ILI',
      'III'
    ], {
      L: '#forge:dyes/red',
      I: 'minecraft:stone'
    })

    // Slate
    event.shaped('8x quark:slate', [
      'III',
      'ILI',
      'III'
    ], {
      L: '#forge:dyes/cyan',
      I: 'minecraft:stone'
    })

    // Myalite
    event.shaped('8x quark:myalite', [
      'III',
      'ILI',
      'III'
    ], {
      L: '#forge:dyes/purple',
      I: 'minecraft:stone'
    })

    event.remove({ output: 'cagedmobs:mobcage' })
    event.remove({ output: 'cagedmobs:hoppingmobcage' })
    event.shaped('cagedmobs:hoppingmobcage', [
      'C',
      'H'
    ], {
      C: 'cagedmobs:mobcage',
      H: 'speedyhoppers:speedyhopper_mk3'
    })

    event.remove({ output: 'farmingforblockheads:market' })
    event.shaped('farmingforblockheads:market', [
    'SRS',
    'W W',
    'WWW'
    ], {
      W: 'immersiveengineering:treated_wood_horizontal',
      S: 'immersiveengineering:plate_steel',
      R: 'thermal:red_rockwool'
    });

    event.remove({ output: 'tiab:timeinabottle' })
    event.shaped('tiab:timeinabottle', [
    'GGG',
    'DTD',
    'LBL'
    ], {
      L: 'minecraft:lapis_lazuli',
      B: 'minecraft:glass_bottle',
      D: 'thermal:diamond_gear',
      T: 'naturesaura:clock_hand',
      G: 'minecraft:gold_ingot'
    });
});
