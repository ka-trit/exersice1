document.addEventListener('DOMContentLoaded', (event) => {
    checkLoginStatus();
});

function login() {
    // Simulate a login process
    const username = document.getElementById('user-name').value;
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
    window.location.href = 'sale.html';
}
function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const welcomeMessage = document.getElementById('welcome-message');
    const welcomeMessage2 = document.getElementById('welcome-message2');
    if (isLoggedIn) {
        const username = sessionStorage.getItem('username');
        document.getElementById('name').innerText = username;
    } else {
        welcomeMessage.textContent = 'Welcome Back,';
        welcomeMessage2.textContent = 'Please log in to your admin account';
    }
}