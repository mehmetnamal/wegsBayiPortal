document.getElementById('togglePassword').addEventListener('click', function (e) {
    const password = document.getElementById('password');
    if (password.type === 'password') {
        password.type = 'text';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});

document.getElementById('rememberMe').addEventListener('click', function (e) {
    e.stopPropagation();
});

document.querySelector('.remember-me-label').addEventListener('click', function (e) {
    const checkbox = document.getElementById('rememberMe');
    checkbox.checked = !checkbox.checked;
});
