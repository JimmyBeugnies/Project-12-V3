document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const binaryBackground = document.getElementById('binary-background');
const binarySequence = '01100001'.split('');

function createBinaryLine(delay) {
    const line = document.createElement('div');
    line.classList.add('binary-line');
    binarySequence.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.5}s, ${delay}s`;
        line.appendChild(span);
    });
    return line;
}

function animateBinaryBackground() {
    binaryBackground.innerHTML = '';
    const numLines = Math.floor(Math.random() * 4) + 1; 
    for (let i = 0; i < numLines; i++) {
        const line = createBinaryLine(i * 1);
        binaryBackground.appendChild(line);
    }
}

animateBinaryBackground();
setInterval(animateBinaryBackground, 10000);
