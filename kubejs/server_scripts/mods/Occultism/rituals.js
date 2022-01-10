onEvent('recipes', (event) => {
  event.remove({ output: 'matc:prudentium_crystal' })
    const recipes = [
        {
            ritual_type: 'occultism:craft',
            activation_item: Item.of('matc:inferium_crystal', '{Damage:0,AS_Amulet_Holder:[I;-888416893,1701662432,-1497637900,545262086]}'),
            pentacle_id: 'occultism:craft_foliot',
            duration: 15,
            ritual_dummy: 'chromasky:craft_prudentium_crystal',
            ingredients: [
                'mysticalagriculture:prudentium_gemstone' ,
                'mysticalagriculture:prudentium_essence',
                'mysticalagriculture:prudentium_gemstone',
                'mysticalagriculture:prosperity_shard',
                'mysticalagriculture:prosperity_shard',
                'mysticalagriculture:prudentium_gemstone',
                'mysticalagriculture:prudentium_essence' ,
                'mysticalagriculture:prudentium_gemstone'
            ],
            result: 'matc:prudentium_crystal',
            id: 'chromasky:items/craft_prudentium_crystal'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
