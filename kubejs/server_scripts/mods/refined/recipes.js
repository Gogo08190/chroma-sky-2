onEvent('recipes', event => {
  event.remove({ output: 'refinedstorage:quartz_enriched_iron' })

  event.shapeless('9x refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron_block');

  event.recipes.thermal
    .smelter("4x refinedstorage:quartz_enriched_iron", ['3x minecraft:iron_ingot', 'minecraft:quartz'])
    .energy(6400);
});
