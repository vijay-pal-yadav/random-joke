const jokecontainer=document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?type=single"


let getjoke= () => {
    jokecontainer.classList.remove("fade");
    fetch(url)
    .then((Response)=>{
        return Response.json();
    })
    .then((res) => {
        console.log(res)
        jokecontainer.textContent=`${res.joke}`;
        jokecontainer.classList.add("fade");
    });
}

btn.addEventListener("click",getjoke);
getjoke();s