// priority: 100
onEvent("item.registry", (event) => {
    global.types.forEach((t) => {
        event.create("chromasky:" + t.toLowerCase() + "_chunk").displayName(t + " Chunk");
        event.create("chromasky:" + t.toLowerCase() + "_cluster").displayName(t + " Cluster");
    });

    event.create("chromasky:cobalt_dust").displayName("Cobalt Dust");

    event.create("chromasky:compost").displayName("Compost");
    event.create("chromasky:leaf").displayName("Leaf");
    event.create("chromasky:plant_string").displayName("Plant String");
    event.create("chromasky:pebble").displayName("Pebble");
    event.create("chromasky:flint_shard").displayName("Flint Shard");
    event.create("chromasky:magiccrystal").displayName("Magic Crystal");
    event.create("chromasky:excitationcoil").displayName("Excitation Coil");
    event.create("chromasky:top_frame").displayName("Top Machine Frame");
    event.create("chromasky:bottom_frame").displayName("Bottom Machine Frame");
    event.create("chromasky:redstone_gear").displayName("Redstone Gear");
    event.create("chromasky:treated_wood_gear").displayName("Treated Wood Gear");
    event.create("chromasky:ultimategear").displayName("Ultimate Gear");
    event.create("chromasky:ultimateplate").displayName("Ultimate Plate");
    event.create("chromasky:ultimatebeer").displayName("Ultimate Beer").food(foodConsumer => {
      foodConsumer.hunger(20)
                  .saturation(5.0)
                  .eaten(eatenEvent => {
                    eatenEvent.player.tell("I Love Beer !");
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",600,41,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:fire_resistance",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:water_breathing",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:glowing",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:nausea",5,1,false,false)
                  });
    });

    event.create("chromasky:ultimate_stew").displayName("Ultimate Stew").food(foodConsumer => {
      foodConsumer.hunger(60)
                  .saturation(20)
                  .eaten(eatenEvent => {
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",600,2,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",2000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:fire_resistance",6000,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:water_breathing",6000,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:glowing",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:night_vision",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:nausea",5,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:saturation",2000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",6000,4,false,false)
                  });
    });

    event.create("chromasky:ultimate_meat").displayName("Ultimate Meat").food(foodConsumer => {
      foodConsumer.hunger(60)
                  .saturation(20)
                  .eaten(eatenEvent => {
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",6000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:health_boost",6000,3,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:saturation",2000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",2000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",2000,4,false,false)
                  });
    });
    event.create("chromasky:hammer_head").displayName("Hammer Head");
    event.create("chromasky:wirecutter_head").displayName("Wire Cutters Head");
    event.create("chromasky:mechanic_core_tier_1").displayName("Mechanic Core Tier 1");
    event.create("chromasky:mechanic_core_tier_2").displayName("Mechanic Core Tier 2");
    event.create("chromasky:mechanic_core_tier_3").displayName("Mechanic Core Tier 3");
    event.create("chromasky:mechanic_core_tier_4").displayName("Mechanic Core Tier 4");
    event.create("chromasky:draconium_gear").displayName("Draconium Gear");
    event.create("chromasky:draconium_plate").displayName("Draconium Plate");
    event.create("chromasky:enderessence").displayName("Ender Essence");
    event.create("chromasky:ultimategem").displayName("Ultimate Gem");
    event.create("chromasky:pattern_mundane_cast_star_shard").displayName("Pattern: Mundane Cast Star Shard");
    event.create("chromasky:mundane_cast_star_shard").displayName("Mundane Cast Star Shard");

    event.create("chromasky:shard_star").displayName("Star Shard");
    event.create("chromasky:magical_infuse_book").displayName("Magical Infused Book");

    event.create("chromasky:drop_of_darkness").displayName("Drop Of Darkness");
    event.create("chromasky:drop_of_peacefulless").displayName("Drop Of Peacefulless");
    event.create("chromasky:craft_prudentium_crystal").displayName("Ritual: Craft Prudentium Crystal");
    event.create("chromasky:starmetal_gear").displayName("Starmetal Gear");
});

onEvent('jei.information', event => {
  event.add('chromasky:drop_of_darkness', ['Has a chance to drop on a Wither Skeleton']);
  event.add('chromasky:drop_of_peacefulless', ['Has a chance to drop on a Passive Mob']);
});

onEvent('item.modification', event => {
  event.modify('chromasky:coal_chunk', item => {
    item.burnTime = 100
  })
})

onEvent('item.modification', event => {
  event.modify('chromasky:coal_cluster', item => {
    item.burnTime = 800
  })
})
