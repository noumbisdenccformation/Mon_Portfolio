//Definir les variables
let myInput = document.getElementById('psw');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let length = document.getElementById('length');


/*Lorsque l'utilisateur clique sur le champ du mot de passe, afficher la boite message */

myInput.onfocus = function(){
    document.getElementById("message").style.display="block";
}

//lorsque l'utilisateur clique en dehors du champ du mot de passe, masquer la boite message

myInput.onblur= function(){
    document.getElementById("message").style.display = "none"
}

// lorsque l'utilisateur commence a taper quelque chose dans le champ mot de passe

myInput.onkeyup = function(){
    //valider les lettres minuscules
    let lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        //si le mot de passe contient une lettre minuscule, enlever la classe "invalid et ajouter la classe valid"
        letter.classList.remove('invalid');
        letter.classList.add('valid');
        }
        else{
            //sinon, enlever la classe "valid" et ajouter la classe "invalide"
            letter.classList.remove('valid');
            letter.classList.add('invalid');
        }

        //valider les lettres majuscules
    let bigCaseLetters = /[A-Z]/g
    if(myInput.value.match(bigCaseLetters)){
        //si le mot de passe contient une lettre majuscule, enlever la classe "invalid et ajouter la classe valid"
        capital.classList.remove('invalid');
        capital.classList.add('valid');
        }
        else{
            //sinon, enlever la classe "valid" et ajouter la classe "invalide"
            capital.classList.remove('valid');
            capital.classList.add('invalid');
        }

         //valider les chiffres
    let numbertaping = /[0-9]/g
    if(myInput.value.match(numbertaping)){
        //si le mot de passe contient une lettre majuscule, enlever la classe "invalid et ajouter la classe valid"
        number.classList.remove('invalid');
        number.classList.add('valid');
        }
        else{
            //sinon, enlever la classe "valid" et ajouter la classe "invalide"
            number.classList.remove('valid');
            number.classList.add('invalid');
        }
    
        //valider la longueur
        
    if(myInput.value.length >= 8){
        //si la longueur du mot de passe est supérieur 8, enlever la classe "invalid et ajouter la classe valid"
        length.classList.remove('invalid');
        length.classList.add('valid');
        }
        else{
            //sinon, enlever la classe "valid" et ajouter la classe "invalide"
            length.classList.remove('valid');
            length.classList.add('invalid');
        }




    }


    var password = document.getElementById('psw');
    var toggle = document.getElementById('togglePassword');

    toggle.addEventListener('click', function () {
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    });

    /- Gestion de la visibilité du mot de passe */

    
    function changer(){
        if(password.type === 'password'){
                       document.getElementById("psw").setAttribute("type", "text");
                       document.getElementById("eye").src="eyesbarre.png";
            
        }
        else {
            document.getElementById("psw").setAttribute("type", "password");
            document.getElementById("eye").src="eye-icon.png";
        }

    }
