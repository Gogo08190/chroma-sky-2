onEvent('recipes', event => {

  // Oak Sluice
  event.remove({ output: 'ftbsluice:oak_sluice' })
  event.shaped('ftbsluice:oak_sluice', [
  ' H ',
  'WBS',
  'WWW'
  ], {
    W: 'minecraft:oak_wood',
    S: 'minecraft:stick',
    B: 'minecraft:bowl',
    H: 'cyclic:hopper'
  })

  // Iron Sluice
  event.remove({ output: 'ftbsluice:iron_sluice' })
  event.shaped('ftbsluice:iron_sluice', [
  'IB ',
  'SCC',
  'LLL'
  ], {
    I: 'minecraft:iron_block',
    S: 'ftbsluice:oak_sluice',
    C: 'minecraft:chain',
    B: 'minecraft:bucket',
    L: '#forge:ingots/iron'
  })

  // Diamond Sluice
  event.remove({ output: 'ftbsluice:diamond_sluice' })
  event.shaped('ftbsluice:diamond_sluice', [
  'IB ',
  'SCC',
  'LLL'
  ], {
    I: 'minecraft:diamond_block',
    S: 'ftbsluice:iron_sluice',
    C: 'minecraft:chain',
    B: 'tconstruct:copper_can',
    L: '#forge:gems/diamond'
  })

  // Netherite Sluice
  event.remove({ output: 'ftbsluice:netherite_sluice' })
  event.shaped('ftbsluice:netherite_sluice', [
  'IB ',
  'SEC',
  'LLL'
  ], {
    I: 'minecraft:netherite_block',
    S: 'ftbsluice:diamond_sluice',
    C: 'minecraft:chain',
    B: 'mob_grinding_utils:jumbo_tank',
    E: 'powah:battery_starter',
    L: '#forge:ingots/netherite'
  })

  // Cloth Mesh
  event.remove({ output: 'ftbsluice:cloth_mesh' })
  event.shaped('ftbsluice:cloth_mesh', [
  'RSR',
  'SSS',
  'RSR'
  ], {
    S: 'minecraft:string',
    R: 'cb_microblock:stone_rod'
  })

  // Iron Mesh
  event.remove({ output: 'ftbsluice:iron_mesh' })
  event.shaped('ftbsluice:iron_mesh', [
  'RSR',
  'SMS',
  'RSR'
  ], {
    S: '#forge:ingots/iron',
    R: 'buildersaddition:iron_rod',
    M: 'ftbsluice:cloth_mesh'
  })

  // Gold Mesh
  event.remove({ output: 'ftbsluice:gold_mesh' })
  event.shaped('ftbsluice:gold_mesh', [
  'RSR',
  'SMS',
  'RSR'
  ], {
    S: '#forge:ingots/gold',
    R: 'buildersaddition:iron_rod',
    M: 'ftbsluice:iron_mesh'
  })

  // Diamond Mesh
  event.remove({ output: 'ftbsluice:diamond_mesh' })
  event.shaped('ftbsluice:diamond_mesh', [
  'RSR',
  'SMS',
  'RSR'
  ], {
    S: '#forge:gems/diamond',
    R: 'buildersaddition:iron_rod',
    M: 'ftbsluice:gold_mesh'
  })

  // Iron Auto Hammer
  event.remove({ output: 'ftbsluice:iron_auto_hammer' })
  event.shaped('ftbsluice:iron_auto_hammer', [
  'FIF',
  'VHV',
  'CGC'
  ], {
    C: 'ftbjarmod:cast_iron_block',
    G: 'ftbjarmod:cast_iron_gear',
    I: '#forge:ingots/gold',
    V: '#forge:glass',
    F: '#forge:ingots/iron',
    H: 'ftbsluice:iron_hammer'
  })

  // Gold Auto Hammer
  event.remove({ output: 'ftbsluice:gold_auto_hammer' })
  event.shaped('ftbsluice:gold_auto_hammer', [
  'FIF',
  'VHV',
  'CGC'
  ], {
    C: 'ftbjarmod:cast_iron_block',
    G: 'ftbsluice:iron_auto_hammer',
    I: '#forge:ingots/gold',
    V: '#forge:glass',
    F: '#forge:ingots/iron',
    H: 'ftbsluice:gold_hammer'
  })

  // Diamond Auto Hammer
  event.remove({ output: 'ftbsluice:diamond_auto_hammer' })
  event.shaped('ftbsluice:diamond_auto_hammer', [
  'FIF',
  'VHV',
  'CGC'
  ], {
    C: 'ftbjarmod:cast_iron_block',
    G: 'ftbsluice:gold_auto_hammer',
    I: '#forge:ingots/gold',
    V: '#forge:glass',
    F: '#forge:ingots/iron',
    H: 'ftbsluice:diamond_hammer'
  })

  event.shaped('chromasky:iron_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:iron_chunk'
  });

  event.shaped('chromasky:gold_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:gold_chunk'
  });

  event.shaped('chromasky:diamond_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:diamond_chunk'
  });

  event.shaped('chromasky:lapis_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:lapis_chunk'
  });

  event.shaped('chromasky:quartz_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:quartz_chunk'
  });

  event.shaped('chromasky:redstone_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:redstone_chunk'
  });

  event.shaped('chromasky:emerald_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:emerald_chunk'
  });

  event.shaped('chromasky:copper_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:copper_chunk'
  });

  event.shaped('chromasky:cobalt_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:cobalt_chunk'
  });

  event.shaped('chromasky:lead_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:lead_chunk'
  });

  event.shaped('chromasky:tin_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:tin_chunk'
  });

  event.shaped('chromasky:silver_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:silver_chunk'
  });

  event.shaped('chromasky:nickel_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:nickel_chunk'
  });

  event.shaped('chromasky:osmium_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:osmium_chunk'
  });

  event.shaped('chromasky:fluorite_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:fluorite_chunk'
  });

  event.shaped('chromasky:uranium_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:uranium_chunk'
  });

  event.shaped('chromasky:aluminum_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:aluminum_chunk'
  });

  event.shaped('chromasky:coal_cluster', [
  'CC ',
  'CC '
  ], {
    C: 'chromasky:coal_chunk'
  });
});
