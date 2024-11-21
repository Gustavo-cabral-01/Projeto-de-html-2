function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}


function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const selectedFilms = Array.from(document.getElementById('registerFilm').selectedOptions).map(option => option.value);

    
    if (!email.includes('@')) {
        alert('Por favor, insira um email válido, Ela Deve conter: @gmail.com ');
        return;
    }

    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('A senha deve conter pelo menos 8 caracteres, incluindo letras e números.');
        return;
    }

    if (name && email && password) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('userFilms', JSON.stringify(selectedFilms));

        alert('Registro realizado com sucesso! Você agora pode fazer login.');
        toggleForm();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}


function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login realizado com sucesso!');
        window.open('filmes.html', '_blank');
    } else if (email !== storedEmail) {
        alert('Usuário não encontrado. Por favor, registre-se primeiro.');
    } else {
        alert('Senha incorreta.');
    }
}
