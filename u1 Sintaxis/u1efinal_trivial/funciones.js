


/**
*@param p  Por este parametro se lanza la pregunta al usuario
*@param r En este parametro se guarda la respuesta correcta

*/
function pregunta(p,r){
	var y;

	
y = prompt(p).toLowerCase;
						if (y == r) {

							aciertos++;
						} else {
							fallos++;
						}
						alert("aciertos: " + aciertos);
						alert("fallos: " + fallos);	
	
}

						