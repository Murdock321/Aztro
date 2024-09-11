//package Calculadora_reto1.Operaciones;

public class Multiplicacion extends Operaciones {
    public Multiplicacion(float n1, float n2){
        super(n1, n2);
    }
    @Override
    public void operar(){
        float res = n1 * n2;
        System.out.println("Resultado de la multiplicacion es "+res);
    }
}
