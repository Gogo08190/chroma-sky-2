onEvent('recipes', event => {

  // Collector Crystal
  event.shaped(Item.of('astralsorcery:rock_collector_crystal', '{astralsorcery:{constellation:"astralsorcery:evorsio",crystalProperties:{attributes:[{discovered:1b,property:"astralsorcery:size",pLevel:1},{discovered:1b,property:"astralsorcery:purity",pLevel:1},{discovered:1b,property:"astralsorcery:shape",pLevel:1},{discovered:1b,property:"astralsorcery:collector.rate",pLevel:1},{discovered:1b,property:"astralsorcery:constellation.evorsio",pLevel:1}]}}}'), [
  'AAA',
  'ABA',
  'AAA'
  ], {
    B: 'minecraft:bone_meal',
    A: 'astralsorcery:aquamarine'
  })

  // Marble
  event.shaped('8x astralsorcery:marble_raw', [
    `III`,
    `ILI`,
    `III`
  ], {
    L: '#forge:dyes/white',
    I: `minecraft:stone`
  })
});
