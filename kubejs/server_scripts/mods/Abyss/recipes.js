onEvent('recipes', event => {

    // Unstable Obsidian
    event.shaped('2x theabyss:abyssportalstone', [
      `OLO`,
      `LNL`,
      `OLO`
    ], {
      O: 'minecraft:obsidian',
      L: 'theabyss:abyssloranitem',
      N: 'powah:crystal_niotic'
    })

    // Abyss Activator portal
    event.shaped('theabyss:theabyssdim', [
      ` I `,
      `ENE`,
      ` B `
    ], {
      B: 'minecraft:lava_bucket',
      E: 'extendedcrafting:black_iron_ingot',
      N: 'powah:crystal_niotic',
      I: 'mysticalagriculture:imperium_ingot'
    })
  });
