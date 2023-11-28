// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
let ul = document.createElement('ul');
ul.id = 'outputList';
const urlList = "https://pokeapi.co/api/v2/pokemon";


async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
//   let section = document.querySelector("#output");
  let section = document.createElement('section');
  section.id = 'output';
  results = data;
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  section.innerHTML = html;
  console.log("first: ", results);
  document.body.appendChild(section);

//   results = data;
//   console.log("first: ", results);
//   
}

async function getPokemonList(urlList) {
    const response = await fetch(urlList);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuffList(data) {
    
    console.log("list: " + data); //prints out [object Object]
    console.log("list: " + JSON.stringify(data)); //prints out the actual results in console
    const dataResults = data.results;
    console.log("results list: " + dataResults); //prints out list of [object Object]
    console.log("results list: " + JSON.stringify(dataResults) );  //shows actual results in console

    // const pokeListElement = document.querySelector("#outputList");
    const pokeListElement = document.createElement('ul');
    pokeListElement.id = 'outputList';
    const pokeList = data.results;
    
    //sort

    pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    // note the += here...
    pokeListElement.innerHTML += html;
    document.body.appendChild(pokeListElement);
  });

}

function compare(a, b) {
    if (a < b)  {//is less than b by some ordering criterion) {
      return -1;
    }
    else if (a > b) { //is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    else{
        return 0;
    } 
  }

function sortPokemon(list) {

}

getPokemon(url);
getPokemonList(urlList);
console.log("second: ", results);

//Add an element to our HTML to hold the pokemon data...something like <section id="output"></section>
// let section = document.createElement('section');
// section.id = 'output';
// section.innerHTML = ``

//Get that element with javascript. (document.querySelector)

//In the doStuff function create a variable and build out the html that we want to display the information. (I recommend a template literal string)

//Insert our HTML into the output element (innerHTML)