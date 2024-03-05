//RECURSIVIDADE (ESTUDAR ISSO MAIS PRA FRENTE )
//UMA FUNÇÃO CHAMANDO A SI MESMO DENTRO DO OBJETO
function fatorial (n){
    if(n==1){
        return 1
    } else {
        return n*fatorial(n-1)
    }
}

console.log(fatorial(5))