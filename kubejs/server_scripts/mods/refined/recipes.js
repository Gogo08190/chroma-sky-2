onEvent('recipes', event => {
  event.remove({ output: 'refinedstorage:quartz_enriched_iron' })

  event.shapeless('9x refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron_block');

  event.recipes.thermal
    .smelter("4x refinedstorage:quartz_enriched_iron", ['3x minecraft:iron_ingot', 'minecraft:quartz'])
    .energy(6400);

  event.remove({ output: 'refinedstorage:machine_casing' })
  event.shaped('refinedstorage:machine_casing', [
  'QSQ',
  'SCS',
  'QSQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron',
    S: 'immersiveengineering:component_steel',
    C: 'chromasky:mechanic_core_tier_3'
  })
});
