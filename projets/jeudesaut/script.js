/* Début de gestion du projet 3 Jeu de saut*/

    // Récupérer les éléments du DOM
    let perso = document.querySelector(".perso");
    let obstacles = document.querySelector(".obstacles");

    // Initialiser l'animation des obstacles
    obstacles.style.animation = "obstacle 1s infinite linear";

    // Définir la fonction de saut
    window.sauter = function() {
        if(perso.classList != "animation"){
            perso.classList.add('animation');
        }
        setTimeout(function(){
            perso.classList.remove('animation');
        },550)
    }

    // Définir la fonction de vérification
    let verification = setInterval(function(){
        let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
        let obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
        if(obstaclesLeft<20 && obstaclesLeft>0 && persoTop >= 130){
            obstacles.style.animation = "none";
            alert("Vous avez perdu")
        }

        if(obstaclesLeft<18 && obstaclesLeft>0 && persoTop >= 109){
            obstacles.style.animation = "none";
            alert("Vous avez perdu")
        }
    },1)

   

 

    function arreterJeu() {
        // Arrêter l'animation de l'obstacle
        obstacles.style.animation = "none";
        
        // Arrêter l'animation du personnage
        if(perso.classList.contains("animation")){
            perso.classList.remove('animation');
        }
    }

    function redemarrerJeu() {
        // Réinitialiser la position de l'obstacle
        obstacles.style.animation = "";
        
        // Supprimer toute animation du personnage
        if(perso.classList.contains("animation")){
            perso.classList.remove('animation');
        }
        
        // Réinitialiser la position du personnage (si nécessaire)
        // perso.style.top = "0px";
    }



    /*  ANIMATION DU TITRE */

    function animateText() {
        const text = "Jeux de Saut";
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
1