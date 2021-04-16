// Q2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"
const proxy = "https://noroffcors.herokuapp.com/"

const finalUrl = proxy + url;

const theList = document.querySelector(".the-list")

theList.innerHTML += `<div class="loading">Loading... </div>`


async function apiCall(){
    try {
        const response = await fetch(finalUrl);
        const results = await response.json();

        console.log(results)

        const data = results.results   

        theList.innerHTML = ""


    for(let i = 0; i < data.length; i++){
        const name = data[i].name
        const rating = data[i].rating
        const numberOfTags = data[i].tags.length
  
    if(i === 9){
        break;
    }

    theList.innerHTML +=
    `<div class="box">
    <p>Name: ${name} </p>
    <p>Rating: ${rating} </p>
    <p>Number of Tags: ${numberOfTags} </p>
    </div>`
}
}
catch(error) {
    console.log("this is the message", error)
}}

apiCall();
