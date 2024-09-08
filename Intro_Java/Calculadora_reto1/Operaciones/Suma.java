package Calculadora_reto1.Operaciones;

import Calculadora_reto1.Operaciones.Operaciones;

public class Suma extends Operaciones{
    public Suma(float n1, float n2){
        super(n1, n2, '+');
    }
    protected void operar() {
        super.res = super.n1 + super.n2;
    }
}