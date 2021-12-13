// priority: 99
onEvent("recipes", (event) => {

    event.remove({ output: 'cobblefordays:tier_1' })
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

    event.remove({ output: 'cobblefordays:tier_2' })
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
});
