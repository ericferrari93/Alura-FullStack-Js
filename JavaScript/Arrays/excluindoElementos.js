// Temos 5 notas: 10, 7, 8, 5, 10 para corrigir , remova a última nota e faça o calculo da media correto

const notas = [10, 7, 8, 5, 10]
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}`)