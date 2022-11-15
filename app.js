"use strict"

//Variables de control para el juego
let ronda = 0;
let puntos_jugador = 0;
let nombre_maquina = "HAl 9000";
let puntos_maquina = 0;
let opcion_jugador;
let opcion_maquina;
let nombre_jugador;

//Constantes que recogen elementos relevantes para los eventos
const array_opciones = ["piedra", "papel", "tijera"];
const enviar = document.getElementById("enviar");
const info_nombre_jugador = document.getElementById("nombre-jugador");
const cont_manos = document.getElementById("contenedor-manos");
const resultado_ronda = document.getElementById("resultado");
const ronda_actual = document.getElementById("ronda");
const total_jugador = document.getElementById("puntos-jugador");
const total_maquina = document.getElementById("puntos-maquina");
const nueva_partida = document.getElementById("nueva");
const botones = document.querySelectorAll("button");


//Evento para introducir el nombre del jugador
enviar.addEventListener("click", ()=>{
    nombre_jugador = document.getElementById("input-usu").value;
    info_nombre_jugador.innerText=nombre_jugador;
    document.getElementById("input-usu").setAttribute("disabled", true);    
    cont_manos.style.display="flex";
    total_maquina.previousElementSibling.innerText=nombre_maquina;
});


//Evento para cada ronda del juego, ejecutado al pulsar el usuario sobre una opción
cont_manos.addEventListener("click", (evento)=>{
    document.getElementById("enviar").setAttribute("disabled", true);
    const pulsado = evento.target.parentElement;
    opcion_jugador = pulsado.getAttribute("id");
    opcion_maquina = array_opciones[Math.floor(Math.random() * array_opciones.length)];
    let ganador_ronda;

    //Texto informativo sobre la elección de cada jugador
    resultado_ronda.previousElementSibling.innerText=`${nombre_jugador} escoge ${opcion_jugador}, ${nombre_maquina} escoge ${opcion_maquina}`;

    if(opcion_jugador == opcion_maquina){        
        resultado_ronda.innerText="¡Empate!";        
    }else{
        ganador_ronda = ganaRonda(opcion_maquina, opcion_jugador, nombre_jugador, nombre_maquina);
        resultado_ronda.innerText=`${ganador_ronda} gana la ronda`;
    }
    
    //En función del ganador se actualizan sus puntos y se suma ronda. Las rondas sólo cuentan cuando
    //alguno gana, no cuando hay empate
    if(ganador_ronda == nombre_jugador){
        puntos_jugador++;
        ronda++;
        total_jugador.innerText=puntos_jugador;
    }else if(ganador_ronda == nombre_maquina){
        ronda++
        puntos_maquina++;
        total_maquina.innerText=puntos_maquina;
    }    
    
    //Se actualiza el número de ronda en el texto 
    ronda_actual.innerText=`ronda ${ronda}`;

    //Cuando se llega a 5 rondas, se determina quién ha ganado, se habilita el botón de nueva partida
    //y desaparecen los botones
    if(ronda == 5){
        let ganador_juego = finJuego(puntos_jugador, puntos_maquina, nombre_jugador, nombre_maquina);
        resultado_ronda.nextElementSibling.innerText=`¡El ganador es ${ganador_juego}!`;
        nueva_partida.style.display="inline-block";
        botones.forEach((boton)=>{
            boton.hidden=true;
        })

    }   
})

//Evento en el caso de que se seleccione el botón de nueva partida. Se reinician todas las variables de
//control, incluidos los textos, desaparece el botón de nueva partida y se vuelven a mostrar los botones
//de piedra, papel y tijera
nueva_partida.addEventListener("click", ()=>{
    nueva_partida.style.display="none";
    ronda = 0;
    puntos_jugador = 0;
    puntos_maquina = 0;
    total_jugador.innerText=puntos_jugador;
    total_maquina.innerText=puntos_maquina;
    ronda_actual.innerText=ronda;
    resultado_ronda.innerText="";
    resultado_ronda.nextElementSibling.innerText="";
    resultado_ronda.previousElementSibling.innerText="";
    botones.forEach((boton)=>{
        boton.hidden=false;
    })
})

//Funciona que determina cuándo termina el juego y quién gana
function finJuego(puntos_jug, puntos_maq, nombre_jug, nombre_maq){
    let ganador;
        if(puntos_jug > puntos_maq){
            ganador = nombre_jug;
        }else{
            ganador = nombre_maq;
        }
    return ganador;
}

//Funcion que, en caso de no haber empate, determina el ganador de la ronda
function ganaRonda(opcion_maq, opcion_jug, nom_jug, nom_maq){
    let ganador_ronda;
    if((opcion_jug == "tijera" && opcion_maq == "papel") || (opcion_jug == "piedra" && opcion_maq == "tijera") || (opcion_jug == "papel" && opcion_maq == "piedra")){
        ganador_ronda = nom_jug;
    }else if((opcion_maq == "tijera" && opcion_jug == "papel") || (opcion_maq == "piedra" && opcion_jug == "tijera") || (opcion_maq == "papel" && opcion_jug == "piedra")){
        ganador_ronda = nom_maq;
    }
    return ganador_ronda;
}