function logout() {
    sessionStorage.clear();
    window.location.href = "file:///D:/cours/EPSI/Integration_Continue/Projet-e-commerce---INFRA-Integ-Cont/login.html";
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logout').addEventListener('click', logout);
});