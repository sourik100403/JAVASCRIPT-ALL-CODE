console.log('tut37');
//callback function case 1

// function addition(x,y,callback){
//     setTimeout(() => {
//         document.write(`sum of ${x} and ${y} = ${x+y}`);
//         callback();
//     }, 5000);
// }
// function display(){
//     document.write('\n added number now');
// }
// addition(5,4,display);

//case 2
const students=[
    {name:'sourik',subject:'js'},
    {name:'smritikan',subject:'ai'}
]
function enrollStudent(student, callback){
    setTimeout(() => {
        students.push(student);
        console.log('student has been enrolled');
        callback();
    }, 1000);
}
function getStudent(){
    setTimeout(() => {
        str='';
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('student hasbeen fetch');

    }, 5000);
}
let newstudent={name:"Sunny", subject:"Python"};
enrollStudent(newstudent,getStudent);
// getStudent();