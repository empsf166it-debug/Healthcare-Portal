document.addEventListener('componentsLoaded', initAll);

document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('global-header')) {
        initAll();
    }
});

function initAll() {
    initTheme();
    initRTL();
    initMobileMenu();
    initBackToTop();
    
    // Initialize AOS Animation Library if present
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50
        });
    }
}

/* --- Theme Toggle (Light/Dark Mode) --- */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    
    // Check localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
        htmlEl.classList.add('dark');
        updateThemeIcon(true);
    } else {
        htmlEl.classList.remove('dark');
        updateThemeIcon(false);
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlEl.classList.toggle('dark');
            const isDark = htmlEl.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcon(isDark);
        });
    }
}

function updateThemeIcon(isDark) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        // Toggle FontAwesome classes or similar depending on what's used
        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

/* --- RTL Toggle --- */
function initRTL() {
    const rtlToggleBtn = document.getElementById('rtl-toggle');
    const htmlEl = document.documentElement;
    
    const storedRTL = localStorage.getItem('rtl');
    if (storedRTL === 'true') {
        htmlEl.setAttribute('dir', 'rtl');
    } else {
        htmlEl.setAttribute('dir', 'ltr');
    }
    
    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
            const currentDir = htmlEl.getAttribute('dir');
            if (currentDir === 'rtl') {
                htmlEl.setAttribute('dir', 'ltr');
                localStorage.setItem('rtl', 'false');
            } else {
                htmlEl.setAttribute('dir', 'rtl');
                localStorage.setItem('rtl', 'true');
            }
        });
    }
}

/* --- Mobile Menu --- */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full', 'hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }
    
    if (mobileMenuCloseBtn && mobileMenu) {
        mobileMenuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            setTimeout(() => mobileMenu.classList.add('hidden'), 300); // Wait for transition
            document.body.style.overflow = '';
        });
    }
}

/* --- Back to Top --- */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
            backToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
