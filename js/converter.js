document.getElementById('currency-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let amount = document.getElementById('amount').value;
    let currency = document.getElementById('currency').value;
    let result = 0;

    const rates = { "USD": 0.7, "EUR": 0.8, "RUB": 0.1 };

    if (rates[currency]) {
        result = amount * rates[currency];
        document.getElementById('result').innerText = `Converted amount: ${result.toFixed(2)} Kizils`;
        updateHistory(amount, currency, result.toFixed(2));
    } else {
        document.getElementById('result').innerText = "Currency not supported.";
    }
});

function updateHistory(amount, currency, result) {
    let history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    history.push({ amount, currency, result });
    localStorage.setItem('conversionHistory', JSON.stringify(history));

    displayHistory();
}

function displayHistory() {
    let history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
    let historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '<h3>Conversion History:</h3>';

    history.forEach(item => {
        historyContainer.innerHTML += `<p>${item.amount} ${item.currency} = ${item.result} Kizils</p>`;
    });
}

window.onload = function() {
    displayHistory();
};

document.getElementById('clear-history-button').addEventListener('click', function() {
    clearHistory();
});

function clearHistory() {
    console.log("Clearing history...");
    localStorage.removeItem('conversionHistory');
    displayHistory();
}
