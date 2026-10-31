const prompt = require("prompt-sync")();

let numb= parseFloat(prompt("Ingrese el numero: "));

if(numb == 0){
    console.log("neutro");
} else if (numb > 0){
    console.log("positivo");
} else if (numb < 0) {
    console.log("negativo");
} else{
    console.log("ingresaste algo que no es un numero");
    
}