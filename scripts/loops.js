document.write(`
    <p> 2 x 0 = 0 </p>
    <p> 2 x 1 = 2 </p>
    <p> 2 x 2 = 4 </p>
    <p> 2 x 3 = 6 </p>
    <p> 2 x 4 = 8 </p>
    <p> 2 x 5 = 10 </p>
    <p> 2 x 6 = 12 </p>
    <p> 2 x 7 = 14 </p>
    `)
for (let i=0; i<4; i++){
    document.write("My for is working")
}
for (let i=0; i<=10; i++){
    document.write(`<p>2 x ${i} = ${2*i} </p>`)
}

//challenge 1
//create a function that i get a num from the front and display from on the console the multiplication table

function mult(){
    let num1 = prompt("Enter number value")
    let result = 0;
    


    for (i=0; i<=10; i++){
        result = num1*i
        
        document.getElementById("Result").innerHTML+= `<p>${num1} x ${i} = ${result}</p>`
    }
}

function challenge(){
    for(i=1; i<=100; i++){
        if(i==50){ //are you the 50?
            //if yes display
            console.log("I found it!")//display i found it
        }else{ //if no display
            console.log(i)
        }
    }
}
//arrays
let myArray = [3,2,4,3,1];
let myArray2 = ["Gabe", true, 18,9,0];

console.table(myArray)
console.table(myArray2)

myArray2[0] = "Hola"
console.table(myArray2)
console.table(myArray[0])

let students = ["James", "cassius", "Gabe", "justin","Robert", "Roland", "Kyle"]
let age = [33,44,56,78,90,22,12]
for(let i=0; i<students.length; i++){
    document.getElementById("studentlist").innerHTML+=`
    <div class="student">
        <p>${students[i]}</p>
        <p>${age[i]}</p>
    </div>`
}
