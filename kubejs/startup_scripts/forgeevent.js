// priority: 100

//Stop creation of nether portals
onForgeEvent("net.minecraftforge.event.world.BlockEvent$PortalSpawnEvent", (event) => {
    event.setCanceled(true);
});

//Starting items
onForgeEvent("dev.ftb.mods.ftbteamislands.FTBTeamIslandsEvents$IslandJoined", (event) => {
    const player = event.player.asKJS();
    player.give("ftbquests:book");
});
