function rectangulo() {
  let a = parseFloat(document.getElementById("base_rectangulo").value);
  let b = parseFloat(document.getElementById("altura_rectangulo").value);
  let area_total = a*b
  document.getElementById("area_rectangulo").value = area_total;

  let perimetro = (2*a)+(2*b)
  document.getElementById("perimetro_rectangulo").value = perimetro;

  let diagonal =  Math.sqrt((a**2) +(b**2))
  document.getElementById("diagonal_rectangulo").value = diagonal;
}