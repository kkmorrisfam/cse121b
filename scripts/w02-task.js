/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Kerri Morris";
let currentYear = "2023";
let profilePicture = "images/Kerri_1.jpg"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML =`<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
//imageElement.src = profilePicture; //also works
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`)

/* Step 5 - Array */
let favFoods = ["Spagetti", "Steak", "Chicken Alfredo", "Tacos", "Clam Chowder"];
foodElement.textContent = favFoods;
let oneFavFood = "Pumpkin Pie";
favFoods.push(oneFavFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();  //if I assign this a value, it returns the first element.
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;



