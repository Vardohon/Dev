let title2 = document.getElementById("dom");
let titre = document.getElementById("titre2");
let nbre = document.querySelectorAll(".titre"); //classe d'où le .
let liTexte = document.querySelectorAll(".liste > li");

// Afficher le texte de la balise ayant l'id 'titre2'
title2.addEventListener("click", function () {
    alert("" + titre.innerText)
});

// Afficher le nombre de balise '.titre'
title2.addEventListener("click", function(){
    alert("" + nbre.length); // .length pour connaître le nombre
}) 

// Afficher le texte des balises '.titre'
title2.addEventListener("click", function(){
for(i=0; i<nbre.length; i++){
    alert(nbre[i].innerText);
}
})


//Afficher le texte des balises 'li'
title2.addEventListener("click", function(){
for(j=0; j<liTexte.length; j++){
    alert(liTexte[j].innerText)
}
})


//Changer le contenu de h1
let modif = document.getElementById("dom_modif");
let modH1 = document.getElementById("titre1");

modif.addEventListener("click", function(){
    modH1.textContent = "Bienvenue";
})


//Changer le contenu de h2
modif.addEventListener("click", function(){
    titre.textContent = "Exo JS";
})


//Changer le contenu paragraphe
let modPara = document.getElementById("paragraphe1")

modif.addEventListener("click", function(){
    modPara.textContent = "Voici quelques fonctions exécutées en javascript."
})


//Changer le contenu de li
modif.addEventListener("click", function(){
    for(k=0; k<liTexte.length; k++){
        liTexte[k].textContent = "Liste " + k;
    }
})

//Aligner le titre 1 au centre
let modStyle = document.getElementById("style");

modStyle.addEventListener("click", function(){
    document.getElementById("titre1").style.textAlign = "center";
})


//Mettre en rouge tous les éléments .titre
modStyle.addEventListener("click",function(){
    for(l=0; l<nbre.length; l++){
        nbre[l].style.color = "red";
    }
})

//Mettre une bordure et un padding
modStyle.addEventListener("click", function(){
    document.getElementById("paragraphe1").style.border = "solid 1px black";
    document.getElementById("paragraphe1").style.padding = "10px";
})


//Faire disparaître la liste
modStyle.addEventListener("click", function(){
    for(l=0; l<liTexte.length; l++){
        liTexte[l].style.display = "none";
    }
})