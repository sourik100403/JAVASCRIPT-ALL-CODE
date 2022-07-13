console.log('tut52');
function* mygen(){
    let i=0;
    yield 1;
    yield 2;
    yield 3;
    while(false){
        yield i++;
    }
}
const gen=mygen();
console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);