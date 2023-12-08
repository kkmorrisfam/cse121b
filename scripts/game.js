/* Week 6 Project - Javascript
CSE 121B
Kerri Morris
*/

//script for trivia game project week 6
let triviaList = [];
let questions = null;
let myQuestions = null;
let currentQuestion = {}; //single object
let amountCorrect = 0;
let totalAnswered = 0;

const correctHTML = `<h3>Your Answer Is Correct!</h3>
                    <p>Click the Next Button for a new question</p>`;
const incorrectHTML = `<h3>Sorry, That's not the answer.</h3>
                        <p>Click the Next Button for a new question</p>`;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('results');
const buttonsCollection = document.querySelectorAll('.button-answer');    
const resultsElement = document.getElementById('results');
const choiceElement1 = document.getElementById('btn1');
const choiceElement2 = document.getElementById('btn2');
const choiceElement3 = document.getElementById('btn3');
const choiceElement4 = document.getElementById('btn4');



// let results = null;
// let url = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";  //currently just pulling 10 questions.
// url for testing
let url = "games.json";  //test with this because the site only allows so many requests per day, and I don't know how to limit calls during testing

const getTrivia = async (url) => {      //pass in url parameters, just do something, but use async and await
    
    const response = await fetch(url)
    triviaList = await response.json();    //fill array with response   
    
    mapQuestions(triviaList);
    
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
        const newMapAnswers = [...data.incorrect_answers];  //new array of incorrect answers from results
        
        //this sets the number for the correct answer = "answer: 1"
        newMapQuestion.answer = (Math.floor(Math.random() * 4) + 1);  //get a random index between 0 and 3

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
         
    questionElement.innerHTML = `<h2>${currentQuestion.question}</h2>`;    
    choiceElement1.innerHTML = `<p>${currentQuestion.option1}`;
    choiceElement2.innerHTML = `<p>${currentQuestion.option2}`;
    choiceElement3.innerHTML = `<p>${currentQuestion.option3}`;
    choiceElement4.innerHTML = `<p>${currentQuestion.option4}`;
    // console.log(currentQuestion);

    Array.from(buttonsCollection).forEach( (button) => {
        let buttonElement = document.querySelector(button.button);
        console.log("forEach" + amountCorrect);
        
        button.addEventListener('click', function() {  
            // console.log(this.value);          
            if (this.value == currentQuestion.answer) {
                amountCorrect ++;
                answerElement.innerHTML = correctHTML;
                console.log("e-click" + amountCorrect);
                                
            } else {
                answerElement.innerHTML = incorrectHTML;                
            };
            
            //not the best option, but works for now
            reset(choiceElement1);
            reset(choiceElement2);
            reset(choiceElement3);
            reset(choiceElement4);
            
        });
        console.log("after e-click" + amountCorrect);
    }); 
}

function getNewQuestion(questions) {
    
    const questionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion =questions[questionIndex];
    
    questions.splice(questionIndex, 1);
}


/* reset Function */
const reset = (a) => {              //pass in element, clear html
    a.innerHTML = "";    
}
 
function startGame() {    
    myQuestions = [...questions];  //create a copy of questions array, not a pointer to array
    console.log("start game " + amountCorrect);
    amountCorrect = 0;
    totalAnswered = questions.length;
    getNewQuestion(myQuestions);   //is this where I want to call this function?
    displayQuestions(currentQuestion);

}

// getTrivia(url);
// displayQuestions(questions);
//start gets a whole new set of questions
document.getElementById('btnStart').addEventListener('click', () => {
    getTrivia(url);
    reset(resultsElement);
});
//next gets the next question in the array of reformatted questions.
document.getElementById('btnNext').addEventListener('click', () => {
    if (myQuestions.length > 0) {
        console.log(myQuestions.length);
        console.log(amountCorrect, totalAnswered);
        getNewQuestion(myQuestions);
        displayQuestions(currentQuestion);
    } else {
        console.log(myQuestions.length);
        // console.log(amountCorrect, totalAnswered);
        resultsElement.innerHTML = `<h2>Total Correct: ${amountCorrect} out of ${totalAnswered}</h2>`;
    }
});