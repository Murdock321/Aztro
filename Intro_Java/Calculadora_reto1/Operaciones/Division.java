package Calculadora_reto1.Operaciones;

public class Division extends Operaciones{
    public Division(float n1, float n2){
        super(n1, n2, '÷');
    }
    protected void operar() {
        super.res = super.n1 / super.n2;
    }
}
