var SandwichMaker = (function(sandwichMeats){
    
  var Meats = {
  'Turkey'   : 2.00,
  'Bacon'    : 2.50,   
  'Chicken'  : 1.75,
  'Steak'    : 3.00,
  'Synthetic': 0.50,
  'Mystery'  : 2.50,
  'None'     : 10.00
  };

  sandwichMeats.getMeats = function() {
    return Meats      
  };

  sandwichMeats.addMeats = function(selection) {
    if (ingredients.indexOf(selection) == -1){
      ingredients.push(selection);
      SandwichMaker.addTotalPrice(Meats[selection]);
    };
      console.log(ingredients)
  }

  return sandwichMeats
}(SandwichMaker || {}));
