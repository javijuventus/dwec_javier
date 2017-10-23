var miVentana;
var texto = "";

function crearVentana() {



    miVentana = window.open("", "Mi Ventana", "width= 500,height=500,resizable=no,scrollbars=no,toolbar=no");

   
}


function Rojo() {

    texto += "<h1 style='color:red;'>ESTO ES UN TEXTO EN ROJO</h1>";
    document.getElementById("ventana").innerHTML = texto;
}

function Azul() {

    texto += "<h1 style='color:blue'>ESTO ES UN TEXTO EN AZUL</h1>";
    document.getElementById("ventana").innerHTML = texto;
}

function Amarillo() {

    texto += "<h1 style='color:yellow;'>ESTO ES UN TEXTO EN AMARILLO</h1>";
    document.getElementById("ventana").innerHTML = texto;
}

function Verde() {

    texto += "<h1 style='color:green;'>ESTO ES UN TEXTO EN VERDE</h1>";
    document.getElementById("ventana").innerHTML = texto;
}

function Morado() {

    texto += "<h1 style='color:purple;'>ESTO ES UN TEXTO EN MORADO</h1>";

    document.getElementById("ventana").innerHTML = texto;
}

function Rosa() {

    texto += "<h1 style='color:pink;'>ESTO ES UN TEXTO EN ROSA</h1>";
    document.getElementById("ventana").innerHTML = texto;
}

function cerrarVentana() {

    miVentana.close();

}

function moverVentana(a, b) {
    var y;
    var a;
    var b;
    var cadena;


    y = prompt("Introduce dos valores para mover la ventana separados por comas");

    cadena = y.split(",");
    a = parseInt(cadena[0]);
    b = parseInt(cadena[1]);
    miVentana.moveTo(a, b)

}

function imprimir() {


    miVentana.print();
}
