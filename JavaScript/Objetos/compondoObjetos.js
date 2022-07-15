/*adicionar dependentes para cada um dos clientes cadastrados no sistema do banco, 
com o nome, idade e parentesco.*/

const cliente = {
    nome:'Eric',
    idade: 29,
    cpf: '56432165498',
    email: 'eric@email.com',
    fones:["55912345498", "5521988743124"] 
}

cliente.dependentes = {
    nome:"Sara",
    parentesco: "Filha",
    nasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)