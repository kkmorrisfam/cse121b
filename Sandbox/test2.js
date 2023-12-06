
let quoteList = [];
let results = null;
// let url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';
let url = 'https://api.quotable.io/quotes?page=1';
let url2 = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";
// let url = 'https://opentdb.com/api.php?amount=10';
const getQuotes = async () => {      //pass in zero parameters, just do something, but use async and await
    const response = await fetch(url)//('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    quoteList = await response.json();    
    // displayTemples(sorted(templeList));
    console.log("inside getQuotes");
    console.log(quoteList);
}

const getTrivia = async () => {
    const response2 = await fetch(url2)
    triviaResponse = await response2.json();
    console.log("inside getTrivia");
    console.log(triviaResponse);
}
// getquotes();

// async function getQuotes(url) {
//     console.log(url);
//     const response = await fetch(url);
//     //check to see if the fetch was successful
//     if (response.ok) {
//       // the API will send us JSON...but we have to convert the response before we can use it
//       // .json() also returns a promise...so we await it as well.
//       const data = await response.json();
//       console.log(JSON.stringify(response));
//       console.log(JSON.stringify(data));
//       doStuff(data);
//     }
//   }
  
  function doStuff(data) {
    //create element
    let section = document.createElement('section');
    //set new element id
    section.id = 'output';
    results = data;
    // const html = `<h2>${results.name}</h2>
    //               <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    const html = `<h2>${'Test Results'}</h2>`

    section.innerHTML = html;
    console.log("first: ", results);
    document.body.appendChild(section);
  }

  console.log('before getQuotes called');
  getQuotes(url);
  console.log("after getQuotes called.");
  getTrivia();