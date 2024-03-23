const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function login() {
  const nameEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");

  const query = { userName: nameEl.value, password: passwordEl.value };
  const options = {
    limit: 1,
  };

  const cursor = collection.find(query, options);
  const user = await cursor.toArray();
  
  if (length(user) < 1){
    let section = document.getElementById("login");
    let p = document.createElement("p");
    let node = document.createTextNode("Username or Password Incorrect");
    p.appendChild(node)
    section.appendChild(p)
  } else{
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
  }

  
}

async function signup() {
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/bnb`;
  const client = new MongoClient(url);
  const db = client.db('users');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const nameEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");
  const user = {
    userName: nameEl.value,
    password: passwordEl.value,
  };
  await collection.insertOne(house);
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
