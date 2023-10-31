// const PI = 3.14;
// let radius = 3;
// let area = 0;
// area = radius * radius * PI;
// console.log(area);
// radius = 4;
// area = radius * radius * PI;
// console.log(area);

const PI = 3.14;
let area = 0;

function circleArea(radius) {
    // code to complete our task here       
    const area = radius * radius * PI;   
    return area; 
  }

area = circleArea(3);
console.log(area);
  
let num1 = 100;
let num2 = '10';
let sum = num1 + num2;
console.log(sum);
sum = num1 + Number(num2);
console.log(sum);
sum = num1 + num2 *1;
console.log(sum);
sum = num1 + (num2 *1);
console.log(sum);

