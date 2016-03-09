var SandwichMaker = (function(sandwichMeats){
    console.log('meat')
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
    
    //work on method for adding meat selection to 
    sandwichMeats.addMeats = function () {
      for (prop in Meats){
        meatHolder.push(prop);
        // console.log(meatHolder)
      };

    }

  return sandwichMeats

}(SandwichMaker || {}));
