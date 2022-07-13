let text = "javascript";
let a = document.links;
Array.from(a).forEach(function(element){
    if(element.innerText.includes(text))
        console.log(element.href)
})