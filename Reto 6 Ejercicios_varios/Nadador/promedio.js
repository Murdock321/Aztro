function promediop() {
  let a = parseFloat(document.getElementById("base_rectangulo").value);
  let b = parseFloat(document.getElementById("altura_rectangulo").value);
  let c = parseFloat(document.getElementById("altura_rectangulo").value);
  let d = parseFloat(document.getElementById("altura_rectangulo").value);
  let e = parseFloat(document.getElementById("altura_rectangulo").value);

  if (a != 0 && b != 0 && c != 0 && d != 0 && e != 0){
    divisor = 5;
  }
  else if (a == 0 || b == 0 || c == 0 || d == 0 || e == 0){
    window.alert("Te ha faltado alguna informacion");
  }
  else {
    divisor="Aun no has dado laps";
  }

  let promedio = (a+b+c+d+e)/5;
  document.getElementById("result").value = promedio;
  document.getElementById("result").value = promedio;
}