const jokes=document.querySelector('#joke');  console.log(jokes);
const jokebtn =document.querySelector('.btn');
const setheader={
    headers:{
        Accept:"application/json"
    }}
const generatejokes = ()=>{
    fetch('https://icanhazdadjoke.com/',setheader)
    .then((res)=>res.json())
    .then((data)=>jokes.innerHTML=data.joke)
    .catch((error)=>console.log(error))  }
jokebtn.addEventListener('click',generatejokes);
generatejokes();