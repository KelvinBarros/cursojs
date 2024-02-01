function Ponto(x,y){
    this.x = x;
    this.y = y;

}

let p= new Ponto (1,1);

Ponto.prototype.r = function(){
    return Math.sqrt(
        this.x * this.x + this.y * this.y
    )
}

console.log(p.r())