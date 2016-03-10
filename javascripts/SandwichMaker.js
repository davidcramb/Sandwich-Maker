var SandwichMaker = (function (){

  var totalPrice = 0;

  return {
    getTotalPrice: function () {
      return totalPrice;
    },
    
    addTotalPrice: function (ingredientPrice) {
      totalPrice += ingredientPrice
      return totalPrice;
    },
  };




  var finalSandwichPrice = 0;

}());