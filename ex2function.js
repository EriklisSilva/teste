const verficaridade = function (idade){
    if(idade < 18){
        return 'menor de idade'

    }else{
        return 'maior de idade'
    }
}

console.log(verficaridade(50));