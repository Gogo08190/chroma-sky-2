onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks =
      [ 'minecraft:coal_ore',
        'minecraft:iron_ore',
        'minecraft:gold_ore',
        'minecraft:diamond_ore',
        'minecraft:emerald_ore',
        'minecraft:redstone_ore',
        'minecraft:lapis_ore',
        'projectred-exploration:copper_ore',
        'occultism:copper_ore',
        'immersiveengineering:ore_copper',
        'tconstruct:copper_ore',
        'mekanism:copper_ore',
        'thermal:copper_ore',
        'thermal:lead_ore',
        'mekanism:lead_ore',
        'immersiveengineering:ore_lead',
        'mekanism:uranium_ore',
        'immersiveengineering:ore_uranium',
        'occultism:silver_ore',
        'projectred-exploration:silver_ore',
        'immersiveengineering:ore_silver',
        'thermal:silver_ore',
        'immersiveengineering:ore_nickel',
        'thermal:nickel_ore',
        'immersiveengineering:ore_aluminum',
        'thermal:ruby_ore',
        'thermal:sapphire_ore',
        'projectred-exploration:sapphire_ore',
        'projectred-exploration:ruby_ore',
        'projectred-exploration:tin_ore',
        'mekanism:tin_ore',
        'thermal:tin_ore'
      ]
  })
})
