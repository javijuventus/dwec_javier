function conversor() {


	var num;
	var opc = 0;

	opc = parseInt(prompt("En que base vas a introducir el numero:\n 1.- base2\n 2.- base8\n 3.- base10\n 4.- base16"));


	switch (opc) {

		case 1:
			
			num = parseInt(prompt("Introduce el numero a convertir"),2);
			
			calcular(num);


			break;
		case 2:

			
			num= parseInt(prompt("Introduce el numero a convertir"),8);
			
			calcular(num);
			


			break;
		case 3:
			
			num = parseInt(prompt("Introduce el numero a convertir"));
			
			calcular(num);


			break;
		case 4:
			
			num = parseInt(prompt("Introduce el numero a convertir"),16);
			
			calcular(num);

	}
}



function calcular (num) {
	alert("El numero: " + num + " en base 2 es :" + num.toString(2) + " en base 2");
	alert("El numero: " + num + " en base 2 es :" + num.toString(8) + " en base 8");
	alert("El numero: " + num + " en base 2 es :" + num.toString(10) + " en base 10");
	alert("El numero: " + num+ " en base 2 es :" + num.toString(16) + " en base 16");

}
