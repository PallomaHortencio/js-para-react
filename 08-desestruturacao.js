/* Desestruturação (destructuring)
Extrair dados facilmente de um array ou objeto e armazena-los em variaveis/constantes */

/* Usando desestruturação em arrays */
const [a, b] = ['Eu', 'Linda'];
console.log(a);
console.log(b);

const alunos = ['Panda', 'Golfinnho', 'Baleia'];
const [panda, golfinho, baleia] = alunos;
console.log(panda);
console.log(golfinho);
console.log(baleia);

const unidades = ['Penha', 'Tatuape', 'Itaquera', 'São Miguel'];
const [penha, tatuape, , sm] = unidades; // pulando Itaquera
console.log(penha);
console.log(tatuape);
console.log(sm);

// Usando desestruturação em objetos
const {nome, cidade} = {nome: 'Palloma', idade: 21, cidade: 'Castelo da Barbie'};
console.log(nome);
console.log(cidade);

const dados = {
    nome: 'Palloma',
    curso: 'Front-End',
    nascimento: '20/03/2001'
};


/* Definindo um alias (apelido) para nome */
const {nome: aluno, curso} = dados;
console.log(aluno);
console.log(curso);