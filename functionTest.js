/*let valor = 50

function incrementa(){
    valor = valor + 50;
}

incrementa();
console.log(valor);*/

/*function mostrarNome(nome){
    console.log(nome);
}

mostrarNome('Bruce');*/

/*function soma(num1, num2){

    const somaDosNumeros = num1 + num2

    return somaDosNumeros
}

const numerosSomados = soma(15,8);

console.log(numerosSomados);*/

//ARROW
const div = (n1,n2) => {
    const divisao = n1 / n2;
    console.log(divisao);
}

div(100,2)

//FORMA MAIS SIMPLES AINDA
const divi = (n1,n2) => n1 / n2

const result = divi(100,2);
console.log(result);