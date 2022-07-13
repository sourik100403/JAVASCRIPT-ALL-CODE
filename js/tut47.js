console.log('tut47');
let reg=/harry/;
reg=/^harry/;
reg=/harry$/
reg=/h.rry/;
reg=/h*rry/;
reg=/ha?rry?t/;
reg=/h\.rry/
let str='h.rry is ';
let result=reg.exec(str);
console.log('the result=',result);
if(reg.test(str)){
    console.log(`The string ${str} matches the expression ${reg.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${reg.source}`);
}