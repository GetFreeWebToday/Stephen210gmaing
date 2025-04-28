document.addEventListener("DOMContentLoaded", function () {
    const footerContent = document.getElementById("footer-content");
    const toggleBtn = document.getElementById("toggle-btn");

    // Toggle Footer Visibility
    toggleBtn.addEventListener("click", function () {
        footerContent.style.display = footerContent.style.display === "none" ? "block" : "none";
    });

    // Navbar Hover Effect
    const navLinks = document.querySelectorAll(".animated-nav ul li");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
        });
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Quote Slider for About Page
    const quotes = document.querySelectorAll("#quote-slider p");
    let currentQuote = 0;

    setInterval(() => {
        quotes.forEach((quote, index) => {
            quote.style.display = index === currentQuote ? "block" : "none";
        });
        currentQuote = (currentQuote + 1) % quotes.length;
    }, 3000);
});

// Device Detection
document.addEventListener("DOMContentLoaded", function () {
    function detectDevice() {
        let width = window.innerWidth;

        if (width <= 768) {
            document.body.classList.add("mobile-view");
            document.body.classList.remove("tablet-view", "desktop-view");
        } else if (width <= 1024) {
            document.body.classList.add("tablet-view");
            document.body.classList.remove("mobile-view", "desktop-view");
        } else {
            document.body.classList.add("desktop-view");
            document.body.classList.remove("mobile-view", "tablet-view");
        }
    }

    detectDevice();
    window.addEventListener("resize", detectDevice);
});
