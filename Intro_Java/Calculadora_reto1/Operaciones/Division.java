package Calculadora_reto1.Operaciones;

import Calculadora_reto1.Operaciones.Operaciones;

public class Division extends Operaciones{
    public Division(float n1, float n2){
        super(n1, n2, '÷');
    }
    protected void operar() {
        super.res = n1 / n2;
    }
}
