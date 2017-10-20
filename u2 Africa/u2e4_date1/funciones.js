function solsticio() {

	var sabado = 0;

	for (var i = 2000; i<2100; i++) {
		
		var anio= new Date(i,6,21);


		if (anio.getDay() == 6) {



			sabado++;

		}


		
	}

	document.write("Es sabado: " + sabado+" veces");

}
