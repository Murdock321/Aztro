public class Ppal {
  public static void main(String[] args){
    float n1 = 2; //Poner primer numero
    float n2 = 3; //Poner segundo numero
    char op = 'P'; // Poner el signo de la operacion (+, -, *, /)o la letra "P" si quiere potencia
    
    LeerNumeros leerNumeros = new LeerNumeros();
    leerNumeros.leer();
    Operaciones operaciones;
    operaciones = new Multiplicacion(n1, n2, op);
    operaciones.operar();
    operaciones = new Resta(n1, n2, op);
    operaciones.operar();
    operaciones = new Division(n1, n2, op);
    operaciones.operar();
    operaciones = new Suma(n1, n2, op);
    operaciones.operar();
    operaciones = new Potencia(n1, n2, op);
    operaciones.operar();
  }
}