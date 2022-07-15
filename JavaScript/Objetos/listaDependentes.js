/*verificar a melhor forma de agregar informação de um novo dependente ao objeto cliente.*/

const cliente = {
    nome:'Eric',
    idade: 29,
    cpf: '56432165498',
    email: 'eric@email.com',
    fones:["55912345498", "5521988743124"] ,
    dependentes: [{
        nome:"Sara Silva",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].dataNasc)

