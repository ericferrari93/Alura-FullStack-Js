/*Percorrer um objeto, verificar se existe a chave dependente, se existir, enviar uma mensagem de oferta de seguro*/

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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(cliente);
    if (propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

//console.log(Object.values(cliente))
console.log(Object.entries(cliente))
//oferecerSeguro(cliente)