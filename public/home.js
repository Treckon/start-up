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
function searchChats(){
    //to be implemented when proper external storage has been established.
}

loginRedirect()

console.log("noobmaster69")
let user = 'noobmaster69';
setInterval(() => {

    //Will be later edited to accomodate Websocket messages from other users

    console.log("interval set")
    chat = `${user} has commented in Mistborn Chat`;
    let ul = document.getElementById("#Notice")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(chat))
    document.querySelector('#Notice').appendChild(li)
}, 10000);

let list = document.querySelectorAll("ul#Notice");
console.log(list)
if(list.length > 10){
    console.log("removing notice")
    setInterval(() =>{
        list.removeChild(list.firstElementChild);
        console.log("notice removed")
    }, 5000)
}


