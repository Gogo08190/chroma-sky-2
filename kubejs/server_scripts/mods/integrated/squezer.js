// priority: 99
onEvent("recipes", (event) => {
  event.remove({output: '#forge:dusts/iron', type: 'integrateddynamics:squeezer'});
  event.remove({output: '#forge:dusts/copper', type: 'integrateddynamics:squeezer'});
  event.remove({output: '#forge:dusts/silver', type: 'integrateddynamics:squeezer'});
  event.remove({output: '#forge:dusts/lead', type: 'integrateddynamics:squeezer'});
  event.remove({output: '#forge:dusts/osmium', type: 'integrateddynamics:squeezer'});
  event.remove({output: '#forge:dusts/cobalt', type: 'integrateddynamics:squeezer'});
  event.remove({output: '#forge:dusts/tin', type: 'integrateddynamics:squeezer'});
  event.remove({output: '#forge:dusts/nickel', type: 'integrateddynamics:squeezer'});
  event.remove({output: '#forge:dusts/uranium', type: 'integrateddynamics:squeezer'});
});
