var breadLine = document.getElementById('bread');
var meatLine = document.getElementById('meats');
var cheeseLine = document.getElementById('cheese');
var condimentLine = document.getElementById('condiments');
var vegetableLine = document.getElementById('vegetables');
  //how can I make this cleaner? May make bread and meat etc. objects with their targets
var listBread = SandwichMaker.getBread();  
var listMeats = SandwichMaker.getMeats();
var listVegetables = SandwichMaker.getVegetables();  
var listCondiments = SandwichMaker.getCondiments();  
var listCheese = SandwichMaker.getCheese();  
  //Populates Select Elements with Ingredients//
for (var prop in listBread) {
  breadLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
for (var prop in listMeats) {
  meatLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
for (var prop in listVegetables) {
  vegetableLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
for (var prop in listCondiments) {
  condimentLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
for (var prop in listCheese) {
  cheeseLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};

//event listener for selection in select element
var selection = document.getElementsByTagName('option')
for ( var i = 0; i < selection.length; i++) {
  selection.item(i).addEventListener('click', getIngredient)  
};
//how to select which option it is
function getIngredient(event) {
  var ingredient = event.target.value;
  var idCheck = event.target.parentElement.id;
  console.log(idCheck)

  if (idCheck === 'bread') {
    SandwichMaker.addBread(ingredient)
    } else if (idCheck === 'meats'){
      SandwichMaker.addMeats(ingredient)
    } else if (idCheck === 'cheese'){
      SandwichMaker.addCheese(ingredient)
    } else if (idCheck === 'condiments'){
      SandwichMaker.addCondiments(ingredient)
    } else if (idCheck === 'vegetables'){
      SandwichMaker.addVegetables(ingredient)
    };
  
};
var DOMOutput = document.getElementById('total')
var ingredients = [];



