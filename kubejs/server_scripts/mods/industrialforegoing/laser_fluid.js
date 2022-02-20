onEvent('recipes', (event) => {
  const recipes = [
    {
    output: '{FluidName:"immersivepetroleum:oil",Amount:50}',
    rarity: [
      {
        whitelist: {},
        blacklist: {},
        depth_min: 20,
        depth_max: 60,
        weight: 8
      }
    ],
    pointer: 0,
    catalyst: { item: 'industrialforegoing:laser_lens15' },
    entity: 'minecraft:empty',
    type: 'industrialforegoing:laser_drill_fluid'
  }
];
  recipes.forEach((recipe) => {
      recipe.type = 'industrialforegoing:laser_drill_fluid';
      event.custom(recipe).id(recipe.id);
  });
});
