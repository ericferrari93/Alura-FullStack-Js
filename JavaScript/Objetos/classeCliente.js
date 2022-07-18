class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

    sacar(valor){
        this.saldo -= valor
        console.log(`O saque foi de ${valor}`)
    }

}

const andre = new Cliente("Andre", "andre@email.com", "12233665544", 100)

andre.exibirSaldo()
andre.sacar(50)
andre.exibirSaldo()