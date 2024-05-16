function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
}

function toggleForm() {
    const signUpForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    signUpForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none';
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}
