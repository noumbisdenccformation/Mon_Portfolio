let nb1 = document.querySelector('.nb1');
let nb2 = document.querySelector('.nb2');
let op = document.querySelector('.op');
let Message = document.querySelector('.Message');
let score = document.querySelector('.score');
let link = document.querySelector('.link');
let section = document.querySelector('section');
var compteur = 0;

//Nombres Aléatoires Début du jeu

random1 = Math.random()*11 << 0; // pour générer des nombres entre 0 et 11
random2 = Math.random()*11 << 0; // pour générer des nombres entre 0 et 11

//Inserer les nombres au hazard dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

//fonction de vérification

function verifier(){
    //Récuperer le résultat entré par le joueur;
    var res = document.querySelector('.res').value;
    if(random1 + random2 == res){
        Message.style.background = "green";
        Message.innerHTML = "Correcte.";
        //créer d'autres nombres aléatoire

                //Nombres Aléatoires pour reprendre le jeu

                random1 = Math.random()*11 << 0; // pour générer des nombres entre 0 et 11
                random2 = Math.random()*11 << 0; // pour générer des nombres entre 0 et 11
                //Inserer les nombres au hazard dans les variables nb1 et nb2
                nb1.innerHTML = random1;
                nb2.innerHTML = random2;
                compteur = compteur + 1;
                
    }
    else{
        Message.style.background = "red";
        Message.innerHTML = "Vous avez perdu.";
        section.innerHTML = "";
        score.innerHTML = `<span>${compteur}</span><br> Score`;
        link.style.display = "block"
    }
}


 /*  ANIMATION DU TITRE */

 function animateText() {
    const text = "Jeux d'Addition";
    const container = document.querySelector('.animated-title');
    container.textContent = ''; // Efface le contenu précédent du conteneur

    text.split('').forEach((char, index) => {
        if (char === ' ') {
            const space = document.createElement('span');
            space.textContent = '\u00A0'; // Ajoute un espace insécable
            container.appendChild(space);
        } else {
            const charElement = document.createElement('span');
            charElement.textContent = char;
            charElement.classList.add('char');
            charElement.style.animationDelay = `${index * 50}ms`;
            container.appendChild(charElement);
        }
    });
}

// Appeler la fonction pour la première fois
animateText();

// Répéter l'animation toutes les 5 secondes
setInterval(animateText, 5000);
/* Fin de gestion du projet 3 Jeu de Saut*/
