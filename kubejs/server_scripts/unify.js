// priority: 100
onEvent("recipes", (event) => {
    const { smelting, blasting } = event.recipes.minecraft;

    var unifyMetal = function (name, hasOre, nuggetItem, ingotItem, blockItem, dustItem, gearItem, plateItem) {
        if (ingotItem !== "") event.replaceOutput("#forge:ingots/" + name, ingotItem);
        if (dustItem !== "") event.replaceOutput("#forge:dusts/" + name, dustItem);
        if (nuggetItem !== "") event.replaceOutput("#forge:nuggets/" + name, nuggetItem);
        if (blockItem !== "") event.replaceOutput("#forge:storage_blocks/" + name, blockItem);
        if (gearItem !== "") event.replaceOutput("#forge:gears/" + name, gearItem);
        if (plateItem !== "") event.replaceOutput("#forge:plates/" + name, plateItem);
        event.remove({ output: "#forge:ingots/" + name, type: "minecraft:smelting" });
        event.remove({ output: "#forge:ingots/" + name, type: "minecraft:blasting" });
        if (dustItem !== "" && ingotItem !== "") {
            smelting(ingotItem, "#forge:dusts/" + name).xp(0.7);
            blasting(ingotItem, "#forge:dusts/" + name).xp(0.7);
        }
        if (hasOre && ingotItem !== "") {
            const oresStrict = Ingredient.of("#forge:ores/" + name).filter(
                Ingredient.of("#forge:clusters/" + name).not()
            );
            smelting(ingotItem, oresStrict).xp(0.7);
            blasting(ingotItem, oresStrict).xp(0.7);
        }
    };

    unifyMetal(
        "iron",
        true,
        "minecraft:iron_nugget",
        "minecraft:iron_ingot",
        "minecraft:iron_block",
        "thermal:iron_dust",
        "thermal:iron_gear",
        "thermal:iron_plate"
    );
    unifyMetal(
        "gold",
        true,
        "minecraft:gold_nugget",
        "minecraft:gold_ingot",
        "minecraft:gold_block",
        "thermal:gold_dust",
        "thermal:gold_gear",
        "thermal:gold_plate"
    );
    unifyMetal("diamond", true, "", "", "minecraft:diamond_block", "thermal:diamond_dust", "thermal:diamond_gear", "");
    unifyMetal(
        "copper",
        true,
        "thermal:copper_nugget",
        "thermal:copper_ingot",
        "thermal:copper_block",
        "thermal:copper_dust",
        "thermal:copper_gear",
        "thermal:copper_plate"
    );
    unifyMetal(
        "tin",
        true,
        "thermal:tin_nugget",
        "thermal:tin_ingot",
        "thermal:tin_block",
        "thermal:tin_dust",
        "thermal:tin_gear",
        "thermal:tin_plate"
    );
    unifyMetal(
        "lead",
        true,
        "thermal:lead_nugget",
        "thermal:lead_ingot",
        "thermal:lead_block",
        "thermal:lead_dust",
        "thermal:lead_gear",
        "thermal:lead_plate"
    );
    unifyMetal(
        "bronze",
        false,
        "thermal:bronze_nugget",
        "thermal:bronze_ingot",
        "thermal:bronze_block",
        "thermal:bronze_dust",
        "thermal:bronze_gear",
        "thermal:bronze_plate"
    );
    unifyMetal(
        "uranium",
        true,
        "mekanism:nugget_uranium",
        "mekanism:ingot_uranium",
        "mekanism:block_uranium",
        "mekanism:dust_uranium",
        "",
        "immersiveengineering:plate_uranium"
    );
    unifyMetal(
        "constantan",
        false,
        "thermal:constantan_nugget",
        "thermal:constantan_ingot",
        "thermal:constantan_block",
        "thermal:constantan_dust",
        "thermal:constantan_gear",
        "thermal:constantan_plate"
    );
    unifyMetal(
        "electrum",
        false,
        "thermal:electrum_nugget",
        "thermal:electrum_ingot",
        "thermal:electrum_block",
        "thermal:electrum_dust",
        "thermal:electrum_gear",
        "thermal:electrum_plate"
    );
    unifyMetal(
        "silver",
        false,
        "thermal:silver_nugget",
        "thermal:silver_ingot",
        "thermal:silver_block",
        "thermal:silver_dust",
        "thermal:silver_gear",
        "thermal:silver_plate"
    );
    unifyMetal(
        "nickel",
        false,
        "thermal:nickel_nugget",
        "thermal:nickel_ingot",
        "thermal:nickel_block",
        "thermal:nickel_dust",
        "thermal:nickel_gear",
        "thermal:nickel_plate"
    );

    event.replaceOutput("tconstruct:copper_ore", "thermal:copper_ore");
    event.replaceOutput("mekanism:copper_ore", "thermal:copper_ore");
    event.replaceOutput("mekanism:lead_ore", "thermal:lead_ore");
    event.replaceOutput("mekanism:tin_ore", "thermal:tin_ore");

    event.replaceInput("mekanism:dust_diamond", "#forge:dusts/diamond");
    event.replaceInput("thermal:diamond_dust", "#forge:dusts/diamond");
    event.replaceOutput("mekanism:dust_diamond", "thermal:diamond_dust");

    event.replaceInput("mekanism:dust_emerald", "#forge:dusts/emerald");
    event.replaceInput("thermal:emerald_dust", "#forge:dusts/emerald");
    event.replaceOutput("mekanism:dust_emerald", "thermal:emerald_dust");

    event.replaceInput("mekanism:dust_lapis_lazuli", "#forge:dusts/lapis");
    event.replaceInput("thermal:lapis_dust", "#forge:dusts/lapis");
    event.replaceOutput("mekanism:dust_lapis_lazuli", "thermal:lapis_dust");

    event.replaceInput("mekanism:dust_sulfur", "#forge:dusts/sulfur");
    event.replaceInput("thermal:sulfur_dust", "#forge:dusts/sulfur");
    event.replaceOutput("mekanism:dust_sulfur", "thermal:sulfur_dust");

    event.replaceInput("mekanism:dust_quartz", "#forge:dusts/quartz");
    event.replaceInput("thermal:quartz_dust", "#forge:dusts/quartz");
    event.replaceOutput("mekanism:dust_quartz", "thermal:quartz_dust");

    event.replaceInput("miniutilities:ender_dust", "#forge:dusts/ender");
    event.replaceInput("thermal:ender_pearl_dust", "#forge:dusts/ender");
    event.replaceOutput("miniutilities:ender_pearl_dust", "thermal:ender_pearl_dust");

    event.replaceInput("mekanism:sawdust", "#forge:sawdust");
    event.replaceOutput("mekanism:sawdust", "thermal:sawdust");

    event.replaceInput("mekanism:dust_sulfur", "#forge:dusts/sulfur");
    event.replaceOutput("mekanism:dust_sulfur", "thermal:sulfur_dust");

    event.replaceOutput("bloodmagic:coalsand", "mekanism:dust_coal");
    event.replaceOutput("bloodmagic:sulfur", "thermal:sulfur_dust");
    event.replaceOutput("bloodmagic:ironsand", "thermal:iron_dust");
    event.replaceOutput("bloodmagic:goldsand", "thermal:gold_dust");

    event.replaceInput("thermal:charcoal_block", "#forge:storage_blocks/charcoal");
    event.replaceInput("mekanism:block_charcoal", "#forge:storage_blocks/charcoal");
    event.replaceInput("quark:block_charcoal", "#forge:storage_blocks/charcoal");
    event.replaceOutput("mekanism:block_charcoal", "thermal:charcoal_block");
    event.replaceOutput("quark:block_charcoal", "thermal:charcoal_block");

    event.replaceInput("projectred-core:ruby", "#forge:gems/ruby");
    event.replaceOutput("thermal:ruby", "projectred-core:ruby");

    event.replaceInput("projectred-core:sapphire", "#forge:gems/sapphire");
    event.replaceOutput("thermal:sapphire", "projectred-core:sapphire");

    // remove or modify gear recipes that stand out
    event.remove({ id: /industrialforegoing:.*_gear/ });
    event
        .shaped("ftbjarmod:cast_iron_gear", [" I ", "INI", " I "], {
            I: "#forge:ingots/cast_iron",
            N: "#forge:nuggets/cast_iron",
        })
        .id("ftbjarmod:cast_iron_gear");

    event.replaceInput({ output: "#forge:gears" }, "minecraft:iron_nugget", "#forge:nuggets/cast_iron");
});
