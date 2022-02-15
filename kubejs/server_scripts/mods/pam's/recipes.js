onEvent("recipes", (event) => {

  // Leafy Fish Sandwich

  event.shaped('pamhc2foodextended:leafyfishsandwichitem', [
  'CP ',
  'F  ',
  '   '
  ], {
    F: '#forge:fish',
    P: 'pamhc2foodcore:basicchickensandwichitem',
    C: 'pamhc2foodcore:cuttingboarditem'
  })

  // Raw Tofish

  event.shaped('pamhc2foodextended:rawtofishitem', [
  'MT ',
  'CF ',
  '   '
  ], {
    F: '#forge:fish',
    M: 'pamhc2foodcore:mixingbowlitem',
    C: 'pamhc2foodextended:soysauceitem',
    T: 'pamhc2foodextended:firmtofuitem'
  })

  // Peache and Cream Oatmeal

  event.shaped('pamhc2foodextended:peachesandcreamoatmealitem', [
  'PO ',
  'AW',
  '   '
  ], {
    P: 'pamhc2foodcore:potitem',
    O: 'pamhc2crops:oatsitem',
    W: '#forge:water',
    A: 'pamhc2trees:peachitem'
  })

  // Gourmet Mutton Patty

  event.shaped('pamhc2foodextended:gourmetmuttonpattyitem', [
  'BGS',
  'LM ',
  '   '
  ], {
    B: 'pamhc2foodcore:mixingbowlitem',
    G: 'pamhc2foodcore:groundmuttonitem',
    S: 'pamhc2foodextended:saltandpepperitem',
    L: 'pamhc2crops:spiceleafitem',
    M: 'pamhc2crops:mustardseedsitem'
  })

});
