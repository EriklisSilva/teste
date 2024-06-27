const pessoa = {
    nome: 'Bruce Wayne',
    idade: 24,
    solteiro: true,
    hobbies: ['artes marciais', 'esportes radicais'],
    endereco:{
        rua: 'Green Day',
        cidade: 'Vilhena',
        estado:'Queensland'
    }
};

pessoa.hobbies.push('Ganhar dinheiro');

console.log(pessoa);


function mostrarInfoPessoa (pessoa){
    console.log(`Nome: ${pessoa.nome} (tipo ${typeof pessoa.nome})`);
    console.log(`idade: ${pessoa.idade} (tipo ${typeof pessoa.idade})`);
    console.log(`solteiro: ${pessoa.solteiro} (tipo ${typeof pessoa.solteiro})`);
    console.log(`hobbies: ${pessoa.hobbies} (tipo ${typeof pessoa.hobbies})`);
}

mostrarInfoPessoa(pessoa)