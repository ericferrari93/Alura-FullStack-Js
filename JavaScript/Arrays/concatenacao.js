/* Haverá uma palestra sobre padrões de projetos para as alunas das salas JavaScript e Python.
Junte ambas as salas em uma unica lista que exiba toda as alunas.*/

const salaDePython = ['Melissa', 'Helena', 'Rodrigo']
const salaDeJavascript = ['Ju', 'Leo', 'Raquel']
const salaUnificadas = salaDePython.concat(salaDeJavascript)

console.log(salaUnificadas)