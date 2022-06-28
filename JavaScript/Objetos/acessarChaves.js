/* Consultar um objeto utilizando uma lsita de chaves relativas a iniformações de clientes 
geradada pelo sistema e printar o resultado na tela */

const cliente = {
    nome:'Eric',
    idade: 29,
    cpf: '56432165498',
    email: 'eric@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach(info => console.log(cliente[info]))

