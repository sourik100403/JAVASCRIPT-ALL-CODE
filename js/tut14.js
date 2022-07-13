console.log("tut14.js");
// var a=document.getElementById('firstchild');
// a.style.color='red';
// a=a.childNodes;
// a.innerText="thios is a first";
// a.innerHTML="<h1>this is innerhtml</h1>";
// console.log(a.innerHTML);

//singile selector
// let a=document.querySelector('div');
// a.style.color='red';
// console.log(a);

//multipleselector
let a=document.getElementsByClassName('child');
a=document.getElementsByTagName('div');
a=document.querySelectorAll('heading');
console.log(a);
for(let i=0;i<a.length;i++){
    const element=a[i];
    console.log(element);
    element.style.color='blue';
}