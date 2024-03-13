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

async function submit(){
    console.log("submitting")
    let book1 = document.getElementById("mistborn")
    localStorage.setItem("Mistborn", book1.value)
    let book2 = document.getElementById("waxandwayne")
    localStorage.setItem("Wax and Wayne", book2.value)
    let book3 = document.getElementById("thestormlightarchive")
    localStorage.setItem("The Stormlight Archive", book3.value)
    let book4 = document.getElementById("tressoftheemeraldsea")
    localStorage.setItem("Tress of the Emerald Sea", book4.value)
    let book5 = document.getElementById("warbreaker")
    localStorage.setItem("Warbreaker", book5.value)
    let book6 = document.getElementById("elantris")
    localStorage.setItem("Elantris", book6.value)

    const newUser = {
        userName: localStorage.getItem("userName"), 
        mistborn: book1.value, 
        waxandwayne: book2.value, 
        thestormlightarchive: book3.value, 
        tressoftheemeraldsea: book4.value,
        warbreaker: book5.value,
        elantris: book6.value
    }

    try{
        const response = await fetch('/api/editprofile', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newUser),
          });
    }catch {
        // If there was an error then just track scores locally
        console.log(error)
    }

}
