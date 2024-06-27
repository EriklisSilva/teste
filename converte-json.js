const estudante =  require('./estudante.json');

const stringEstudante = JSON.stringify(estudante); //converte o arquivo JSON para STRING
console.log(stringEstudante);
console.log(typeof stringEstudante);

const objEstudante = JSON.parse(stringEstudante); //converte de STRING PARA JSON
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);