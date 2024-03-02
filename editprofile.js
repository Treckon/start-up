console.log("starting index.js")
function loginRedirect(){
    let username = localStorage.getItem("userName")
    if (username === null){
        window.location.href = "login.html"
    }
}
function signOut(){
    localStorage.removeItem("userName")
    window.location.href = "login.html"
}
loginRedirect()

function submit(){
    console.log("submitting")
    let progress = document.getElementById("mistborn")
    localStorage.setItem("Mistborn", progress.value)
    progress = document.getElementById("waxandwayne")
    localStorage.setItem("Wax and Wayne", progress.value)
    progress = document.getElementById("thestormlightarchive")
    localStorage.setItem("The Stormlight Archive", progress.value)
    progress = document.getElementById("tressoftheemeraldsea")
    localStorage.setItem("Tress of the Emerald Sea", progress.value)
    progress = document.getElementById("warbreaker")
    localStorage.setItem("Warbreaker", progress.value)
    progress = document.getElementById("elantris")
    localStorage.setItem("Elantris", progress.value)
}
