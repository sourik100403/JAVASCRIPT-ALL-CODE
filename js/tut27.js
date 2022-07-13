console.log("tut27");
var car={
    name:"tata nano",
    speed:130,
    manufracture:1990,
    expire:3000,
    run:function(){
        console.log(`${this.name} car is running`);
    }
}
// console.log(car.run());
function generalcar(givenname,givenspeed){
    this.name=givenname;
    this.speed=givenspeed;
    this.run=function(){
        console.log(`${this.name} car is rummimg at the time`);
    };
    this.anlyze=function(){
        console.log(`the car slow ${200-this.speed} to the renge rover`);
    };
};
car1 = new generalcar("Nissan", 180);
car2 = new generalcar("Marutu Alto", 80);
car3 = new generalcar("Mercedes", 200);
console.log(car1, car2, car3);