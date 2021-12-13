

events.listen('recipes', event => {
  event.remove({ output: 'immersiveengineering:cokebrick' })
    event.custom({
      "type": "tconstruct:casting_basin",
      "fluid":
      {
        "name": "kubejs:molten_coke_brick",
        "amount": 1000
      },
      "result": "immersiveengineering:cokebrick",
      "cooling_time": 80
    })
});
