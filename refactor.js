const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'about.html',
    'services.html',
    'doctors.html',
    'resources.html',
    'contact.html'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace Global Header
    content = content.replace(
        /<!-- Global Header -->[\s\S]*?<\/header>/g, 
        '<div id="global-header"></div>'
    );
    
    // Replace Mobile Menu
    content = content.replace(
        /<!-- Mobile Off-Canvas Menu -->[\s\S]*?(<main)/g, 
        '<div id="global-mobile-menu"></div>\n\n    $1'
    );
    
    // Replace Global Footer
    content = content.replace(
        /<!-- Global Footer -->[\s\S]*?<\/footer>/g, 
        '<div id="global-footer"></div>'
    );
    
    // Inject components.js script before main.js if not already there
    if (!content.includes('js/components.js')) {
        content = content.replace(
            /<script src="js\/main\.js"><\/script>/g,
            '<script src="js/components.js"></script>\n    <script src="js/main.js"></script>'
        );
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
