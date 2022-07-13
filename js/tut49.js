console.log('tut49');
let reg=/h(?!y)/;

let str='h9arhyrd14r5ry%*&bhyi number 665';
let result=reg.exec(str);
console.log('the result=',result);
if(reg.test(str)){
    console.log(`The string ${str} matches the expression ${reg.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${reg.source}`);
}