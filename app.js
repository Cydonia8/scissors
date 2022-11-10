"use strict"
const enviar = document.getElementById("enviar");
const info_nombre_jugador = document.getElementById("nombre-jugador");
let nombre_jugador = document.getElementById("input-usu").value;;
// function registrarNombre(){
//     const nombre = document.getElementById("input-usu").value;
//     nombre_jugador = nombre;
// };
enviar.addEventListener("click", ()=>{
    nombre_jugador = document.getElementById("input-usu").value;
    info_nombre_jugador.innerText=nombre_jugador;
});
console.log(nombre_jugador);
