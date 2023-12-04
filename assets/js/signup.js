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

  users.push(user);

  // Stocker les informations de l'utilisateur en local
  localStorage.setItem("users", JSON.stringify(users));
});


document.getElementById('button2').addEventListener('click', function() {
  console.log(JSON.parse(localStorage.getItem("users")));
  window.location.href = "file:///D:/cours/EPSI/Integration_Continue/Projet-e-commerce---INFRA-Integ-Cont/login.html";
  event.preventDefault();
});

document.getElementById('button3').addEventListener('click', function() {
  window.location.href = "file:///D:/cours/EPSI/Integration_Continue/Projet-e-commerce---INFRA-Integ-Cont/login.html";
});