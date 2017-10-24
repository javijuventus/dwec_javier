

        function Sandkill(nombre, edad, especialidad, comp) {

            this.nombre = nombre;
            this.edad = edad;
            this.especialidad = especialidad;
            this.comp = comp;

            this.getNombre = function() {

                return this.nombre;
            }
            this.getEdad = function() {

                return this.edad;
            }
            this.getEspec = function() {

                if (this.especialidad == 1) {
                    return "Sistemas";

                } else if (this.especialidad == 2) {
                    return "Web";

                } else if (this.especialidad == 3) {

                    return "Multiplataforma";
                }
                return this.especialidad;
            }
            
            this.mostrar = function(){
                
                return this.getNombre()+" "+this.getEdad()+" "+this.getEspec()+" "+this.getNomComp();

                
            }
            this.getComp = function() {

                
                return this.Comp;


            }
            this.getNomComp = function() {

                

                return comp.getNombre();


            }

            this.setNombre = function(nombre) {

                this.nombre = nombre;
            }
            this.setEdad = function(edad) {

                this.edad = edad;
            }
            this.setEspecialidad = function(n) {

                this.especialidad = n;
            }

            this.setEspecialidadNombre = function(s) {

                if (s == "Sistemas") {

                    this.especialidad = 1;



                } else if (s == "Web") {

                    this.especialidad = 2;

                } else if (s == "Multiplataforma") {

                    this.especialidad = 3;

                }
            }

            this.setComp = function(comp) {

                this.comp = comp;
            }
            
            



        }