document.querySelector('button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username)
    console.log(password)

    // Vérifier si les informations de l'utilisateur sont présentes dans le local storage
    const user = localStorage.getItem(username);
    const email = localStorage.getItem(username);

    console.log(user);
    console.log(email);

    // Si les informations de l'utilisateur sont présentes dans le local storage
    if (user || localStorage.getItem(email)) {
    // Vérifier si le mot de passe est correct
    if (user.password === password || localStorage.getItem(email).password === password) {
        // L'utilisateur est connecté
        // Rediriger l'utilisateur vers la page d'accueil
        window.location = '/';
    } else {
        // Le mot de passe est incorrect
        // Afficher un message d'erreur à l'utilisateur
        alert('Le mot de passe est incorrect.');
    }
    } else {
    // Les informations de l'utilisateur ne sont pas présentes dans le local storage
    // Afficher un message d'erreur à l'utilisateur
    alert('L\'utilisateur n\'existe pas.');
    }

  });