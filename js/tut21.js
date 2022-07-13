console.log("tut21");
let mainBody = document.querySelector('#heading');
let divTag = document.createElement('div');
divTag.innerText = 'Hello, this is div tag';
mainBody.appendChild(divTag);
divTag.addEventListener('click',(e) => {
    let text = prompt("Enter the text into which you want to convert the div string into");
    divTag.innerText = text;
    localStorage.setItem('text',text);
});