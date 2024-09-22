public class Multiplicacion extends Operaciones {
  public Multiplicacion(float n1, float n2, char op){
    super(n1, n2, op);
  }
  @Override
  public void operar(){
    if (op == '*'){
      float res = n1 * n2;
      System.out.println("Resultado de la multiplicacion es "+res);
    }
  }
}