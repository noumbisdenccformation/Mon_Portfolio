let error=document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let result = document.querySelector('.result');

function shortLinkFunct(){
    //verification input
    if(!longLink.value == ""){
        //vider l'erreur
        error.innerHTML="";
        //connection API
        let url =`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;//lien API en description
        fetch(url)
        .then((response) => response.text())
        .then((data) => (result.innerHTML = data));

        // afficher le resultat
        result.style.display="block";
        if(result.innerHTML.length == 0){
            result.innerHTML="Lien Non Valide !"
        }

    } else{
        //error
        error.innerHTML = "Veuillez remplir le champ!"
        result.style.display="none";
    }
}


 /*  ANIMATION DU TITRE */

 function animateText() {
    const text = "Raccourcisseur de Lien";
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
/* Fin de gestion du projet 3 Jeu de Saut*/
