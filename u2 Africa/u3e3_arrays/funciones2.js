function insertPrin(array, texto) {

    array.unshift(texto);

}

function insertFin(array, texto) {

    array.push(texto);

}

function borrartPrin(array, texto) {

    array.shift(texto);

}

function borrarFin(array, texto) {

    array.pop(texto);

}

function lista(array) {

    return array.toString();
}

function listaOrdenada(array){
    
    
    return array.sort();
}

function buscaNom(array, s){
    
   return array.indexOf(S);
}

function buscaPos(array,n){
    
   return array.indexOf(array[n]);
}