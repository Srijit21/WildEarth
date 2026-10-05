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

    // --- PRELOADER LOGIC ---
    const preloader = document.getElementById("preloader");
    
    // Hide preloader after 1 second
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("fade-out");
        }, 1000);
    }

    // --- HOMEPAGE HERO VIDEO & SLIDER LOGIC ---
    const videos = document.querySelectorAll(".hero-video-bg");
    const texts = document.querySelectorAll(".slider-text");
    const dots = document.querySelectorAll(".dot");
    
    let currentIndex = 0;
    const intervalTime = 5000; // Updated to 5 seconds per slide as requested
    let slideInterval;

    // Function to switch to a specific slide
    function goToSlide(index) {
        if (videos.length === 0) return; // Safety check if elements don't exist on sub-pages

        // Remove active class from all
        videos.forEach(video => video.classList.remove("active"));
        texts.forEach(text => text.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        // Add active class to target index
        currentIndex = index;
        videos[currentIndex].classList.add("active");
        if (texts[currentIndex]) texts[currentIndex].classList.add("active");
        if (dots[currentIndex]) dots[currentIndex].classList.add("active");
    }

    // Function for automatic cycling
    function nextSlide() {
        if (videos.length === 0) return;
        let nextIndex = (currentIndex + 1) % videos.length;
        goToSlide(nextIndex);
    }

    // Start the automatic interval timer
    function startSlider() {
        if (videos.length === 0) return;
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Reset timer on manual interaction
    function resetTimer() {
        clearInterval(slideInterval);
        startSlider();
    }

    // Add click event listeners to dots for manual navigation (if dots exist)
    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                goToSlide(index);
                resetTimer();
            });
        });
    }

    // Initialize the slider loop (if hero videos exist on the page)
    if (videos.length > 0) {
        startSlider();
    }
});