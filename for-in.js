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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);

    }
}

