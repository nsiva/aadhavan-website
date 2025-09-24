document.addEventListener('DOMContentLoaded', function() {

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling for navigation links with navbar offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Fade in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections and cards for fade-in effect
    document.querySelectorAll('.section, .achievement-card, .sport-card, .service-card, .gallery-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Image modal functionality
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close">&times;</span>
        <div class="modal-content">
            <img src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close');

    // Gallery image click handlers
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Profile photo upload functionality
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
        profilePhoto.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        profilePhoto.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
            input.click();
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Dynamic photo gallery management
    function addPhotoToGallery(galleryId, photoSrc, caption) {
        const gallery = document.getElementById(galleryId);
        if (gallery) {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item fade-in';
            galleryItem.innerHTML = `
                <img src="${photoSrc}" alt="${caption}">
                <div class="overlay">
                    <span>${caption}</span>
                </div>
            `;
            gallery.appendChild(galleryItem);
            
            // Add click handler for modal
            galleryItem.querySelector('img').addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
                modalImg.alt = this.alt;
            });
            
            // Trigger fade-in animation
            observer.observe(galleryItem);
        }
    }

    // Gallery management functions for easy photo additions
    window.portfolioFunctions = {
        addAcademicPhoto: (src, caption) => addPhotoToGallery('academicGallery', src, caption),
        addAthleticPhoto: (src, caption) => addPhotoToGallery('athleticsGallery', src, caption),
        addVolunteerPhoto: (src, caption) => addPhotoToGallery('volunteeringGallery', src, caption),
        
        // Function to update profile information
        updateProfile: (data) => {
            if (data.name) {
                document.querySelector('.profile-text h1').textContent = data.name;
                document.querySelector('.nav-logo h2').textContent = data.name;
            }
            if (data.tagline) {
                document.querySelector('.tagline').textContent = data.tagline;
            }
            if (data.bio) {
                document.querySelector('.bio').textContent = data.bio;
            }
            if (data.email) {
                document.querySelector('.contact-item span').textContent = data.email;
            }
        },
        
        // Function to update stats
        updateStats: (stats) => {
            const statNumbers = document.querySelectorAll('.stat-number');
            if (stats.gpa && statNumbers[0]) statNumbers[0].textContent = stats.gpa;
            if (stats.volunteerHours && statNumbers[1]) statNumbers[1].textContent = stats.volunteerHours + '+';
            if (stats.leadership && statNumbers[2]) statNumbers[2].textContent = stats.leadership;
        }
    };

    // Typing animation for hero title
    const heroTitle = document.querySelector('.profile-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Counter animation for stats
    function animateCounters() {
        // Only animate SAT Score and Volunteer Hours (assume order: 0=Weighted GPA, 1=Unweighted GPA, 2=SAT, 3=Volunteer)
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;

        // SAT Score (index 2)
        if (counters[2]) {
            const satTarget = parseInt(counters[2].getAttribute('data-target') || counters[2].textContent.replace(/\D/g, ''));
            let satCurrent = 0;
            const satIncrement = satTarget / speed;
            const satTimer = setInterval(() => {
                satCurrent += satIncrement;
                if (satCurrent >= satTarget) {
                    counters[2].textContent = satTarget;
                    clearInterval(satTimer);
                } else {
                    counters[2].textContent = Math.ceil(satCurrent);
                }
            }, 1);
        }

        // Volunteer Hours (index 3)
        if (counters[3]) {
            // Check if it ends with +
            const hasPlus = counters[3].textContent.includes('+');
            const volTarget = parseInt(counters[3].getAttribute('data-target') || counters[3].textContent.replace(/\D/g, ''));
            let volCurrent = 0;
            const volIncrement = volTarget / speed;
            const volTimer = setInterval(() => {
                volCurrent += volIncrement;
                if (volCurrent >= volTarget) {
                    counters[3].textContent = volTarget + (hasPlus ? '+' : '');
                    clearInterval(volTimer);
                } else {
                    counters[3].textContent = Math.ceil(volCurrent) + (hasPlus ? '+' : '');
                }
            }, 1);
        }
        // GPA values (index 0, 1) are left as static text
    }

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
});

// Console message for developers
console.log(`
%c🎓 Aadhavan Sivakumar - College Portfolio
%cBuilt with modern web technologies
%cHTML5 • CSS3 • JavaScript • Responsive Design
`, 
'color: #3498db; font-size: 18px; font-weight: bold;',
'color: #2c3e50; font-size: 14px;',
'color: #7f8c8d; font-size: 12px;'
);