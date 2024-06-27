const salaJS = [7,8,9,8,7.5,6.8,4,7];
const salaJava = [6,5,8,7,9,5,6];
const salaPython = [7,8,4,5,3,6,9];

function calculaMedia (listaDeNotas){

    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

    const media = somaDasNotas / listaDeNotas.length; 
    return media;
}

console.log(calculaMedia (salaJS));
console.log(calculaMedia (salaJava));
console.log(calculaMedia (salaPython));
