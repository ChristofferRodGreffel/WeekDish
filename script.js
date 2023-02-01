// VARIABLES ARE DEFINED

const genBtn = document.querySelector("#generateBtn");
const dishField = document.querySelector("#dishField");
const ingredientBtn = document.querySelector("#ingredientBtn");
const ingredientsField = document.querySelector("#dishIngredients");
const priceField = document.querySelector("#price");

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
  ["Pizzadej", "Tomatsauce", "Pepperoni", "Ost"],
  120
);
const dishFive = new Dish(
  "Chili Con Carne",
  [
    "Bønner",
    "Oksekød",
    "Flåede tomater",
    "Ris",
    "Tomatpure",
    "Gulerødder",
    "Løg",
  ],
  100
);
const dishSix = new Dish(
  "Pastasalat m. kylling",
  ["Kylling", "Pasta", "Salatblanding", "Grøntsager efter behov"],
  75
);
const dishSeven = new Dish(
  "Burger",
  ["Oksekød 400g", "Burgerboller", "Iceberg salat", "Grøntsager efter behov"],
  75
);
const dishEight = new Dish(
  "Chili sin carne",
  ["Kylling", "Pasta", "Salatblanding", "Grøntsager efter behov"],
  75
);

// DISHES ARE PUSHED TO THE ARRAY

dishes.push(
  dishOne,
  dishTwo,
  dishThree,
  dishFour,
  dishFive,
  dishSix,
  dishSeven
);

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
  let dishPrice = [];
  let whatDay = 0;
  for (i = 0; i < 5; i++) {
    let popNum = numArray.pop();
    var dishSelect = dishes[popNum];
    dishNames.push(dishSelect.name);
    dishPrice.push(dishSelect.price);
    whatDay++;

    // switch (true) {
    //   case whatDay === 1:
    //     console.log("Mandag!");
    //     break;
    //   case whatDay === 2:
    //     console.log("Tirsdag!");
    //     break;
    //   case whatDay === 3:
    //     console.log("Onsdag!");
    //     break;
    //   case whatDay === 4:
    //     console.log("Torsdag!");
    //     break;
    //   case whatDay === 5:
    //     console.log("Fredag!");
    //     break;
    //   default:
    //     console.log("Intet sket....");
    //     break;
    // }
  }
  let weekplan = `<ul>${dishNames
    .map((dish) => {
      return `<li>${dish}</li>`;
    })
    .join("")}</ul>`;

  dishField.innerHTML = weekplan;
  priceField.innerHTML = `Samlet pris: ${dishPrice.reduce(
    (a, b) => a + b,
    0
  )} kr.`;
});

// THIS FUNCTIONS GETS THE RANDOM NUMBERS FROM A NEW ARRAY AND USES THOSE TO GET THE INGREDIENTS INTO ANOTHER NEW ARRAY
// THEN A TEMPLATE LITERAL CONVEYS THE DATA

ingredientBtn.addEventListener("click", () => {
  let dishIngredients = [];
  for (i = 0; i < 5; i++) {
    let popNum = newArray.pop();
    var dishSelect = dishes[popNum];
    dishIngredients.push(dishSelect.ingredients);
  }
  let ingredientsList = `<ul>${dishIngredients
    .map((ingredient) => {
      return `<li>${ingredient.join("<br>")}</li>`;
    })
    .join("")}</ul>`;

  ingredientsList.toString();
  ingredientsField.innerHTML = ingredientsList;
});
