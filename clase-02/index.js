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

