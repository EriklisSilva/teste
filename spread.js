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

function exibirTelefones(telefone1, telefone2){
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);    
}

//exibirTelefones(estudante.telefones[0], estudante.telefones[1]);

exibirTelefones(...estudante.telefones); //metodo SPREAD, simplifica o processo acima.

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);