// Business page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('#business-articles .article-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            articles.forEach(article => {
                if (category === 'all' || article.getAttribute('data-category') === category) {
                    article.style.display = 'flex';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });

    // Newsletter subscription for business page
    const newsletterButton = document.querySelector('.newsletter button');
    const newsletterInput = document.querySelector('.newsletter input');

    if (newsletterButton && newsletterInput) {
        newsletterButton.addEventListener('click', function() {
            const email = newsletterInput.value.trim();
            if (email && validateEmail(email)) {
                alert('Thank you for subscribing! You will receive daily business insights.');
                newsletterInput.value = '';
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}