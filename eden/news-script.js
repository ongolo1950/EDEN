// News page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('#news-articles .article-card');

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

    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    let articlesShown = 6; // Initially show 6 articles
    const articlesPerLoad = 3;

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const allArticles = Array.from(articles);
            const hiddenArticles = allArticles.filter(article => article.style.display !== 'none');

            for (let i = articlesShown; i < Math.min(articlesShown + articlesPerLoad, hiddenArticles.length); i++) {
                if (hiddenArticles[i]) {
                    hiddenArticles[i].style.display = 'flex';
                }
            }

            articlesShown += articlesPerLoad;

            // Hide button if all articles are shown
            if (articlesShown >= hiddenArticles.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }

    // Initially hide articles beyond the first 6
    articles.forEach((article, index) => {
        if (index >= 6) {
            article.style.display = 'none';
        }
    });

    // Newsletter subscription for news page
    const newsletterButton = document.querySelector('.newsletter button');
    const newsletterInput = document.querySelector('.newsletter input');

    if (newsletterButton && newsletterInput) {
        newsletterButton.addEventListener('click', function() {
            const email = newsletterInput.value.trim();
            if (email && validateEmail(email)) {
                alert('Thank you for subscribing! You will receive breaking news alerts.');
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