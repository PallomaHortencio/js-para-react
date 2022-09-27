/* Usando o ... como operador spread (espalhar) */

/* Na prática, copiamos o conteúdo de um array (bandas) para dentro de outro (maisBandas) 

IMUTABILIDADE (não muda)*/
const bandas = ['a', 'b', 'c', 'd', 'e'];
const maisBandas = [...bandas, 'f', 'g', 'h'];

console.log(maisBandas);

console.log('===========');

/* Spread com objeto */

const dados = {
    nome: 'Palloma',
    idade: 21
};

const novosDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP',
    idade: 25 // sobrescrevendo o valor somente da propriedade idade
}


console.log(novosDados); // novo objeto contendo os dados do anterior também
console.log('Idade atualizada: '+novosDados.idade);
console.log(dados);


