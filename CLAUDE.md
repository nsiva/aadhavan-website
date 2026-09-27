# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Aadhavan Sivakumar built with vanilla HTML, CSS, and JavaScript. It's a static single-page site showcasing projects, professional experience, education, and leadership, aimed at software engineering / AI-ML / cybersecurity internship recruiting.

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

1. **Single Page Application**: All content is in `index.html` with section-based navigation. Section order is Hero -> About -> Skills -> Projects -> Experience -> Education -> Interests & Goals -> Leadership & Service -> Contact.
2. **Responsive Design**: Mobile-first approach with breakpoints in `styles.css`
3. **Photo Galleries**: Modal-based image viewer for portfolio images
4. **Smooth Navigation**: Fixed navbar with smooth scrolling and section highlighting

### CSS Architecture

- **Literal Color Values**: No `:root` custom properties; colors are hex literals (see Color Customization below)
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
Search `index.html` by class rather than by line number:
- Contact details: the `.contact-methods` and `.social-links` blocks in `#contact`
- Bio and tagline: `.tagline`, `.bio`, and `.availability` in the hero `<header>`
- Statistics: the `.stats` block in `#about`. A `.stat-number` animates on scroll only if it has a
  `data-count` attribute; use `.stat-number-text` for non-numeric values.

### Color Customization
There are no CSS custom properties in this project -- colors are literal hex values throughout
`styles.css`. The recurring ones are `#3498db` (primary blue), `#9b59b6` (purple accent, used in
gradients), `#2c3e50` (heading text), and `#f8f9fa` (light section background). Changing the
scheme requires a find-and-replace across `styles.css`.

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