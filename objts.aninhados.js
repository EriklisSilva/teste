const estudante = {
    nome: 'Thomas Shelby',
    idade: 25,
    cpf: '21321452123',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['616518916581', '56185165161655'],
    endereco: [{
        rua: 'Oxford Street',
        numero:'12',
        complemento: 'Arthurs Pub'
    }]   
}

estudante.endereco.push({
    rua: 'Vilhena',
    numero: '33',
    complemento: ''
})

console.log(estudante.endereco);
console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)
 
console.log(listaEnderecosComComplemento);