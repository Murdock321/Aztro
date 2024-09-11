//package Calculadora_reto1.Operaciones;

public abstract class Operaciones{
    protected float n1;
    protected float n2;
    public Operaciones(float n1, float n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    public abstract void operar();
}