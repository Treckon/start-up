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

function receiveComment(){
    //to receive comments on completion of Websocket
}

function comment(){
    let ul = document.createElement("ul")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    ul.appendChild(p1)
    ul.appendChild(p2)

    p1.appendChild(document.createTextNode(localStorage.getItem("userName")))
    p2.appendChild(document.createTextNode(document.getElementById("comment").value))
    document.querySelector('#Chatbox').appendChild(ul)
}