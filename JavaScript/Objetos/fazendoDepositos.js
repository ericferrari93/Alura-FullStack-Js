/*adicionar uma propriedade que permita ações, para que os clientes que estão cadastrados no sistema do nosso banco, consigam fazer operações bancárias*/

const cliente = {
    nome:'Eric',
    idade: 29,
    cpf: '56432165498',
    email: 'eric@email.com',
    fones:["55912345498", "5521988743124"] ,
    dependentes: [
    {
        nome:"Sara Silva",
        parentesco: "Filha",
        dataNasc: "20/03/2011"},
    {
        nome: "Samia Maria",
        parentesco: "Filha",
        dataNasc: "04/01/2014"
    }],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    } 
}

console.log(cliente.saldo)

cliente.depositar(30)

console.log(cliente.saldo)



