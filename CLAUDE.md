# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a college portfolio website for Aadhavan Sivakumar built with vanilla HTML, CSS, and JavaScript. It's a static website showcasing academic achievements, athletic accomplishments, volunteer work, and personal profile information designed for college applications.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design, CSS Grid, Flexbox
- **Fonts**: Inter (Google Fonts), Font Awesome icons
- **Deployment**: Static website (can be deployed via GitHub Pages, Netlify, or traditional hosting)

## File Structure

```
/
├── index.html          # Main HTML file with all content
├── styles.css          # All CSS styling and responsive design
├── script.js           # JavaScript functionality (navigation, modals, animations)
├── README.md           # Comprehensive documentation
├── images/             # All image assets organized by category
│   ├── academics/      # Academic achievement photos
│   ├── athletics/      # Sports and athletic photos
│   ├── volunteering/   # Community service photos
│   ├── internship/     # Professional experience photos
│   └── profile.jpeg    # Main profile photo
└── documents/
    └── aadhavan-sivakumar-resume.pdf
```

## Development Commands

This is a static website with no build process. To work with the code:

- **Local development**: Open `index.html` directly in a browser or use a local server
- **Live server**: Use VS Code Live Server extension or `python -m http.server 8000`
- **No package.json**: This project uses vanilla web technologies with no build tools

## Architecture and Key Features

### Core Components

1. **Single Page Application**: All content is in `index.html` with section-based navigation
2. **Responsive Design**: Mobile-first approach with breakpoints in `styles.css`
3. **Photo Galleries**: Modal-based image viewer for portfolio images
4. **Smooth Navigation**: Fixed navbar with smooth scrolling and section highlighting

### CSS Architecture

- **CSS Custom Properties**: Color scheme defined in `:root` variables
- **Responsive Grid Systems**: Different grid layouts for various content types
- **Animation System**: Intersection Observer API for fade-in animations
- **Modal System**: Custom modal implementation for image galleries

### JavaScript Features

- **Mobile Navigation**: Hamburger menu with toggle functionality
- **Smooth Scrolling**: Offset-aware navigation for fixed header
- **Image Modals**: Click-to-expand gallery functionality
- **Scroll Effects**: Dynamic navbar styling based on scroll position
- **Intersection Observer**: Animate elements as they enter viewport

## Content Management

### Adding New Photos
- Place images in appropriate `/images/` subdirectories
- Update corresponding gallery sections in `index.html`
- Ensure consistent naming and alt text

### Updating Personal Information
- Contact details: Lines 584-595 in `index.html`
- Bio and tagline: Lines 43-44 in `index.html`
- Statistics: Lines 64-80 in `index.html`

### Color Customization
Modify CSS custom properties in `styles.css` (typically around line 131):
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #9b59b6;
    --text-color: #2c3e50;
    --light-bg: #f8f9fa;
}
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Uses modern CSS features (Grid, Flexbox, Custom Properties)
- JavaScript ES6+ features (requires modern browser support)

## Deployment Notes

- Static website - no server-side processing required
- All assets are relative paths
- Resume PDF should be placed in `/documents/` directory
- Optimize images for web before adding to reduce load times