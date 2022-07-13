console.log("tut18 lecture");
// let btn = document.querySelector('.no');
// btn.addEventListener('click', func1);
// btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     // e.preventDefault();
// }

// function func2(e) {
//     console.log("dbl click");
//     // e.preventDefault();
// }

// document.querySelector('.container').addEventListener('mousemove', function(e){
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
//     console.log('You triggered mouse move event')
// })

document.querySelector('.no').addEventListener('mouseleave', function(e){
    console.log("leave mouse");
    console.log(e.offsetX);
    document.body.style.border=`10px solid blue`;
})
