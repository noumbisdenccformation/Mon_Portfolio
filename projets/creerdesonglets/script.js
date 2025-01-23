function openOnglet(evt, name){
    let i, tabcontent, tablinksonglet;
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }

    tablinksonglet = document.getElementsByClassName('tablinksonglet');
    for(i=0; i<tablinksonglet.length; i++){
        tablinksonglet[i].className = tablinksonglet[i].className.replace("active","");
    }

    document.getElementById(name).style.display ="block";
    evt.currentTarget.className += "active";

}

/* pour la gestion du menu ou des onglets dès que la fenêtre est reduit à la taille d'une montre */

let profile = document.querySelector('.tabonglet');

document.querySelector('#menu-btn').onclick = () =>{
    profile.classList.toggle('active');
}

window.onscroll = ()=>{
    profile.classList.remove('active');
}


