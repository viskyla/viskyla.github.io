console.log("Loading Init.");

fetch("/assets/temps/nav.html")
.then(data=>{
    return data.text();
})
.then(data=>{
    document.getElementById("nav").innerHTML = data;
})