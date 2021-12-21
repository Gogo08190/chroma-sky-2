onEvent("recipes", (event) => {
  event.remove({ output: 'cyclic:solidifier' })
  event.shaped('cyclic:solidifier', [
  'LQL',
  'GFG',
  'OOO'
  ], {
    O: 'minecraft:obsidian',
    G: 'thermal:enderium_glass',
    L: 'minecraft:lapis_block',
    F: 'ironfurnaces:iron_furnace',
    Q: 'thermal:quartz_gear'
  })

  event.remove({ output: 'cyclic:melter' })
  event.shaped('cyclic:melter', [
  'LQL',
  'GFG',
  'OOO'
  ], {
    O: 'minecraft:obsidian',
    G: 'thermal:signalum_glass',
    L: 'extendedcrafting:redstone_ingot_block',
    F: 'ironfurnaces:iron_furnace',
    Q: 'thermal:quartz_gear'
  })

  event.remove({ output: 'cyclic:energy_pipe' })
  event.remove({ output: 'cyclic:item_pipe' })
  event.remove({ output: 'cyclic:fluid_pipe' })
  event.remove({ output: 'cyclic:uncrafter' })
});
