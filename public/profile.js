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

document.addEventListener("DOMContentLoaded", async function() {
    let username = localStorage.getItem("userName");
    let profile = await getProfile(username);

    let series = ["Mistborn", "Wax and Wayne", "The Stormlight Archive", "Tress of the Emerald Sea", "Warbreaker", "Elantris"];

    for (i of series){
        let tr = document.createElement("tr");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        tr.appendChild(th1);
        tr.appendChild(th2);

        let book = i.toLowerCase();
        book = book.replace(" ", "");
        book = book.replace(" ", "");
        book = book.replace(" ", "");
        book = book.replace(" ", "");
        

        th1.appendChild(document.createTextNode(i));
        th2.appendChild(document.createTextNode(profile[book]));
        document.querySelector('#progress').appendChild(tr);
    }

  });

async function getProfile(name){
    let profiles = [];
    let mainProfile;
    try {
        const response = await fetch('/api/profile');
        profiles = await response.json();
        console.log(profiles);
        mainProfile = profiles.find(({userName}) => userName === name);
        console.log(mainProfile);

        localStorage.setItem('profile', JSON.stringify(scores));
    } catch(error) {
        console.log("error received")
        console.log(error);
    }
    console.log("main profile");
    console.log(mainProfile);
    return mainProfile;
}


