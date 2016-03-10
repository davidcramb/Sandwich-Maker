var SandwichMaker = (function(sandwichBread){

  var Bread = {
  'White': 0.50,
  'Wheat': 0.50,
  'Italian': 0.70,
  'Recyled Paper': -1.00
  };

  sandwichBread.getBread = function (){
    return Bread;
  }; 
  //still makes adds more than one bread to total price, may make a for loop to fix?
  sandwichBread.addBread = function(selection) {
    if (ingredients.indexOf(selection) == -1){
      ingredients.push(selection);
      SandwichMaker.addTotalPrice(Bread[selection]);
 
  };
    // console.log(Bread[ingredients])
    console.log(ingredients)

  }
  return sandwichBread
}(SandwichMaker || {}));


