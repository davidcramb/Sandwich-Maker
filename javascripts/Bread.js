var SandwichMaker = (function(sandwichBread){

  var Bread = {
  'White': 0.00,
  'Wheat': 0.00,
  'Italian': 0.00,
  'Recyled Paper': -1.00
  };

  sandwichBread.getBread = function (){
    return Bread;
  }; 
  
  return sandwichBread
}(SandwichMaker || {}));


