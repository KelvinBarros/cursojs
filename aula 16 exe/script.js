
let num = document.getElementById("num")
let tab = document.getElementById('tab')
let res = document.getElementById('res')
let valores = [] //[] VETOR 

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inTab(n, t) {
    if (t.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNum(num.value) && !inTab(num.value, valores)) {

    } else {
        window.alert('Valor invalido ou já inserido')
    }

}