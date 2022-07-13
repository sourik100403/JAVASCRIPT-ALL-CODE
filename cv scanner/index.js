console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

//cviterature
function cviterature(profiles){
    let nextindex=0;
    return{
        next:function(){
            return nextindex<profiles.length ?
            {value: profiles[nextindex++], done: false} :
            {done: true}
        }
    }
}
const candidate=cviterature(data);
nextcv();
const next=document.getElementById('next');
next.addEventListener('click',nextcv);
function nextcv(){
    const currentcan=candidate.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    if(currentcan!=undefined){
        image.innerHTML = `<img src='${currentcan.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item list-group-item-warning"><h5>Name: ${currentcan.name}</h5></li>
        <li class="list-group-item list-group-item-warning"><h5>${currentcan.age} years old</h5></li>
        <li class="list-group-item list-group-item-warning"><h5>Lives in ${currentcan.city}</h5></li>
        <li class="list-group-item list-group-item-warning"><h5>Primarily works on ${currentcan.language}</h5></li>
        <li class="list-group-item list-group-item-warning"><h5>Uses ${currentcan.framework} framework</h5></li>
      </ul>`;
    }
    else{
        alert('Done All Candidate Profile Visit');
        window.location.reload();
    }
}
