function temp(){
    let temp = document.getElementById("temp").value
    let scale = document.getElementById("scale").value
    let p = document.getElementById("temperature")
    p.classList.remove("celsius","fahrenheit")
    let convert;

    if(scale=="C"){
        convert = (temp * 9/5) + 32
        p.classList.add("celsius")
        p.innerHTML="The temperature is " + convert
    }else if(scale=="F"){
        convert = (temp - 32) * 5/9
        p.classList.add("fahrenheit")
        p.innerHTML="The temperature is " + convert
    }else {
        p.innerHTML="Invalid number input"
    }

}

