// priority: 99
onEvent("recipes", (event) => {

    event.remove({ output: 'cobblefordays:tier_1' })
    event.remove({ output: 'cobblefordays:tier_2' })
    event.remove({ output: 'cobblefordays:tier_3' })
    event.remove({ output: 'cobblefordays:tier_4' })
    event.remove({ output: 'cobblefordays:tier_5' })
    event.shaped('cobblefordays:tier_1', [
    'LCL',
    'BGW',
    'LCL'
    ], {
      L: '#minecraft:logs',
      C: 'chromasky:1x_compressed_cobblestone',
      G : '#forge:glass',
      B: 'minecraft:lava_bucket',
      W: 'minecraft:water_bucket'
    });

    event.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "item": "cobblefordays:tier_1"
    },
    "cast_consumed": true,
    "fluid": {
      "tag": "tconstruct:seared_stone",
      "amount": 2880
    },
    "result": "cobblefordays:tier_2",
    "cooling_time": 100
  })

  event.recipes.thermal
        .smelter("immersiveengineering:ingot_steel", ["cobblefordays:tier_4", "4x tconstruct:hepatizon_block", "2x thermal:obsidian_glass"])
        .energy(4000);


});
