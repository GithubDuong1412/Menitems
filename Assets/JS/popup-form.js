const formContainer = document.querySelector('.form-popup .container')
const signupButton = document.querySelector('.signup-section header')
const loginButton = document.querySelector('.login-section header')

loginButton.addEventListener('click', () => {
    formContainer.classList.add('active');
})

signupButton.addEventListener('click', () => {
    formContainer.classList.remove('active');
})
