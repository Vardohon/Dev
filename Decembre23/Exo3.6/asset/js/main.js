const age = document.getElementById("age");
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");


function declaration()
{let resultat = ""
    if (age.value < 6){
    resultat = " L'enfant est trop jeune"
} if(age.value == 6 || age.value == 7){
    resultat = "Catégorie Poussin"
} if (age.value == 8 || age.value == 9){
resultat = "Catégorie Pupille"
} if (age.value == 10 || age.value == 11){
resultat = "Catégorie Minime"
} if (age.value >= 12){
resultat = "Catégorie Cadet"
}
message.innerHTML = resultat
}


bouton.addEventListener("click", declaration)
