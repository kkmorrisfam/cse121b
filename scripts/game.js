/*  - How do I keep track of the correct answer to check for correct answer?  It's in the variable question.answer
How do I test for the correct answer/index number?
Each possible answer is in a button.  If Button clicked, see if clicked option index == question.answer
If they match, show Correct message in anouncement div, else, show Incorrect message in announcment div
Click on next button for next question.
*/

//script for trivia game project week 6
let triviaList = [];
let questions = null;
let myQuestions = null;
let currentQuestion = {}; //single object

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answers');
const buttonsCollection = document.querySelectorAll('.button-answer');    
const resultsElement = document.getElementById('results');


// let results = null;
// let url = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";  //currently just pulling 10 questions.
let url = "games.json";  //test with this because the site only allows so many requests per day, and I don't know how to limit calls during testing

const getTrivia= async (url) => {      //pass in url parameters, just do something, but use async and await
    
    const response = await fetch(url)
    triviaList = await response.json();    //fill array with response
    
    // console.log("inside getTrivia");
    // console.log(triviaList);
    // myQuestions = 
    mapQuestions(triviaList);
    // console.log("myQuestions: ")
    // console.log(JSON.stringify(myQuestions)); error with stringify; undefined without it. What is myQuestions ?????
    console.log("questions array: ")
    console.log(questions);
    startGame();  // do this here so that it doesn't "start" until we have api data
}

//sift through results
// get questions at position 0-9 in array: 0:question
// 0:correct_answer
// 0:incorrect_answers[0,1,2]

function mapQuestions(data) {
    //create a new array with map; question + 4 answers in random order where one is correct
    questions = data.results.map((data) => {
        const newMapQuestion = {
            question: data.question,
            
        };
        // console.log("inside mapQuestion, create")
        // console.log(newMapQuestion);
        const newMapAnswers = [...data.incorrect_answers];  //new array of incorrect answers from results
        //this sets the number for the correct answer = "answer: 1"
        newMapQuestion.answer = (Math.floor(Math.random() * 4) + 1);  //get a random index between 0 and 3
        // console.log(newMapQuestion.answer);
        //add correct answer into the new array
        //remove zero elements before random index-1 and insert data.correct_answer -- add answer in at a random spot in the array
        newMapAnswers.splice(newMapQuestion.answer - 1, 0, data.correct_answer);  

        newMapAnswers.forEach((option, index) => {
            newMapQuestion['option' + (index + 1)] = option;
        });     
        return newMapQuestion   //return new array into questions
    } //end of anon function within map

    )  //end of map function
}

function displayQuestions(currentQuestion) {
    //get element to display questions, add html with question
    // console.log("inside displayQuestions");
    // console.log(currentQuestion.question);
    // console.log(currentQuestion.answer);
    // console.log(currentQuestion.option1);
    // console.log(currentQuestion.option2);
    // console.log(currentQuestion.option3);
    // console.log(currentQuestion.option4);
    questionElement.innerHTML = `<h2>${currentQuestion.question}</h2>`;    
    buttonElement.innerHTML = `<p>${currentQuestion.option}`;

    Array.from(buttonsCollection).forEach( (button) => {
        let buttonElement = document.querySelector(button);
        
        button.addEventListener('click', function() {
            console.log(this.value);
        });
    });

    

    /* for i, starting at index 2 - index 5, i++
    add element to new array
    with new array. 
    add textContent to button
    then, for ech button element, add an eventListener

    if (this.value == currentQuestion.answer)
        set html to "correct"
        else set html to "incorrect"
    
    */
        

   
    // get element to display answers, add buttons, add html to buttons
}

function getNewQuestion(questions) {
    
    const questionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion =questions[questionIndex];
    console.log("currentQuestion");
    console.log(currentQuestion);
}

/* reset Function */
const reset = (a) => {              //pass in html collection (not array), remove child elements  
    a.innerHTML = "";    
}
 
function startGame() {    
    myQuestions = [...questions];  //create a copy of questions array, not a pointer to array
    getNewQuestion(myQuestions);   //is this where I want to call this function?
    displayQuestions(currentQuestion);

}

getTrivia(url);
// displayQuestions(questions);