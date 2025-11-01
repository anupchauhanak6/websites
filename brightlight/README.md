# Brightstar Energy - Business Landing Website

A modern, professional multipage business landing website for Brightstar Energy, specializing in solar power solutions.

## 📋 Features

- ✅ **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Modern Animations** - Smooth transitions and scroll reveal effects
- ✅ **SEO Optimized** - Clean code structure with proper meta tags
- ✅ **Professional UI** - Creative and artistic design matching brand identity
- ✅ **Interactive Contact Form** - With validation
- ✅ **Separate Header/Footer** - Easy to maintain and update
- ✅ **Blog Section** - For news and articles
- ✅ **Project Showcase** - Display completed projects
- ✅ **Fast Loading** - Optimized performance

## 📁 File Structure

```
/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── projects.html           # Projects page
├── blog.html               # Blog page
├── contact.html            # Contact page
├── includes/
│   ├── header.html        # Reusable header
│   └── footer.html        # Reusable footer
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript
│   └── include.js         # Header/Footer loader
└── README.md              # Documentation
```

## 🚀 Getting Started

### Option 1: Local Development

1. Download all files
2. Maintain the folder structure as shown above
3. Open `index.html` in your browser
4. That's it! No build process required

### Option 2: Live Server (Recommended)

1. Install Live Server extension in VS Code
2. Right-click on `index.html`
3. Click "Open with Live Server"

## 📄 Pages

- **Home** (`index.html`) - Hero section, features, services preview
- **About** (`about.html`) - Company mission, team, expertise
- **Services** (`services.html`) - Detailed service offerings
- **Projects** (`projects.html`) - Completed projects showcase
- **Blog** (`blog.html`) - Articles and news
- **Contact** (`contact.html`) - Contact form and information

## 🎨 Color Scheme

- **Primary Blue**: `#0077be` - Trust and reliability
- **Secondary Green**: `#2ecc71` - Eco-friendly theme
- **Accent Orange**: `#f39c12` - Energy and warmth
- **Dark**: `#333333` - Text
- **Light Gray**: `#f8f9fa` - Backgrounds

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🛠️ Technologies Used

- HTML5 - Semantic markup
- CSS3 - Modern styling (Flexbox, Grid, Animations)
- JavaScript - Interactive features
- Font Awesome - Icons
- Google Fonts - Poppins typography

## ✨ Key Features Explained

### Separate Header & Footer
Header and footer are loaded dynamically using JavaScript, making updates easy across all pages.

### Smooth Animations
- Fade-in animations on page load
- Scroll reveal effects
- Hover transitions
- Counter animations for statistics

### Form Validation
Contact form includes:
- Required field validation
- Email format validation
- Phone number validation (Indian format)

### SEO Optimized
- Semantic HTML structure
- Meta descriptions on all pages
- Open Graph tags
- Alt text for images
- Optimized headings

## 📞 Contact Information

**Brightstar Energy**
- Address: 3rd Floor, Bhimsingh Tower, Surajpur, Greater Noida, UP – 201306
- Phone: +91-9719681561
- Email: energy.brightstar2000@gmail.com
- Instagram/Facebook: @brightstar_energy

## 📝 Customization Guide

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0077be;
    --secondary-color: #2ecc71;
    --accent-color: #f39c12;
}
```

### Adding New Pages
1. Create new HTML file
2. Add `<div id="header-placeholder"></div>` at top
3. Add your content
4. Add `<div id="footer-placeholder"></div>` at bottom
5. Include scripts before `</body>`:
```html
<script src="js/include.js"></script>
<script src="js/main.js"></script>
```

### Updating Navigation
Edit `includes/header.html` and add/remove menu items.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 Brightstar Energy. All rights reserved.

## 🙏 Credits

Developed with ❤️ for Brightstar Energy
Powered by clean, renewable solar energy! 🌞

---

**Need Help?** Contact us at energy.brightstar2000@gmail.com