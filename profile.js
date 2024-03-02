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

document.addEventListener("DOMContentLoaded", function() {
    let series = ["Mistborn", "Wax and Wayne", "The Stormlight Archive", "Tress of the Emerald Sea", "Warbreaker", "Elantris"]

    for (i of series){
        let tr = document.createElement("tr")
        let th1 = document.createElement("th")
        let th2 = document.createElement("th")
        tr.appendChild(th1)
        tr.appendChild(th2)

        th1.appendChild(document.createTextNode(i))
        th2.appendChild(document.createTextNode(localStorage.getItem(i)))
        document.querySelector('#progress').appendChild(tr)
    }

  });

