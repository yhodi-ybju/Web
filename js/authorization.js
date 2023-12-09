// Функция для открытия модального окна входа
function openLoginModal() {
    document.getElementById('loginModal').style.display='block';
}

// Функция для открытия модального окна регистрации
function openSignupModal() {
    document.getElementById('signupModal').style.display='block';
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
        console.log('Signup:', username, email, password);
        // Fetch запрос...
    }
});

function performLogin() {
    // ... получение данных из формы ...

    fetch('URL_для_входа', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Login successful:', data);
            // Обработка успешного входа
        })
        .catch(error => {
            console.error('Login error:', error);
            // Обработка ошибки входа
        });
}
