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
  return sandwichVegetables
}(SandwichMaker || {}));

