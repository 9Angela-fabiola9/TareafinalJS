const prompt = require("prompt-sync")();

let numUsuario= parseFloat(prompt("Ingrese un numero: "));

if (numUsuario %5 == 0 && numUsuario %3 == 0){
    console.log("es divisible entre 5 y 3");
}else if(numUsuario %5 === 0){
    console.log("es divisible entre 5");
}else if(numUsuario %3 ===0){
    console.log("es divisible entre 3");
}else{
    console.log("no es divisible entre 5 ni 3");
}
