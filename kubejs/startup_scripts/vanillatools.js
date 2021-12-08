const vanillaTools = Ingredient.of(/minecraft:(wooden|stone|iron|golden|diamond)_(sword|shovel|(pick)?axe|hoe)/);

onEvent("item.modification", (event) => {
    event.modify(vanillaTools, (tool) => {
        tool.setMaxDamage(1);

        tool.setTier((tier) => {
            tier.uses = 1;
            tier.speed = 0;
            tier.attackDamageBonus = 0;
            tier.level = 0;
            tier.enchantmentValue = 0;
        });
    });
});
