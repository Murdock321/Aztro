public abstract class Operaciones {
  protected float n1;
  protected float n2;
  protected char op;
  public Operaciones(float n1, float n2, char op) {
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
  }
  public abstract void operar();
}