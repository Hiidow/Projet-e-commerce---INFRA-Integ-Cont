let users = [
  {
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'admin',
  },
];


document.querySelector('button').addEventListener('click', function() {
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


  // Rediriger l'utilisateur vers la page d'accueil
  window.location.href = "http://127.0.0.1:5500/login.html";
});
