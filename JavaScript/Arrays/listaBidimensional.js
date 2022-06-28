/* Crie uma lista com os seguintes alunos:
- ‘João’, ‘Juliana’, ‘Caio’, ‘Ana’
Crie uma lista com as seguintes médias: 
- 10, 7, 9, 6
Crie uma lista com 2 dimensões com os nomes e as médias*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)