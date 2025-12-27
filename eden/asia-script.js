// Asia page filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const asiaArticles = document.querySelectorAll('.asia-card');

    // Filter articles based on category
    function filterArticles(category) {
        asiaArticles.forEach(article => {
            const articleCategory = article.getAttribute('data-category');
            if (category === 'all' || articleCategory === category) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    // Add click event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter articles
            const category = this.getAttribute('data-category');
            filterArticles(category);
        });
    });

    // Smooth scrolling for sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar a[href^="#"]');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Newsletter subscription
    const newsletterButton = document.querySelector('.newsletter button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function() {
            const emailInput = document.querySelector('.newsletter input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our Asia newsletter! You will receive updates on Asian news and developments.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Read more functionality
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Full article content would be displayed here. This is a placeholder for the complete article.');
        });
    });
});