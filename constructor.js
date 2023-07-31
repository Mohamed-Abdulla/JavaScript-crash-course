//constructor
function Alien (name,tech){
    this.name=name;
    this.tech=tech;

    this.work=function(){
        console.log("Solving bugs!!");
    }
}
let alien1= new Alien('abd','JS')
let alien2= new Alien('ays','css')

console.log(alien2);
alien1.work()
