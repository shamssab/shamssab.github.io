const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

function checkScroll() {
    const elements = document.querySelectorAll('.skill-item, .project-card, .hobby-item, .highlight-card, .principle-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .hobby-item, .highlight-card, .principle-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    checkScroll();
});

window.addEventListener('scroll', checkScroll);

const resumeDownloadBtn = document.querySelector('.download-card a');
if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', () => {
        console.log('Resume download initiated');
    });
}

const socialLinks = document.querySelectorAll('.footer-social a, .contact-item a[href*="linkedin"], .contact-item a[href*="github"]');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const url = e.currentTarget.href;
        if (url.includes('linkedin')) {
            console.log('LinkedIn link clicked');
        } else if (url.includes('github')) {
            console.log('GitHub link clicked');
        }
    });
});

const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const url = e.currentTarget.href;
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            console.log('YouTube project demo clicked');
        } else if (url.includes('github.com')) {
            console.log('GitHub project link clicked');
        }
    });
});