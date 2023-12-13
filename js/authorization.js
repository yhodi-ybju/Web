function openLoginModal() {
    document.getElementById('loginModal').style.display='block';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display='block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performLogin();
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSignup();
    });

    function performLogin() {
        // Получение данных из формы
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Здесь должен быть ваш код для отправки данных на сервер
        // Например, использование Fetch API для отправки данных
        console.log('Login:', username, password);
        // Fetch запрос...
    }

    function performSignup() {
        // Получение данных из формы
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Здесь должен быть ваш код для отправки данных на сервер
        // Например, использование Fetch API для отправки данных
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Registration failed');
                }
                return response.json();
            })
            .then(data => {
                console.log('Signup successful:', data);
                // Обработка успешной регистрации
                // Например, перенаправление пользователя или другие действия
            })
            .catch(error => {
                console.error('Signup error:', error);
                // Обработка ошибки регистрации
            });
    }
});
