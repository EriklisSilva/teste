const carro = {
    marca: 'Ford',
    modelo: 'Mustang Shelby',
    ano: 2016,
    cor: 'Azul',
    ligado: true,
    placa: 'JSND1523',

    ligar: function () {
        if (this.ligado == true) {
            console.log('O carro está ligado');
        }
    },

    desligar: function () {
        if (this.ligado == false) {
            console.log('o carro está desligado');
        }
        else {
            console.log('o carro foi deligado');
        }
    },

    obterDetalhes: function () {
        const estado = this.ligado ? 'ligado' : 'desligado'
        return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
};


Object.defineProperty(carro,'placa', { enumerable: false});

for(let propriedade in carro ){
    console.log(`${propriedade}: ${carro[propriedade]}`);
}










