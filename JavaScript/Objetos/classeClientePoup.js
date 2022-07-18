/*proveitar um cliente que já existia para criar a partir dele um novo tipo de cliente para contas poupança*/

class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
        console.log(`O deposito foi de ${valor}`)
    }

    exibirSaldo(){
        console.log(`O saldo é de ${this.saldo}`)
    }

    sacar(valor){
        this.saldo -= valor
        console.log(`O saque foi de ${valor}`)
    }

}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
        console.log(`O deposito na poupança foi de ${valor}`)
    }

    exibirSaldoPoupanca(){
        console.log(`O saldo da poupança é de ${this.saldoPoupanca}`)
    }

    
}

const andre = new ClientePoupanca("Andre", "andre@email.com", "2233445577", 100, 200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)

andre.exibirSaldo()
andre.exibirSaldoPoupanca()