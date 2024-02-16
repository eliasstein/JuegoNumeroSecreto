let numeroSecreto;
let numeroIntentos;
let listaNumerosSorteados=[];
let numeroMaximo=10;
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(numeroSecreto);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",
                            `Acertaste el numero en ${numeroIntentos} ${numeroIntentos==1?"intento":"intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
}   
    else{
        if (numeroUsuario > numeroSecreto)
            asignarTextoElemento("p","El numero secreto es menor");
        else
            asignarTextoElemento("p","El numero secreto es mayor");
        }
    numeroIntentos++
    limpiarCaja();
    return;
}

function limpiarCaja() {    //Limpia el inputbox
    let valorCaja = document.querySelector("#valorUsuario")     //Find by id
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta en la lista.
    //console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento("Ya se sortearon todos los numeros posibles")
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();  //recursividad bucle llamandose a si misma
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    numeroIntentos=1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje intervalo de numeros
    //Generar el numero aleatorio
    //Deshabilitar le boton del nuevo juego
    condicionesIniciales();
    //inicializar el numero de intentos
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
