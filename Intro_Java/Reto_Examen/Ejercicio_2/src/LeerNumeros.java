import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class LeerNumeros{
  public float leer() {
    String rutaArchivo = ("Numeros.txt");
    Float numero = null;

    try (BufferedReader br = new BufferedReader(new FileReader(rutaArchivo))) {
      String linea1 = br.readLine();

      if(linea1 != null){
        try {
          numero = Float.parseFloat(linea1);
          System.out.println("El numero en el texto es: "+ numero);
        } catch (NumberFormatException e) {
          System.out.println("El numero no es valido");
        }
      }else {
        System.out.println("El archivo no posee numeros");
      }
    } catch (IOException e){
      System.out.println("Ocurrio un problema al leer el archivo"+e.getMessage());
    }
    return numero;
  }
}