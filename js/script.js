let body = document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
    profile.classList.remove('active');
}


let sideBar = document.querySelector('.side-bar');
let searchForm = document.getElementById('.side-bar');




document.querySelector('.side-bar .close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
    body.classList.remove('active');
}


/*  fonction de gestion du mode jour et nuit   */

let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enabelDarkMode = () =>{
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
    enabelDarkMode();
}

toggleBtn.onclick = (e) =>{
    let darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled'){
        
        enabelDarkMode();
    }else{
        disableDarkMode();
    }
}

/* fonction pour l'animation du clignotant  du outil du soleil et de la  la lune*/


let darkMode1 = localStorage.getItem('dark-mode');
let toggleBtn1 = document.querySelector('#toggle-btn');
let body1 = document.querySelector('body');
let count = 0;

const disableDarkMode1 = () => {
    toggleBtn1.classList.replace('fa-moon', 'fa-sun');
   
}

const enableDarkMode1 = () => {
    toggleBtn1.classList.replace('fa-sun', 'fa-moon');
   
}



const toggleMode1 = () => {
    if (count === 7) {
        clearInterval(intervalId);
         return;
    }
    if (count % 2 === 0) {
        enableDarkMode1();
        setTimeout(() => {
            disableDarkMode();
        }, 6000);
    } else {
        disableDarkMode1();
        setTimeout(() => {
            enableDarkMode1();
        }, 6000);
        
    }
    count++;
}

// Désactivez le mode sombre avant de commencer l'intervalle
disableDarkMode1();

//l'appel de l'intervalle
let intervalId = setInterval(toggleMode1, 2000);

 // Appel de la fonction au chargement de la page

 window.addEventListener('load', () => {
    toggleMode1();
    
});




// debut de la fonction d'affichage des contenus par le clic pour gerer le menu


function chargerFichierHTML(url) {
    // Réinitialiser le contenu de #contenu
    let contenu = document.getElementById('contenu');
    contenu.innerHTML = '';

    // Créer un iframe et charger l'URL spécifié
    let iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    document.getElementById('accueil').style.display = 'none';
    
    // Ajouter l'iframe au contenu
    contenu.appendChild(iframe);
    contenu.style.display = 'flex';
}







document.addEventListener("DOMContentLoaded", function(evt) {
    openOngletop(); //appel pour afficher le contenu d'acceuil
});

function openOngletop() {
    // Masquer tous les éléments avec la classe 'contenu'
    let tabcontent1 = document.querySelectorAll('.contenu');
    tabcontent1.forEach(function(element) {
        element.style.display = 'none';
    });

    // Afficher l'élément avec l'ID 'accueil'
    document.getElementById('accueil').style.display = 'flex';
}


let contenu = document.getElementById('contenu');
contenu.innerHTML = '';
let accueilContent = document.querySelector('.accueil').innerHTML;
contenu.innerHTML = accueilContent;


// Modifier la fonction pour charger le contenu de la classe "accueil" dans la zone "contenu"
function openOnglet1(event, ongletName) {
openOngletop(); // Appel pour charger le contenu "accueil" lorsque le bouton "Accueil" est cliqué
}

// fin de la fonction d'affichage des contenus par le clic pour gerer le menu


/* pour la gestion du menu ou des onglets dès que la fenêtre est reduit à la taille d'une montre */

let profile1 = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    profile1.classList.toggle('active');
}

window.onscroll = ()=>{
    profile1.classList.remove('active');
}









