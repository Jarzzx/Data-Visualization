document.addEventListener('DOMContentLoaded', function() {
    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.tool-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay for sequential animation
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // 100ms delay between each card
            }
        });
    }, observerOptions);

    // Initialize cards
    cards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        
        // Start observing
        observer.observe(card);
    });
}); 