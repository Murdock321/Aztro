function promediop() {

  let a = parseFloat(document.getElementById("lap1").value);
  let b = parseFloat(document.getElementById("lap2").value);
  let c = parseFloat(document.getElementById("lap3").value);
  let d = parseFloat(document.getElementById("lap4").value);
  let e = parseFloat(document.getElementById("lap5").value);

  if (a != null && b != null && c != null && d != null && e != null){
    divisor = 5;
    alert("aqui")
  }

  let promedio = (a+b+c+d+e)/5;
  alert(promedio)
  document.getElementById("result").value = promedio.toFixed(3);
}

/* ejecutable en terminal

function promediop(a,b,c,d,e) {

  if (a != null && b != null && c != null && d != null && e != null){
    divisor = 5;
  }
  let promedio = (a+b+c+d+e)/divisor;
  console.log(`Promedio ${(promedio.toFixed(3))} segundos`)
}

console.log(promediop(5.789,2.2143523,3.546,4.7868,5.3))*/
