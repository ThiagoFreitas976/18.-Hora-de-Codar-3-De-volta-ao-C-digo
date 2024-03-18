var N = parseInt(prompt("Digite um número para imprimir as tabuadas de 1 até esse número:"));

if (!isNaN(N) && N > 0) {

    for (var i = 1; i <= N; i++) {
        console.log("Tabuada de", i + ":");

      
        for (var j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }

        console.log("");
    }
} else {
    console.log("Por favor, insira um número válido maior que zero.");
}
