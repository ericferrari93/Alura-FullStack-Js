/* Calcule a média entre as seguintes notas usando o ForEach:
10, 6.5, 8 e 7.5 */

const notas = [10, 6.5, 8, 7.5]

let somaDeNotas = 0

notas.forEach( nota => {
    somaDeNotas += nota
})

let media = somaDeNotas / notas.length

console.log(media)