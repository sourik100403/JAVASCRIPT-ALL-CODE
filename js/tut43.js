console.log('TUT43');
async function harry(){
    console.log('inside the function');
    const response=await fetch('https://api.github.com/users');
    console.log('before response');
    const users=await response.json();
    console.log('users resolve')
    return users;
}
console.log('before calling harry');
let a=harry();
console.log('after calling harry');
console.log(a);
a.then(data=>console.log(data));
console.log('last line');
