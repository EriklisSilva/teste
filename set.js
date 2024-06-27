const nomes = ['Angela', 'Maria', 'Geraldo', 'Maria', 'Angela'];

//const nomesAtualizados = new Set(nomes); (usando a estrutura abaixo não é necessário usar a estrutura dessa linha).
const listaNomesAtualizados = [... new Set(nomes)];

console.log(listaNomesAtualizados);
