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
  }
  return sandwichCheese
}(SandwichMaker || {}));


