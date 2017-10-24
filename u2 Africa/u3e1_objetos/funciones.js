    function Sandkill(nom, edad, espec) {

        this.nombre = nom;
        this.edad = edad;
        this.especialidad = espec;
        this.nombreCompleto = function () {

            return this.nombre + " " + this.edad + " " + this.especialidad;


        }

    }

    function recorreObjetos(Sandkill) {


        for (x in Sandkill) {

            return alert(Sandkill[x]);


        }

    }
