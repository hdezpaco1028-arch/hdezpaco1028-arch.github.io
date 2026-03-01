const App = {
    init() {
        this.setupButtons();
        this.revealOnScroll();
    },

    setupButtons() {
        const startBtn = document.querySelector('#cta-btn');
        
        startBtn.addEventListener('click', () => {
            // "Absolute Cinema" interaction
            startBtn.innerText = "Launching...";
            startBtn.style.background = "#32d74b"; // Change to green
            
            setTimeout(() => {
                alert("Welcome to Francisco's Digital Shop! Project started.");
                window.scrollTo({
                    top: document.querySelector('.shop-section').offsetTop,
                    behavior: 'smooth'
                });
            }, 800);
        });
    },

    revealOnScroll() {
        // This makes elements fade in as you scroll down
        window.addEventListener('scroll', () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if(cardTop < window.innerHeight - 100) {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }
            });
        });
    }
};

window.addEventListener('DOMContentLoaded', () => App.init());
