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
});
