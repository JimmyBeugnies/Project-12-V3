function CV() {
    window.open('./assets/cv.jpg', '_blank');
}


function CV2() {
    window.open('./assets/Titre_professionnel.pdf', '_blank');
}


  // pour l'effet de point vert 

  function createFallingDot() {
    const dot = document.createElement('div');
    dot.classList.add('falling-dot');
    dot.style.left = `${Math.random() * window.innerWidth}px`;
    dot.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durée aléatoire entre 2 et 5 secondes
    document.body.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 5000);
}

setInterval(createFallingDot, 100);
setInterval(createFallingDot, 100);
