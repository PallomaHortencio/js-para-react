// Métdos de Concatenação de Strings (tradicional)
const nome = "Palloma";
const sobrenome = "Martins";
let idade = 21;
let cidade = "São Paulo";
let estado = "SP";

/* Meu nome é Palloma Martins tenho 21 anos e atualmente moro na cidade de São Paulo, SP */

let mensagem = "Meu nome é <b class=\"teste\">"+nome+ " "+sobrenome+"</b>, tenho "+idade+" anos e atualmente moro na cidade de "+cidade+ " - "+estado+".";
console.log(mensagem);

console.log('======');

// Método template literal/string
let mensagem2 = `Meu nome é <b class="teste"> ${nome} ${sobrenome}</b>, tenho ${idade} anos e atualmente moro na cidade de ${cidade} - ${estado}`;

let mensagem3 = `Meu nome é <b class="teste"> ${nome.toUpperCase()} ${sobrenome}</b>, tenho ${idade} anos e atualmente moro na cidade de ${cidade} - ${estado}
Sou ${idade >= 18 ? 'maior' : 'menor'} de idade.`;

console.log(mensagem2);
console.log(mensagem3);

