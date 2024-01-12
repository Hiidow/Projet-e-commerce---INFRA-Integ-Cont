let users = []; 

function getUsersFromLocalStorage() {
    // Récupérer les utilisateurs depuis le local storage
    users = JSON.parse(localStorage.getItem('users'));
    // Si des utilisateurs sont présents dans le local storage
    if (users) {
      // Afficher les utilisateurs dans la console
      console.log(users);
    }
}
// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    getUsersFromLocalStorage();

    // Vérifier si l'utilisateur est déjà connecté
    const user = JSON.parse(sessionStorage.getItem('user'));
    
    console.log(user);

    // Si l'utilisateur est déjà connecté
    if (user) {
      // Rediriger l'utilisateur vers la page d'accueil
      window.location.href = 'index.html';
    }
});

document.querySelector('button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérifier si l'utilisateur existe
    const user = users.find(user => user.username === username && user.password === password);
    // Si l'utilisateur existe
    if (user) {
      // Stocker l'utilisateur en session
      sessionStorage.setItem('user', JSON.stringify(user));
      // Rediriger l'utilisateur vers la page d'accueil
      window.location.href = 'index.html';
    } else {
      // Afficher un message d'erreur
      alert('Utilisateur inconnu');
    }
}
);
