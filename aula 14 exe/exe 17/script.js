

function tabuada(){//PEGAR AS VARIAVEIS 
    let num = document.getElementById('num1')
    let tab = document.getElementById('seltab')

                //VERIFICAR SE O CAMPO ESTA PREENCHIDO
    if(num.value.length == 0){
        window.alert("[ERRO] VALOR NÃO PODE SER IGUAL A 0")
    
    } else{//TRANSFORMAR A VARIAVEL EM NUMERO, E REALIZAR O CALCULO

        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''//LIMPAR TABUADA, TAB RECEBE NADA
        while(c <= 10){
            let item = document.createElement('option')//CRIAR ELEMENTO 
            item.text = `${n} x ${c}= ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)//ADICIONAR ELEMENTO COMO FILHO
            c++

        }
    }
    
}