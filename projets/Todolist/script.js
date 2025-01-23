let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    //verifier si l'input n'est pas vide
    
    if(inputField.value !=""){
        //si l'input n'est pas vide, créer un paragraphe
        var paragraphe = document.createElement('p')
    }
    //valorisé ce paragraphe avec le contenu de l'input
    paragraphe.innerText = inputField.value;

    //stylisé le paragraphe
    paragraphe.classList.add('paragraphe_style');

    //insérer le paragraphe dans l'élément toDoContainer

    toDoContainer.appendChild(paragraphe);

    //vide l'input quand le paragraphe est ajouté
    inputField.value = "";

    //barré le paragraphe quand on clique dessus

    paragraphe.addEventListener('click',function(){
        paragraphe.classList.add('paragraphe_click');
    })

    //supprimer la tâche quand on double click sur la tâche
    
    paragraphe.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraphe);
    })
}

/*pour l'animation du titre */

function animateText() {
    const text = "To Do List";
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

