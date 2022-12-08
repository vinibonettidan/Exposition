//classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("!!Você não pode instanciar um objeto do tipo Conta!!");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo;
    }

    // metodo abstrado, sempre devera ser sobreescrevido
    sacar(valor) {
        throw new Error("O método Sacar de 'Conta' é abstrato e deve ser sobrescrito");
    }
    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor) {
        if (valor < 0) {
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
