package Calculadora_reto1.Operaciones;

public abstract class Operaciones{
    protected float n1;
    protected float n2;
    protected float res;
    protected char op;
    protected abstract void operar();

    public Operaciones(float n1, float n2, char op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
        this.operar();
    }

    public void getRes(){
        System.out.println(this.n1+" "+this.op+" "+this.n2+" = "+this.res);
    }
}