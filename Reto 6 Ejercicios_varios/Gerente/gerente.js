/*Un gerente de una tienda debe liquidar a sus empleados según el numero de días 
trabajados en el mes y horas extras. Además debe descontar la salud (4%) y la pensión (4%),
así como un deducible del 3% referente a alimentación. Valor por día trabajado: $43000,
Valor Hora Extra Diurna $6915, Nocturna $9681 y festivos $11064.*/ 

let hd=0;
let hn=0;
let df=0;

function liquidacion(d,hd,hn,df){

  //d= dias trabajados en el mes
  let valorDias = d*43000;
  //hd= horas diurna extra
  let tiempoExtraDia = hd*6915;
  //hn= horas nocturnas
  let tiempoExtraNoche = hn*9681;
  //df= dias festivos
  let diasFestivos = df*11064;
  //dias del mes
  
  let valorTotal = (valorDias+tiempoExtraDia+tiempoExtraNoche+diasFestivos);
  let descuento = valorTotal*0.11
  
  console.log(`El pago menos los descuentos es de $ ${valorTotal-descuento} pesos`)
  
}

console.log(liquidacion(25,5,2,1));