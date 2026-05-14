// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
});

// Load Theme
if (localStorage.getItem('theme') === 'dark') {
    body.dataset.theme = 'dark';
}

// Preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
});

// Booking Form
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Booking Confirmed! We will call you in 2 minutes. WhatsApp: +91 9876543210');
});

// Chatbot
const chatToggle = document.getElementById('chatToggle');
const chatbot = document.getElementById('chatbot');
const closeChat = document.getElementById('closeChat');

chatToggle.addEventListener('click', () => {
    chatbot.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
    chatbot.classList.remove('active');
});

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        updateCounter();
    });
}

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            if (entry.target.classList.contains('stats')) {
                animateCounters();
            }
        }
    });
});

document.querySelectorAll('.animate-slide').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Service Cards Hover
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});