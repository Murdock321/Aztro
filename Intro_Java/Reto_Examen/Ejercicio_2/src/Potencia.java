public class Potencia extends Operaciones{
  public Potencia(float n1, float n2, char op){
    super(n1, n2, op);
  }
  @Override
  public void operar(){
    if(op == 'P'){
      double result = Math.pow(n1, n2);
      System.out.println("El Resultado de la potencia es "+result);
    }
  }
}
