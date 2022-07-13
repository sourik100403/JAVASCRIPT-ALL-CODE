console.log('tut48');
//set
let reg=/harry/;
reg=/h[^bc]rry[1|a|0]/;
reg=/h[a-zA-Z]rr[yYuU]/
//quantifiers
reg=/har{0,2}y/;
//grouping
reg=/(har){2}/;
reg=/(har){2}([0-9]r){3}y/

let str='harhar1r1r1ry bhai';
let result=reg.exec(str);
console.log('the result=',result);
if(reg.test(str)){
    console.log(`The string ${str} matches the expression ${reg.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${reg.source}`);
}