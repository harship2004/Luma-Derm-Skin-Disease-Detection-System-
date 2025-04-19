document.addEventListener('DOMContentLoaded', function() {
    // Function to handle background image loading
    function loadBackgroundImage() {
        const bgContainer = document.querySelector('.background-container');
        const img = new Image();
        
        img.onload = function() {
            bgContainer.style.opacity = '1';
        };
        
        img.src = bgContainer.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
    }

    // Initialize background
    loadBackgroundImage();

    // Optional: Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const offset = window.pageYOffset;
        document.querySelector('.background-container').style.transform = 
            `translateY(${offset * 0.5}px)`; // Adjust the multiplier for effect intensity
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-Links');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        })
    }

    //Search Functionality
    const searchIcon = document.querySelector('.search-icon');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');

    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchOverlay.classList.add('active');
        });
    }

    if(closeSearch) {
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }

    //smooth scroll for navigation links
    document.querySelectorAll('nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',block: 'start'
                    });
                }
                //close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    //Header scroll effect
    let lastScroll = 0;
    const Header = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.classList.add('hide');
        } else {
            // Scrolling up
            header.classList.remove('hide');
        }
        
        if (currentScroll === 0) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Shopping bag counter
    const bagIcon = document.querySelector('.bag-icon');
    let itemCount = 0;

    if (bagIcon) {
        const updateBagCount = (count) => {
            const counter = bagIcon.querySelector('.bag-counter');
            if (count > 0) {
                if (!counter) {
                    const newCounter = document.createElement('span');
                    newCounter.className = 'bag-counter';
                    newCounter.textContent = count;
                    bagIcon.appendChild(newCounter);
                } else {
                    counter.textContent = count;
                }
            } else if (counter) {
                counter.remove();
            }
        };

        // Example usage:
        // updateBagCount(5); // Updates the counter to 5
    }
});

document.addEventListener('DOMContentLoaded', function() {
    //Theme Toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    function toggleTheme () {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('darkMode', isDarkMode);
    }

    themeToggle.addEventListener('click', toggleTheme);

    //Initialize theme
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-sun';
    }

    //Mobile Menu Toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class = "fas fa-bars"></i>';

    const navLinks = document.querySelector('.nav-Links');

    if (window.innerWidth <= 768) {
        document.querySelector('.navbar').insertBefore(mobileMenuButton, navLinks);
    }

    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.querySelector('i').className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });

    //Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closeset('.navbar')) {
            navLinks.classList.remove('active');
            mobileMenuButton.querySelector('i').className = 'fas fa-bars';
        }
    });

    //Active link highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-items').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active')
        }
    });
});