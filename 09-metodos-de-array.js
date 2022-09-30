/* map (mapeia, transformar em outra coisa)
Passa pelos elementos de um array e realiza operações neles através de uma função (callback) gerando um novo array */

const numeros = [10, 20, 30, 40, 50];

/* const numerosDobrados = numeros.map( function(numero){
    return numero * 2;
} ); */

const numerosDobrados = numeros.map(numero => numero * 2); // opção padrão
/* const numerosDobrados = numeros.map(dobra);

function dobra(valor) {
    return valor * 2;
} */

console.log(numeros); //original
console.log(numerosDobrados); // transformado/mapeado

/* Exercício */
const letras = ['palloma', 'igor', 'natalia', 'leticia'];
const letrasMaiusculas = letras.map(letra => letra.toUpperCase());

console.log(letras);
console.log(letrasMaiusculas);

console.log('==========');

/* filter (filtra/remove)
retorna um array de valores de acordo com o resultado do filtro aplicado */

const vendas = [1500, 2000, 10_000, 500];
const meta = 1000;
const vendasAcimaDaMeta = vendas.filter( venda => venda > meta );

console.log(vendas);
console.log(vendasAcimaDaMeta);

const alunos = ['Palloma', 'Gabriel', 'Rafael', 'Antonio', 'Gabriel Luna'];

const resultados = alunos.filter(aluno => {
    /* if(aluno.charAt(0) === 'G'){   metodo mais antigo*/
    if(aluno.startsWith('G')){ // metodo mias didatico
        return aluno;
    }
});

const result = alunos.filter(aluno => aluno.startsWith('M') ?? aluno);

console.log(alunos);
console.log(resultados);
console.log(result);

const cursos = [
    { id: 1, titulo: 'HTML5 e CSS', categoria: 'Front-End', preco: 500},
    { id: 2, titulo: 'JS e React', categoria: 'Front-End', preco: 800},
    { id: 3, titulo: 'React Native', categoria: 'Mobile', preco: 1000},
    { id: 4, titulo: 'Photoshop', categoria: 'Design', preco: 400},
    { id: 5, titulo: 'PHP e MySQL', categoria: 'Back-End', preco: 600},
    { id: 6, titulo: 'Flutter', categoria: 'Mobile', preco: 900},
];

const cursosFront = cursos.filter(curso => curso.categoria === 'Front-End');
const cursosBack = cursos.filter(curso => curso.categoria === 'Back-End');

console.log(cursos);
console.log(cursosFront);
console.log(cursosBack);

/* const titulos = cursos.map(curso => curso.titulo);
console.log(titulos); */

console.log('==========');

const titulosFront = cursos
                    .filter(curso => curso.categoria == 'Front-End')
                    .map(curso => curso.titulo);

console.log(titulosFront);

console.log('==========');

console.log('==== REDUCE ====');

/* reduce (reduzir a um unico valor/resultado) */
const valores = [10, 50, 2000, 5, 25];

const soma = valores.reduce((acumulador, valor) => {
    return acumulador + valor
}, 0); // 0 é um valor inicial para o reduce, para partir de algum valor

console.log(soma);

console.log('==== FILTER e REDUCE ====');

const somaCursosMobile = cursos 
                        .filter(curso => curso.categoria == 'Mobile')
                        .reduce(( acumulador, curso) => {
                        return acumulador + curso.preco
                        }, 0);

console.log(somaCursosMobile);