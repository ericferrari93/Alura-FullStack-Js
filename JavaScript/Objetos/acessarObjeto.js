/* Acesse um objeto com informações de um cliente e exiba essas informações no console.*/

const cliente = {
    nome:'Eric',
    idade: 29,
    cpf: '56432165498',
    email: 'eric@email.com'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)
console.log(cliente.cpf.substring(0,3))