const prompt= require ("prompt-sync") ();

let num = parseInt(prompt("ingrese un numero: "));
let suma = 0

while( num >= 0 ){
    suma += num
     num = parseInt(prompt("ingrese otro número: "));
}

console.log(suma);
