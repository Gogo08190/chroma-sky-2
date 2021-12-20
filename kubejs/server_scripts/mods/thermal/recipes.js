onEvent("recipes", (event) => {
  event.shaped('thermal:sapphire_gear', [
  ' R ',
  'RCR',
  ' R '
  ], {
    R: 'thermal:sapphire',
    C: 'ftbjarmod:cast_iron_nugget'
  })

  event.shaped('thermal:ruby_gear', [
  ' R ',
  'RCR',
  ' R '
  ], {
    R: 'thermal:ruby',
    C: 'ftbjarmod:cast_iron_nugget'
  })

  event.shaped('chromasky:redstone_gear', [
  ' R ',
  'RCR',
  ' R '
  ], {
    R: 'extendedcrafting:redstone_ingot',
    C: 'ftbjarmod:cast_iron_nugget'
  })

  event.shaped('chromasky:treated_wood_gear', [
  ' R ',
  'RCR',
  ' R '
  ], {
    R: 'immersiveengineering:treated_wood_horizontal',
    C: 'ftbjarmod:cast_iron_nugget'
  })

  event.shaped('chromasky:bottom_frame', [
  '   ',
  'R R',
  'CSC'
  ], {
    C: 'immersiveengineering:component_steel',
    S: 'immersiveengineering:plate_steel',
    R: 'immersiveengineering:stick_steel'
  })

  event.shaped('chromasky:top_frame', [
  'CSC',
  'R R',
  '   '
  ], {
    C: 'immersiveengineering:component_steel',
    S: 'immersiveengineering:plate_steel',
    R: 'immersiveengineering:stick_steel'
  })

  event.shaped('chromasky:mechanic_core_tier_1', [
  ' C ',
  'CGC',
  ' C '
  ], {
    C: 'immersiveengineering:component_steel',
    G: 'thermal:ruby_gear'
  })

  event.remove({ output: 'thermal:rf_coil' })
  event.shaped('thermal:rf_coil', [
  ' WG',
  'WRW',
  'GW '
  ], {
    W: 'immersiveengineering:wire_electrum',
    G: 'minecraft:gold_ingot',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'thermal:redstone_servo' })
  event.shaped('thermal:redstone_servo', [
  'RSR',
  ' S ',
  'RSR'
  ], {
    S: 'mekanism:ingot_steel',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.shaped('chromasky:excitationcoil', [
  'RRR',
  'CHC',
  'ESE'
  ], {
    R: 'extendedcrafting:redstone_ingot',
    C: 'thermal:rf_coil',
    H: 'immersiveengineering:coil_hv',
    E: 'thermal:electrum_plate',
    S: 'thermal:redstone_servo'
  })

  event.remove({ output: 'thermal:dynamo_stirling' })
  event.shaped('thermal:dynamo_stirling', [
  ' C ',
  'IGI',
  'BRB'
  ], {
    C: 'chromasky:excitationcoil',
    G: 'ftbjarmod:cast_iron_gear',
    I: 'ftbjarmod:cast_iron_ingot',
    B: 'minecraft:basalt',
    R: 'extendedcrafting:redstone_ingot'
  })

  event.remove({ output: 'thermal:dynamo_compression' })
  event.shaped('thermal:dynamo_compression', [
  ' C ',
  'IGI',
  'BRB'
  ], {
    C: 'chromasky:excitationcoil',
    G: 'thermal:constantan_gear',
    I: 'thermal:invar_ingot',
    B: 'thermal:bronze_block',
    R: 'thermal:rf_coil'
  })

  event.remove({ output: 'thermal:dynamo_magmatic' })
  event.shaped('thermal:dynamo_magmatic', [
  ' C ',
  'IGI',
  'BRB'
  ], {
    C: 'chromasky:excitationcoil',
    G: 'thermal:invar_gear',
    I: 'mekanism:ingot_steel',
    B: 'thermal:invar_plate',
    R: 'thermal:rf_coil'
  })

  event.remove({ output: 'thermal:dynamo_numismatic' })
  event.shaped('thermal:dynamo_numismatic', [
  ' C ',
  'IGI',
  'BRB'
  ], {
    C: 'chromasky:excitationcoil',
    G: 'thermal:electrum_gear',
    I: 'thermal:iron_plate',
    B: 'thermal:lumium_ingot',
    R: 'thermal:redstone_servo'
  })

  event.remove({ output: 'thermal:dynamo_lapidary' })
  event.shaped('thermal:dynamo_lapidary', [
  ' C ',
  'IGI',
  'BRB'
  ], {
    C: 'chromasky:excitationcoil',
    G: 'thermal:lumium_gear',
    I: 'thermal:invar_ingot',
    B: 'thermal:lapis_gear',
    R: 'thermal:rf_coil'
  })

  event.remove({ output: 'thermal:dynamo_disenchantment' })
  event.shaped('thermal:dynamo_disenchantment', [
  ' C ',
  'IGI',
  'BRB'
  ], {
    C: 'chromasky:excitationcoil',
    G: 'industrialforegoing:pink_slime_ingot',
    I: 'tconstruct:manyullyn_ingot',
    B: 'minecraft:enchanted_book',
    R: 'thermal:ruby_gear'
  })

  event.remove({ output: 'thermal:device_water_gen' })
  event.shaped('thermal:device_water_gen', [
  'PCP',
  'GBG',
  'PSP'
  ], {
    P: 'thermal:copper_plate',
    S: 'thermal:redstone_servo',
    G: '#forge:glass',
    B: 'minecraft:bucket',
    C: 'ftbjarmod:cast_iron_ingot'
  })

  event.remove({ output: 'thermal:upgrade_augment_1' })
  event.shaped('thermal:upgrade_augment_1', [
  'PGP',
  'RAR',
  'PGP'
  ], {
    P: 'thermal:invar_plate',
    G: 'thermal:obsidian_glass',
    R: 'extendedcrafting:redstone_ingot',
    A: 'thermal:electrum_gear'
  })

  event.remove({ output: 'thermal:upgrade_augment_2' })
  event.shaped('thermal:upgrade_augment_2', [
  'PGP',
  'RAR',
  'PGP'
  ], {
    P: 'thermal:electrum_plate',
    G: 'thermal:lumium_glass',
    R: 'thermal:signalum_gear',
    A: 'thermal:upgrade_augment_1'
  })

  event.remove({ output: 'thermal:upgrade_augment_3' })
  event.shaped('thermal:upgrade_augment_3', [
  'PGP',
  'RAR',
  'PGP'
  ], {
    P: 'thermal:enderium_plate',
    G: 'thermal:enderium_glass',
    R: 'thermal:lumium_gear',
    A: 'thermal:upgrade_augment_2'
  })

  event.remove({ output: 'thermal:rubber' })
  event.shapeless('4x thermal:rubber', 'thermal:rubber_block');
  event.shaped('8x thermal:rubber', [
  'RRR'
  ], {
    P: 'mysticalagriculture:rubber_essence'
  })

  event.remove({ output: 'thermal:energy_cell' })
  event.shaped('thermal:energy_cell', [
  'CRC',
  'IFI',
  'CAC'
  ], {
    C: 'thermal:cured_rubber',
    R: 'extendedcrafting:redstone_ingot_block',
    I: 'ftbjarmod:cast_iron_ingot',
    F: 'thermal:energy_cell_frame',
    A: 'thermal:rf_coil'
  })

  event.remove({ output: 'thermal:fluid_cell' })
  event.shaped('thermal:fluid_cell', [
  'CRC',
  'IFI',
  'CAC'
  ], {
    C: 'thermal:cured_rubber',
    R: 'thermal:obsidian_glass',
    I: 'thermal:bronze_ingot',
    F: 'thermal:fluid_cell_frame',
    A: 'thermal:redstone_servo'
  })

  event.remove({ output: 'thermal:energy_cell_frame' })
  event.shaped('thermal:energy_cell_frame', [
  'LGL',
  'GEG',
  'LGL'
  ], {
    L: 'thermal:lead_plate',
    G: '#forge:glass',
    E: 'thermal:electrum_gear'
  })

  event.remove({ output: 'thermal:fluid_cell_frame' })
  event.shaped('thermal:fluid_cell_frame', [
  'LGL',
  'GEG',
  'LGL'
  ], {
    L: 'thermal:copper_plate',
    G: '#forge:glass',
    E: 'thermal:bronze_gear'
  })
});
