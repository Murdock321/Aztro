//package Calculadora_reto1.Operaciones;

public class Division extends Operaciones{
    public Division(float n1, float n2){
        super(n1, n2);
    }
    @Override
    public void operar(){
        float res = n1 / n2;
        System.out.println("Resultado de la division "+res);
    }
}
