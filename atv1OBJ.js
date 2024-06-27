const pessoa = {
    nome: 'Antonio',
    notas: [9.0, 8.0,7.0,8.0],
    
    calcularMediaNotas: function(){
        const soma = pessoa.notas.reduce((acumulador,nota) => acumulador + nota,0);
        const media = soma / this.notas.length;
        return media;
    
    },
    classificarDesempenho: function(){
        const media = this.calcularMediaNotas();
        if(media >= 9){
            return `Desempenho excelente`;
        }
        else if(media >=7.5 && media < 9){
            return `Bom desempenho`
        }
        else if(media >= 6 && media <=7.5){
            return `Desempenho regular`
        }
        else if(media < 6){
            return `Desempenho insuficiente`
        } 
    }
}

const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`A média do estudante ${pessoa.nome} é ${mediaCalculada}`);

const classificarDesempenho = pessoa.classificarDesempenho();
console.log(`O desempenho do estudante ${pessoa.nome} é ${classificarDesempenho}`);