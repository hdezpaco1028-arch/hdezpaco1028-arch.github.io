setupEventListeners() {
    document.querySelector('#calc-btn').addEventListener('click', () => {
        const inputField = document.querySelector('#input-val');
        const resultField = document.querySelector('#result');
        const val = parseFloat(inputField.value);

        // Professional Validation
        if (isNaN(val) || val <= 0) {
            resultField.innerText = "Please enter a valid amount.";
            resultField.style.color = "red";
        } else {
            const earnings = (val * 1.5).toLocaleString(); // Adds commas for big numbers
            resultField.innerText = `Potential Earnings: $${earnings}`;
            resultField.style.color = "#007AFF"; // Resets to blue
        }
    });
}
