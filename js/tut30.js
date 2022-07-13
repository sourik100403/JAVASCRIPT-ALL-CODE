console.log("tut30");
const proto={
    slogan:function(){
        return `this company is best`;
    },
    changeName:function(name){
        this.name=name;
    }
}
// let myself=Object.create(proto);
// myself.name="sourik";
// myself.role="programmer";
// myself.changeName("smritikan");
// console.log(myself);
// let harr1=Object.create(proto,{
//     name:{value:"suraj",writable:true},
//     role:{value:"coder",}
// });
// harr1.changeName("harry2");
// console.log(harr1);
function employee(name,salary,code){
    this.name=name;
    this.salary=salary;
    this.code=code;
}
employee.prototype.slogan=function(){
    return `this company best regards ${this.name}`;

}
let newemployee=new employee("priti",45000,"c");
console.log(newemployee.slogan());
//call
function programmer(name,salary,code,experience){
    employee.call(this,name,salary,code);
    this.experience=experience;
}
//inherit prototype
programmer.prototype=Object.create(employee.prototype);
//manually
programmer.prototype.constructor=programmer;
let rohan=new programmer('rohan',3000,'javascript',5);
console.log(rohan);