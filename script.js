const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp; //variable to store the temperature value

// Function to convert temperature
function convert(){
    if(toFahrenheit.checked){ // Check if the Fahrenheit radio button is selected
        temp=parseInt(textBox.value);
        temp=(temp * 9/5) + 32;
        result.textContent=temp.toFixed(1)+ "°F";
    }
    else if(toCelsius.checked){ // Check if the Celsius radio button is selected
        temp=parseInt(textBox.value);
        temp =(temp-32)* 5/9;
        result.textContent=temp.toFixed(2) +"°C";
    }
    else{
        result.textContent="Select a unit"; //If no radio button is selected, display this message
    }
}

