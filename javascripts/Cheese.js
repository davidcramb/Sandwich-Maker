var SandwichMaker = (function(sandwichCheese){

  var Cheese = {
  'American'  : 0.10,
  'Swiss'     : 0.50,
  'Provolone' : 0.15,
  'Pepperjack': 0.15,
  'Parmesan'  : 0.10,
  'Cheddar'   : 0.30,
  };

  sandwichCheese.getCheese = function () {
    return Cheese;
  };
  sandwichCheese.addCheese = function(selection) {
    if (ingredients.indexOf(selection) == -1){
      ingredients.push(selection);
      SandwichMaker.addTotalPrice(Cheese[selection]);
    };
    console.log(ingredients)
  }

  return sandwichCheese
}(SandwichMaker || {}));


