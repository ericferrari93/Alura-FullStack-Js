/* Crie uma lista de chamada com os nomes: João, Ana, Caio, Lara, Marjorie e Léo.
pórem Ane e Caio mudaram de escola e o Rodrigo entrou na sala, atualize a lista*/

const listaDeChamada = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo']

listaDeChamada.splice(1, 2, 'Rodrigo')

console.log(`Lista de Chamada: ${listaDeChamada}`)