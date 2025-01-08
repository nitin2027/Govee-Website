let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slides .slide');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
let slideInterval;

// Function to change the slide
function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

// Function to start the automatic slide change
function startSlideInterval() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        changeSlide();
    }, 5000); // Change slide every 5 seconds
}

// Function to stop the automatic slide change
function stopSlideInterval() {
    clearInterval(slideInterval);
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', () => {
    stopSlideInterval(); // Stop the interval on user interaction
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    changeSlide();
    startSlideInterval(); // Restart the interval
});

nextButton.addEventListener('click', () => {
    stopSlideInterval(); // Stop the interval on user interaction
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    changeSlide();
    startSlideInterval(); // Restart the interval
});

// Initialize the carousel on page load
changeSlide();
startSlideInterval();

// Event listeners for "Buy Now" buttons
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        stopSlideInterval(); // Stop the interval on user interaction
        // Redirect to the cart page (replace 'cart.html' with your actual cart URL)
        window.location.href = 'cart.html'; // Change this to your cart page URL
    });
});
