


function contar() { /*PEGANDO O VALORES INSERIDOS */
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    //VERIFICANDO SE TODOS OS VALORES FORAM INSERIDOS
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados. Ou Insira valores validos')
    } else {
        res.innerHTML = 'Contando...'


        /*TRANSFORMANDO OS VALORES EM NUMBER*/
        var n1 = Number(ini.value)
        var n2 = Number(fim.value)
        var n3 = Number(pas.value)
        
        if (n3 <= 0) {
            window.alert('[ERRO] Passo não pode ser igual a 0. Considerando passo= 1 ')
            
        }

        if (n1 < n2) {
            for (var i = n1; i <= n2; i += n3) {
                res.innerHTML += `${i} \u{1F449} `
            } res.innerHTML += `\u{1F3C1}`


        } else {
            for (var i = n1; i >= n2; i -= n3) {
                res.innerHTML += `${i} \u{1F449}  `
            }
            res.innerHTML += `\u{1F3C1}`
        }


    }



}