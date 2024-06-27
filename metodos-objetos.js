const estudante = {
    nome: 'Thomas Shelby',
    idade: 25,
    cpf: '21321452123',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['616518916581', '56185165161655'],
    enderecos: [{
        rua: 'Oxford Street',
        numero: '12',
        complemento: 'Arthurs Pub'
    },
    {
        rua: 'Vilhena',
        numero: '33',
        complemento: ''
    }]
}

const chaves = Object.keys(estudante);
console.log(chaves);

if(!chaves.includes('enderecos')){
    console.error('É preciso ter um endereço')

}