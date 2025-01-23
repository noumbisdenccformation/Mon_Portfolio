const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantChoixResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur
let resultat
let choixOrdinateur

//Evenement 'Click sur les buttons'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e) => {
    //récuperation de l'ID du bouton cliqué
    /*   alert(e.target.id)    **** vérification si l'evenement marche****  */

    choixUtilisateur = e.target.id;
    //on ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src = "${choixUtilisateur}.png" >`;
    generer_choix_ordinateur();
    verification()
}))

//Fonction pour générer le choix de l'ordinateur

function generer_choix_ordinateur(){
    random = Math.floor(Math.random()*3)+1 // Générer des nombre compris entre 1 et 3
    if(random === 1){ //si random est égal à 1
        choixOrdinateur = "pierre"
    }
    if(random === 2){ //si random est égal à 1
        choixOrdinateur = "papier"
    }
    if(random === 3){ //si random est égal à 1
        choixOrdinateur = "ciseaux"
    }

    //on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src = "${choixOrdinateur}.png" >`;

}

//fonction pour verifier si le joueur a gagné ou pas.

function verification(){
    if(choixUtilisateur == choixOrdinateur){
            resultat = "Egalité!";
    }

   // les cas où le joueur perd

    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
          resultat = "Perdu!";
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
        resultat = "Perdu!";
    }
  if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
    resultat = "Perdu!";
    }

    // les cas où le joueur gagne

  if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        resultat = "Gagné!";
  }
  if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
      resultat = "Gagné!";
  }
  if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
  resultat = "Gagné!";
  }
  contenantChoixResultat.innerHTML = `<p>${resultat}</p>`;
}


/* animation du titre du jeu */

function animateText() {
    const text = "Choix de l'Objet";
    const container = document.getElementById('p1');
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
