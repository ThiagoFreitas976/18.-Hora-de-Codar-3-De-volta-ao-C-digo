
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}


function main() {
  var alunosAprovados = 0;

  do {
     
      var nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
      var nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));

     
      var media = calcularMedia(nota1, nota2);

      
      if (media >= 9.5) {
          alunosAprovados++;
      }

     
      document.write("Média final do aluno: ", " ", media, " ");

      
      var resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
  } while (resposta === "S");

 
  document.write("Quantidade de alunos aprovados: ", alunosAprovados);
}


main();
