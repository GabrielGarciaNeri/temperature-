function convertTemperatureRange(){
    let startValue = document.getElementById("startvalue").value
    let endValue = document.getElementById("endvalue").value
    let scale = document.getElementById("scale").value
    let p = document.getElementById("results")
    p.classList.remove("celsius","fahrenheit")
    let convert;
    p.innerHTML="";

    if(startValue > endValue){
        [startValue, endValue] = [endValue, startValue]
    }

    for(i=startValue; i<=endValue; i++){
        if(scale==="C"){
            convert = (i * 9/5) + 32
            p.classList.add("celsius")
            p.innerHTML+= i + " °C is "  + convert.toFixed(2) + " °F. &nbsp; &nbsp;"
        }else if(scale==="F"){
            convert = (i - 32) * 5/9
            p.classList.add("fahrenheit")
            p.innerHTML+= i + "°F is "  + convert.toFixed(2) + " °C." 
        }else {
            p.innerHTML="Invalid number input"
        }
    }

}
