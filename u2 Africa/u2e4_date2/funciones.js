function fechaCorta(d, m, a) {

    var fechaCorta = new Date();

    fechaCorta.setDate(d);
    fechaCorta.setMonth(m);
    fechaCorta.setFullYear(a);

    return document.write("fechaCorta: " + d + "/" + m + "/" + a + "<br>");
}

function fechaLarga(d, m, a) {

    var fechaLarga = new Date();

    var s = new Array("Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
    var mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

    fechaLarga.setDate(d);
    fechaLarga.setMonth(m);
    fechaLarga.setFullYear(a);
    s[fechaLarga.getDay()];
    mes[fechaLarga.getMonth()];


    return document.write("fechaLarga: " + s[fechaLarga.getDay()] + ", " + d + " de " + mes[fechaLarga.getMonth()] + " de " + a + "<br>");
}




function fechaIngles(d, m, a) {

    var fechaIngles = new Date();

    var s = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var mes = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    fechaIngles.setDate(d);
    fechaIngles.setMonth(m);
    fechaIngles.setFullYear(a);
    s[fechaIngles.getDay()];
    mes[fechaIngles.getMonth()];

    return document.write("fechaIngles: " + s[fechaIngles.getDay()] + ", " + mes[fechaIngles.getMonth()] + " " + d + ", " + a + "<br>");
}


function milis(m) {
    var dms = new Date(m);

    return document.write("Fecha en milisegundos: " + dms + "<br>");

}

function horaCorta() {

    var horaCorta = new Date();



    return document.write("Hora Corta: " + horaCorta.getHours() + ":" + horaCorta.getMinutes() + "<br>");

}

function horaLarga() {

    var horaLarga = new Date();



    return document.write("Hora Larga: " + horaLarga.getHours() + ":" + horaLarga.getMinutes() + ":" + horaLarga.getSeconds() + "<br>");

}

function horaAMPM() {

    var horaAMPM = new Date();


    var hh = horaAMPM.getHours();
    var mm = horaAMPM.getMinutes();
    var ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12;
    hh = hh ? hh : 12; 
    mm = mm < 10 ? '0' + mm : mm;
    var strHora = hh + ':' + mm + ' ' + ampm;
    return document.write("Hora AM/PM: "+strHora);

}
