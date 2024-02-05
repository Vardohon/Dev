const genre = document.getElementById("genre");
const age = document.getElementById("age");
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");
const clavier = document.getElementById("clavier");

function declaration()
{let resultat = ""
    if (genre.value == "homme" && age.value > 20){
    resultat = "vous payez l'impôt !"
} else if(genre.value == "femme" && age.value >= 18 && age.value <= 35){
    resultat = "vous payez l'impôt !"
} else {
resultat = "vous ne payez pas l'impôt !"}

message.innerHTML = resultat
}


bouton.addEventListener("click", declaration)
