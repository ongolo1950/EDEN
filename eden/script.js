// Simple JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
                // In a real site, this would submit to a search endpoint
            } else {
                alert('Please enter a search term');
            }
        });

        // Allow Enter key in search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }

    // Newsletter subscription
    const newsletterButton = document.querySelector('.newsletter button');
    const newsletterInput = document.querySelector('.newsletter input');

    if (newsletterButton && newsletterInput) {
        newsletterButton.addEventListener('click', function() {
            const email = newsletterInput.value.trim();
            if (email && validateEmail(email)) {
                alert('Thank you for subscribing! You will receive our latest news.');
                newsletterInput.value = '';
            } else {
                alert('Please enter a valid email address');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a:not(.dropdown-content a)');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add hover effects for article cards
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // Breaking news ticker pause on hover
    const ticker = document.querySelector('.ticker span');
    if (ticker) {
        ticker.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });

        ticker.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== ENHANCED ANIMATIONS AND INTERACTIONS =====

// Intersection Observer for scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.article-card, .sidebar-section, .featured-article');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Enhanced article card interactions
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach((card, index) => {
        // Add staggered animation delay
        card.style.animationDelay = `${index * 0.1}s`;

        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });

        // Click animation
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }, 150);
        });
    });

    // Button click animations
    const buttons = document.querySelectorAll('button, .category-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Navigation enhancement
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Logo click animation
    const logo = document.querySelector('.logo h1');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }

    // Enhanced search bar
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.boxShadow = '0 0 20px rgba(231, 76, 60, 0.3)';
        });

        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            this.parentElement.style.boxShadow = 'none';
        });
    }

    // Parallax effect for featured images
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        const featuredImages = document.querySelectorAll('.featured-article img');
        featuredImages.forEach(img => {
            img.style.transform = `translateY(${rate * 0.1}px)`;
        });
    });

    // Loading animation for load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.classList.add('loading');
            this.textContent = 'Loading...';

            // Simulate loading (remove in production)
            setTimeout(() => {
                this.classList.remove('loading');
                this.textContent = 'Load More Articles';
            }, 2000);
        });
    }

    // Enhanced dropdown animations
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.dropdown-content');
        if (content) {
            dropdown.addEventListener('mouseenter', function() {
                content.style.opacity = '0';
                content.style.transform = 'translateY(-10px)';
                content.style.display = 'block';

                setTimeout(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }, 50);
            });

            dropdown.addEventListener('mouseleave', function() {
                content.style.opacity = '0';
                content.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            });
        }
    });

    // Typing effect for page headers (optional)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typing effect to main headings (uncomment to enable)
    // const mainHeadings = document.querySelectorAll('h1');
    // mainHeadings.forEach(heading => {
    //     const text = heading.textContent;
    //     typeWriter(heading, text, 100);
    // });

    // Progress bar for reading
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #e74c3c, #c0392b);
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Enhanced mobile menu (if needed in future)
    function checkMobile() {
        if (window.innerWidth <= 768) {
            // Add mobile-specific animations
            document.body.classList.add('mobile-animations');
        } else {
            document.body.classList.remove('mobile-animations');
        }
    }

    window.addEventListener('resize', checkMobile);
    checkMobile();
});

// ===== HEADER NEWS TICKER ENHANCEMENTS =====

document.addEventListener('DOMContentLoaded', function() {
    // Header ticker enhancements
    const tickerItems = document.querySelectorAll('.ticker-item');
    const tickerContent = document.querySelector('.ticker-content');

    if (tickerItems.length > 0 && tickerContent) {
        // Duplicate ticker items for seamless loop
        tickerItems.forEach(item => {
            const clone = item.cloneNode(true);
            tickerContent.appendChild(clone);
        });

        // Add click functionality to ticker items
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('ticker-item')) {
                const newsTitle = event.target.textContent.replace(' • ', '').trim();
                // Find corresponding article and open modal
                const articles = document.querySelectorAll('.article-card, .sidebar-article, .featured-article');
                let foundArticle = null;

                articles.forEach(article => {
                    const title = article.querySelector('h1, h2, h3, h4');
                    if (title && title.textContent.includes(newsTitle.substring(0, 20))) {
                        foundArticle = article;
                    }
                });

                if (foundArticle) {
                    // Trigger modal for found article
                    foundArticle.click();
                } else {
                    // Show notification for breaking news
                    showTickerNotification(newsTitle);
                }
            }
        });

        // Pause/resume ticker on mouse enter/leave
        const tickerContainer = document.querySelector('.header-news-ticker');
        if (tickerContainer) {
            tickerContainer.addEventListener('mouseenter', function() {
                tickerItems.forEach(item => {
                    item.style.animationPlayState = 'paused';
                });
            });

            tickerContainer.addEventListener('mouseleave', function() {
                tickerItems.forEach(item => {
                    item.style.animationPlayState = 'running';
                });
            });
        }
    }

    // Function to show ticker notification
    function showTickerNotification(title) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'ticker-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">📰</span>
                <div class="notification-text">
                    <strong>Breaking News:</strong><br>
                    ${title}
                </div>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10001;
            max-width: 300px;
            animation: slideInRight 0.5s ease-out;
            cursor: pointer;
        `;

        document.body.appendChild(notification);

        // Close notification after 5 seconds or on click
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => notification.remove());

        notification.addEventListener('click', () => notification.remove());

        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.5s ease-in';
                setTimeout(() => notification.remove(), 500);
            }
        }, 5000);
    }
});

// ===== MODAL FUNCTIONALITY =====

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('articleModal');
    const closeBtn = document.querySelector('.close-modal');
    let currentArticle = null;

    // Close modal functions
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close modal when clicking the X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Function to open modal with article content
    function openArticleModal(articleElement) {
        const image = articleElement.querySelector('img');
        const category = articleElement.querySelector('.category');
        const title = articleElement.querySelector('h2, h3, h4');
        const meta = articleElement.querySelector('.meta');

        // Populate modal with article data
        if (image) document.getElementById('modalImage').src = image.src;
        if (category) document.getElementById('modalCategory').textContent = category.textContent;
        if (title) document.getElementById('modalTitle').textContent = title.textContent;
        if (meta) document.getElementById('modalDate').textContent = meta.textContent;

        // Generate full article content based on the article
        const fullContent = generateArticleContent(title ? title.textContent : '', category ? category.textContent : '');
        document.getElementById('modalContent').innerHTML = fullContent;

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Smooth scroll to top of modal
        modal.scrollTop = 0;
    }

    // Function to generate full article content
    function generateArticleContent(title, category) {
        const contentTemplates = {
            'NEWS': {
                'Cameroon\'s Education Sector Sees Major Reform Initiative': `
                    <p>In a groundbreaking move towards educational excellence, the Ministry of Education has announced comprehensive reforms aimed at modernizing learning institutions across the South-West region. The initiative focuses on digital integration and teacher empowerment.</p>

                    <h3>Key Reform Areas</h3>
                    <p>The reform package includes several critical components designed to address the current challenges in the education sector:</p>
                    <ul>
                        <li><strong>Digital Infrastructure:</strong> Installation of computer labs and internet connectivity in all secondary schools</li>
                        <li><strong>Teacher Training:</strong> Comprehensive professional development programs for educators</li>
                        <li><strong>Curriculum Modernization:</strong> Integration of STEM subjects and practical skills training</li>
                        <li><strong>School Feeding Program:</strong> Expansion to ensure no child goes hungry during school hours</li>
                    </ul>

                    <h3>Implementation Timeline</h3>
                    <p>The Ministry has outlined a phased implementation approach:</p>
                    <blockquote>"We are committed to ensuring that every child in the South-West region has access to quality education. This reform represents our dedication to building a brighter future for our youth." - Minister of Education</blockquote>

                    <p><strong>Phase 1 (January - June 2026):</strong> Pilot programs in 50 selected schools<br>
                    <strong>Phase 2 (July - December 2026):</strong> Expansion to all secondary institutions<br>
                    <strong>Phase 3 (2027):</strong> Primary school integration and monitoring</p>

                    <h3>Expected Impact</h3>
                    <p>Educational experts predict significant improvements in learning outcomes, with projected increases in examination pass rates and higher transition rates to tertiary institutions. The reforms are expected to position Cameroon as a leader in educational innovation in Central Africa.</p>
                `,
                'New Road Project Connects Remote Communities': `
                    <p>A major infrastructure development project has been launched to connect previously isolated communities in the South-West region, promising to revolutionize transportation and economic opportunities.</p>

                    <h3>Project Overview</h3>
                    <p>The 150-kilometer highway project, funded through a combination of government and international development funds, will link over 20 rural communities to major urban centers.</p>

                    <h3>Route Details</h3>
                    <p>The new highway will traverse challenging terrain, including mountainous regions and dense forest areas. Engineering teams have designed innovative solutions to minimize environmental impact while ensuring road stability.</p>

                    <h3>Economic Benefits</h3>
                    <p>Local economists project that the completed highway will boost regional GDP by 25% within the first three years of operation, creating thousands of jobs and opening new markets for agricultural products.</p>
                `
            },
            'BUSINESS': {
                'Local Entrepreneurs Drive Economic Growth in Limbe': `
                    <p>Small and medium enterprises are reshaping the economic landscape of Limbe as young entrepreneurs embrace innovation and technology to create sustainable businesses.</p>

                    <h3>Success Stories</h3>
                    <p>Several local startups have gained national recognition for their innovative approaches to traditional industries:</p>
                    <ul>
                        <li><strong>AgriTech Solutions:</strong> Mobile app connecting farmers directly to urban markets</li>
                        <li><strong>Eco-Friendly Packaging:</strong> Biodegradable alternatives to plastic packaging</li>
                        <li><strong>Financial Services:</strong> Mobile banking solutions for underserved communities</li>
                    </ul>

                    <h3>Government Support</h3>
                    <p>The local government has established incubation centers and provided seed funding for promising startups. Business development workshops and mentorship programs have been instrumental in building entrepreneurial capacity.</p>

                    <h3>Future Outlook</h3>
                    <p>Industry analysts predict that Limbe could become a regional hub for innovation, attracting investment and creating high-quality employment opportunities for the youth.</p>
                `
            },
            'CULTURE': {
                'Traditional Chiefs Unite for Cultural Preservation Summit': `
                    <p>Leaders from across the region gathered to discuss strategies for maintaining cultural heritage in modern times, emphasizing the importance of preserving traditional values while embracing progress.</p>

                    <h3>Summit Highlights</h3>
                    <p>The three-day summit brought together traditional rulers, cultural practitioners, and government representatives to address pressing issues facing cultural preservation.</p>

                    <h3>Key Discussions</h3>
                    <ul>
                        <li>Documentation and digitization of oral traditions</li>
                        <li>Integration of cultural education in school curricula</li>
                        <li>Economic opportunities through cultural tourism</li>
                        <li>Protection of sacred sites and traditional knowledge</li>
                    </ul>

                    <h3>Action Plan</h3>
                    <p>The summit concluded with a comprehensive action plan that includes establishing cultural centers, creating digital archives, and developing tourism packages that respect traditional customs.</p>
                `
            },
            'SPORTS': {
                'PWD Bamenda Advances to Quarter Finals': `
                    <p>The team's impressive performance continues as they secure their position in the national championship, showcasing exceptional skill and determination.</p>

                    <h3>Match Highlights</h3>
                    <p>PWD Bamenda's victory was characterized by strategic gameplay and outstanding individual performances. The team's defense held strong against multiple attacks, while their offense capitalized on key opportunities.</p>

                    <h3>Player Recognition</h3>
                    <p>Several players earned special recognition for their contributions:
                    <ul>
                        <li><strong>Man of the Match:</strong> Striker who scored two crucial goals</li>
                        <li><strong>Defensive Hero:</strong> Goalkeeper with multiple saves</li>
                        <li><strong>Rising Star:</strong> Young midfielder showing great potential</li>
                    </ul>

                    <h3>Coach's Comments</h3>
                    <blockquote>"This victory is a testament to the hard work and dedication of our players. We're focused on building momentum as we advance in the tournament." - Head Coach</blockquote>

                    <h3>Next Challenge</h3>
                    <p>PWD Bamenda will face a formidable opponent in the quarter-finals, requiring continued focus and tactical discipline to maintain their winning streak.</p>
                `,
                'Cameroon\'s Rising Stars Shine in Youth League': `
                    <p>Young football talents from across Cameroon are making their mark in the national youth league, showcasing the country's rich football heritage and promising future.</p>

                    <h3>Talent Showcase</h3>
                    <p>The league has become a platform for discovering and nurturing young talent, with several players already attracting attention from professional clubs.</p>

                    <h3>Development Programs</h3>
                    <p>Football academies across the country are implementing comprehensive development programs that combine technical training with academic education.</p>
                `
            },
            'SOCIETY': {
                'Community Health Campaign Reaches Rural Villages': `
                    <p>Healthcare workers bring essential medical services to underserved communities in the Southwest Region, addressing critical health needs and promoting preventive care.</p>

                    <h3>Campaign Scope</h3>
                    <p>The month-long initiative has reached over 50 villages, providing comprehensive healthcare services including:</p>
                    <ul>
                        <li>General medical consultations</li>
                        <li>Maternal and child health services</li>
                        <li>Immunization programs</li>
                        <li>Health education workshops</li>
                        <li>Mental health support</li>
                    </ul>

                    <h3>Key Achievements</h3>
                    <p>The campaign has successfully:
                    <ul>
                        <li>Provided medical care to over 10,000 individuals</li>
                        <li>Administered vaccinations to 3,500 children</li>
                        <li>Conducted health education sessions for 2,000 community members</li>
                        <li>Identified and referred 150 cases requiring specialized treatment</li>
                    </ul>

                    <h3>Community Impact</h3>
                    <p>Local leaders have praised the initiative for bringing healthcare services closer to the people and raising awareness about preventive health measures.</p>
                `
            },
            'HI-TECH': {
                'Tech Hub Opens in Buea to Foster Innovation': `
                    <p>The new facility provides resources and mentorship for aspiring tech entrepreneurs in Silicon Mountain, positioning Buea as a technology innovation center.</p>

                    <h3>Facility Features</h3>
                    <p>The state-of-the-art tech hub includes:
                    <ul>
                        <li>Modern computer labs with high-speed internet</li>
                        <li>Co-working spaces for startups</li>
                        <li>Meeting rooms and presentation facilities</li>
                        <li>Mentorship programs with industry experts</li>
                        <li>Access to funding and investment networks</li>
                    </ul>

                    <h3>Educational Programs</h3>
                    <p>The hub offers comprehensive training programs in:
                    <ul>
                        <li>Software development and programming</li>
                        <li>Digital marketing and e-commerce</li>
                        <li>Data analysis and business intelligence</li>
                        <li>UI/UX design and digital media</li>
                        <li>Entrepreneurship and business development</li>
                    </ul>

                    <h3>Economic Impact</h3>
                    <p>Industry experts predict that the tech hub will create hundreds of jobs and contribute significantly to the local economy through technology-driven businesses.</p>
                `
            },
            'ENTERTAINMENT': {
                'Local Artist Wins International Award': `
                    <p>A talented Cameroonian artist has achieved international recognition, bringing pride to the nation and inspiring a new generation of creative professionals.</p>

                    <h3>Achievement Details</h3>
                    <p>The artist received the prestigious African Creativity Award at the International Arts Festival, competing against artists from 25 countries.</p>

                    <h3>Artistic Style</h3>
                    <p>The artist's unique blend of traditional Cameroonian motifs with contemporary techniques has garnered widespread acclaim for its innovative approach.</p>

                    <h3>Future Projects</h3>
                    <p>The recognition opens doors to international collaborations and exhibitions, promising to showcase Cameroonian art on the global stage.</p>
                `
            },
            'OPINION': {
                'The Future of Rural Development in Cameroon': `
                    <p>As Cameroon continues its journey towards sustainable development, rural communities represent both challenges and immense opportunities for national progress.</p>

                    <h3>Current Challenges</h3>
                    <p>Rural areas face multiple development hurdles:
                    <ul>
                        <li>Limited access to quality education</li>
                        <li>Inadequate healthcare infrastructure</li>
                        <li>Poor transportation networks</li>
                        <li>Limited access to financial services</li>
                        <li>Climate change impacts on agriculture</li>
                    </ul>

                    <h3>Development Strategies</h3>
                    <p>Effective rural development requires a multi-faceted approach:
                    <ul>
                        <li><strong>Infrastructure Investment:</strong> Roads, electricity, and communication networks</li>
                        <li><strong>Educational Reform:</strong> Quality schools and vocational training</li>
                        <li><strong>Agricultural Innovation:</strong> Modern farming techniques and market access</li>
                        <li><strong>Financial Inclusion:</strong> Banking services and microfinance</li>
                        <li><strong>Technology Integration:</strong> Digital solutions for rural challenges</li>
                    </ul>

                    <h3>Success Stories</h3>
                    <p>Several communities have demonstrated that targeted interventions can transform rural economies and improve quality of life.</p>
                `
            },
            'EDITORIAL': {
                'Building Bridges: Unity in Diversity': `
                    <p>In an increasingly divided world, Cameroon stands as a beacon of unity, demonstrating how diverse communities can coexist and thrive together.</p>

                    <h3>Cultural Mosaic</h3>
                    <p>Cameroun's rich cultural diversity, with over 250 ethnic groups and languages, represents both a unique heritage and a source of national strength.</p>

                    <h3>Unity Through Understanding</h3>
                    <p>Building bridges between communities requires:
                    <ul>
                        <li>Cultural exchange programs</li>
                        <li>Inter-community dialogue</li>
                        <li>Shared economic opportunities</li>
                        <li>Common national identity</li>
                    </ul>

                    <h3>Future Vision</h3>
                    <p>As Cameroon moves forward, its success will depend on its ability to harness its diversity as a source of innovation and strength.</p>
                `
            },
            'ANALYSIS': {
                'Economic Outlook for 2026': `
                    <p>As we approach 2026, several economic indicators suggest a period of cautious optimism tempered by global uncertainties.</p>

                    <h3>Growth Projections</h3>
                    <p>Economists predict moderate growth driven by:
                    <ul>
                        <li>Agricultural sector recovery</li>
                        <li>Infrastructure development projects</li>
                        <li>Increasing foreign investment</li>
                        <li>Digital economy expansion</li>
                    </ul>

                    <h3>Challenges Ahead</h3>
                    <p>Key challenges include:
                    <ul>
                        <li>Global economic slowdown</li>
                        <li>Climate change impacts</li>
                        <li>Youth unemployment</li>
                        <li>Inflationary pressures</li>
                    </ul>

                    <h3>Policy Recommendations</h3>
                    <p>Government policies should focus on sustainable development, human capital investment, and economic diversification.</p>
                `
            }
        };

        // Try to find content based on category and title
        if (contentTemplates[category] && contentTemplates[category][title]) {
            return contentTemplates[category][title];
        }

        // Fallback content for articles without specific content
        return `
            <p>This comprehensive article explores the latest developments in ${category.toLowerCase()} and their impact on our community. Our detailed coverage provides in-depth analysis and insights into this important topic.</p>

            <h3>Background and Context</h3>
            <p>The current situation represents a significant development that affects various aspects of our society. Understanding the full scope of this issue requires examining multiple perspectives and considering long-term implications.</p>

            <h3>Key Developments</h3>
            <p>Recent events have brought this topic to the forefront of public discussion. Stakeholders from various sectors are actively engaged in addressing the challenges and opportunities presented by these changes.</p>

            <h3>Community Impact</h3>
            <p>The implications for our local community are substantial and multifaceted. From economic considerations to social dynamics, these developments will shape our future in meaningful ways.</p>

            <h3>Looking Ahead</h3>
            <p>As we move forward, continued monitoring and adaptive strategies will be essential. The coming months will be crucial in determining the ultimate trajectory of these important developments.</p>

            <p><em>For more detailed coverage and updates, stay tuned to EDEN Newspaper.</em></p>
        `;
    }

    // Add click event listeners to all article cards and sidebar articles
    document.addEventListener('click', function(event) {
        const articleCard = event.target.closest('.article-card, .sidebar-article, .featured-article');
        if (articleCard && !event.target.closest('a')) {
            event.preventDefault();
            openArticleModal(articleCard);
        }
    });

    // Modal action buttons functionality
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('share-btn')) {
            const title = document.getElementById('modalTitle').textContent;
            const url = window.location.href;
            if (navigator.share) {
                navigator.share({
                    title: title,
                    url: url
                });
            } else {
                navigator.clipboard.writeText(`${title} - ${url}`).then(() => {
                    alert('Article link copied to clipboard!');
                });
            }
        }

        if (event.target.classList.contains('bookmark-btn')) {
            const title = document.getElementById('modalTitle').textContent;
            alert(`"${title}" has been added to your bookmarks!`);
        }

        if (event.target.classList.contains('print-btn')) {
            window.print();
        }
    });

    // Ticker article click functionality
    document.addEventListener('click', function(event) {
        const tickerArticle = event.target.closest('.ticker-article');
        if (tickerArticle) {
            event.preventDefault();

            // Create a temporary article element for the modal
            const tempArticle = document.createElement('div');
            tempArticle.className = 'article-card';

            // Get data from ticker article
            const img = tickerArticle.querySelector('img');
            const category = tickerArticle.querySelector('.ticker-category');
            const title = tickerArticle.querySelector('.ticker-title');

            // Create image element
            if (img) {
                const imgElement = document.createElement('img');
                imgElement.src = img.src;
                imgElement.alt = title ? title.textContent : 'Article image';
                tempArticle.appendChild(imgElement);
            }

            // Create category element
            if (category) {
                const categoryElement = document.createElement('div');
                categoryElement.className = 'category';
                categoryElement.textContent = category.textContent;
                tempArticle.appendChild(categoryElement);
            }

            // Create title element
            if (title) {
                const titleElement = document.createElement('h3');
                titleElement.textContent = title.textContent;
                tempArticle.appendChild(titleElement);
            }

            // Create meta element
            const metaElement = document.createElement('div');
            metaElement.className = 'meta';
            metaElement.textContent = 'EDEN Newspaper - Latest News';
            tempArticle.appendChild(metaElement);

            // Open modal with the temporary article
            openArticleModal(tempArticle);
        }
    });
});