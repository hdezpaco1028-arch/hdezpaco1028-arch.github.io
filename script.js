// Using a Module-like structure to keep variables out of the global scope
const App = {
    init() {
        console.log("App initialized successfully.");
        this.renderTool();
        this.setupEventListeners();
    },

    renderTool() {
        const container = document.querySelector('#app-container');
        // Example: A small tool that shows "Value Projections"
        container.innerHTML = `
            <div class="tool-card">
                <input type="number" id="input-val" placeholder="Enter amount...">
                <button id="calc-btn" class="btn-primary">Calculate ROI</button>
                <p id="result"></p>
            </div>
        `;
    },

    setupEventListeners() {
        document.querySelector('#calc-btn').addEventListener('click', () => {
            const val = document.querySelector('#input-val').value;
            if(val) {
                document.querySelector('#result').innerText = `Potential Earnings: $${val * 1.5}`;
            }
        });
    }
};

// Start the app
window.addEventListener('DOMContentLoaded', () => App.init());
