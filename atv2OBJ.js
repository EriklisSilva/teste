const carro = {
    marca: 'Ford',
    modelo: 'Mustang Shelby',
    ano: 2016,
    cor: 'Azul'
}

for (let chave in carro){
    const propriedadeNomeValor = `nome da propriedade: ${chave.toUpperCase()} / valor da propriedade: ${carro[chave]}`;
    console.log(propriedadeNomeValor);
}

carro.pais = 'Estados Unidos'
carro.original = true

for (let chv in carro){
    const propriedadeNomeValorAtualizada = `nome da propriedade: ${chv.toUpperCase()} / valor da propriedade ${carro[chv]}`
    console.log(propriedadeNomeValorAtualizada);
}

