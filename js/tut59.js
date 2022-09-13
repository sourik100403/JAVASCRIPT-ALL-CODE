console.log('59');
const s1=Symbol();
const s2=Symbol();
console.log(s1===s2);
const a='this is';
const b='this is';
const k1=Symbol('identifier for k1');
const k2=Symbol('fotr k2');
myobj={};
myobj[k1]='harry';
myobj[k2]='rohan';
myobj['name']='sourik';
myobj[4]='smritikana';
// console.log(myobj);
// console.log(myobj[k1]);
// console.log(myobj[k2])
// console.log(myobj.k1)
for(let key in myobj){
    console.log(key,myobj[key])
}
console.log(JSON.stringify(myobj))
