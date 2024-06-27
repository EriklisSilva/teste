let matriz = [];
let valorInicial = 1;



for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial);
    valorInicial++
  }
  matriz.push(linha);
}
 
console.log(matriz);
console.log(`elemento 2 linha e 3 coluna é: ${matriz[1][2]}`);

