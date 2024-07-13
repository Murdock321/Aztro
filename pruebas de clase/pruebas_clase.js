
function validarPrimo(num){
  let i = 2;
  while(i<num){
    if(num % i == 0){
      return false;
    }
    i = i + 1;
  }
  return true;
}
/*
function forPrimo(num) {
  let c = 0;
  for (let i = 2 ; i <= num ; i++) {
    if (num % i == 0){
      c = c + 1;
      if (c > 1) {
        return false;
      }
    }
  }
}
console.log(forPrimo(2));
*/
for (let i = 0; i < 13; i++) {
  result = 7*i;
  console.log(`7 * ${i} = ${result}`)
}
