console.log("tut31");
// class dat{
//     constructor(year,month,day){
//         this.year=year;
//         this.month=month;
//         this.day=day;
//     }
//     getmonth(){
//         return `${this.month} month is present`
//     }

// }
// const  dat1=new dat(2022,07,04);
// console.log(dat1.getmonth());

class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    greet(){
        return `car name is ${this.name}`
    }
}
class bike extends car{
    constructor(name,year,speed){
        super(name,year);
        this.speed=speed;
    }
    static motion(a,b){
        return `${a*b}`;

    }
}
const bike1=new bike('tata',2018,180);
console.log(bike.motion(1,8));
