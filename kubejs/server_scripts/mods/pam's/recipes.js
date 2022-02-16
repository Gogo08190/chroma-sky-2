onEvent("recipes", (event) => {

  // Leafy Fish Sandwich
  event.shapeless('pamhc2foodextended:leafyfishsandwichitem', ['#forge:fish', 'pamhc2foodcore:basicchickensandwichitem', 'pamhc2foodcore:cuttingboarditem'])

  // Raw Tofish
  event.shapeless('pamhc2foodextended:rawtofishitem', ['#forge:fish', 'pamhc2foodcore:mixingbowlitem', 'pamhc2foodextended:soysauceitem', 'pamhc2foodextended:firmtofuitem'])

  // Peache and Cream Oatmeal
  event.shapeless('pamhc2foodextended:peachesandcreamoatmealitem', ['pamhc2foodcore:potitem', 'pamhc2crops:oatsitem', '#forge:water', 'pamhc2trees:peachitem'])

  // Gourmet Mutton Patty
  event.shapeless('pamhc2foodextended:gourmetmuttonpattyitem', ['pamhc2foodcore:mixingbowlitem', 'pamhc2foodcore:groundmuttonitem', 'pamhc2foodextended:saltandpepperitem', 'pamhc2crops:spiceleafitem', 'pamhc2crops:mustardseedsitem'])

  event.shapeless('pamhc2foodextended:honeyglazedhamitem', ['pamhc2foodcore:saucepanitem', 'minecraft:porkchop', 'minecraft:honey_bottle', '#forge:butter', 'pamhc2trees:lemonitem'])
});
