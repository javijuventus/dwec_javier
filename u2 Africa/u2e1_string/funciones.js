function persona(nom, ape1, ape2, ano) {

            this.nombre = nom;
            this.apellido1 = ape1;
            this.apellido2 = ape2;
            this.anio = ano;

        }

        function creaPersona() {
            
           
            nom = prompt("Introduzca su nombre");
            ape1 = prompt("Introduzca su primer apellido");

            ape2 = prompt("Introduzca su 2ndo apellido");
            ano = prompt("Introduzca el año");

            return persona1 = new persona(nom, ape1, ape2, ano);


        }
        