function trapecio(a,b,h){ //A=(a+b)h/2
  //a=Area mayor
  //b=Area menor
  //h=altura

  let calculo = ((a*b)*h)/2;
  let litros = calculo*1.5;
  console.log(`Area de ${(calculo.toFixed(2))} metros cuadrados`);
  console.log(`Se necesita ${(litros.toFixed(2))} litros para cubrir el area completa`);
} 


console.log(trapecio(2,5,7));