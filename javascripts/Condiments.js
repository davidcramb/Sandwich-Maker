var SandwichMaker = (function(sandwichCondiments){

  var Condiments = {
  'Mustard'      : 0.05,
  'Spicy Mustard': 0.10,
  'Dijon Mustard': 0.20,
  'Mayo'         : 0.05,
  'Spicy Mayo'   : 0.10,
  'Vinigar'      : 0.05,
  'Oil'          : 0.05,
  'Relish'       : 0.15,
  'Spicy Relish' : 0.20  
  };

  sandwichCondiments.getCondiments = function () {
    return Condiments;
  };
  sandwichCondiments.addCondiments = function(selection) {
    if (ingredients.indexOf(selection) == -1){
      ingredients.push(selection);
      SandwichMaker.addTotalPrice(Condiments[selection]);
    };
    console.log(ingredients)
  }
  
  return sandwichCondiments
}(SandwichMaker || {}));


