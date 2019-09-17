$(document).ready(() => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = $('#login-btn');

    loginBtn.click(() => {
        if (!emailInput.value || !passwordInput.value) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            Toast.fire({
                type: 'error',
                title: 'Sorry, but you forgot something!'
            });
            return undefined;
        }
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            type: 'success',
            title: 'Logged in successfully! Welcome {user}' // {user} can be replaced by using .replace method
        });
    });
    console.log('Hello World!');
    'Just for copyright. xD'; // Made by 14 years old boii | Mohammad Almajarish.
});