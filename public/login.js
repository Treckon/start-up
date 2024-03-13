function login() {
    const nameEl = document.querySelector("#email");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
  }

function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      let section = document.getElementById("login");
      console.log(section);
      let quotep = document.createElement("p");
      let authorp = document.createElement("p");

      quotep.textContent = data.content;
      quotep.className = "instruction";
      authorp.textContent = data.author;
      authorp.className = "instruction";
      console.log(quotep);
      console.log(authorp);
      section.appendChild(quotep);
      section.appendChild(authorp);
    });
}

displayQuote();
