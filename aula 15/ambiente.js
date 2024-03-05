let num = [2, 4, 8, 6, 7]

num[5] = 9
num.push(1)

console.log(`nosso array é ${num}`)

console.log(`nosso array tem ${num.length} elementos`)

num.sort()
console.log(`organizando nosso array em ordem cresceente ficará: ${num}`)



for (let pos = 0; pos < num.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

console.log('---------------------------------------')
console.log('também é possivel fazer o mesmo, de forma diferente')

for (let pos in num) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}


let pos = num.indexOf(6)
console.log(pos)

