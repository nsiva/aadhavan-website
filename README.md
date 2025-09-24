# Aadhavan Sivakumar - College Portfolio Website

A modern, responsive portfolio website designed for college applications. This website showcases academic achievements, athletic accomplishments, volunteer work, and personal profile information.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Photo Galleries**: Organized sections for academics, athletics, and volunteering photos
- **Interactive Elements**: Smooth scrolling, modal image viewer, contact form
- **Performance Optimized**: Fast loading with modern web standards

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── images/             # Photo directories
│   ├── academics/      # Academic achievement photos
│   ├── athletics/      # Sports and athletic photos
│   ├── volunteering/   # Community service photos
│   └── profile.jpg     # Main profile photo
└── documents/
    └── resume.pdf      # Resume file
```

## 📸 Adding Photos

### 1. Profile Photo
- Add your main profile photo as `images/profile.jpg`
- Recommended size: 300x300 pixels (square format)
- Format: JPG or PNG

### 2. Academic Photos
Place academic achievement photos in `images/academics/`:
- `academic1.jpg` - Honor Society, awards ceremonies
- `academic2.jpg` - Science fair, academic competitions
- `academic3.jpg` - Math competitions, debates
- `academic4.jpg` - Academic team photos

### 3. Athletic Photos
Place sports photos in `images/athletics/`:
- `sport1.jpg` - Championship moments
- `sport2.jpg` - Team captain photos
- `sport3.jpg` - MVP awards, individual achievements
- `sport4.jpg` - State competitions, tournaments

### 4. Volunteering Photos
Place community service photos in `images/volunteering/`:
- `volunteer1.jpg` - Food bank service
- `volunteer2.jpg` - Community cleanup events
- `volunteer3.jpg` - Youth mentoring activities
- `volunteer4.jpg` - Fundraising events

## ✏️ Customizing Content

### Personal Information
Edit the following in `index.html`:

1. **Name and Title**: Update the `<h1>` and `<h2>` tags with your name
2. **Tagline**: Change the tagline in the `.tagline` paragraph
3. **Bio**: Update the biography in the `.bio` paragraph
4. **Contact Information**: Update email, phone, and address in the contact section

### Academic Achievements
Update the achievement cards in the academics section:
- Honor Roll information
- Specific awards and recognitions
- Advanced courses taken

### Athletic Accomplishments
Modify the sports highlights:
- Specific sports played
- Championships won
- Leadership roles

### Volunteer Work
Update community service information:
- Organizations volunteered with
- Types of service performed
- Impact made

### Statistics
Update the stats section with your actual numbers:
- GPA
- Volunteer hours
- Leadership positions

## 🛠️ Technical Customization

### Adding New Photos Programmatically
Use the JavaScript functions in the browser console:

```javascript
// Add academic photo
portfolioFunctions.addAcademicPhoto('images/academics/new-photo.jpg', 'Caption');

// Add athletic photo
portfolioFunctions.addAthleticPhoto('images/athletics/new-photo.jpg', 'Caption');

// Add volunteer photo
portfolioFunctions.addVolunteerPhoto('images/volunteering/new-photo.jpg', 'Caption');
```

### Updating Profile Information
```javascript
portfolioFunctions.updateProfile({
    name: 'Your Name',
    tagline: 'Your Tagline',
    bio: 'Your Biography',
    email: 'your.email@example.com'
});
```

### Updating Statistics
```javascript
portfolioFunctions.updateStats({
    gpa: '4.0',
    volunteerHours: '250',
    leadership: '6'
});
```

## 🎨 Color Customization

To change the color scheme, modify these CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3498db;    /* Main blue color */
    --secondary-color: #9b59b6;  /* Purple accent */
    --text-color: #2c3e50;       /* Dark text */
    --light-bg: #f8f9fa;         /* Light background */
}
```

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-friendly navigation menu
- Optimized layouts for small screens
- Touch-friendly interactive elements
- Fast loading on mobile networks

## 🚀 Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Create a Netlify account
2. Drag and drop your project folder to Netlify
3. Your site will be deployed automatically

### Option 3: Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure the main file is named `index.html`

## 📄 Resume Integration

1. Convert your resume to PDF format
2. Save it as `documents/resume.pdf`
3. The download button in the hero section will automatically link to it

## 🔧 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

If you need help customizing the website:
1. Check the console for any JavaScript errors
2. Ensure all image files are properly named and placed
3. Validate HTML/CSS syntax if making manual changes

## 🎯 Tips for College Applications

1. **High-Quality Photos**: Use professional or high-quality photos
2. **Authentic Content**: Showcase genuine achievements and experiences
3. **Regular Updates**: Keep content current throughout application season
4. **Professional Email**: Use a professional email address
5. **Proofread**: Double-check all text for spelling and grammar

## 📈 Performance Tips

- Optimize images (compress without losing quality)
- Use WebP format for better compression
- Keep image files under 1MB each
- Test website speed regularly

---

*Created for college application portfolio purposes. Good luck with your applications!*