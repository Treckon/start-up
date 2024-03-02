function login() {
    const nameEl = document.querySelector("#email");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
  }