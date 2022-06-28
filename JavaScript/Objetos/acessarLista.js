/* acessar uma lista de números de telefone, de cada pessoa cadastrada no sistema do banco, 
cada cliente e temos que imprimir essa lista, e verificar se há mais de um número no cadastro, 
ou seja, se o cliente tiver mais de um número temos que imprimir os dois números.*/

const cliente = {
    nome:'Eric',
    idade: 29,
    cpf: '56432165498',
    email: 'eric@email.com',
    fones: ['4997-6548', '4991-4144'] 
}

cliente.fones.forEach(fone => console.log(fone))