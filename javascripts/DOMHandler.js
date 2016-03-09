var breadLine = document.getElementById('bread');
var meatLine = document.getElementById('meats');
var cheeseLine = document.getElementById('cheese');
var condimentLine = document.getElementById('condiments');
var vegetableLine = document.getElementById('vegetables');
  //how can I make this cleaner?
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

var selection = document.getElementsByTagName('select')

