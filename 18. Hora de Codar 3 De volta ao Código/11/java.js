var dentroIntervalo = 0;
var foraIntervalo = 0;


for (var i = 0; i < 10; i++) {

    var valor = parseFloat(prompt("Digite o valor " + (i + 1) + ":"));

    if (valor >= 24 && valor <= 42) {
        dentroIntervalo++; 
    } else {
        foraIntervalo++; 
    }
}


console.log("Valores dentro do intervalo (24 e 42):", dentroIntervalo);
console.log("Valores fora do intervalo (fora de 24 e 42):", foraIntervalo);
