console.log('60');
let [a,b]=[87,09];
// console.log(a,b)
[a,b,c,...d]=[87,87,25,86,90,67];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d[0])
//aray
({a,b,c,...d}={a:76,b:98,c:12,d:67,e:34,f:21})
console.log(a,b,c,d)
//object
const person={
    name:'sourik',
    age:20,
    gender:'male',
    girlfriend:'no',
    start:function(){console.log('start')}
}
const {name,age,gender,girlfriend,start}=person;
console.log(name,age,gender,girlfriend,start);
start()