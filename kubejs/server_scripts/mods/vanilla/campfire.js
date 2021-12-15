// priority: 99
onEvent("recipes", (event) => {
    event.campfireCooking("minecraft:torch", "minecraft:stick").cookingTime(0);
});
