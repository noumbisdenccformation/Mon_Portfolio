let button_code_bar = document.getElementById('button_code_bar');
let text = document.getElementById('text'); 
let box = document.getElementById('box');
let pdf_box = document.getElementById('pdf_box');

button_code_bar.onclick = function(){

    if(text.value.length > 0){
        if(text.value.length<50){
            //générer le code bar
            box.innerHTML="<svg id='barcode'></svg>";
            JsBarcode("#barcode", text.value);
            box.style.border='1px solid #999';
            //créer un bouton pour téléchager le code bar
            pdf_box.innerHTML = "<button onclick='genererPDF()'>Télécharger le code barre</button>";
            //styliser la boite du boutton pdf
            pdf_box.style.marginTop="10px";
            pdf_box.style.display="flex";


        } else {
            box.style.border = "0";
            box.innerHTML = "<P class = 'error'> Le texte est trop long ! </p>";
            pdf_box.style.display = "none";

        }

    }
    else{
        box.style.border = "0";
        box.innerHTML = "<P class = 'error'> Remplissez le champ ! </p>";
        pdf_box.style.display = "none";
    } 
   
   }; 
   
   
   //fonction de génération de pdf
   
   function genererPDF(){
       
       var opt = {
         margin:       1,
         filename:     `${text.value}.pdf`,
         image:        { type: 'jpeg', quality: 0.98 },
         html2canvas:  { scale: 2 },
         jsPDF:        { unit: 'in', format: 'a6', orientation: 'portrait' }
       };
       
       // New Promise-based usage:
      
       html2pdf().set(opt).from(box).save();
       
       // Old monolithic-style usage:
       html2pdf(box, opt);
    }



 /*  ANIMATION DU TITRE */

 function animateText() {
    const text = "Générateur de Code-barres";
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

