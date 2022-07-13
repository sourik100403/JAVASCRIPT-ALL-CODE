console.log('ajax tut');
//click fetch
let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',fetchClickHandeler);
function fetchClickHandeler(){
    console.log("now click at fetch button");
    //create ajax obeject
    const xhr=new XMLHttpRequest();

    //open object get request
    xhr.open('GET','sourik.txt',true);

    //for post request
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('Content-type', 'application/json');

    //onprogress
    xhr.onprogress=function(){
        console.log('on progress');
    }

    //sate change step by step
    // xhr.onreadystatechange=function(){
    //     console.log('ready state is',xhr.readyState);
    // }

    //whebn response is ready
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.error('some error occured');
        }
    }
    //send for get request 
    xhr.send();

    //send for post request
    // params=`{"name":"test34sad545","salary":"123","age":"23"}`;
    // xhr.send(params);
    console.log('all done now');
}

// for pop button
let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popClickHandeler);
function popClickHandeler(){
    const xhr=new XMLHttpRequest();
    
    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    
    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }
        // send the request
        xhr.send();
        console.log("We are done fetching employees!");
        
}