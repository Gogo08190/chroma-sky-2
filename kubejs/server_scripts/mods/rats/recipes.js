onEvent('recipes', event => {

  event.remove({id: "rats:plastic_smelting"})
  event.remove({id: "rats:plastic_blast_furnace"})
  event.remove({ output: 'rats:rat_upgrade_basic' })
});
