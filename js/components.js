/**
 * HealthBridge Portal - Global Components
 * This file handles injecting the global Header, Mobile Menu, and Footer into public pages.
 */

const components = {
    header: `
        <header class="glass-header fixed w-full top-0 z-50 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center gap-3 group">
                        <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                            <i class="fa-solid fa-briefcase-medical text-xl"></i>
                        </div>
                        <span class="text-xl font-bold text-heading tracking-tight">HealthBridge</span>
                    </a>

                    <!-- Desktop Navigation -->
                    <nav class="hidden xl:flex items-center space-x-8 nav-links">
                        <a href="index.html" class="nav-link font-medium hover:text-primary transition-colors" data-page="index.html">Home</a>
                        <a href="about.html" class="nav-link font-medium hover:text-primary transition-colors" data-page="about.html">About</a>
                        <a href="services.html" class="nav-link font-medium hover:text-primary transition-colors" data-page="services.html">Services</a>
                        <a href="doctors.html" class="nav-link font-medium hover:text-primary transition-colors" data-page="doctors.html">Doctors</a>
                        <a href="resources.html" class="nav-link font-medium hover:text-primary transition-colors" data-page="resources.html">Resources</a>
                        <a href="contact.html" class="nav-link font-medium hover:text-primary transition-colors" data-page="contact.html">Contact</a>
                        <a href="dashboard.html" class="nav-link font-medium hover:text-primary transition-colors" data-page="dashboard.html">Dashboard</a>
                    </nav>

                    <!-- Right Actions -->
                    <div class="hidden xl:flex items-center space-x-5">
                        <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-text-muted" aria-label="Toggle Theme">
                            <i id="theme-icon" class="fa-solid fa-moon text-lg"></i>
                        </button>

                        <div class="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>
                        <a href="signup.html" class="btn-primary py-2 px-5 text-sm shadow-md hover:shadow-lg">Sign Up</a>
                        <a href="dashboard.html" class="btn-secondary py-2 px-5 text-sm hidden">Dashboard</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="xl:hidden flex items-center gap-4">
                        <button id="theme-toggle-mobile" class="p-2 text-text-muted">
                            <i id="theme-icon-mobile" class="fa-solid fa-moon"></i>
                        </button>
                        <button id="mobile-menu-btn" class="p-2 text-heading focus:outline-none">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    `,
    mobileMenu: `
        <div id="mobile-menu" class="fixed inset-0 z-[60] bg-black/50 hidden translate-x-full transition-transform duration-300">
            <div class="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-surface shadow-2xl flex flex-col">
                <div class="p-5 flex justify-between items-center border-b border-custom">
                    <span class="text-lg font-bold text-heading">Menu</span>
                    <button id="mobile-menu-close" class="p-2 text-text-muted hover:text-primary transition-colors">
                        <i class="fa-solid fa-xmark text-2xl"></i>
                    </button>
                </div>
                <nav class="flex-1 overflow-y-auto py-5 px-6 flex flex-col space-y-5">
                    <a href="index.html" class="mobile-nav-link text-base-color text-lg hover:text-primary transition-colors" data-page="index.html">Home</a>
                    <a href="about.html" class="mobile-nav-link text-base-color text-lg hover:text-primary transition-colors" data-page="about.html">About</a>
                    <a href="services.html" class="mobile-nav-link text-base-color text-lg hover:text-primary transition-colors" data-page="services.html">Services</a>
                    <a href="doctors.html" class="mobile-nav-link text-base-color text-lg hover:text-primary transition-colors" data-page="doctors.html">Doctors</a>
                    <a href="resources.html" class="mobile-nav-link text-base-color text-lg hover:text-primary transition-colors" data-page="resources.html">Resources</a>
                    <a href="contact.html" class="mobile-nav-link text-base-color text-lg hover:text-primary transition-colors" data-page="contact.html">Contact</a>
                    <a href="dashboard.html" class="mobile-nav-link text-base-color text-lg hover:text-primary transition-colors" data-page="dashboard.html">Dashboard</a>
                    <hr class="border-custom">
                    <a href="signup.html" class="btn-primary justify-center w-full">Sign Up</a>

                </nav>
            </div>
        </div>
    `,
    footer: `
        <footer class="bg-surface text-muted pt-20 pb-10 border-t border-custom transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <!-- Brand -->
                    <div class="col-span-1 lg:col-span-1">
                        <a href="index.html" class="flex items-center gap-2 mb-6 group">
                            <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                                <i class="fa-solid fa-briefcase-medical text-sm"></i>
                            </div>
                            <span class="text-xl font-bold text-heading tracking-tight">HealthBridge</span>
                        </a>
                        <p class="text-sm mb-6 text-muted">
                            Bridging the gap between patients and premium healthcare. Secure, modern, and built for your wellness journey.
                        </p>
                        <div class="flex gap-4">
                            <a href="#" class="group w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors"><i class="fa-brands fa-x-twitter text-heading group-hover:text-white"></i></a>
                            <a href="#" class="group w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors"><i class="fa-brands fa-linkedin-in text-heading group-hover:text-white"></i></a>
                            <a href="#" class="group w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors"><i class="fa-brands fa-facebook-f text-heading group-hover:text-white"></i></a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-heading font-bold mb-6 text-lg">Quick Links</h4>
                        <ul class="space-y-3 text-sm">
                            <li><a href="index.html" class="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="about.html" class="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="services.html" class="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="doctors.html" class="hover:text-primary transition-colors">Find a Doctor</a></li>
                            <li><a href="resources.html" class="hover:text-primary transition-colors">Health Resources</a></li>
                            <li><a href="contact.html" class="hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="dashboard.html" class="hover:text-primary transition-colors">Patient Dashboard</a></li>
                        </ul>
                    </div>

                    <!-- Healthcare Services -->
                    <div>
                        <h4 class="text-heading font-bold mb-6 text-lg">Healthcare Services</h4>
                        <ul class="space-y-3 text-sm">
                            <li><a href="#" class="hover:text-primary transition-colors">Virtual Consultations</a></li>
                            <li><a href="#" class="hover:text-primary transition-colors">Medical Records</a></li>
                            <li><a href="#" class="hover:text-primary transition-colors">Prescription Refills</a></li>
                            <li><a href="#" class="hover:text-primary transition-colors">Lab Result Tracking</a></li>
                            <li><a href="#" class="hover:text-primary transition-colors">Insurance Claims</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="text-heading font-bold mb-6 text-lg">Contact Information</h4>
                        <ul class="space-y-4 text-sm">
                            <li class="flex items-start gap-3">
                                <i class="fa-solid fa-location-dot mt-1 text-primary"></i>
                                <span>123 HealthBridge Plaza,<br>Medical District, NY 10001</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <i class="fa-solid fa-phone text-primary"></i>
                                <span>+1 (800) 555-0199</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <i class="fa-solid fa-envelope text-primary"></i>
                                <span>support@healthbridge.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="pt-8 border-t border-custom flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                    <p>&copy; 2026 HealthBridge Portal. All rights reserved.</p>
                    <div class="flex flex-wrap justify-center gap-6">
                        <a href="#" class="hover:text-heading transition-colors">Privacy Policy</a>
                        <a href="#" class="hover:text-heading transition-colors">Terms & Conditions</a>
                        <a href="#" class="hover:text-heading transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
            
            <!-- Back to top button -->
            <button id="back-to-top" class="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-primary-dark z-50 hover:-translate-y-1" aria-label="Back to Top">
                <i class="fa-solid fa-arrow-up"></i>
            </button>
        </footer>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    // Inject Components
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) headerContainer.innerHTML = components.header;

    const mobileMenuContainer = document.getElementById('global-mobile-menu');
    if (mobileMenuContainer) mobileMenuContainer.innerHTML = components.mobileMenu;

    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) footerContainer.innerHTML = components.footer;

    // Set Active State
    setActiveNavigation();

    // Dispatch custom event to notify main.js that components are ready 
    // so it can bind event listeners (theme, mobile menu, RTL).
    document.dispatchEvent(new Event('componentsLoaded'));
});

function setActiveNavigation() {
    // Get current filename
    let path = window.location.pathname;
    let page = path.split("/").pop();
    
    // Default to index.html if path is empty (e.g. root domain)
    if (page === '' || page === '/') {
        page = 'index.html';
    }

    // Set active Desktop nav link
    const desktopLinks = document.querySelectorAll('.nav-link');
    desktopLinks.forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.remove('font-medium', 'hover:text-primary');
            link.classList.add('text-primary', 'font-semibold', 'border-b-2', 'border-primary', 'py-1');
        }
    });

    // Set active Mobile nav link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.remove('text-base-color', 'hover:text-primary');
            link.classList.add('text-primary', 'font-bold');
        }
    });
}
