onEvent('recipes', event => {
  // Ethereal Slate
  event.recipes.bloodmagic.altar( 'bloodmagic:etherealslate', 'bloodmagic:demonslate').upgradeLevel(4).altarSyphon(30000).consumptionRate(35).drainRate(40)

  // Auto Blood Controller
  event.recipes.bloodmagic.alchemytable('masterfulmachinery:autoblood_controller', ['bloodmagic:etherealslate', 'bloodmagic:weakbloodshard', 'xnet:controller', 'bloodmagic:vengefuldemoncrystal', 'bloodmagic:weakbloodshard', 'bloodmagic:etherealslate']).syphon(3658).upgradeLevel(4)

  // Imperium Infusion Crystal
  event.recipes.bloodmagic.alchemytable('matc:imperium_crystal', ['matc:tertium_crystal', 'mysticalagriculture:imperium_gemstone_block', 'mysticalagriculture:imperium_gemstone_block', 'mysticalagriculture:imperium_gemstone_block', 'mysticalagriculture:imperium_gemstone', 'mysticalagriculture:imperium_gemstone']).syphon(3658).upgradeLevel(4)
  event.remove({ output: 'matc:imperium_crystal' })

  event.shaped('masterfulmachinery:autoblood_blood_item_port_items_output', [
  'H',
  'R',
  'C'
  ], {
    H: 'speedyhoppers:speedyhopper_mk3',
    R: 'bloodmagic:blankrune',
    C: 'mekanism:personal_chest'
  })

  event.shaped('masterfulmachinery:autoblood_blood_item_port_items_input', [
  'C',
  'R',
  'H'
  ], {
    H: 'speedyhoppers:speedyhopper_mk3',
    R: 'bloodmagic:blankrune',
    C: 'mekanism:personal_chest'
  })

  event.shaped('masterfulmachinery:autoblood_blood_fluid_port_fluids_input', [
  'C',
  'R',
  'H'
  ], {
    H: 'speedyhoppers:speedyhopper_mk3',
    R: 'bloodmagic:blankrune',
    C: 'mekanism:ultimate_fluid_tank'
  })

  event.remove({ output: 'bloodmagic:altar' })
  event.shaped('bloodmagic:altar', [
  'CNC',
  'CFC',
  'SSS'
  ], {
    S: 'powah:steel_energized',
    C: 'chromasky:3x_compressed_stone',
    F: 'industrialforegoing:resourceful_furnace',
    N: 'powah:nitro_crystal_block'
  })

  event.remove({ output: 'bloodmagic:sacrificialdagger' })
  event.shaped('bloodmagic:sacrificialdagger', [
  'GGG',
  'NSG',
  'ENG'
  ], {
    E: 'theabyss:fusionsword',
    N: 'powah:crystal_nitro',
    S: 'powah:steel_energized',
    G: 'thermal:obsidian_glass'
  })

  event.remove({ output: 'bloodmagic:daggerofsacrifice' })
  event.recipes.bloodmagic.altar( 'bloodmagic:daggerofsacrifice', 'mysticalagriculture:soulium_dagger').upgradeLevel(2).altarSyphon(3000).consumptionRate(5).drainRate(5)
});
