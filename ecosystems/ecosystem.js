document.addEventListener("DOMContentLoaded", () => {
    // --- NAVBAR SCROLL EFFECT ---
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // --- SCROLL REVEAL ANIMATIONS ---
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        reveals.forEach(element => {
            let windowHeight = window.innerHeight;
            let elementTop = element.getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});