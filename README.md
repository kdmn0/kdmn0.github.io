# Yiğit Arda Kıdıman - Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript. Features a dark/light theme toggle and a clean, professional design.

## 🌐 Live Demo

Visit the website: [Your GitHub Pages URL]

## 📋 Features

- ✨ Responsive design (mobile, tablet, desktop)
- 🌓 Dark/Light theme toggle with localStorage persistence
- 📱 Bootstrap 5 integration
- 🎨 Modern gradient design with smooth animations
- ♿ Semantic HTML structure
- 🚀 Fast loading with minimal dependencies
- 📦 Component-based architecture (navbar, footer)

## 🗂️ Project Structure

```
my-website/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects showcase
├── blog.html               # Blog page
├── contact.html            # Contact information
├── css/
│   └── style.css          # Main stylesheet with theme support
├── js/
│   ├── script.js          # Theme toggle functionality
│   └── components.js      # Dynamic component loader
├── img/                   # Image assets
│   └── photo1.png
├── components/            # Reusable HTML components
│   ├── navbar.html        # Navigation component
│   └── footer.html        # Footer component
├── documents/             # Documents (resume, etc.)
│   └── resume.pdf
├── README.md              # This file
└── .gitignore             # Git ignore rules
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Framework**: Bootstrap 5
- **Icons**: Bootstrap Icons
- **Styling**: CSS Custom Properties (CSS Variables)
- **Hosting**: GitHub Pages

## 🎨 Theme Support

The website includes a built-in light/dark theme toggle:
- **Dark Mode**: Default theme with green accents
- **Light Mode**: Accessible light variant
- Preference is saved to browser localStorage

### Color Variables

```css
--primary-color: #00d338      /* Green accent */
--bg-primary: #1a1a1a         /* Dark background */
--bg-secondary: #2a2a2a       /* Secondary background */
--text-primary: #e0e0e0       /* Primary text */
--text-secondary: #a0a0a0     /* Secondary text */
--border-color: #404040       /* Border color */
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- (Optional) A local server for development

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kdmn0/my-website.git
cd my-website
```

2. Open in a local server (recommended):
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
http-server
```

3. Open your browser and navigate to `http://localhost:8000`

Or simply double-click `index.html` to open in your browser.

## 📦 Component System

### Navbar
- Responsive navigation with mobile menu
- Theme toggle button
- Links to all pages

### Footer
- Copyright information
- Contact details

Components are loaded dynamically using JavaScript fetch:
```html
<div id="navbar-container"></div>
<script src="js/components.js"></script>
```

## 🌐 Deploy to GitHub Pages

1. Push your repository to GitHub
2. Go to Repository Settings → Pages
3. Select source: `main` branch (or your default branch)
4. Select folder: `/ (root)`
5. Click Save

Your site will be published at: `https://[username].github.io/my-website/`

## 📄 Pages

- **Home** (`index.html`) - Landing page with quick links
- **About** (`about.html`) - Personal background and skills
- **Projects** (`projects.html`) - Project showcase
- **Blog** (`blog.html`) - Blog posts (coming soon)
- **Contact** (`contact.html`) - Contact information

## 🎯 Skills & Technologies Listed

### Backend
- Python
- C

### Frontend
- HTML5
- CSS3

### Tools
- Git
- GitHub
- Django

## 📞 Contact

- **Email**: yigitardakidiman@gmail.com
- **LinkedIn**: [linkedin.com/in/yigitardakidiman](https://www.linkedin.com/in/yigitardakidiman/)
- **Instagram**: [@codewithkidiman](https://www.instagram.com/codewithkidiman/)
- **GitHub**: [github.com/kdmn0](https://github.com/kdmn0)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yiğit Arda Kıdıman**
- Year: 2026
- Education: OSTIM Technical University - Software Engineering

---

**Made with ❤️ and code**
