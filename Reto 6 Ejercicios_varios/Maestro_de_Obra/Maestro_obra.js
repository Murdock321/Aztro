//un ladrillo comun es de 24cmx12cm cara frontal

function medidasDeParedMetros(a,b){
  let areaPared = (a * b);

  /*un ladrillo comun es de 24cmx12cm cara frontal
  el area del ladrillo en m es 0.24m x 0.12m = 0.003*/

  let calculo = areaPared/0.03; //debe de dar la cantidad de ladrillos a usar
  console.log(`Se tiene una pared de ${(areaPared)} metros cuadrados y se necesitan ${Math.ceil(calculo)} ladrillos`)
}

console.log(medidasDeParedMetros(8,20));
