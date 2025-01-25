console.log("functions.js file")

let name = "Michael"
let lastname = "scott"
console.log("Hello "+ name+ " "+ lastname+ ", welcome to the Javascript world!")

console.log(`hello ${name} ${lastname}, welcome to the Javascript world!`)
//function declaration
function sayhello(){
    let name = "Michael"
    console.log("hello cohort 55");
}
//call the function
sayhello();
sayhello();

function greet(name){
    console.log(`Hello ${name}, welcome!`)
}
greet("Gabriel");

function greet2(name1, name2, age){
console.log(`Hello ${name1} and ${name2}, welcome!`)
console.log(`${name1} and ${name2} are ${age} years old`)
}
greet2(`Roland`, `Joseph`, `26`)
//example 4
prompt(`What is your age?`)
function sayMyName(){
    let name2 = prompt("what is your name?")
    let age2 = prompt(`what is your age?`)
    console.log(`Your name is ${name2}`)
    console.log(`your age is ${age2} years old`)
}
sayMyName()
//example 5 wiht numbers
function add(num1=2, num2=4){
    console.log(`the addition betweem ${num1} and ${num2} = ${num1+num2}`);
    document.write(`the addition betweem ${num1} and ${num2} = ${num1+num2} <br>`)
}
add(4,67)
add(54.37, 68.24)
add(11)

// challenge no.1
/*
Challenge 3: Double the Number
Task:
Create a function called doubleNumber that takes one number as a parameter.
The function should return the number multiplied by 2.
Print the result when you call the function with different numbers.
*/
function doubleNumber(num1){
    console.log(`The number = ${num1 * 2}`)
}
doubleNumber(4)
doubleNumber(10)

function combineNames(firstName="unknown", lastname="unknown"){
    console.log(`Your name is ${firstName} ${lastname}.`)
}
combineNames()
combineNames("Gabriel", "Garcia")

//button click event
function login(){
    alert(`you have successfully logged in!`)
    console.log(`executing login function`)
}