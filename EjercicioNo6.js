const prompt = require("prompt-sync")();

let num= parseFloat(prompt("Ingrese un numero: "));

for(let i=1; i<=10; i++){
    console.log(`${i} x ${num} = ${i * num}`);
    //console.log(i + "*" + num + "=" + i* num);
}

