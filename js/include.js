// Load Header and Footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Load Header
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            setTimeout(initNavigation, 200);
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Initialize Navigation - SIMPLE & WORKING VERSION
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu) {
        console.error('Hamburger or navMenu not found!');
        return;
    }

    console.log('Navigation initialized successfully');
    
    // Set active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Toggle menu function
    function toggleMenu() {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            // Close menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Menu closed');
        } else {
            // Open menu
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Menu opened - Width:', navMenu.offsetWidth, 'px');
        }
    }

    // Hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Link clicks - close menu
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Click outside - close menu
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active')) {
            const clickedInsideMenu = navMenu.contains(event.target);
            const clickedHamburger = hamburger.contains(event.target);
            
            if (!clickedInsideMenu && !clickedHamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // ESC key - close menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}