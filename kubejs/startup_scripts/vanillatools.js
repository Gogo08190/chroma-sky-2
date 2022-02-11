const vanillaTools = Ingredient.of(/minecraft:(wooden|stone|iron|golden|diamond|netherite)_(sword|shovel|(pick)?axe|hoe)/);
const prTools = Ingredient.of(/projectred-exploration:(ruby|peridot|sapphire)_(sickle|sword|(pick)?axe|hoe|shovel)/);

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

onEvent("item.modification", (event) => {
    event.modify(prTools, (tool) => {
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
