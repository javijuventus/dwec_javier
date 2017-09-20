/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto_sandkill;

import java.util.Scanner;

/**
 *
 * @author DAW214
 */
public class Proyecto_Sandkill {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {

        gestionSand();

    }

    public static void gestionSand() {
        Scanner teclado = new Scanner(System.in);
        int edad;
        String nom, ape, proc;
        int opc = 0;
        int n;

        Sandkill[] miSandkill = new Sandkill[10];

        do {

            System.out.println("1.-Añadir SandKill");
            System.out.println("2.-Eliminar Sandkill");
            System.out.println("3.-Modificar datos SandKill");
            System.out.println("4.-Mostrar todos los sandkiller");
            System.out.println("5.Salir");
            opc = teclado.nextInt();
            switch (opc) {

                case 1:

                    System.out.println("Cuantos sandkillers quieres añadir");
                    n = teclado.nextInt();

                    for (int i = 0; i < n; i++) {
                        System.out.println("Introduce un nombre");
                        nom = teclado.next();
                        System.out.println("Introduce un apellido");
                        ape = teclado.next();
                        System.out.println("Introduce la edad");
                        edad = teclado.nextInt();
                        System.out.println("Introduce el lugar de procedencia");
                        proc = teclado.next();

                        miSandkill[i] = new Sandkill(nom, ape, edad, proc);
                    }

                    break;
                case 2:
                    
                    
                case 3:
                    
                case 4:
                    for (int i = 0; i <= Sandkill.getContTotSand(); i++) {
                        miSandkill[i].verDatos();
                    }
                    break;
                case 5:
                    System.out.println("Saliendo");

            }
        } while (opc != 5);

    }

}
