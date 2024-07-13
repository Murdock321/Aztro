/*Un Medico desea utilizar un sitio web que le muestre a un persona su estado de salud,
dependiendo del índice de masa corporal a partir de su peso y altura, al mismo tiempo
mostrar en que rango de encuentra, delgado, normal, obeso, etc. (ver la tabla).
ANEXO: utiliza condicionales para determinar el rango en el cual se encuentra la
persona una vez calcules su Índice de Masa Corporal (IMC), recuerda de debes inicialmente
calcular el IMC y a través de su valor determinar con condicionales en que rango se
encuentra el paciente.  Adjunto encontraras la formula para hacer el calculo y las
dos tablas de rangos vistas en clase, puedes usar cualquiera de las dos.*/

function imc(p,a){

  let calculo = p * (a**2);
  
  if (calculo < 18.5){
    console.log("Bajo peso");
  }else if(18.5 <= calculo < 24.9){
    console.log("Peso Normal");
  }else if(25 < calculo < 29.9){
    console.log("Sobrepeso");
  }else{
    console.log("Obesidad");
  }
}

console.log(imc(78,1.83));