// VARIABLES ARE DEFINED

const genBtn = document.querySelector("#generateBtn");
const dishField = document.querySelector("#dishField");
const ingredientBtn = document.querySelector("#ingredientBtn");
const ingredientsField = document.querySelector("#dishIngredients ul");
const priceField = document.querySelector("#price");
const downloadBtn = document.querySelector("#downloadBtn");
const ingredientRemoveBtn = document.querySelector("#removeIngredientsBtn");
const ingredientResetBtn = document.querySelector("#resetIngredientsBtn");

// THIS ARRAY WILL HOLD ALL OF THE DISH OBJECTS

const dishes = [];

// CLASS USED TO MAKE DIFFERENT DISH OBJECTS

class Dish {
  constructor(name, ingredients, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
    dishes.push(this);
  }
}

// THE DISHES ARE DEFINED HERE
// THEY HAVE BEEN GENERATED USING (AND MANIPULATING) CHATGPT

let dish1 = new Dish(
  "Spaghetti Bolognese",
  ["spaghetti", "hakket oksekød", "tomatsauce", "løg", "hvidløg"],
  75
);
let dish2 = new Dish(
  "Stegt Ris",
  ["ris", "sojasauce", "æg", "grøntsager", "rejer"],
  65
);
let dish3 = new Dish(
  "Kylling Alfredo",
  ["fettuccine", "kyllingebryst", "flødesauce", "parmesan ost", "hvidløg"],
  85
);
let dish4 = new Dish(
  "Taco Salat",
  ["hakket oksekød", "salat", "cheddar ost", "flødeskum", "tacoskaller"],
  75
);
let dish5 = new Dish(
  "Pizza Margherita",
  ["pizzadej", "tomatsauce", "mozzarella ost", "basilikumblade"],
  95
);
let dish6 = new Dish(
  "Lammekoteletter",
  ["lammekoteletter", "mint sauce", "kartofler", "gulerødder", "ærter"],
  165
);
let dish7 = new Dish(
  "Bøf Stir Fry",
  ["bøf sirloin", "grøntsager", "ris", "sojasauce", "østersauce"],
  95
);
let dish8 = new Dish(
  "Frikadeller",
  ["hakket svinekød", "hakket oksekød", "løg", "brødsmuler", "æg"],
  75
);
let dish9 = new Dish(
  "Stegt Flæsk",
  ["svær", "kartofler", "kål", "persillesovs"],
  95
);
let dish10 = new Dish(
  "Karryret med Kylling",
  ["kyllingebryst", "karrypulver", "kokosmælk", "ris", "grøntsager"],
  85
);
let dish11 = new Dish(
  "Rødspættefilet",
  ["rødspættefileter", "smør", "citron", "kartofler", "persille"],
  165
);
let dish12 = new Dish(
  "Æblekage",
  ["æbler", "mel", "sukker", "smør", "kanel"],
  55
);
let dish13 = new Dish(
  "Boller i Karry",
  ["hvedemel", "æg", "mælk", "karrypulver", "kikærter"],
  55
);
let dish14 = new Dish(
  "Kartoffel Suppe",
  ["kartofler", "løg", "flødesauce", "persille"],
  35
);
let dish15 = new Dish(
  "Laks i Foil",
  ["laks", "citron", "dild", "kartofler", "grøntsager"],
  140
);
let dish16 = new Dish(
  "Stuvet Spidskål",
  ["spidskål", "ærter", "løg", "flødesauce"],
  35
);
let dish17 = new Dish(
  "Kylling Teriyaki",
  ["kyllingebryst", "teriyaki sauce", "grøntsager", "ris"],
  65
);
let dish18 = new Dish(
  "Risotto med Champignon",
  ["ris", "champignoner", "flødesauce", "parmesan ost"],
  55
);
let dish19 = new Dish(
  "Hakkebøf",
  ["hakket oksekød", "løg", "dijonsennep", "brød", "æg"],
  60
);
let dish20 = new Dish(
  "Pølse med Kartoffelmos",
  ["pølser", "kartofler", "løg", "flødesauce"],
  45
);
let dish21 = new Dish(
  "Lasagne",
  ["lasagneplader", "hakket oksekød", "tomatsauce", "mozzarella ost"],
  90
);
let dish22 = new Dish(
  "Græsk Tzatziki",
  ["gurke", "yoghurt", "hvidløg", "dild"],
  30
);
let dish23 = new Dish(
  "Kylling Caesar Salat",
  ["kyllingebryst", "romainesalat", "parmesan ost", "caesar dressing"],
  60
);
let dish24 = new Dish(
  "Fiskefilet",
  ["fiskefileter", "citron", "kartofler", "rejer", "remoulade"],
  95
);
let dish25 = new Dish(
  "Pasta Carbonara",
  ["spaghetti", "æggeblommer", "pancetta", "parmesan ost", "hvidløg"],
  85
);
let dish26 = new Dish(
  "Gryderet med Svinekød",
  ["svinekød", "løg", "gulerødder", "kartofler", "tomatsauce"],
  65
);
let dish27 = new Dish(
  "Friturestegt Torsk",
  ["torsk", "mel", "æg", "småkager"],
  55
);
let dish28 = new Dish(
  "Ratatouille",
  ["aubergine", "peberfrugt", "løg", "tomater", "hvidløg"],
  45
);
let dish29 = new Dish(
  "Chili con Carne",
  ["hakket oksekød", "løg", "bønner", "tomatsauce", "chilipulver"],
  60
);
let dish31 = new Dish(
  "Vegetarisk Bøf",
  ["vegetarisk bøf", "kartofler", "grøntsager", "tomatsovs"],
  75
);
let dish32 = new Dish(
  "Grillet Laks",
  ["laks", "kartofler", "broccoli", "citron", "timian"],
  125
);
let dish33 = new Dish(
  "Kylling i Karry",
  ["kyllingebryst", "kartofler", "ris", "karrypasta", "koriander"],
  85
);
let dish34 = new Dish(
  "Pasta Carbonara",
  ["spaghetti", "bacon", "æggeblommer", "parmesan", "flødesauce"],
  60
);
let dish35 = new Dish(
  "Røget Pølse",
  ["røget pølse", "brød", "remoulade", "rødbeder", "syltet agurk"],
  35
);
let dish36 = new Dish(
  "Boller i Karry",
  ["hvetemel", "æg", "mælk", "salt", "peber", "karrypasta"],
  45
);
let dish37 = new Dish(
  "Hakkebøf med Løg",
  ["hakkebøf", "løg", "kartofler", "rødvinssauce"],
  70
);
let dish38 = new Dish(
  "Stegt Flæsk med Persillesovs",
  ["stegt flæsk", "kartofler", "persille", "smør", "flødesauce"],
  65
);
let dish39 = new Dish(
  "Vegetarisk Stir Fry",
  ["grøntsager", "ris", "sojasauce", "sesamolie", "ingefær"],
  55
);
let dish40 = new Dish(
  "Brunede Kartofler",
  ["kartofler", "smør", "hvidløg", "timian", "parmesan"],
  30
);

// THIS FUNCTION DEFINES A RANDOM NUMBER BETWEEN 1 AND THE LENGTH OF THE DISHES ARRAY
// THE FUNCTION IS WRAPPED IN A LOOP TO MAKE IT RUN 5 TIMES (NO. OF DAYS IN THE WEEK)

let numArray = [];

function randomizeNumbers() {
  while (numArray.length < 5) {
    let randint = Math.floor(Math.random() * dishes.length);
    if (!numArray.includes(randint)) {
      numArray.push(randint);
    }
  }
}

// WHEN THE GENERATE BTN IS PRESSED THE 'randomizeNumbers'
// FOR LOOP POPS RANDOM NUMBERS OFF ARRAY AND PUSHES THE NAME PROPERTIES TO A NEW ARRAY
// A TEMPLATE LITERAL CONVEYS THE DATA TO THE USER

genBtn.addEventListener("click", () => {
  numArray = [];
  randomizeNumbers();
  let dishNames = [];
  let dishPrice = [];

  numArray.forEach((popNumber) => {
    console.log(popNumber);
    var dishSelect = dishes[popNumber];
    dishNames.push(dishSelect.name);
    dishPrice.push(dishSelect.price);
  });

  let weekplan = `<ul>${dishNames
    .map((dish, key) => {
      let weekDay = "";
      switch (key) {
        case 0:
          weekDay = "Mandag:";
          break;
        case 1:
          weekDay = "Tirsdag:";
          break;
        case 2:
          weekDay = "Onsdag:";
          break;
        case 3:
          weekDay = "Torsdag:";
          break;
        case 4:
          weekDay = "Fredag:";
          break;
        default:
          break;
      }
      return `<h5>${weekDay}<h5><li>${dish}</li>`;
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

let ingredientsArray = [];
let ingredientsDown = [];

function arrayMap(arr) {
  return arr
    .map(
      (item) =>
        `<div id="itemList"><li>${item}</li><input type="checkbox" class="checkItems" value="${item}"></input></div>`
    )
    .join("");
}

ingredientBtn.addEventListener("click", () => {
  let dishIngredients = [];
  for (i = 0; i < 5; i++) {
    let popNum = numArray.pop();
    var dishSelect = dishes[popNum];
    dishIngredients.push(dishSelect.ingredients);
  }

  const combinedArray = [];

  for (let items of dishIngredients) {
    combinedArray.push(...items);
  }

  ingredientsDown = combinedArray;

  ingredientsField.innerHTML = arrayMap(combinedArray);
  document.getElementById("removeIngredientsBtn").style.display = "block";
});

// INGREDIENTS REMOVE BUTTON EVENT

ingredientRemoveBtn.addEventListener("click", () => {
  let checkboxes = document.querySelectorAll(".checkItems");
  let chosenIngredients = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      chosenIngredients.push(checkbox.value);
      let finalIngredients = ingredientsDown.filter((element) => {
        return !chosenIngredients.includes(element);
      });
      ingredientsField.innerHTML = arrayMap(finalIngredients);
      ingredientsDown = finalIngredients;
    }
  });
});

// RESET INGREDIENTSLIST

// DOWNLOAD BUTTON

downloadBtn.addEventListener("click", (e) => {
  if (ingredientsDown.length === 0) {
    alert("Du har ikke oprettet en indkøbsseddel");
    e.preventDefault();
  } else {
    const blob = new Blob([ingredientsDown.join("\n")], { type: "text/plain" });
    downloadBtn.href = URL.createObjectURL(blob);
    downloadBtn.download = "ingredienser.txt";
  }
});
