const age = document.getElementById("age");
const anneepermis = document.getElementById("anneepermis");
const accident = document.getElementById("accident");
const fidelite = document.getElementById("fidelite");
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");
const compteur = document.getElementById("compteur");

function declaration()
{let compt = parseInt(compteur.value)
    let resultat = ""
if (age.value >=25){
    compteur.value + 1
} if (anneepermis.value >= 2){
    compteur.value + 1 
} if (accident.value>=1) {
    compteur.value - accident.value
} if (fidelite.value>=1){
    compteur.value + 1
}

message.innerHTML = resultat
}


bouton.addEventListener("click", declaration)