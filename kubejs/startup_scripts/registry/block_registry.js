// priority: 100
onEvent("block.registry", (event) => {
    for (let type in global.compressables) {
        let props = global.compressables[type];
        let maxLevel = props.maxLevel || global.maxCompress;
        let tool = props.tool || "pickaxe";
        let x = {
            1: "5.0",
            2: "10.0",
            3: "20.0",
        };
        for (let i = 1; i <= maxLevel; i++) {
            event
                .create(`chromasky:${i}x_compressed_${type}`)
                .harvestTool(tool, i + 1)
                .requiresTool(true)
                .material(props.material)
                .hardness(x[i])
                .displayName(`${i}x Compressed ${props.name}`);
        }
    }
});
