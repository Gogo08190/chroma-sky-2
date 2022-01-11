onEvent("recipes", (event) => {

    event.remove({ output: 'overloaded:energy_core' })
    event.shaped('overloaded:energy_core', [
    'SUS',
    'DOD',
    'SUS'
    ], {
      O: 'miniutilities:the_final_opinium_core',
      D: 'draconicevolution:draconic_energy_core',
      S: 'overloaded:nether_star_block',
      U: 'mekanism:ultimate_induction_cell'
    })

    event.remove({ output: 'overloaded:item_core' })
    event.shaped('overloaded:item_core', [
    'SBS',
    'EOE',
    'SBS'
    ], {
      O: 'miniutilities:the_final_opinium_core',
      E: 'extrastorage:storagepart_16384k',
      S: 'overloaded:nether_star_block',
      B: 'industrialforegoing:supreme_black_hole_unit'
    })

    event.remove({ output: 'overloaded:fluid_core' })
    event.shaped('overloaded:fluid_core', [
    'SBS',
    'EOE',
    'SBS'
    ], {
      O: 'miniutilities:the_final_opinium_core',
      E: 'extrastorage:storagepart_1048576k_fluid',
      S: 'overloaded:nether_star_block',
      B: 'industrialforegoing:supreme_black_hole_tank'
    })

    event.remove({ output: 'overloaded:instant_furnace' })
    event.shaped('overloaded:instant_furnace', [
    'SES',
    'EME',
    'SES'
    ], {
      E: 'overloaded:energy_core',
      M: 'ironfurnaces:million_furnace',
      S: 'overloaded:nether_star_block'
    })

});
