const alunos = ['Ana', 'Gabriela', 'Marcio', 'jô'];
const medias = [7, 7.5, 4, 5.8];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 6;
});

console.log(reprovados);