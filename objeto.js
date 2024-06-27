const estudante = {
    nome: 'Bruce Wayne',
    idade: 25,
    cpf: '21321452123',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
console.log(`os três primeiros digitos do CPF são: ${estudante.cpf.substring(0,3)}`);