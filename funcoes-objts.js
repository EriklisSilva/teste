const estudante = {
    nome: 'Carl',
    idade: 25,
    cpf: '15153654785',
    turma: 'C#',
    bolsista: true,
    telefones: ['15133212313', '156168165161'],
    media: 8.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false 
    }
}

console.log(estudante.estaAprovado(6.0));