if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});




 // Defer particles.js initialization
document.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = () => {
        particlesJS("particles-js", {
            particles: {
                number: { value: 50 },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 500 },
                size: { value: 3 },
                move: { enable: true, speed: 1 },
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "repulse" },
                },
            },
        });
    };
    document.body.appendChild(script);
});
    


// Υπολογιστής Τιμής
function calculatePrice() {
    const size = document.getElementById("size").value;
    const complexity = document.getElementById("complexity").value;

    let basePrice = 0;

    if (size === "small") basePrice = 10;
    else if (size === "medium") basePrice = 15;
    else if (size === "large") basePrice = 20;

    if (complexity === "medium") basePrice *= 1.5;
    else if (complexity === "complex") basePrice *= 2;

    document.getElementById("estimated-price").innerText = `Εκτιμώμενη Τιμή: €${basePrice.toFixed(2)} ⁓ (Μόνο για Σχεδίαση)`;
}

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Animation on Scroll
const contactSection = document.querySelector("#contact");
const contactIcons = document.querySelectorAll(".contact-links img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            contactIcons.forEach((icon, index) => {
                icon.style.transform = "translateY(0)";
                icon.style.opacity = "1";
                icon.style.transition = `all 0.5s ease ${index * 0.2}s`;
            });
        } else {
            contactIcons.forEach((icon) => {
                icon.style.transform = "translateY(20px)";
                icon.style.opacity = "0";
                icon.style.transition = "none";
            });
        }
    });
}, { threshold: 0.1 });

observer.observe(contactSection);

// Animation on Scroll for Portfolio
const portfolioSection = document.querySelector("#portfolio");
const portfolioImages = document.querySelectorAll(".gallery");

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            portfolioImages.forEach((icon, index) => {
                icon.style.transform = "translateY(0)";
                icon.style.opacity = "1";
                icon.style.transition = `all 0.5s ease ${index * 0.2}s`;
            });
        } else {
            portfolioImages.forEach((icon) => {
                icon.style.transform = "translateY(20px)";
                icon.style.opacity = "0";
                icon.style.transition = "none";
            });
        }
    });
}, { threshold: 0.1 });

observer2.observe(portfolioSection);

// Animation on Scroll for Services
const servicesSection = document.querySelector("#services");
const serviceCards = document.querySelectorAll(".card");

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            serviceCards.forEach((icon, index) => {
                icon.style.transform = "translateY(0)";
                icon.style.opacity = "1";
                icon.style.transition = `all 0.5s ease ${index * 0.2}s`;
            });
        } else {
            serviceCards.forEach((icon) => {
                icon.style.transform = "translateY(20px)";
                icon.style.opacity = "0";
                icon.style.transition = "none";
            });
        }
    });
}, { threshold: 0.1 });

observer3.observe(servicesSection);

// Scroll to Contact Section
const goToContactBtn = document.getElementById("goToContact");
const contactSection1 = document.getElementById("contact");

goToContactBtn.addEventListener("click", () => {
    contactSection1.scrollIntoView({ behavior: "smooth" });
});



