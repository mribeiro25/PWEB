// Exercício 1

function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura;
    };
}

function exercicioRetangulo() {
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let retangulo = new Retangulo(base, altura);

    document.getElementById("resultado1").textContent =
        "Área do retângulo: " + retangulo.calcularArea();
}


// Exercício 2

class Conta {
    constructor() {
        this._nome = "";
        this._banco = "";
        this._numero = "";
        this._saldo = 0;
    }

    get nome() {
        return this._nome;
    }

    set nome(valor) {
        this._nome = valor;
    }

    get banco() {
        return this._banco;
    }

    set banco(valor) {
        this._banco = valor;
    }

    get numero() {
        return this._numero;
    }

    set numero(valor) {
        this._numero = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}

class Corrente extends Conta {
    constructor() {
        super();
        this._saldoEspecial = 0;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }
}

class Poupanca extends Conta {
    constructor() {
        super();
        this._juros = 0;
        this._vencimento = "";
    }

    get juros() {
        return this._juros;
    }

    set juros(valor) {
        this._juros = valor;
    }

    get vencimento() {
        return this._vencimento;
    }

    set vencimento(valor) {
        this._vencimento = valor;
    }
}

function exercicioConta() {
    let corrente = new Corrente();

    corrente.nome = document.getElementById("nomeCorrente").value;
    corrente.banco = document.getElementById("bancoCorrente").value;
    corrente.numero = document.getElementById("numeroCorrente").value;
    corrente.saldo = Number(document.getElementById("saldoCorrente").value);
    corrente.saldoEspecial = Number(document.getElementById("saldoEspecial").value);

    let poupanca = new Poupanca();

    poupanca.nome = document.getElementById("nomePoupanca").value;
    poupanca.banco = document.getElementById("bancoPoupanca").value;
    poupanca.numero = document.getElementById("numeroPoupanca").value;
    poupanca.saldo = Number(document.getElementById("saldoPoupanca").value);
    poupanca.juros = Number(document.getElementById("juros").value);
    poupanca.vencimento = document.getElementById("vencimento").value;

    document.getElementById("resultado2").textContent =
        "CONTA CORRENTE\n" +
        "Nome: " + corrente.nome + "\n" +
        "Banco: " + corrente.banco + "\n" +
        "Conta: " + corrente.numero + "\n" +
        "Saldo: " + corrente.saldo + "\n" +
        "Saldo Especial: " + corrente.saldoEspecial + "\n\n" +

        "CONTA POUPANÇA\n" +
        "Nome: " + poupanca.nome + "\n" +
        "Banco: " + poupanca.banco + "\n" +
        "Conta: " + poupanca.numero + "\n" +
        "Saldo: " + poupanca.saldo + "\n" +
        "Juros: " + poupanca.juros + "\n" +
        "Vencimento: " + poupanca.vencimento;
}