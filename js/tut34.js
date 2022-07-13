console.log("tut34");
//synchronous
// for(let i=0;i<100;i++)
// {
//     const element=i;
//     console.log("the index number is" + i);
// }
// console.log("printing all done ");
//asynchoronous
setTimeout(() => {
    for(let i=0;i<100;i++)
{
    const element=i;
    console.log("the index number is" + i);
}
    
}, 100);
console.log("printing all done ");