function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
9
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this,nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ju", "55588844477711", "ju@email.com", 100, 200)

console.log(ju)

ClientePoupanca.prototype.depositaPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositaPoup(30)

console.log(ju.saldoPoup)