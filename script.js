:root {
    --primary: #007AFF;
    --dark: #0a0a0a;
    --white: #ffffff;
}

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: var(--dark);
    color: var(--white);
    overflow-x: hidden;
}

/* The Cinematic Color Bar */
#color-bar {
    height: 5px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background: linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff0000);
    background-size: 400% 400%;
    animation: gradientShift 5s ease infinite;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.navbar {
    display: flex;
    justify-content: space-between;
    padding: 2rem 5%;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
}

.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* Horizontal Recommendations */
.shop-section { padding: 80px 5%; }

.horizontal-scroll {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 20px 0;
    scroll-snap-type: x mandatory;
}

.card {
    min-width: 280px;
    height: 350px;
    background: #1c1c1e;
    border-radius: 20px;
    padding: 30px;
    scroll-snap-align: start;
    transition: transform 0.3s ease;
    border: 1px solid #333;
}

.card:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
}

/* Hide scrollbar but keep functionality */
.horizontal-scroll::-webkit-scrollbar { display: none; }
        
