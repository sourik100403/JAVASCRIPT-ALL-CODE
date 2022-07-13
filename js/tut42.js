console.log('tut42');
let myBtn=document.getElementById('myBtn');
let content=document.getElementById('content');

//fetch with text
// function getData(){
//     url='sourik.txt';
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// getData();

//fetch api get request
// function getData(){
//     url='https://api.github.com/users';
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// getData();

//fetch post request
function postData(){
    url="http://dummy.restapiexample.com/api/v1/create";
    data='{"name":"sijhhgjhfjyh ","salary":"123","age":"23"}'
   params={
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:data
   }
   fetch(url,params).then(response=>
    response.json()
   ).then(data=>
    console.log(data)

   )
}
postData()


