/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
    return num1 + num2;
}

function addNumbers() {
    //read from input fields
    const num1 = parseInt(document.getElementById("add1").value);
    const num2 = parseInt(document.getElementById("add2").value);
    //can also use parseInt or Number instead of parseInt
    // console.log(num1);
    // console.log(num2);
    
    //get the sum of those input numbers
    const sum = add(num1, num2);
    // console.log(sum);

    //set that sum into the answer field
    const sumField = document.getElementById("sum");
    sumField.value = sum;
    // console.log(sumField.value);

    //can also do: document.getElementById("sum").value = sum;

}

//when using the eventListener, we don't call the function with (), 'addNumber()'
//because that would call the function now.  We want to give it the name of the function
//so that it won't be called until the event happens
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers 
Using function expressions, repeat the items in Step 2 with new functions named 
subtract and subtractNumbers and HTML form controls with IDs of subtract1, subtract2, subtractNumbers, and difference.*/
const subtract = function (num1, num2){
    return num1 - num2;
}

const subtractNumbers = function () {
    //read from input fields
    const num1 = Number(document.getElementById("subtract1").value);
    const num2 = Number(document.getElementById("subtract2").value);
    
    // console.log(num1);
    // console.log(num2);
    
    //get the difference of those input numbers
    const difference = subtract(num1, num2);
    // console.log(difference);

    //set that sum into the answer field
    const differenceField = document.getElementById("difference");
    differenceField.value = difference;
    // console.log(differenceField.value);   
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers 
Using arrow functions, repeat the items in Step 2 with arrow functions named 
multiply and multiplyNumbers and HTML form controls with IDs of factor1, factor2, multiplyNumbers, and product.*/

const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
   //read from input fields
   const num1 = Number(document.getElementById("factor1").value);
   const num2 = Number(document.getElementById("factor2").value);
    
//    console.log(num1);
//    console.log(num2);
    
   //get the product of those input numbers
   const answer = multiply(num1, num2);
//    console.log(answer);

    //set that answer into the answer field
   const answerField = document.getElementById("product");
   answerField.value = answer;
//    console.log(answerField.value);
   
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers 
new functions named divide and divideNumbers and HTML form controls with 
IDs of dividend, divisor, divideNumbers, and quotient.*/
const divide = (num1, num2) => num1 / num2;

const divideNumbers = () => {
   //read from input fields
   const num1 = Number(document.getElementById("dividend").value);
   const num2 = Number(document.getElementById("divisor").value);
    
//    console.log(num1);
//    console.log(num2);
    
   //get the product of those input numbers
   const answer = divide(num1, num2);
//    console.log(answer);

    //set that answer into the answer field
   const answerField = document.getElementById("quotient");
   answerField.value = answer;
//    console.log(answerField.value);   
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

document.getElementById("getTotal").addEventListener("click", function() {
    let userSubTotal = Number(document.getElementById("subtotal").value);
    console.log(userSubTotal);
    if (document.getElementById("member").checked) {
        let discount = userSubTotal * .20;  //instructions say 15%, rubric says 20%
        userSubTotal = userSubTotal - discount;
        console.log(userSubTotal);
    }
    
    document.getElementById("total").innerHTML = `$${userSubTotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter((num) => num % 2 === 1);
document.getElementById("odds").innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter((num) => num % 2 === 0);
document.getElementById("evens").innerHTML = evenNumbers;

/* Output Sum of Org. Array */
const result = numbersArray.reduce((subtotal, number)  => {
    return subtotal + number;
}, 0);
//same result with next line of code
//const result = numbersArray.reduce((subtotal, number) => subtotal + number);
// console.log(result);
document.getElementById("sumOfArray").innerHTML = result;

/* Output Multiplied by 2 Array */
const multBy2 = numbersArray.map(number => number * 2);
// console.log(multBy2);
document.getElementById("multiplied").innerHTML = multBy2;

/* Output Sum of Multiplied by 2 Array */
// const sumOfMult = multBy2.reduce ((subtotal, number) => subtotal + number);
const sumOfMult = numbersArray.map(number => number * 2).reduce((subtotal, number) => subtotal + number);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMult;