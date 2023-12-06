/*  - How do I keep track of the correct answer to check for correct answer?  It's in the variable question.answer
How do I test for the correct answer/index number?
Each possible answer is in a button.  If Button clicked, see if clicked option index == question.answer
If they match, show Correct message in anouncement div, else, show Incorrect message in announcment div
Click on next button for next question.
*/

//script for trivia game project week 6
let triviaList = [];
let questions = null;
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answers');
const resultsElement = document.getElementById('results');
let myQuestions = null;

// let results = null;
let url = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";  //currently just pulling 10 questions.

const getTrivia= async (url) => {      //pass in url parameters, just do something, but use async and await
    
    const response = await fetch(url)
    triviaList = await response.json();    //fill array with response
    
    // console.log("inside getTrivia");
    // console.log(triviaList);
    // myQuestions = 
    orderQuestions(triviaList);
    // console.log("myQuestions: ")
    // console.log(JSON.stringify(myQuestions)); error with stringify; undefined without it. What is myQuestions ?????
    console.log("questions array: ")
    console.log(questions);
}

//sift through results
// get questions at position 0-9 in array: 0:question
// 0:correct_answer
// 0:incorrect_answers[0,1,2]

function orderQuestions(data) {
    //create a new array with map; question + 4 answers in random order where one is correct
    questions = data.results.map((data) => {
        const newResultQuestion = {
            question: data.question,
            
        };
        // console.log("inside OrderQuestion, create")
        // console.log(newResultQuestion);
        const newResultAnswers = [...data.incorrect_answers];  //new array of incorrect answers from results
        //this sets the number for the correct answer = "answer: 1"
        newResultQuestion.answer = (Math.floor(Math.random() * 4) + 1);  //get a random index between 0 and 3
        console.log(newResultQuestion.answer);
        //add correct answer into the new array
        //remove zero elements before random index-1 and insert data.correct_answer -- add answer in at a random spot in the array
        newResultAnswers.splice(newResultQuestion.answer - 1, 0, data.correct_answer);  

        newResultAnswers.forEach((option, index) => {
            newResultQuestion['option' + (index + 1)] = option;
        });     
        return newResultQuestion   //return new array into questions
    } //end of anon function within map

    )  //end of map function
}

function displayQuestions(question) {
    //get element to display questions, add html with question
    question.forEach(
        console.log(question.question);
        questionElement.innerHTML = "<h2>${question.question}</h2>";
        );
    //get element to display answers, add buttons, add html to buttons
}

/* reset Function */
const reset = (a) => {              //pass in html collection (not array), remove child elements  
    a.innerHTML = "";    
}



getTrivia(url);
displayQuestions(questions);