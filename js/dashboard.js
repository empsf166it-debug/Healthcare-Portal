document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initCharts();
});

/* --- Sidebar Mobile Toggle --- */
function initSidebar() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (sidebarToggle && sidebar && overlay) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        });
    }
}

/* --- SPA View Switching --- */
window.switchView = function(viewId, btnEl) {
    // Hide all views
    const views = document.querySelectorAll('.dashboard-view');
    views.forEach(v => v.classList.add('hidden'));

    // Show selected view or placeholder
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.remove('hidden');
    } else {
        const placeholder = document.getElementById('view-placeholder');
        if (placeholder) {
            placeholder.classList.remove('hidden');
        }
    }

    // Update active state in sidebar
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active', 'bg-primary/10', 'text-primary');
        btn.classList.add('text-text-muted');
        
        // Remove active class from icon if present
        const icon = btn.querySelector('i');
        if(icon) {
            // some icon logic if needed
        }
    });

    if (btnEl) {
        btnEl.classList.remove('text-text-muted');
        btnEl.classList.add('active', 'bg-primary/10', 'text-primary');
    }

    // Update title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = viewId.charAt(0).toUpperCase() + viewId.slice(1);
    }
    
    // Close mobile sidebar if open
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if(window.innerWidth < 768 && sidebar && overlay) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

/* --- Chart.js Initialization --- */
function initCharts() {
    // Wait slightly to ensure styles are applied for theme colors
    setTimeout(() => {
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#0284c7';
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text-muted').trim() || '#64748b';
        const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim() || '#e2e8f0';

        Chart.defaults.color = textColor;
        Chart.defaults.font.family = "'Inter', sans-serif";
        
        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: gridColor },
                    border: { display: false }
                },
                x: {
                    grid: { display: false },
                    border: { display: false }
                }
            }
        };

        // Vitals Overview Chart (Overview Page)
        const ctxOverview = document.getElementById('vitalsOverviewChart');
        if (ctxOverview) {
            new Chart(ctxOverview, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Heart Rate',
                        data: [72, 75, 71, 74, 76, 73, 72],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'SpO2',
                        data: [98, 98, 99, 98, 97, 99, 98],
                        borderColor: '#0ea5e9',
                        tension: 0.4
                    }]
                },
                options: {
                    ...commonOptions,
                    plugins: {
                        legend: { display: true, position: 'top' }
                    }
                }
            });
        }

        // HR Chart (Tracking Page)
        const ctxHR = document.getElementById('hrChart');
        if (ctxHR) {
            new Chart(ctxHR, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Avg Heart Rate',
                        data: [74, 72, 75, 71],
                        borderColor: '#ef4444',
                        tension: 0.4
                    }]
                },
                options: commonOptions
            });
        }

        // BP Chart (Tracking Page)
        const ctxBP = document.getElementById('bpChart');
        if (ctxBP) {
            new Chart(ctxBP, {
                type: 'bar',
                data: {
                    labels: ['W1', 'W2', 'W3', 'W4'],
                    datasets: [
                        { label: 'Systolic', data: [120, 118, 122, 119], backgroundColor: primaryColor },
                        { label: 'Diastolic', data: [80, 79, 82, 80], backgroundColor: '#94a3b8' }
                    ]
                },
                options: commonOptions
            });
        }
        // Weight & BMI Chart (Tracking Page)
        const ctxWeight = document.getElementById('weightChart');
        if (ctxWeight) {
            new Chart(ctxWeight, {
                type: 'line',
                data: {
                    labels: ['W1', 'W2', 'W3', 'W4'],
                    datasets: [
                        { label: 'Weight (lbs)', data: [175, 174, 172, 171], borderColor: '#0ea5e9', tension: 0.4 }
                    ]
                },
                options: commonOptions
            });
        }

        // Sleep Chart (Tracking Page)
        const ctxSleep = document.getElementById('sleepChart');
        if (ctxSleep) {
            new Chart(ctxSleep, {
                type: 'bar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                        { label: 'Hours of Sleep', data: [7, 6.5, 8, 7.5, 6, 8.5, 8], backgroundColor: '#6366f1' }
                    ]
                },
                options: commonOptions
            });
        }
    }, 100);
}
