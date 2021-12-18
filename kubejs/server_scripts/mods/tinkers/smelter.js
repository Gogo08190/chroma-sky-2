events.listen('recipes', event => {
  event.custom({
    "type": "tconstruct:alloy",
    "inputs":
      [{
        "name": "tconstruct:seared_stone",
        "amount": 1152
      },
      {
        "name": "tconstruct:molten_clay", "amount": 3000
      }],
    "result":
    {
      "fluid": "kubejs:molten_coke_brick", "amount": 4374
    },
    "temperature": 800
  })

  event.remove({ output: 'immersiveengineering:cokebrick' })
  event.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "item": "minecraft:sandstone"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "kubejs:molten_coke_brick",
      "amount": 1296
    },
    "result": "immersiveengineering:cokebrick",
    "cooling_time": 50
  })

  event.custom({
    "type": "tconstruct:melting",
    "ingredient":
    {
      "item": "minecraft:nether_brick"
    },
    "result":
    {
      "fluid": "kubejs:molten_nether_brick",
      "amount": 144
    },
    "temperature": 800, "time": 50
  })

  event.custom({
    "type": "tconstruct:melting",
    "ingredient":
    {
      "item": "minecraft:nether_bricks"
    },
    "result":
    {
      "fluid": "kubejs:molten_nether_brick",
      "amount": 576
    },
    "temperature": 800, "time": 200
  })

  event.custom({
    "type": "tconstruct:casting_table",
    "cast":
    {
      "item": 'tconstruct:ingot_cast'
    },
    "cast_consumed": false,
    "fluid":
    {
      "name": "kubejs:molten_nether_brick",
      "amount": 144
    },
    "result": 'minecraft:nether_brick',
    "cooling_time": 100
  })

  event.custom({
    "type": "tconstruct:casting_basin",
    "fluid":
    {
      "name": "kubejs:molten_nether_brick",
      "amount": 576
    },
    "result": 'minecraft:nether_bricks',
    "cooling_time": 100
  })

  event.custom({
    "type": "tconstruct:alloy",
    "inputs":
      [{
        "name": "minecraft:lava",
        "amount": 1000
      },
      {
        "name": "kubejs:molten_nether_brick", "amount": 3456
      }],
    "result":
    {
      "fluid": "kubejs:molten_blast_brick", "amount": 4374
    },
    "temperature": 800
  })

  event.remove({ output: 'immersiveengineering:blastbrick' })
  event.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "item": "immersiveengineering:cokebrick"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "kubejs:molten_blast_brick",
      "amount": 1296
    },
    "result": "immersiveengineering:blastbrick",
    "cooling_time": 50
  })

  event.custom({
    "type": "tconstruct:casting_table",
    "cast":
    {
      "item": 'tconstruct:ingot_cast'
    },
    "cast_consumed": false,
    "fluid":
    {
      "name": "kubejs:molten_cast_iron",
      "amount": 144
    },
    "result": 'ftbjarmod:cast_iron_ingot',
    "cooling_time": 100
  })

  event.custom({
    "type": "tconstruct:casting_basin",
    "fluid":
    {
      "name": "kubejs:molten_cast_iron",
      "amount": 1298
    },
    "result": 'ftbjarmod:cast_iron_block',
    "cooling_time": 100
  })

  event.custom({
    "type": "tconstruct:casting_table",
    "cast":
    {
      "item": 'tconstruct:hammer_head_cast'
    },
    "cast_consumed": false,
    "fluid":
    {
      "name": "kubejs:molten_cast_iron",
      "amount": 1152
    },
    "result": 'chromasky:hammer_head',
    "cooling_time": 200
  })

  event.custom({
    "type": "tconstruct:melting",
    "ingredient":
    {
      "item": "ftbjarmod:cast_iron_ingot"
    },
    "result":
    {
      "fluid": "kubejs:molten_cast_iron",
      "amount": 144
    },
    "temperature": 800, "time": 50
  })

  event.custom({
    "type": "tconstruct:melting",
    "ingredient":
    {
      "item": "ftbjarmod:cast_iron_block"
    },
    "result":
    {
      "fluid": "kubejs:molten_cast_iron",
      "amount": 1296
    },
    "temperature": 800, "time": 200
  })
});
