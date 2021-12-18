
onEvent('item.tags', event => {

    event.remove('forge:ores/copper', ['mekanism:copper_ore', 'tconstruct:copper_ore', 'tmechworks:copper_ore', 'projectred-exploration:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper'])
    event.remove('forge:ingots/copper', ['mekanism:ingot_copper', 'tconstruct:copper_ingot', 'tmechworks:copper_ingot', 'projectred-core:copper_ingot', 'occultism:copper_ingot', 'immersiveengineering:ingot_copper'])
    event.remove('forge:storage_blocks/copper', ['immersiveengineering:storage_copper', 'occultism:copper_block', 'projectred-exploration:copper_block', 'tmechworks:copper_block', 'tconstruct:copper_block', 'mekanism:block_copper'])
    event.remove('forge:dusts/copper', ['pedestals:dustcopper', 'immersiveengineering:dust_copper', 'mekanism:dust_copper', 'occultism:copper_dust'])
    event.remove('forge:nuggets/copper', ['immersiveengineering:nugget_copper', 'occultism:copper_nugget', 'tmechworks:copper_nugget', 'tconstruct:copper_nugget', 'mekanism:nugget_copper'])
    event.remove('forge:plates/copper', 'immersiveengineering:plate_copper')

    event.remove('forge:ores/lead', ['mekanism:lead_ore', 'immersiveengineering:ore_lead'])
    event.remove('forge:ingots/lead', ['immersiveengineering:ingot_lead', 'mekanism:ingot_lead'])
    event.remove('forge:storage_blocks/lead', ['mekanism:block_lead', 'immersiveengineering:storage_lead'])
    event.remove('forge:dusts/lead', ['mekanism:dust_lead', 'immersiveengineering:dust_lead', 'pedestals:dustlead'])
    event.remove('forge:nuggets/lead', ['mekanism:nugget_lead', 'immersiveengineering:nugget_lead'])
    event.remove('forge:plates/lead', 'immersiveengineering:plate_lead')

    event.remove('forge:ingots/bronze', 'mekanism:ingot_bronze')
    event.remove('forge:storage_blocks/bronze', 'mekanism:block_bronze')
    event.remove('forge:nuggets/bronze', 'mekanism:nugget_bronze')

    event.remove('forge:ores/uranium', 'immersiveengineering:ore_uranium')
    event.remove('forge:ingots/uranium', 'immersiveengineering:ingot_uranium')
    event.remove('forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium')
    event.remove('forge:dusts/uranium', ['immersiveengineering:dust_uranium', 'pedestals:dusturanium'])
    event.remove('forge:nuggets/uranium', 'immersiveengineering:nugget_uranium')

    event.remove('forge:ingots/constantan', 'immersiveengineering:ingot_constantan')
    event.remove('forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan')
    event.remove('forge:dusts/constantan', 'immersiveengineering:dust_constantan')
    event.remove('forge:nuggets/constantan', 'immersiveengineering:nugget_constantan')
    event.remove('forge:plates/constantan', 'immersiveengineering:plate_constantan')

    event.remove('forge:ingots/electrum', 'immersiveengineering:ingot_electrum')
    event.remove('forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum')
    event.remove('forge:dusts/electrum', 'immersiveengineering:dust_electrum')
    event.remove('forge:nuggets/electrum', 'immersiveengineering:nugget_electrum')
    event.remove('forge:plates/electrum', 'immersiveengineering:plate_electrum')

    event.remove('forge:ores/silver', ['projectred-exploration:silver_ore', 'occultism:silver_ore', 'immersiveengineering:ore_silver'])
    event.remove('forge:ingots/silver', ['immersiveengineering:ingot_silver', 'occultism:silver_ingot', 'projectred-core:silver_ingot'])
    event.remove('forge:storage_blocks/silver', ['projectred-exploration:silver_block', 'occultism:silver_block', 'immersiveengineering:storage_silver'])
    event.remove('forge:dusts/silver', ['pedestals:dustsilver', 'immersiveengineering:dust_silver', 'occultism:silver_dust'])
    event.remove('forge:nuggets/silver', ['occultism:silver_nugget', 'immersiveengineering:nugget_silver'])
    event.remove('forge:plates/silver', 'immersiveengineering:plate_silver')

    event.remove('forge:ores/nickel', 'immersiveengineering:ore_nickel')
    event.remove('forge:ingots/nickel', 'immersiveengineering:ingot_nickel')
    event.remove('forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel')
    event.remove('forge:dusts/nickel', ['immersiveengineering:dust_nickel', 'pedestals:dustnickel'])
    event.remove('forge:nuggets/nickel', 'immersiveengineering:nugget_nickel')
    event.remove('forge:plates/nickel', 'immersiveengineering:plate_nickel')

    event.remove('forge:dusts/diamond', 'mekanism:dust_diamond')

    event.remove('forge:dusts/gold', ['immersiveengineering:dust_gold', 'occultism:gold_dust', 'pedestals:dustgold', 'mekanism:dust_gold'])
    event.remove('forge:plates/gold', 'immersiveengineering:plate_gold')

    event.remove('forge:dusts/iron', ['mekanism:dust_iron', 'pedestals:dustiron', 'occultism:iron_dust', 'immersiveengineering:dust_iron'])
    event.remove('forge:plates/iron', 'immersiveengineering:plate_iron')
  })

onEvent('block.tags', event => {

    event.remove('forge:ores/copper', ['mekanism:copper_ore', 'tconstruct:copper_ore', 'tmechworks:copper_ore', 'projectred-exploration:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper'])
    event.remove('forge:ores/lead', ['mekanism:lead_ore', 'immersiveengineering:ore_lead'])
    event.remove('forge:ores/uranium', 'immersiveengineering:ore_uranium')
    event.remove('forge:ores/silver', ['projectred-exploration:silver_ore', 'occultism:silver_ore', 'immersiveengineering:ore_silver'])
    event.remove('forge:ores/nickel', 'immersiveengineering:ore_nickel')

  })

onEvent('recipes', event => {
  event.remove({ id: /industrialforegoing:.*_gear/ })
});

onEvent('recipes', event => {
  var ore = [
    "copper",
    "lead",
    "bronze",
    "uranium",
    "constantan",
    "electrum",
    "silver",
    "nickel",
    "gold",
    "iron"
  ]

  ore.forEach(function (item, index) {
    event.remove({id: "mekanism:processing/" + item + "/ingot/from_block"})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_nuggets'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_dust_blasting'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_ore_blasting'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_dust_smelting'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_ore_smelting'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_ingot_from_block'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_ingot_from_nuggets'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_ingot_blasting'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_ingot_smelting'})
    event.remove({id: 'tmechworks:' + item + '_ingot_from_' + item + '_nugget'})
    event.remove({id: 'tmechworks:' + item + '_ingot_from_' + item + '_block'})
    event.remove({id: 'tmechworks:' + item + '_ingot_from_blasting'})
    event.remove({id: 'tmechworks:' + item + '_ingot_from_smelting'})
    event.remove({id: 'projectred-exploration:' + item + '_from_block'})
    event.remove({id: 'projectred-exploration:' + item + '_from_ore'})
    event.remove({id: 'occultism:crafting/' + item + '_ingot_from_block'})
    event.remove({id: 'occultism:crafting/' + item + '_ingot_from_nuggets'})
    event.remove({id: 'occultism:blasting/' + item + '_ingot_from_dust'})
    event.remove({id: 'occultism:blasting/' + item + '_ingot'})
    event.remove({id: 'occultism:smelting/' + item + '_ingot_from_dust'})
    event.remove({id: 'occultism:smelting/' + item + '_ingot'})
    event.remove({id: 'immersiveengineering:crafting/storage_' + item + '_to_ingot_' + item})
    event.remove({id: 'immersiveengineering:crafting/nugget_' + item + '_to_ingot_' + item})
    event.remove({id: 'immersiveengineering:crafting/ingot_' + item + '_from_dust_from_blasting'})
    event.remove({id: 'immersiveengineering:crafting/ingot_' + item + '_from_blasting'})
    event.remove({id: 'immersiveengineering:crafting/ingot_' + item + '_from_dust'})
    event.remove({id: 'immersiveengineering:crafting/ingot_' + item})
    event.remove({id: 'immersiveengineering:crafting/ingot_' + item + '_to_storage_' + item})
    event.remove({id: 'immersiveengineering:crafting/storage_' + item + '_from_slab'})
    event.remove({id: 'occultism:crafting/' + item + '_block'})
    event.remove({id: 'projectred-exploration:' + item + '_block'})
    event.remove({id: 'tmechworks:' + item + '_block_from_' + item + '_ingot'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_block_from_ingots'})
    event.remove({id: 'mekanism:processing/' + item + '/storage_blocks/from_ingots'})
    event.remove({id: 'immersiveengineering:crafting/ingot_' + item + '_to_nugget_' + item})
    event.remove({id: 'occultism:crafting/' + item + '_nugget'})
    event.remove({id: 'tmechworks:' + item + '_nugget_from_' + item + '_ingot'})
    event.remove({id: 'mekanism:processing/' + item + '/nugget/from_ingot'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_nugget_from_ingot'})
    event.remove({id: 'mekanism:nuggets/' + item})
    event.remove({id: 'mekanism:storage_blocks/' + item})
    event.remove({id: 'immersiveengineering:crafting/' + item + '_mix'})
    event.remove({id: 'pedestals:ingot_' + item + '_blasting'})
    event.remove({id: 'immersiveengineering:crafting/' + item + '_ingot_from_dust'})
    event.remove({id: 'immersiveengineering:crafting/' + item + '_ingot_from_dust_from_blasting'})
  })
});
