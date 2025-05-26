document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const createBtn = document.getElementById('create-btn');
    const loginForm = document.getElementById('login-form');
    const submitButton = loginForm.querySelector('.submit-button');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');
    const confirmPasswordInput = document.getElementById('confirm-password');

    let isLoginMode = true;

    function updateFormMode() {
        if (isLoginMode) {
            confirmPasswordGroup.style.display = 'none';
            confirmPasswordInput.removeAttribute('required');
            loginBtn.style.backgroundColor = '#dc2626';
            createBtn.style.backgroundColor = 'transparent';
            submitButton.textContent = 'Entrar';
        } else {
            confirmPasswordGroup.style.display = 'block';
            confirmPasswordInput.setAttribute('required', '');
            createBtn.style.backgroundColor = '#dc2626';
            loginBtn.style.backgroundColor = 'transparent';
            submitButton.textContent = 'Criar';
        }
        loginForm.reset();
    }

    loginBtn.addEventListener('click', () => {
        isLoginMode = true;
        updateFormMode();
    });

    createBtn.addEventListener('click', () => {
        isLoginMode = false;
        updateFormMode();
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = confirmPasswordInput.value;

        if (!isLoginMode) {
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }
        }

        if (isLoginMode) {
            console.log('Login:', { email, password });
        } else {
            console.log('Criar conta:', { email, password });
        }

        // Limpar formulário
        loginForm.reset();
    });
});
