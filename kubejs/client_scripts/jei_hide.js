// priority: 0

events.listen('jei.hide.items', function (event) {
  event.hide([
    /mysticalagriculture:soul_jar/,
    /ftblibrary:fluid_container/,
    /tconstruct:part_builder/,
    /tconstruct:tinker_station/,
    /tconstruct:crafting_station/,
    /refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/
  ])
})

onEvent('jei.add.items', e => {
  e.add([
    'tconstruct:crafting_station',
    'mysticalagriculture:soul_jar',
    Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
    Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}')
  ])
})
