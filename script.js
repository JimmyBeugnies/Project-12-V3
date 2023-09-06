function ChangeDeLangue() {
    console.log("Changement de langue en cours...");

    const navbarLinks = document.querySelectorAll('.navbar_link');
    const navbarTitle = document.querySelector('.navbar_title');
    const spanBodyTop = document.querySelector('.span_body_top_4');
    const spanBodyTop2 = document.querySelector('.span_body_top_2');
    const projectTitle = document.querySelector('h1');
    const projectCardsH2 = document.querySelectorAll('card h2');
    const projectCardsP = document.querySelectorAll('card p');
    const profileTitle = document.querySelector('.h2_body_bottom');
    const cvButton = document.querySelector('.button_body_bottom');
    const titlesButton = document.querySelector('.button_body_bottom:nth-child(2)');
    const contactTitle = document.querySelector('.h2_body_footer');
    const contactButton = document.querySelector('.span_body_footer');
    
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    
    document.documentElement.lang = newLang;
    
    if (newLang === 'fr') {
        navbarLinks[0].textContent = 'Accueil';
        navbarLinks[1].textContent = 'Projets';
        navbarLinks[2].textContent = 'Profil';
        navbarLinks[3].textContent = 'Contact';
        navbarTitle.textContent = 'Jimmy Beugnies';
        spanBodyTop2.innerHTML = `Développeur web et web mobile`
        spanBodyTop.innerHTML = `<br> En tant que <font color="#e2de76">développeur web et mobile</font>,<br>
        je crée des solutions digitales
        pour répondre aux besoins <br>de la clientèles.
        Mon objectif est de fournir des expériences utilisateurs <br>
        fluides et intuitives, en utilisant les dernières technologies et <br>
        les meilleures pratiques de <font color="#e2de76">développement</font>.`;
        projectTitle = "Projets";
        projectCardsH2 = ["Projet 1", "Projet 2", "Projet 3"];
        projectCardsP = "Lorem, ipsum dolor sit amet consectetur adipisicing elit...";
        profileTitle = "Mon profil";
        cvButton = "Mon CV";
        titlesButton = "Mes Titres";
        contactTitle = "Me contacter";
        contactButton = "Contact";
    } else {
        navbarLinks[0].textContent = 'Home';
        navbarLinks[1].textContent = 'Projects';
        navbarLinks[2].textContent = 'Profile';
        navbarLinks[3].textContent = 'Contact';
        navbarTitle.textContent = 'Jimmy Beugnies';
        spanBodyTop2.innerHTML = `Developer web and web mobile`
        spanBodyTop.innerHTML = `<br>As a <font color="#e2de76">web and mobile developer</font>,<br>
        I create digital solutions
        to meet the needs of clients.<br>My goal is to provide smooth and intuitive user experiences,<br>
        using the latest technologies and best <br>development practices.`;
        projectTitle = "Projects";
        projectCardsH2 = ["Project 1", "Project 2", "Project 3"];
        projectCardsP = "Lorem, ipsum dolor sit amet consectetur adipisicing elit...";
        profileTitle = "My Profile";
        cvButton = "My Resume";
        titlesButton = "My Titles";
        contactTitle = "Contact Me";
        contactButton = "Contact";
    }
    
}

function CV() {
    window.open('./assets/CV.pdf', '_blank');
}


function CV2() {
    window.open('./assets/Titre_professionnel.pdf', '_blank');
}
function Contact(event) {
    event.preventDefault();
    window.location.href = "mailto:beugniesjimmy@gmail.com";
  }
