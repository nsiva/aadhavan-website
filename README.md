# Aadhavan Sivakumar — Portfolio

A responsive, single-page portfolio site built with vanilla HTML, CSS, and JavaScript. It presents
projects, experience, education, and leadership for software engineering, AI/ML, and cybersecurity
internship recruiting.

## Features

- **Responsive design** — single-column layout below 768px, verified down to 320px
- **Photo galleries** with a click-to-expand image modal
- **Smooth scrolling** navigation that accounts for the fixed navbar
- **Scroll animations** via the Intersection Observer API
- **No build step** — open `index.html` and it runs

## File structure

```
/
├── index.html          # All page content
├── styles.css          # All styling, including responsive breakpoints
├── script.js           # Navigation, image modal, animations
├── images/
│   ├── academics/      # Academic photos (not currently shown on the page)
│   ├── athletics/      # Cross country photos (not currently shown on the page)
│   ├── volunteering/   # Community service photos
│   ├── internship/     # Waters Corporation internship photos
│   └── profile.jpeg    # Hero profile photo
└── documents/
    └── aadhavan-sivakumar-resume.pdf
```

Images under `academics/` and `athletics/` are retained in the repo but not referenced by the
current page.

## Page sections

In document order: Hero → About → Skills → Projects → Experience → Education →
Interests & Goals → Leadership & Service → Contact.

## Local development

No dependencies and no build process. Either open `index.html` directly in a browser, or serve
the directory:

```bash
python -m http.server 8000
```

## Customizing content

Most edits are direct text changes in `index.html`. A few things are worth knowing:

### Stat tiles

The four tiles in the About section are plain markup. A tile animates its number on scroll only
if it carries a `data-count` attribute:

```html
<span class="stat-number" data-count="350">350+</span>   <!-- counts up to 350, keeps the "+" -->
<span class="stat-number stat-number-text">MI + Security</span>  <!-- static text, smaller type -->
```

### Adding gallery photos

Drop the file into the right `images/` subdirectory and add a `.gallery-item` block to the
relevant gallery, or add one at runtime from the browser console:

```javascript
portfolioFunctions.addServicePhoto('images/volunteering/new-photo.jpeg', 'Caption');
portfolioFunctions.addInternshipPhoto('images/internship/new-photo.jpg', 'Caption');
```

Every image needs descriptive `alt` text — the caption in the hover overlay is not a substitute.

### Updating profile text and stats

```javascript
portfolioFunctions.updateProfile({
    name: 'Aadhavan Sivakumar',
    tagline: 'Your tagline',
    bio: 'Your bio',
    email: 'you@example.com'
});

portfolioFunctions.updateStats({
    gradYear: '2030',
    tracks: 'MI + Security',
    internshipHours: '120',
    volunteerHours: '350'
});
```

These are convenience helpers for live tweaking; they do not persist. Edit `index.html` to make a
change stick.

## Colors

Colors are literal hex values in `styles.css`, not custom properties. The recurring ones are
`#3498db` (primary blue), `#9b59b6` (purple accent, used in gradients), `#2c3e50` (heading text),
and `#f8f9fa` (light section background). Changing the scheme means a find-and-replace across
`styles.css`.

## Deployment

Static site — any static host works. Deploy the repository root as-is; all asset paths are
relative.

- **GitHub Pages**: enable Pages in repository settings, serving from the default branch
- **Cloudflare Pages / Netlify**: connect the repository, no build command, publish directory `/`

## Browser support

Modern Chrome, Firefox, Safari, and Edge, plus iOS Safari and Chrome Mobile. Uses CSS Grid,
Flexbox, and ES6+ JavaScript.
