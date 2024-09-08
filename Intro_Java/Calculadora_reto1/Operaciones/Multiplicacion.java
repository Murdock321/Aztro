package Calculadora_reto1.Operaciones;

import Calculadora_reto1.Operaciones.Operaciones;

public class Multiplicacion extends Operaciones {
    public Multiplicacion(float n1, float n2){
        super(n1, n2, 'x');
    }
    protected void operar() {
        super.res = n1 * n2;
    }
}
