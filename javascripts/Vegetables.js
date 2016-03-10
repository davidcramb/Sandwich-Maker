var SandwichMaker = (function(sandwichVegetables){

  var Vegetables = {
    'Lettuce'       : 0.05,
    'Onions'        : 0.10,
    'Green Peppers' : 0.20,
    'Jalepenos'     : 0.25,
    'Olives'        : 0.35,
    'Mushrooms'     : 0.25
  };

  sandwichVegetables.getVegetables = function () {
    return Vegetables;
  }
    sandwichVegetables.addVegetables = function(selection) {
    if (ingredients.indexOf(selection) == -1){
      ingredients.push(selection);
      SandwichMaker.addTotalPrice(Vegetables[selection]);
    };
    console.log(ingredients)
  }
  return sandwichVegetables
}(SandwichMaker || {}));

