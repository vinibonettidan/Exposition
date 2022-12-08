import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./contas/ContaCorrente.js";
import { ContaPoupanca } from "./contas/ContaPoupanca.js";
import { ContaSalario } from "./contas/ContaSalario.js";

// declaração de clientes
const cliente1 = new Cliente("Dan", 11122233309);
// const conta = new Conta(0, cliente1, 1001);

//atribuição de clientes
const contaCorrenteDan = new ContaCorrente(cliente1, 1001);

let valorDeposito = 500;
contaCorrenteDan.depositar(valorDeposito); //deposit
let valorSacado = 100;
contaCorrenteDan.sacar(valorSacado); //withdraw

const contaPoupancaDan = new ContaPoupanca(50, cliente1, 1001);
contaPoupancaDan.sacar(10);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
// console.log(conta);
// console.log(contaPoupancaDan);
// console.log(contaCorrenteDan);
