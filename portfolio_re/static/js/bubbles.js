// static/js/bubbles.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bubbles-container');
    
    if (!container) return;

    // Romantic messages as in the image
    const messages = [
        "Coding is my love language.",
        "Tech is my passion.",
        "Web dev: My happy place.",
        "JavaScript: Makes sites interactive.",
        "HTML, CSS: My creative tools.",
        "Python/Django: Backend powerhouse.",
        "React: Builds great UIs.",
        "SQL: Manages my data.",
        "Tailwind CSS: Speeds up design.",
        "CSS: Styles everything beautifully.",
        "Django: My go-to framework.",
        "Microsoft: Powerful dev tools.",
        "Networks: Crucial for web.",
        "Servers: Host my apps.",
        "My PC: Coding command center.",
        "Node.js: JavaScript, server-side.",
        "REST APIs: Connect everything.",
        "Security: Always a priority.",
        "DevOps: Streamlines my work.",
        "Git: Essential for code.",
        "Docker: Deploys apps easily.",
        "Cloud: Scalable solutions.",   
        "NoSQL: Flexible data storage.",
        "Agile: My project management style.",
        "Scrum: Keeps my team on track.",
        "Version control: My code's history.",
        "Debugging: Solving problems is fun.",
        "Open source: Community-driven.",
        "Tech conferences: Networking and learning.",
        "Hackathons: Coding marathons.",
        "Tech blogs: Stay updated.",
        "Online courses: Continuous learning.",
        "Tech podcasts: My daily inspiration.",
        "Webinars: Learn from experts.",
        "Tech communities: Support and growth.",
        
    ];
    
    const CONFIG = {
        bubbleCount: 8,          // Number of simultaneous bubbles
        minWidth: 120,           // Minimum width
        maxWidth: 220,           // Maximum width
        minHeightRatio: 0.6,     // Minimum height-to-width ratio
        maxHeightRatio: 0.8,     // Maximum height-to-width ratio
        minDuration: 12,         // Minimum duration (s)
        maxDuration: 24,         // Maximum duration (s)
        spawnInterval: 2000,     // Time between bubble creation (ms)
        fadeDuration: 1000       // Fade-out time at the end (ms)
    };
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Select random message
        bubble.textContent = messages[Math.floor(Math.random() * messages.length)];
        
        // Random oval size
        const width = Math.floor(Math.random() * (CONFIG.maxWidth - CONFIG.minWidth)) + CONFIG.minWidth;
        const heightRatio = Math.random() * (CONFIG.maxHeightRatio - CONFIG.minHeightRatio) + CONFIG.minHeightRatio;
        const height = width * heightRatio;
        
        bubble.style.width = `${width}px`;
        bubble.style.height = `${height}px`;
        
        // Random horizontal position (with margin)
        bubble.style.left = `${5 + Math.random() * 90}%`;

        // Random animation duration
        const duration = Math.random() * (CONFIG.maxDuration - CONFIG.minDuration) + CONFIG.minDuration;
        bubble.style.animationDuration = `${duration}s`;

        // Background color white with slight pastel tint
        const hue = 40 + Math.floor(Math.random() * 30); // Pink/purple tones
        const saturation = 50 + Math.floor(Math.random() * 20);
        bubble.style.backgroundColor = `hsla(${hue}, ${saturation}%, 85%, 0.9)`;

        // Subtle color shadow
        bubble.style.boxShadow += `, 0 0 ${width/8}px hsla(${hue}, 50%, 80%, 0.4)`;

        // Remove bubble after animation
        bubble.addEventListener('animationend', () => {
            bubble.style.opacity = '0';
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, CONFIG.fadeDuration);
        });
        
        container.appendChild(bubble);
    }

    function startBubbles() {
        // Create initial bubbles
        for (let i = 0; i < CONFIG.bubbleCount; i++) {
            setTimeout(createBubble, i * (CONFIG.spawnInterval / 2));
        }

        // Generate new bubbles continuously
        setInterval(createBubble, CONFIG.spawnInterval);
    }
    
    startBubbles();
});