
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });












// ASCII art for the coffee cup
const coffeeArt = [
    "    ( (     ",
    "     ) )    ",
    "  ........   ",
    "  |      |]  ",
    "  \\      /   ",
    "   `----'    "
];

function animateCoffeeArt() {
    coffeeArt.forEach((lineText, i) => {
        const line = document.getElementById(`coffee-art-line-${i + 1}`);
        line.textContent = lineText;
        line.style.animation = 'none'; // Reset animation
        line.offsetHeight; // Trigger reflow to restart animation
        line.style.animation = `showLine 1s forwards ${i * 1}s`; // Restart animation with delay
    });
}

// Initial animation and interval for the coffee art
animateCoffeeArt();
setInterval(animateCoffeeArt, 10000);



  // Binary art for the display
  const binaryArt = [
    "       __________________________________________       ",
    "      /                                          \\       ",
    "     /                                            \\    ",
    "    /                                              \\   ",
    "   /________________________________________________\\  ",
    "  |                                                  | ",
    "  |  ____________________________________________    | ",
    "  | |00110001010111101000100011000101011110100010|   | ",
    "  | |10101011101000100011000101011110100010101010|   | ",
    "  | |00110001010111101000100011000101011110100010|   | ",
    "  | |10101011101000100011000101011110100010101010|   | ",
    "  | |00110001010111101 JIMMY 11000101011110100010|   | ",
    "  | |10101011101000100011000101011110100010101010|   | ",
    "  | |00110001010111101000100011000101011110100010|   | ",
    "  | |10101011101000100011000101011110100010101010|   | ",
    "  | |____________________________________________|   | ",
    "  |                                                  | ",
    "  |__________________________________________________| ",
];

function animateBinaryArt() {
    binaryArt.forEach((lineText, i) => {
        const line = document.getElementById(`binary-art-line-${i + 1}`);
        line.textContent = lineText;
        line.style.animation = 'none'; // Reset animation
        line.offsetHeight; // Trigger reflow to restart animation
        line.style.animation = `showLine 1s forwards ${i * 0.5}s`; // Restart animation with delay
    });
}

// Initial animation and interval for the binary art
animateBinaryArt();
setInterval(animateBinaryArt, 11000);



function createFallingBinary() {
    const binaryElement = document.createElement('div');
    binaryElement.textContent = Math.random() > 0.5 ? '0' : '1';
    binaryElement.classList.add('falling-binary');
    binaryElement.style.left = Math.random() * 98 + 'vw'; // Positionner aléatoirement sur toute la largeur de la fenêtre
    binaryElement.style.animationDuration = Math.random() * 5 + 2 + 's'; // Entre 5s et 10s
    binaryElement.style.fontSize = Math.random() * 24 + 12 + 'px'; // Entre 12px et 36px
    document.body.appendChild(binaryElement);

    // Supprimer l'élément après l'animation
    binaryElement.addEventListener('animationend', () => {
        binaryElement.remove();
    });
}

setInterval(createFallingBinary, 500); // Crée un nouveau 0 ou 1 toutes les 200ms


function cv() {
    window.open('./assets/cvjimmy.pdf', '_blank');
    window.open('./assets/Titre_professionnel.pdf', '_blank');
}