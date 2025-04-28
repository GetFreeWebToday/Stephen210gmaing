document.addEventListener("DOMContentLoaded", function () {
    const footerContent = document.getElementById("footer-content");
    const toggleBtn = document.getElementById("toggle-btn");

    // Toggle Footer Visibility
    toggleBtn.addEventListener("click", function () {
        footerContent.style.display = footerContent.style.display === "none" ? "block" : "none";
    });

    // Navbar Hover Effect
    document.querySelectorAll(".animated-nav ul li").forEach(link => {
        link.addEventListener("mouseover", () => link.style.transform = "scale(1.2)");
        link.addEventListener("mouseout", () => link.style.transform = "scale(1)");
    });

    // Quote Slider for About Page
    const quotes = document.querySelectorAll("#quote-slider p");
    let currentQuote = 0;

    function updateQuotes() {
        quotes.forEach((quote, index) => {
            quote.style.display = index === currentQuote ? "block" : "none";
        });
        currentQuote = (currentQuote + 1) % quotes.length;
    }

    setInterval(updateQuotes, 3000);

    // Device Detection & Responsive Adjustments
    function detectDevice() {
        const width = window.innerWidth;

        document.body.classList.remove("mobile-view", "tablet-view", "desktop-view");

        if (width <= 768) {
            document.body.classList.add("mobile-view");
        } else if (width <= 1024) {
            document.body.classList.add("tablet-view");
        } else {
            document.body.classList.add("desktop-view");
        }
    }

    detectDevice();
    window.addEventListener("resize", detectDevice);
});

document.addEventListener("DOMContentLoaded", function () {
    const footerContent = document.getElementById("footer-content");
    const toggleBtn = document.getElementById("toggle-btn");

    // Toggle Footer Visibility
    toggleBtn.addEventListener("click", function () {
        footerContent.style.display = footerContent.style.display === "none" ? "block" : "none";
    });

    // Language Selector Functionality
    const languageDropdown = document.getElementById("language");
    languageDropdown.addEventListener("change", function () {
        const selectedLanguage = languageDropdown.value;
        
        if (selectedLanguage === "es") {
            document.body.innerHTML = document.body.innerHTML.replace("Welcome to Stephen210Gaming!", "¡Bienvenido a Stephen210Gaming!");
        } else {
            document.body.innerHTML = document.body.innerHTML.replace("¡Bienvenido a Stephen210Gaming!", "Welcome to Stephen210Gaming!");
        }
    });
});
