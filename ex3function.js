function verifyPalindromo(word) {
    const reverseword = word.split('').reverse().join('');
    if(word === reverseword){
    return 'É um palindromo'

}else{
    return 'Não é um palindromo'
}
}
console.log(verifyPalindromo('renner')); 
 
