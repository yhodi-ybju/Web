document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    const dataContainer = document.createElement('div');
    dataContainer.id = 'data-section';
    document.body.appendChild(dataContainer);

    const randomId = Math.random() < 0.5 ? 100 : 200;
    const url = `https://jsonplaceholder.typicode.com/users?userId=${randomId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            preloader.style.display = 'none';
            data.forEach(user => {
                const userInfo = document.createElement('p');
                userInfo.textContent = `Username: ${user.username}, Name: ${user.name}, Email: ${user.email}`;
                dataContainer.appendChild(userInfo);
            });
        })
        .catch(error => {
            preloader.style.display = 'none';
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Error: ' + error.message;
            dataContainer.appendChild(errorMessage);
        });
});
