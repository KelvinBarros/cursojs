
let num = document.getElementById("num")
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = [] //[] VETOR 

function isNum(n) {// VERIFICA SE O NUMERO É VALIDO 
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inTab(n, t) { //VERIFICA SE O NUMERO JÁ SE ENCONTRA NA LISTA
    if (t.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

document.addEventListener("keypress", function(e){//ACIONA FUNÇÃO AO CLICAR EM ENTER
    if(e.key === 'Enter'){
        adicionar()
    }
})

function adicionar() {//FUNÇÃO DISPARADA APÓS VERIFICAR ITENS ACIMA

    if (isNum(num.value) && !inTab(num.value, valores)) {

        valores.push(Number(num.value))//Aadiciona o numero a lista
        let item = document.createElement('option') // cria o elemento option na lista
        item.text = `Valor ${num.value} adicionado` //texto exibido no elemento
        tab.appendChild(item) // adiciona a lista como filho
        res.innerHTML= ''

    } else {
        window.alert('Valor invalido ou já inserido.')
    }

    num.value = '' //limpa o campo 
    num.focus() //coloca o foco no campo a ser preenchido

}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Insira algum valor!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]

            if (valores[pos] < menor)
            menor = valores [pos]
        }

        media = soma/ total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} elementos.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos elementos é ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores é ${media}`
    }
}