console.log("tut25");
let divElem=document.createElement('div');
let val=localStorage.getItem('text');

let text;
if(val==null){
    text=document.createTextNode('text here');
}
else{
    text=document.createTextNode(val);
}
divElem.appendChild(text);

//set attribute
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid red;width:240px;margin:20px;padding:30px');

//main contained
let container=document.querySelector('.container');
let first=document.getElementById('myfirst');

//insert element
container.insertBefore(divElem,first);
console.log(divElem,container,first);
//click event
divElem.addEventListener('click',function (){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //blur function
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});