console.log('tut39');
//case 1

// var promise=new Promise(function(resolve,reject){
//  const error=false;
//     if(!error){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });
// promise.then(function(){
//     console.log("successfully run !!! no error");
// }).catch(function(){
//     console.log("some error ocure");
// });

// case 2
// function func1(){
//     return new Promise(function (reslove,reject){
//         setTimeout(() => {
//             const error=false;
//             if(!error){
//                 console.log('function:your promis reslove  now');
//                 reslove();
//             }
//             else{
//                 console.log('function:your promis reject now');
//                 reject();
//             }
            
//         }, 5000);

//     })
// }
// func1().then(function(){
//     console.log('sourik:thanks for solve');
// }).catch(function(){
//     console.log('sourik:very bad error not solved');
// })

//callback to promise

const students=[
    {name:'sourik',subject:'js'},
    {name:'smritikan',subject:'ai'}
]
function enrollStudent(student){
    return new Promise(function(resolve,reject){
    setTimeout(() => {
        students.push(student);
        console.log('student has been enrolled');
        const error=false;
        if(!error){
            resolve();
        }
        else{
            reject();
        }
    }, 5000);
})
}
function getStudent(){
    setTimeout(() => {
        str='';
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('student hasbeen fetch');

    }, 1000);
}
let newstudent={name:"Sunny", subject:"Python"};
enrollStudent(newstudent).then(getStudent).catch(function(){
    console.log('error present');
})