package Calculadora_reto1.Operaciones;

public class Multiplicacion extends Operaciones {
    public Multiplicacion(float n1, float n2){
        super(n1, n2, 'x');
    }
    protected void operar() {
        super.res = super.n1 * super.n2;
    }
}
