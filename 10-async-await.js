import fetch from 'node-fetch';

/* Trabalhando com comunicação assíncrona (ajax) */
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(error => console.log('Erro na operação: '+error.errno));

    /* Sintaxe usando função e async/await */
async function acessaApi(){ // função async se usa com ajax
    try {
    const resposta = await fetch('https://jsonplaceholder.typicoder.com/todos/1'); // await só funciona com função assincrona
    const dados = await resposta.json();
    console.log(dados);
    } catch (error){
        console.log('Deu ruim: '+error.errno);
    }
}

acessaApi();