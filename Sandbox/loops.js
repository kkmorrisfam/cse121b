// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
};

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// myInfo.favoriteFoods.forEach(foodItem => {
//     let favFood = document.createElement("ul");
//     favFood.textContent = foodItem;
//     myInfo.append(favFood);
    
// });

//example from assignment
const foodsElement = document.querySelector('#favorite-foods');
function createandAppendFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createandAppendFoodItem);

//Here I created the map in the same format as the forEach; it works the same?
function mapFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.map(mapFoodItem);

// with .map - examples from class
// const anotherFoodsElement = document.querySelector('#favorite-foods');
function mapFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  return favoriteFood;
}

// this function could also be written this way using a template literal:
// function mapFoodItemSmall(food) {
//   return `<li>${food}</li>`;
// }
// const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// // we need to flatten the array of strings into one big string. .join does this.
// foodsElement.innerHTML = foodListElements.join('');


// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// document.querySelector("#favorite-foods").appendChild(favoriteFood4);


const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//Write a for loop that will iterate through the studentReport array 
//and print to the console the current array value if it is below 30.
// for (number in studentReport) {
//   if (studentReport[number] < 30)
//   { console.log(studentReport[number]);}
  
// }

//example
// for loop
// for (let i = 0; i < studentReport.length; i++) {
//   if (studentReport[i] < LIMIT) {
//     console.log(studentReport[i]);
//   }
// }


let i = 0;
while ( i < studentReport.length) {
  if (studentReport[i] < 30)
  { console.log(studentReport[i]);}
  i++;
}

// studentReport.forEach((number) => {
//   if (studentReport[number] < 30)
//   { console.log(studentReport[number]);
//   }
// })

// forEach loop
  studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });

  // for...in loop
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }

const DAYS = 6;
const options = { weekday: 'long'}; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
//document.getElementById('today').innerHTML = `Today is ${todaystring}. `;
console.log(`Today is ${todaystring}`);

// next n days
for (let i = 1; i <= DAYS; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
	// item = document.createElement("li"); // list item
	// item.textContent = nextdaystring;
	// output[0].appendChild(item);
  console.log(nextdaystring);
}

function calculate(a, b, callback) {
  callback(a + b);
}

function displayResult(result) {
  console.log('The result is: ' + result);
}


calculate(2,3,displayResult);