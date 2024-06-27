const estudanteReprovou  = (notaFinal, faltas) =>{
    if(notaFinal < 7 && faltas > 2){
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 8));
console.log(estudanteReprovou(10, 2));