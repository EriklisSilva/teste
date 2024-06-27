const valores = [20,30,30.5,50];

const soma = valores.reduce((acumulador,valor) => acumulador + valor, 0);

console.log(`soma dos valores: ${soma}`);