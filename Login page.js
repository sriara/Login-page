// script.js

document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your login logic
    console.log('Username:', username);
    console.log('Password:', password);
});
