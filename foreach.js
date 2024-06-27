const notas = [20, 30, 10, 5, 45];

let SomaNotas = 0;

notas.forEach(function(nota){
    SomaNotas += nota;
})

const media = SomaNotas / notas.length;

console.log(`a média das notas é: ${media}`);