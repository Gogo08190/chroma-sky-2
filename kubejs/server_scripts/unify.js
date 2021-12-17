// priority: 100
onEvent("recipes", (event) => {

    // Gear Recipes
    event.remove({ id: /industrialforegoing:.*_gear/ });
    event
        .shaped("ftbjarmod:cast_iron_gear", [" I ", "INI", " I "], {
            I: "#forge:ingots/cast_iron",
            N: "#forge:nuggets/cast_iron",
        })
        .id("ftbjarmod:cast_iron_gear");

    event.replaceInput({ output: "#forge:gears" }, "minecraft:iron_nugget", "#forge:nuggets/cast_iron");


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

    unifyMetal(
        "diamond",
        true,
        "",
        "",
        "minecraft:diamond_block",
        "thermal:diamond_dust",
        "thermal:diamond_gear",
         ""
   );

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

    event.replaceInput("mekanism:ingot_bronze", "#forge:ingots/bronze");
    event.replaceInput("thermal:bronze_ingot", "#forge:ingots/bronze");
    event.replaceOutput("mekanism:ingot_bronze", "thermal:bronze_ingot");

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

    event.replaceInput("mekanism:dust_uranium", "#forge:dusts/uranium");
    event.replaceInput("immersiveengineering:dust_uranium", "#forge:dusts/uranium");
    event.replaceOutput("immersiveengineering:dust_uranium", "mekanism:dust_uranium");

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

    event.replaceOutput("immersiveengineering:ingot_constantan", "thermal:constantan_ingot");
    event.replaceOutput("immersiveengineering:storage_constantan", "thermal:constantan_block");
    event.replaceOutput("immersiveengineering:dust_constantan", "thermal:constantan_dust");
    event.replaceOutput("immersiveengineering:plate_constantan", "thermal:constantan_plate");
    event.replaceOutput("immersiveengineering:nugget_constantan", "thermal:constantan_nugget");

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

});
