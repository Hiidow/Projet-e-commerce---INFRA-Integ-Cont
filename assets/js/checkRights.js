function checkConnection() {
    //check if user is connected when arrived on index.html
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
        //if not connected, redirect to login.html
        alert('You are not connected. Please log in.');
        window.location.href = 'login.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkConnection();
});