/*percorrer o objeto e extrair informações básicas do cliente em um formato mais legível E de forma automatizada para fornecer a outros departamentos do banco*/

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

let relatorio="";

for ( let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else {
        relatorio += `
        ${info} = ${cliente[info]} 
        `
    }
    

}

console.log(relatorio)