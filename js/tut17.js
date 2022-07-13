// console.log("tut17");
// document.getElementById('heading').addEventListener('click',function(e){
//     let variable;
//     console.log("clicked now");
//     variable=e.target;
//     variable=e.target.className;
//     variable=Array.from(e.target.classList);
//     variable=e.offsetX;
//     variable=e.offsetY;
//     variable=e.clientX;
//     variable=e.clientY;
//     // location.href='.//facebook.in';
//     console.log(variable);
// })

// document.addEventListener('click',function(){
//     alert("clicked now heading of this page");
//     console.log('click');
// })

document.addEventListener('click',myfunc);
function myfunc(event){
    alert(event.type + "st" +event.currenttarget);
}
