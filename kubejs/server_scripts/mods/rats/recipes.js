onEvent('recipes', event => {

  event.remove({ id: "rats:plastic_smelting" })
  event.remove({ id: "rats:plastic_blast_furnace" })
  event.smelting(Item.of('industrialforegoing:tinydryrubber', 1), 'rats:plastic_waste').xp(0.05)
  event.blasting(Item.of('industrialforegoing:tinydryrubber', 1), 'rats:plastic_waste').xp(0.05)
  event.remove({ output: 'rats:rat_upgrade_basic' })
});
