document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Pixelated Typewriter Effect
    const typewriter = document.querySelector('.typewriter-pixel');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.textContent = '';
        let i = 0;
        const type = () => {
            if (i < text.length) {
                typewriter.textContent += text.charAt(i);
                i++;
                setTimeout(type, 60);
            }
        };
        type();
    }

    // Scroll Reveal for Pixel Cards
    const observerOptions = { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.pixel-card, .pixel-skill-box, .project-pixel-card, .terminal-container, section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px) scale(0.98)';
        el.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'; // Smoother curve
        revealObserver.observe(el);
    });

    // ASCII Art "Glitch" Animation
    const ascii = document.querySelector('.ascii-art');
    if (ascii) {
        setInterval(() => {
            ascii.style.textShadow = Math.random() > 0.9 ? 
                `2px 0 var(--pixel-red), -2px 0 var(--pixel-blue)` : 
                `0 0 10px var(--pixel-purple)`;
        }, 150);
    }

    // Terminal Line Typing
    const terminalLines = document.querySelectorAll('.terminal-line');
    terminalLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        setTimeout(() => {
            let i = 0;
            const typeLine = () => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeLine, 40);
                }
            };
            typeLine();
        }, index * 1000);
    });
});
