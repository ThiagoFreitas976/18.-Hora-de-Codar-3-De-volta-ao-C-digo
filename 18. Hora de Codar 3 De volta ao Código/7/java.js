
function nota1(){
var n1 = parseFloat(prompt("Digite a primeira nota:"))
if(n1>10){
  alert("Por favor, insira um número válido!")
  nota1();
}
if(n1<0){
  alert("Por favor, insira um número válido!")
  nota1();
}else {
  return n1; 

}
}

function nota2(){
var n2 = parseFloat(prompt("Digite a segunda nota:"))
if(n2>10){
  alert("Por favor, insira um número válido!")
  nota2();
}
if(n2<0){
  alert("Por favor, insira um número válido!")
  nota2();
}else {
  return n2; 

}
}

function nota3(){
var n3 = parseFloat(prompt("Digite a terceira nota:"))
if(n3>10){
  alert("Por favor, insira um número válido!")
  nota3();
}
if(n3<0){
  alert("Por favor, insira um número válido!")
  nota3();

}else {
  return n3; 

}
}

function nota4(){
  var n4 = parseFloat(prompt("Digite a quarta nota:"))
  if(n4>10){
  alert("Por favor, insira um número válido!")
  nota4();
  }
  if(n4<0){
    alert("Por favor, insira um número válido!")
    nota4();
  }else {
    return n4; 
  
}
}
function nota5(){
  var n5 = parseFloat(prompt("Digite a quinta nota:"))
  if(n5>10){
  alert("Por favor, insira um número válido!")
  nota5();
  }
  if(n5<0){
    alert("Por favor, insira um número válido!")
    nota5();
  } else {
    return n5; // Retorna a nota se for válida
}
}
function nota6(){
  var n6 = parseFloat(prompt("Digite a sexta nota:"))
  if(n6>10){
  alert("Por favor, insira um número válido!")
  nota6();
  }
  if(n6<0){
    alert("Por favor, insira um número válido!")
    return nota6();
  } else {
    return n6; 
  
}
}
var primeiranota = nota1();
var segundanota = nota2();
var terceiranota = nota3();
var quartanota = nota4();
var quintaNota = nota5();
var sextaNota = nota6();

// Soma as notas
var somaNotas = ((quintaNota + sextaNota + primeiranota + segundanota + terceiranota + quartanota)/6);

// Exibe a soma das notas
alert("A média das notas é: " + somaNotas);


