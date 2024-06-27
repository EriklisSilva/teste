const maiornum = function(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return 'O primeiro número é o maior'
    } else if(num2 > num1 && num2 > num3){
        return 'O segundo número é o maior '
    }else{
        return 'o Terceiro número é o maior'
    }
}

console.log(maiornum(50,10,500));