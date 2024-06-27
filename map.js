const notas = [6, 3, 10, 5, 7];

/*const notasNovas = notas.map(function(nota){
   return nota + 1;
})*/

const notasNovas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1)

console.log(`As notas atualizadas são: ${notasNovas}`);
console.log(notas);