/* console.log('Beleza!'); */

/* Jeito antigo de usar variáveis */
/* var meuNome = 'Palloma'; */

/* Jeito moderno de usar variáveis */
//let meuNome = 'Palloma';

const meuNome = 'Palloma'; // const obriga a inicialização

console.log(meuNome);

console.log('============');

let idade = 20;
let mensagem; // escopo GLOBAL
if (idade >= 18){
    /* let */ mensagem = 'É maior de idade!';
} else {
    /* let */ mensagem = 'É menor de idade!';
}
console.log(mensagem);





/* let e const: possuem escopo de BLOCO quando declarados dentro de blocos (condicionais, loops), e escopo GLOBAL quando declaramos fora dos blocos.
Uma variável/constante em escopo de BLOCO só existe e é acessivel DENTRO de bloco em que foi criada*/