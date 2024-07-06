function circulo() {
  let r = parseFloat(document.getElementById("radio_circulo").value);
  
  let circulo1 = parseFloat(Math.PI*r**2);
  document.getElementById('area_circulo').value = circulo1;

  let circulo2 = parseFloat(Math.PI*2*r);
  document.getElementById('perimetro_circulo').value = circulo2;
}