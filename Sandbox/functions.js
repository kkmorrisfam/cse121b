let firstName = 'Antonia';
let lastName = 'Francesca';

// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

//anonymous function
// const fullName = function(first, last) {
//     return `${firstName} ${lastName}`;
// }

//arrow function
const fullName = (first, last) => `${firstName} ${lastName}`;

//Write an expression that calls the fullName 
//function declaration and writes the result to an existing HTML element's text node with the ID of fullName

// const nameElement = document.getElementById("name");
//nameElement.textContent = fullName();
// document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
//Using the array.filter() method, create an array named namesB with only those names 
//from the name array that start with the character 'B'.
let namesB = names.filter((name) => name.startsWith('B'));
console.log(namesB);

//Using the array.map() method, create a new array named namesLength that contains 
//the length of each name in the names array. Expected output is [5, 8, 5, 8, 3].
let namesLength = names.map((word) => word.length);
console.log(namesLength);

//Using the names.reduce() method, create an expression that returns the average string 
//length of the names in the names array. Expected output is 5.8.
names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(names);

//example from online with array.reduce()
const items = [
    {name: "Rice", price: 5},
    {name: "Book", price: 20},
    {name: "Chicken", price: 10},
    {name: "Monitor", price: 100},
  ]
  
  
  //forEach loop does same as reduce below
//   let totalPrice = 0;
//   items.forEach(item => {
//     totalPrice += item.price
//   })

//total is accumulator(collecting numbers), where the value reduces down to
//item is the same parameter we pass into the forEach loop above
  const totalPrice = items.reduce((total, item) => {
    return total + item.price
  }, 0)  //the last number is the default value - 'let TotalPrice = 0'
  //0 will be passed to total the first time through, its the start value.

  //each time we go through the items array we get the item and the 
  //value collecting in the accumulator. Starts at 0 here
  //and returns the value and adds it to the total variable for the 
  //next iteration.

  console.log(totalPrice);
  
  const people = [
    {name: 'Kyle', age: 26},
    {name: 'John', age: 31},
    {name: 'Sally', age: 42},
    {name: 'Jill', age: 42},
  ]
  //we want to group by age
  //two variables within () are newly declared for scope of method
  const result = people.reduce((groupedPeople, person) => {
    const age = person.age
    if (groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
  }, {}) //default value is an empty object '{}'

  //should create the following object
//   {
//     42: ['Sally', 'Jill'],
//     26: ['Kyle'],
//     31: ['John'],
//   }