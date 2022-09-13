console.log('tut57')
const myMap=new Map();
const key1='string',key2={},key3=function(){};
//set
myMap.set(key1,'this is a string');
myMap.set(key2,'this is a blank string');
myMap.set(key3,'this is a blank function');
console.log(myMap);
//value
let value1=myMap.get(key3);
console.log(value1);
//size;
console.log(myMap.size);
//key value 
for(let [key,value] of myMap){
    console.log(key,value);
}
//key
for(let key of myMap.keys()){
    console.log(key);
}
//value
for(let value of myMap.values()){
    console.log(value);
}
//foreach
myMap.forEach((value,key)=>{
    console.log(value);
    console.log(key)
})
//array
let myarray=Array.from(myMap);
console.log(myarray)
//arraykey
let myarraykey=Array.from(myMap.keys());
console.log(myarraykey)
//arrayvalue
let myarrayvalue=Array.from(myMap.values());
console.log(myarrayvalue)

