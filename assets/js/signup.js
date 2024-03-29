let users = [
  {
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'admin',
  },
];

document.getElementById('button').addEventListener('click', function() {
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let user = {
    username: username,
    email: email,
    password: password,
  };
  //if local storage is empty
  if (localStorage.getItem("users") === null) {
    users.push(user)
  }
  else {
    //if entry already exists
    if (JSON.parse(localStorage.getItem("users")).some(e => e.username === username)) {
      alert("Username already exists")
      return
    }
    else if (JSON.parse(localStorage.getItem("users")).some(e => e.email === email)) {
      alert("Email already exists")
      return
    }
    else {
      users = JSON.parse(localStorage.getItem("users"))
      users.push(user)
    }
  }

  // Stocker les informations de l'utilisateur en local
  localStorage.setItem("users", JSON.stringify(users));
  console.log(JSON.parse(localStorage.getItem("users")));
});


document.getElementById('log').addEventListener('click', function() {
  window.location.href = "file:///D:/cours/EPSI/Integration_Continue/Projet-e-commerce---INFRA-Integ-Cont/login.html";
});