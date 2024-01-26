function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    var n1 = Number(ini.value)
    var n2 = Number(fim.value)
    var n3 = Number(pas.value)

    while(n1 <= n3){
        res.innerHTML`${n1+n3}`
    }

    
}