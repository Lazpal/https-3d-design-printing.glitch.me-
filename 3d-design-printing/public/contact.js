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
const contactIcons = document.querySelectorAll("#contact");

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

// Scroll to Contact Section
const goToContactBtn = document.getElementById("goToContact");
const contactSection1 = document.getElementById("contact");

goToContactBtn.addEventListener("click", () => {
    contactSection1.scrollIntoView({ behavior: "smooth" });
});
