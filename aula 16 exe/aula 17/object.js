let amigo = {
    nome: 'jose', sexo: 'M', peso: 80,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }


}
amigo.engordar(9)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)