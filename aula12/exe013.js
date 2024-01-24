var agora= new Date()
var diaSem= agora.getDay()


 
/*
0= domimgo
1= segunda
2= terça
3= quarta
4= quinta
5= sexta
6= sábado
*/
 

 
switch(diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log("segunda")
        break    
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
     case 5:      
        console.log('sexta-feira')
        break
    case 6:9
        console.log('Sabado')
        break
}