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

for (var prop in listBread) {
  console.log(prop)
  breadLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
for (var prop in listMeats) {
  console.log(prop)
  meatLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
for (var prop in listVegetables) {
  console.log(prop)
  vegetableLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
for (var prop in listCondiments) {
  console.log(prop)
  condimentLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
for (var prop in listCheese) {
  console.log(prop)
  cheeseLine.innerHTML += `<option value="${prop}">${prop}</section>`;
};
