const numeros = [1,3,5,4,7,8,9,6,11,12,23,56,54,45];

const pares = numeros.filter((numero) => {
    if (numero % 2 == 0){
        return numero;
    }
})

console.log(pares);