/* Formas de trabalhar com funções */

// Sintaxe tradicional
function nomeDaFuncao(){
  console.log('Função de sintaxe tradicional...');
}

// Sintaxe de função anônima
var outraFuncao = function(){
  console.log('Outra forma de declarar função...');
};

// Chamadas da função
nomeDaFuncao();
outraFuncao();

console.log("======");

/* Exercícios
1 -Crie uma função que receba dois valores numéricos,
calcule a diferença entre eles e retorne o resultado para uma variável externa.
2 - Mostre no controle o resultado */

/* let resultado;
console.log(resultado); */

function exericio( valor1, valor2){
  // Opção 1
  /* let resultado = valor1 - valor2;
  return resultado; */

  // Opção 1 [Refatorada]
  return valor1 - valor2;
  
  // Opção 2
  resultado = valor1 - valor2
}

/* exericio(100, 50); */
let resultado = exericio(70, 50);
console.log(resultado);

/* Arrow function (função "seta/flecha")
Possibilidades diversas sintaxes, e até simplificada */
const exemplo1 = () => {
  console.log('Uma arrow function qualquer...');
 };

 exemplo1();

 // Arrow function com parâmetro
 // const ola = (nome) => {
/*   const ola = nome => { // podemos omitir os parametros no caso de 1 param.
  console.log('Olá '+nome);
 }; */

 // podemos omitir as {} no caso de uma única instrução
 const ola = nome => console.log('Olá '+nome);

 ola('Palloma');

/*  const metade = (valor) => {
  return valor / 2;
 } */

 // Arrow function com retorno IMPLÍCITO
 const metade = valor => valor / 2;

 console.log( metade(100) );

 console.log('=========');

 /*  const multiplicaValores = (valor, fator) => {
  return valor * fator;
 };

 console.log( multiplicaValores(10, 3) );
 console.log( multiplicaValores(50, 2) ); */

 // Parâmetro com valor padrão (fator = 2)
 const multiplicaValores = (valor, fator) => valor * fator;

 console.log( multiplicaValores(10, 3) );
 console.log( multiplicaValores(50, 2) );


 /* Exercico
 Monte uma arrow function que receba um nome de pessoa e a converta para letras maiúsculas.
 
 - Chame a função 3x (passando nomes diferentes) e exibindo no console os resultados */

 const pessoas = nome => nome.toUpperCase();
 console.log(pessoas('Palloma'));
 console.log(pessoas('Igor'));
 console.log(pessoas('Renata'));

