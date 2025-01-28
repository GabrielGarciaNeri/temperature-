console.log(`Conditions`)
//if-statement
//if(condition){ // y/n question?
// code to be executed if condition is true
//}

if(3>5){
    console.log(`this is true`)
}

let student1 = 45
let student2 = 45

if(student1=student2){
    console.log(`the values are the same`)
}

//if else statement
// if(condition) { y/n question?
//code to be executed if the condition is true
//else{
//code to be executed if the condition is false
//}

let isTrue = true

if(isTrue){
    console.log(`yes`)
}else{
    console.log(`No`)
}

//challenge 1
let Age = false

if(Age){
    console.log(`You're an Adult`)
    document.write(`You are an adult`)
}else{
    console.log(`you are underage`)
    document.write(`You are underage`)
}

//if-else if-else statement
// if(condition) { y/n question?
//code to be executed if the condition1 is true
//else if(condition2){
//code to be executed if the condition is false
//}

age =63
if(age<13){
    console.log(`You are a child`)
    document.write(`You are a child`)
}else if(age<21){
    console.log(`You are a teenager`)
    document.write(`You are a teenager`)
}else if(age<64){
    console.log(`You are an adult`)
    document.write(`You are an adult`)
}else{
    console.log(`You are a senior`)
    document.write(`You are a senior`)
}

//challenge 4
function ticket(){
    let age = prompt(`What is your age?`)
    if(age<12){
        console.log(`The movie ticket costs $5`)
        document.write(`The movie ticket costs $5`)
    }else if(age>18){
        console.log(`The movise ticket costs $10`)
        document.write(`The movise ticket costs $10`)
    }else{
        console.log(`The movie ticket cost$8`)
        document.write(`The movie ticket cost$8`)
    }
}
ticket();

//other solution

function ticketCalculator(){
    //your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    document.getElementById("results").innerHTML="Your ticket price is: $" + price;
}

// other solution

function ticketCalculator(){
    //your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    return "Your ticket price is: $" + price;
}
// challange 5
function weather(){
    //your code should be here
    let temperature = prompt("Enter the temperature in Celcius");
    let outfit;
    let p = document.getElementById("weather")
    p.classList.remove("hot","cold","warm")

    if(temperature<15){
        p.classList.add("cold")
        outfit= `its cold outside wear a jacket`;
    }else if(temperature>25){
        p.classList.add("hot")
        outfit= `its a bit hot wear a t-shirt`;
    }else{
        p.classList.add("warm")
        outfit=`its a little chilly, wear a sweater`;
    }
    p.innerHTML= outfit
}
