// America page filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const americaArticles = document.querySelectorAll('.america-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');

            americaArticles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');

                if (selectedCategory === 'all' || articleCategory === selectedCategory) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
});