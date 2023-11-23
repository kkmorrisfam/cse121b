/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kerri Morris",
    photo: "images/Kerri_1.jpg",
    favoriteFoods: [
        "Turkey", 
        "Ham", 
        "Mashed Potatoes", 
        "Stuffing", 
        "Green Beans", 
        "Pumpkin Pie"
    ],
    hobbies: [
        "Singing",
        "Reading",
        "Sewing",
        "Baking",
        "Ukulele"
    ],
    placesLived: [] //array
};


/* Populate Profile Object with placesLive objects */

// let newObj = Object.assign(myProfile,
//     placesLived = {
//         place: "Concord, New Hampshire",
//         length: "3 years"
//     }    
// )

myProfile.placesLived.push(
    {
        place: "All over California",
        length: "40 years"
    }

);
myProfile.placesLived.push(
    {   // brackets make it an object
        place: "Concord, New Hampshire",
        length: "3 years"
    }
);

myProfile.placesLived.push(
    {   // brackets make it an object
        place: "Orem, Utah",
        length: "9 years"
    }
);


/* DOM Manipulation - Output */
/* Name */
let myName = document.getElementById("name");
myName.textContent = myProfile.name;

/* Photo with attributes */
let myPhoto = document.getElementById("photo");
myPhoto.setAttribute("src", myProfile.photo);
myPhoto.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let favFoods = document.createElement("li");
    favFoods.textContent = element;
    document.querySelector("#favorite-foods").appendChild(favFoods);    
});

/* Hobbies List */
myProfile.hobbies.forEach(element => {
    let myHobbies = document.createElement("li");
    myHobbies.textContent = element;
    document.querySelector("#hobbies").appendChild(myHobbies);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(object => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    // console.log(dt);
    // console.log(object.place);
    // console.log(object.length)
    dt.textContent = object.place;
    dd.textContent = object.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd)
})

