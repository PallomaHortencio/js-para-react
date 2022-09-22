/* import pessoa from "./modules/pessoa.js"; */

/* Ao importar diversos recursos, separamos com vírgula e dentro de {}. Se necessário, você pode dar um 'apelido' usando as para o recurso*/
import { pessoa, curso as treinamento } from "./modules/pessoa.js"

console.log( pessoa.nome );
console.log( treinamento.titulo);
