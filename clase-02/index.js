/*
----------------- piedra 02 ----------------------
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";
var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            alert("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            alert( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            alert("el usuario GANO con " + op3)
        }else{
            alert("La CPU Gano!!")
        }
    }else if(user === cpu){
        alert("Empate")
    }
}; 

----------------- piedra 02 ----------------------
let opcion = parseInt(prompt("Elige piedra, papel o tijera"))
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";
if (opcion === "piedra"){
    alert ("El usuario GANO con piedra");
} else if (opcion === "papel") {
    alert ("El usuario GANO con papel");
} else if (opcion === "tijera") {
    alert ("El usuario GANO con tijera");
}
*/


/*
let nombre = prompt("Ingrese su nombre");

if ((nombre != "") && (nombre === "andres" || nombre === "ANDRES")) {
 //    TRUE                  TRUE                   FALSE
 alert("Hola andres");
} else {
    alert("Nombre no identificado");
}
*/

/*
let nombre = "camila";
let edad = 5;

console.log ("Hola " + nombre);
console.log (`Como estas? ${nombre}`);
console.log(`Hola ${nombre} tienes ${edad}`);
*/


//  PARTE 2 ---------------------

/* Ciclos e iteraciones */

/*
for (let i = 0; 1 < 10; i++){
    console.log("Hola");
}

for (let i = 10; i < 30; i = i + 5) {
    console.log("Cinco "+ i);
}
*/
/*
let numero = parseInt(prompt("ingrese un numero"));

for (let i = 0; i <= 10; i++){
    let multiplicacion = numero * i;
    let mensaje = `${numero}` * ${i} = ${multiplicacion};
    
    alert(mensaje);
}
*/

/*
// codigo para asignar # de lugar a cada usuario
for (let turno = 1; turno <= 10; turno++){
    let nombre = prompt("Ingrese su nombre para asignar el turno");
    let mensaje = `Turno #${turno} Nombre: ${nombre}`;
    alert(mensaje);
}
*/


for(let i = 0; i <= 10; i++){
    if(i === 5){
        break; // Break rompe el bucle cuando se cumple la condición
    }
    console.log(i);
}
console.log("Terminamos");