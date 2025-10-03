console.log("Loading Init.");

window.onload=()=>{
    fetch("/assets/temps/nav.html")
    .then(data=>{
        return data.text();
    })
    .then(data=>{
        document.getElementById("nav").innerHTML = data;
    })
}