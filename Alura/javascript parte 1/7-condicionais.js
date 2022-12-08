console.log(`trabalhanho com listas`);

const listaDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`];
const idadeComprador = 18;
const estaAcompanhada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
} else {
    console.log("Comprador não é maior de idade e não posso vender");
}
