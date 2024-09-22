public class Division extends Operaciones{
  public Division(float n1, float n2, char op){
    super(n1, n2, op);
  }
  @Override
  public void operar(){
    if (op == '/'){
      if (n2 == 0){
        System.out.println("No se puede dividir por cero");
      } else{
        float res = n1/n2;
      System.out.println("Resultado de la division es "+res);
      }
    }
  }
}