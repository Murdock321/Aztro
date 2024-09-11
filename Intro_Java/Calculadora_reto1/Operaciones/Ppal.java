//package Calculadora_reto1.Operaciones;

public class Ppal {
    public static void main(String[] args){
        float n1 = 2;
        float n2 = 7;
        
        Operaciones operaciones = null;
        operaciones = new Multiplicacion(n1, n2);
        operaciones.operar();
        operaciones = new Resta(n1, n2);
        operaciones.operar();
        operaciones = new Division(n1, n2);
        operaciones.operar();
        operaciones = new Suma(n1, n2);
        operaciones.operar();
    }

}
