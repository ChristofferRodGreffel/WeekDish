// VARIABLES ARE DEFINED

const genBtn = document.querySelector("#generateBtn");
const dishField = document.querySelector("#dishField");
const ingredientBtn = document.querySelector("#ingredientBtn");
const ingredientsField = document.querySelector("#ingredientsField");

// THIS ARRAY WILL HOLD ALL OF THE DISH OBJECTS

const dishes = [];

// CLASS USED TO MAKE DIFFERENT DISH OBJECTS

class Dish {
  constructor(name, ingredients, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
  }
}

// THE DISHES ARE DEFINED HERE

const dishOne = new Dish("Hot-Dogs", ["Røde pølser", "Pølsebrød"], 50);
const dishTwo = new Dish(
  "Tomatsuppe(nem)",
  ["Karolines tomatsuppe", "Kødboller", "Suppehorn"],
  45
);
const dishThree = new Dish(
  "Spaghetti kødsovs",
  ["Spaghetti", "Oksekød 400/500 gram", "Pastasauce"],
  65
);
const dishFour = new Dish(
  "Pizza",
  ["Pizzadej", "Tomatsauce", "Pepperoni", "Ost", "Efter ønske"],
  120
);
const dishFive = new Dish(
  "Chili Con Carne",
  ["Bønner", "Flåede tomater", "Ris", "Tomatpure", "Gulerødder", "Løg"],
  100
);

// DISHES ARE PUSHED TO THE ARRAY

dishes.push(dishOne, dishTwo, dishThree, dishFour, dishFive);

// THIS FUNCTION DEFINES A RANDOM NUMBER BETWEEN 1 AND THE LENGTH OF THE DISHES ARRAY
// THE FUNCTION IS WRAPPED IN A LOOP TO MAKE IT RUN 5 TIMES (NO. OF DAYS IN THE WEEK)

const numArray = [];
let newArray = [];

function randomizeNumbers() {
  for (i = 0; i < 5; i++) {
    let randint = Math.floor(Math.random() * dishes.length);
    numArray.push(randint);
  }
}

// WHEN THE GENERATE BTN IS PRESSED THE 'randomizeNumbers'
// FOR LOOP POPS RANDOM NUMBERS OFF ARRAY AND PUSHES THE NAME PROPERTIES TO A NEW ARRAY
// A TEMPLATE LITERAL CONVEYS THE DATA TO THE USER

genBtn.addEventListener("click", () => {
  randomizeNumbers();
  newArray = numArray.slice();
  let dishNames = [];
  for (i = 0; i < 5; i++) {
    let popNum = numArray.pop();
    var dishSelect = dishes[popNum];
    dishNames.push(dishSelect.name);
  }
  dishField.innerHTML = `<b>Denne uges retter er:</b> ${dishNames}`;
});

// THIS FUNCTIONS GETS THE RANDOM NUMBERS FROM A NEW ARRAY AND USES THOSE TO GET THE INGREDIENTS INTO ANOTHER NEW ARRAY
// THEN A TEMPLATE LITERAL CONVEYS THE DATA

ingredientBtn.addEventListener("click", () => {
  console.log("NewArray before function:", newArray);
  let dishIngredients = [];
  for (i = 0; i < 5; i++) {
    let popNum = newArray.pop();
    var dishSelect = dishes[popNum];
    dishIngredients.push(dishSelect.ingredients);
  }
  ingredientsField.innerHTML = `<b>Ingredienserne er:</b> ${dishIngredients}`;
  console.log("NewArray after function:", newArray);
});