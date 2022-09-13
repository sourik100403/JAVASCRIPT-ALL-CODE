console.log('58')
let myset=new Set();
console.log(myset);
myset.add('this');
myset.add('that');
myset.add(65);
myset.add('true');
myset.add('false');
myset.add('this');
myset.add('that');
console.log(myset);
console.log(myset.size);
myset.delete('this');
console.log(myset)
console.log(myset.has(65))
for(let item of myset){
    console.log(item)
}
myset.add('sourik');
myset.forEach((item)=>{
    console.log(item);
})
