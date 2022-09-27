class Pessoa {
    // Propriedades
    nome = 'sem nome';
    genero = 'não informado';

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }

    mostraNome(){
        console.log( this.nome );
    }
}

class Aluno extends Pessoa {
    // Propriedades
    matricula;
    curso;

    // Métodos
    mostraDados(){
        console.log(this.matricula);
        console.log(this.curso);

        // métodos da super classe
        this.mostraNome();
        this.mostraGenero();
    }
}



/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Tiago';
umaPessoa.genero = 'masculino';

console.log(umaPessoa);

let outraPessoa = new Pessoa;
outraPessoa.nome = 'Mônica';

console.log(outraPessoa);


// Objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Palloma';
aluno.genero = 'feminino';
aluno.matricula = '123abc';
aluno.curso = 'JS para React';

//console.log(aluno);
aluno.mostraDados();
