
onEvent('item.tags', event => {

    event.remove('forge:ores/copper', ['mekanism:copper_ore', 'tconstruct:copper_ore', 'projectred-exploration:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper'])
    event.remove('forge:ingots/copper', ['mekanism:ingot_copper', 'tconstruct:copper_ingot', 'projectred-core:copper_ingot', 'occultism:copper_ingot', 'immersiveengineering:ingot_copper'])
    event.remove('forge:storage_blocks/copper', ['immersiveengineering:storage_copper', 'occultism:copper_block', 'projectred-exploration:copper_block', 'tconstruct:copper_block', 'mekanism:block_copper'])
    event.remove('forge:dusts/copper', ['pedestals:dustcopper', 'immersiveengineering:dust_copper', 'mekanism:dust_copper', 'occultism:copper_dust'])
    event.remove('forge:nuggets/copper', ['immersiveengineering:nugget_copper', 'occultism:copper_nugget', 'tconstruct:copper_nugget', 'mekanism:nugget_copper'])
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
    event.remove('forge:dusts/bronze', 'mekanism:dust_bronze')

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

    event.remove('forge:ores/tin', ['mekanism:tin_ore', 'projectred-exploration:tin_ore'])
    event.remove('forge:ingots/tin', ['mekanism:ingot_tin', 'projectred-core:tin_ingot'])
    event.remove('forge:storage_blocks/tin', ['mekanism:block_tin', 'projectred-exploration:tin_block'])
    event.remove('forge:dusts/tin', ['pedestals:dusttin', 'mekanism:dust_tin'])
    event.remove('forge:nuggets/tin', 'mekanism:nugget_tin')

    event.remove('forge:dusts/diamond', 'mekanism:dust_diamond')

    event.remove('forge:dusts/gold', ['immersiveengineering:dust_gold', 'occultism:gold_dust', 'pedestals:dustgold', 'mekanism:dust_gold'])
    event.remove('forge:plates/gold', 'immersiveengineering:plate_gold')

    event.remove('forge:dusts/iron', ['mekanism:dust_iron', 'pedestals:dustiron', 'occultism:iron_dust', 'immersiveengineering:dust_iron'])
    event.remove('forge:plates/iron', 'immersiveengineering:plate_iron')

    event.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')
    event.remove('forge:storage_blocks/steel', 'immersiveengineering:storage_steel')
    event.remove('forge:dusts/steel', 'immersiveengineering:dust_steel')
    event.remove('forge:nuggets/steel', 'immersiveengineering:nugget_steel')

    event.remove('forge:dusts/quartz', 'mekanism:dust_quartz')
    event.remove('forge:dusts/lapis', 'mekanism:dust_lapis_lazuli')
    event.remove('forge:dusts/netherite', 'mekanism:dust_netherite')
    event.remove('forge:dusts/emerald', 'mekanism:dust_emerald')
    event.remove('forge:dusts/sulfur', 'immersiveengineering:dust_sulfur')
    event.remove('forge:dusts/sulfur', 'thermal:sulfur_dust')
    event.remove('forge:dusts/obsidian', 'occultism:obsidian_dust')

    event.remove('forge:coal_coke', 'thermal:coal_coke')
    event.remove('forge:storage_blocks/coal_coke', 'thermal:coal_coke_block')

    event.remove('forge:sawdust', 'mekanism:sawdust')
    event.remove('forge:sawdust', 'immersiveengineering:dust_wood')

    event.remove('forge:storage_blocks/charcoal', 'mekanism:block_charcoal')
    event.remove('forge:storage_blocks/charcoal', 'quark:charcoal_block')

    event.remove('forge:ores/ruby', 'projectred-exploration:ruby_ore')
    event.remove('forge:ores/sapphire', 'projectred-exploration:sapphire_ore')
    event.remove('forge:gems/ruby', 'projectred-core:ruby')
    event.remove('forge:gems/sapphire', 'projectred-core:sapphire')

    event.remove('forge:slag', 'thermal:slag')
    event.remove('forge:bitumen', 'thermal:bitumen')
  })

onEvent('block.tags', event => {

    event.remove('forge:ores/copper', ['mekanism:copper_ore', 'tconstruct:copper_ore', 'projectred-exploration:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper'])
    event.remove('forge:ores/lead', ['mekanism:lead_ore', 'immersiveengineering:ore_lead'])
    event.remove('forge:ores/uranium', 'immersiveengineering:ore_uranium')
    event.remove('forge:ores/silver', ['projectred-exploration:silver_ore', 'occultism:silver_ore', 'immersiveengineering:ore_silver'])
    event.remove('forge:ores/nickel', 'immersiveengineering:ore_nickel')
    event.remove('forge:ores/tin', ['mekanism:tin_ore', 'projectred-exploration:tin_ore'])
    event.remove('forge:ores/ruby', 'projectred-exploration:ruby_ore')
    event.remove('forge:ores/sapphire', 'projectred-exploration:sapphire_ore')

  })

onEvent('recipes', event => {
  event
        .shaped("ftbjarmod:cast_iron_gear", [" I ", "INI", " I "], {
            I: "#forge:ingots/cast_iron",
            N: "#forge:nuggets/cast_iron",
        })
        .id("ftbjarmod:cast_iron_gear");

  event.remove({ id: /industrialforegoing:.*_gear/ })
  event.remove({id: "immersiveengineering:crafting/ingot_steel_to_nugget_steel"})
  event.remove({id: "immersiveengineering:crafting/storage_steel_to_ingot_steel"})
  event.remove({id: "immersiveengineering:crafting/nugget_steel_to_ingot_steel"})
  event.remove({id: "immersiveengineering:crafting/ingot_steel_from_dust_from_blast"})
  event.remove({id: "immersiveengineering:crafting/ingot_steel_from_dust"})
  event.remove({id: "immersiveengineering:crafting/ingot_steel_to_storage_steel"})
  event.remove({id: "thermal:storage/coal_coke_from_block"})
  event.remove({id: "thermal:storage/coal_coke_block"})
  event.remove({id: "mekanism:storage_blocks/charcoal"})
  event.remove({id: "quark:building/crafting/compressed/charcoal_block"})

  event.replaceInput("mekanism:dust_sulfur", "#forge:dusts/sulfur");
  event.replaceInput("thermal:sulfur_dust", "#forge:dusts/sulfur");
  event.replaceInput("immersiveengineering:dust_sulfur", "#forge:dusts/sulfur");
  event.replaceOutput("thermal:sulfur_dust", "mekanism:dust_sulfur");
  event.replaceOutput("immersiveengineering:dust_sulfur", "mekanism:dust_sulfur");

  event.replaceInput("immersiveengineering:dust_wood", "#forge:sawdust");
  event.replaceOutput("immersiveengineering:dust_wood", "thermal:sawdust");
  event.replaceInput("mekanism:sawdust", "#forge:sawdust");
  event.replaceOutput("mekanism:sawdust", "thermal:sawdust");

  event.replaceOutput("bloodmagic:coalsand", "mekanism:dust_coal");
  event.replaceOutput("bloodmagic:sulfur", "thermal:sulfur_dust");
  event.replaceOutput("bloodmagic:ironsand", "thermal:iron_dust");
  event.replaceOutput("bloodmagic:goldsand", "thermal:gold_dust");

  event.replaceInput("thermal:charcoal_block", "#forge:storage_blocks/charcoal");
  event.replaceInput("mekanism:block_charcoal", "#forge:storage_blocks/charcoal");
  event.replaceInput("quark:charcoal_block", "#forge:storage_blocks/charcoal");
  event.replaceOutput("mekanism:block_charcoal", "thermal:charcoal_block");
  event.replaceOutput("quark:charcoal_block", "thermal:charcoal_block");

  event.replaceInput("projectred-core:ruby", "#forge:gems/ruby");
  event.replaceInput("thermal:ruby", "#forge:gems/ruby");
  event.replaceOutput("projectred-core:ruby", "thermal:ruby");
  event.replaceOutput("projectred-exploration:ruby_block", "thermal:ruby_block");

  event.replaceInput("projectred-core:sapphire", "#forge:gems/sapphire");
  event.replaceInput("thermal:sapphire", "#forge:gems/sapphire");
  event.replaceOutput("projectred-core:sapphire", "thermal:sapphire");
  event.replaceOutput("projectred-exploration:sapphire_block", "thermal:sapphire_block");

  event.replaceInput("miniutilities:ender_dust", "#forge:dusts/ender");
  event.replaceInput("thermal:ender_pearl_dust", "#forge:dusts/ender");
  event.replaceOutput("miniutilities:ender_dust", "thermal:ender_pearl_dust");

  event.replaceInput("mekanism:dust_bronze", "#forge:dusts");
  event.replaceInput("mekanism:dust_bronze", "#forge:dusts");
  event.replaceOutput("mekanism:dust_bronze", "thermal:bronze_dust");

  event.replaceInput("thermal:slag", "#forge:slag");
  event.replaceInput("immersiveengineering:slag", "#forge:slag");
  event.replaceOutput("thermal:slag", "immersiveengineering:slag");

  event.replaceInput("thermal:bitumen", "#forge:bitumen");
  event.replaceInput("immersivepetroleum:bitumen", "#forge:bitumen");
  event.replaceOutput("thermal:bitumen", "immersivepetroleum:bitumen");

});

onEvent('recipes', event => {
  var ore = [
    "copper",
    "lead",
    "bronze",
    "constantan",
    "electrum",
    "silver",
    "nickel",
    "gold",
    "iron",
    "tin"
  ]

  ore.forEach(function (item, index) {
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_block'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_nuggets'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_dust_blasting'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_ore_blasting'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_dust_smelting'})
    event.remove({id: 'mekanism:processing/' + item + '/ingot/from_ore_smelting'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_ingot_from_block'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_ingot_from_nuggets'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_ingot_blasting'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_ingot_smelting'})
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
    event.remove({id: 'tconstruct:common/materials/' + item + '_block_from_ingots'})
    event.remove({id: 'mekanism:processing/' + item + '/storage_blocks/from_ingots'})
    event.remove({id: 'immersiveengineering:crafting/ingot_' + item + '_to_nugget_' + item})
    event.remove({id: 'occultism:crafting/' + item + '_nugget'})
    event.remove({id: 'mekanism:processing/' + item + '/nugget/from_ingot'})
    event.remove({id: 'tconstruct:common/materials/' + item + '_nugget_from_ingot'})
    event.remove({id: 'mekanism:nuggets/' + item})
    event.remove({id: 'mekanism:storage_blocks/' + item})
    event.remove({id: 'immersiveengineering:crafting/' + item + '_mix'})
    event.remove({id: 'pedestals:ingot_' + item + '_blasting'})
    event.remove({id: 'immersiveengineering:crafting/' + item + '_ingot_from_dust'})
    event.remove({id: 'immersiveengineering:crafting/' + item + '_ingot_from_dust_from_blasting'})
  })

  function stoneCutter(input, output){event.custom({"type": "minecraft:stonecutting","ingredient": input,"result": output,"count": 1})}

    stoneCutter([{"item": "mekanism:block_copper"},{"item": "tconstruct:copper_block"},{"item": "projectred-exploration:copper_block"},{"item": "occultism:copper_block"},{"item": "immersiveengineering:storage_copper"}],'thermal:copper_block')
    stoneCutter([{"item": "mekanism:block_copper"},{"item": "tconstruct:copper_block"},{"item": "projectred-exploration:copper_block"},{"item": "occultism:copper_block"},{"item": "thermal:copper_block"}],'immersiveengineering:storage_copper')
    stoneCutter([{"item": "mekanism:block_copper"},{"item": "tconstruct:copper_block"},{"item": "projectred-exploration:copper_block"},{"item": "immersiveengineering:storage_copper"},{"item": "thermal:copper_block"}],'occultism:copper_block')
    stoneCutter([{"item": "mekanism:block_copper"},{"item": "tconstruct:copper_block"},{"item": "occultism:copper_block"},{"item": "immersiveengineering:storage_copper"},{"item": "thermal:copper_block"}],'projectred-exploration:copper_block')
    stoneCutter([{"item": "mekanism:block_copper"},{"item": "projectred-exploration:copper_block"},{"item": "occultism:copper_block"},{"item": "immersiveengineering:storage_copper"},{"item": "thermal:copper_block"}],'tconstruct:copper_block')
    stoneCutter([{"item": "tconstruct:copper_block"},{"item": "projectred-exploration:copper_block"},{"item": "occultism:copper_block"},{"item": "immersiveengineering:storage_copper"},{"item": "thermal:copper_block"}],'mekanism:block_copper')

    stoneCutter([{"item": "mekanism:block_lead"},{"item": "immersiveengineering:storage_lead"}],'thermal:lead_block')
    stoneCutter([{"item": "immersiveengineering:storage_lead"},{"item": "thermal:lead_block"}],'mekanism:block_lead')
    stoneCutter([{"item": "mekanism:block_lead"},{"item": "thermal:lead_block"}],'immersiveengineering:storage_lead')

    stoneCutter([{"item": "mekanism:block_tin"},{"item": "projectred-exploration:tin_block"}],'thermal:tin_block')
    stoneCutter([{"item": "mekanism:block_tin"},{"item": "thermal:tin_block"}],'projectred-exploration:tin_block')
    stoneCutter([{"item": "projectred-exploration:tin_block"},{"item": "thermal:tin_block"}],'mekanism:block_tin')

    stoneCutter([{"item": "mekanism:block_bronze"}],'thermal:bronze_block')
    stoneCutter([{"item": "thermal:bronze_block"}],'mekanism:block_bronze')

    stoneCutter([{"item": "mekanism:block_uranium"}],'immersiveengineering:storage_uranium')
    stoneCutter([{"item": "immersiveengineering:storage_uranium"}],'mekanism:block_uranium')

    stoneCutter([{"item": "thermal:constantan_block"}],'immersiveengineering:storage_constantan')
    stoneCutter([{"item": "immersiveengineering:storage_constantan"}],'thermal:constantan_block')

    stoneCutter([{"item": "thermal:electrum_block"}],'immersiveengineering:storage_electrum')
    stoneCutter([{"item": "immersiveengineering:storage_electrum"}],'thermal:electrum_block')

    stoneCutter([{"item": "immersiveengineering:storage_nickel"}],'thermal:nickel_block')
    stoneCutter([{"item": "thermal:nickel_block"}],'immersiveengineering:storage_nickel')

    stoneCutter([{"item": "mekanism:block_steel"}],'immersiveengineering:storage_steel')
    stoneCutter([{"item": "immersiveengineering:storage_steel"}],'mekanism:block_steel')

    stoneCutter([{"item": "thermal:coal_coke_block"}],'immersiveengineering:coke')
    stoneCutter([{"item": "immersiveengineering:coke"}],'thermal:coal_coke_block')

    stoneCutter([{"item": "projectred-exploration:ruby_block"}],'thermal:ruby_block')
    stoneCutter([{"item": "thermal:ruby_block"}],'projectred-exploration:ruby_block')

    stoneCutter([{"item": "projectred-exploration:sapphire_block"}],'thermal:sapphire_block')
    stoneCutter([{"item": "thermal:sapphire_block"}],'projectred-exploration:sapphire_block')

    stoneCutter([{"item": "occultism:silver_block"},{"item": "projectred-exploration:silver_block"},{"item": "immersiveengineering:storage_silver"}],'thermal:silver_block')
    stoneCutter([{"item": "occultism:silver_block"},{"item": "projectred-exploration:silver_block"},{"item": "thermal:silver_block"}],'immersiveengineering:storage_silver')
    stoneCutter([{"item": "occultism:silver_block"},{"item": "immersiveengineering:storage_silver"},{"item": "thermal:silver_block"}],'projectred-exploration:silver_block')
    stoneCutter([{"item": "projectred-exploration:silver_block"},{"item": "immersiveengineering:storage_silver"},{"item": "thermal:silver_block"}],'occultism:silver_block')

    stoneCutter([{"item": "quark:basalt"},{"item": "projectred-exploration:basalt"}],'chisel:basalt/raw')
    stoneCutter([{"item": "quark:basalt"},{"item": "chisel:basalt/raw"}],'projectred-exploration:basalt')
    stoneCutter([{"item": "projectred-exploration:basalt"},{"item": "chisel:basalt/raw"}],'quark:basalt')

    stoneCutter([{"item": "astralsorcery:marble_raw"},{"item": "chisel:marble/raw"},{"item": "projectred-exploration:marble"}],'quark:marble')
    stoneCutter([{"item": "astralsorcery:marble_raw"},{"item": "chisel:marble/raw"},{"item": "quark:marble"}],'projectred-exploration:marble')
    stoneCutter([{"item": "astralsorcery:marble_raw"},{"item": "quark:marble"},{"item": "projectred-exploration:marble"}],'chisel:marble/raw')
    stoneCutter([{"item": "quark:marble"},{"item": "chisel:marble/raw"},{"item": "projectred-exploration:marble"}],'astralsorcery:marble_raw')

    stoneCutter([{"item": "chisel:limestone/raw"}],'quark:limestone')
    stoneCutter([{"item": "quark:limestone"}],'chisel:limestone/raw')
});
