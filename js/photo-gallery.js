// Add an event listener to the document. This ensures the code inside runs only after the entire HTML document is fully loaded.
document.addEventListener('DOMContentLoaded', function () {
    // Initialize a new Swiper instance on elements with the class '.mySwiper'.
    const swiper = new Swiper('.mySwiper', {
        // Space between each slide.
        spaceBetween: 30,

        // Center the active slide.
        centeredSlides: true,

        // Enable looping of slides.
        loop: true,

        // Autoplay settings.
        autoplay: {
            delay: 4000,           // Time delay between automatic slide transitions (in milliseconds).
            disableOnInteraction: false,  // Continue autoplay even after user interaction.
        },

        // Speed of the transition between slides (in milliseconds).
        speed: 1000,

        // Effect used for the transition. 'fade' makes slides fade in and out.
        effect: 'fade',

        // Pagination settings.
        pagination: {
            el: ".swiper-pagination",    // Element for pagination indicators.
            clickable: true,            // Allow clicking on pagination indicators to navigate to a specific slide.
        },

        // Navigation arrows settings.
        navigation: {
            nextEl: ".swiper-button-next",  // Element for the 'next' arrow.
            prevEl: ".swiper-button-prev",  // Element for the 'prev' arrow.
        },
    });
});
