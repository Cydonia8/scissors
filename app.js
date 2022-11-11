"use strict"
const enviar = document.getElementById("enviar");
const info_nombre_jugador = document.getElementById("nombre-jugador");
// function registrarNombre(){
//     const nombre = document.getElementById("input-usu").value;
//     nombre_jugador = nombre;
// };
enviar.addEventListener("click", ()=>{
    const nombre_jugador = document.getElementById("input-usu").value;
    info_nombre_jugador.innerText=nombre_jugador;
});


