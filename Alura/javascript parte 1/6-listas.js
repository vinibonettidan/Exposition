console.log(`trabalhanho com listas`);

const listaDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`];
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);