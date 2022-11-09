"use strict"
const enviar = document.getElementById("enviar");
let nombre_jugador
enviar.addEventListener("onclick", ()=>{
    nombre_jugador = document.getElementById("input-usu").value;
    console.log(nombre_jugador);
})

