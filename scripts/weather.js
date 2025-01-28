function temperature(){
    let num1 = prompt("Enter temperature in Celcius")
    let Fahrenheit = (num1 * 9)/5 +32
    console.log(`The conversion of Celcius ${num1} to Fahrenheit is ${Fahrenheit}`)
    document.getElementById("result").innerHTML=`<p>The conversion of Celcius ${num1} to Fahrenheit is ${Fahrenheit}</p>`;
}


