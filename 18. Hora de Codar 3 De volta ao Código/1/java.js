var numero1 = prompt("Por favor, insira um número de sua preferência:");
var numero2 = prompt("Por favor, insira um número de sua preferência:");
var resultado = (numero1/numero2);

if (numero2>0) {
  window.alert(resultado);
}

while (numero2<=0) {
  var numero2 = prompt("Por favor, insira um número que não seja 0 ou negativo.");
}

var resultado = (numero1/numero2);

window.alert(resultado);