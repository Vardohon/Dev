const nbre = document.getElementById("nbre");
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");
const clavier = document.getElementById("clavier");

function declaration()
{let resultat = ""
    if (nbre.value > 0){
    resultat = " le chiffre est positif"
} if(nbre.value < 0){
    resultat = "le chiffre est négatif"
} if (nbre.value == 0){
resultat = "le chiffre est nul"}
message.innerHTML = resultat
}

bouton.addEventListener("click", declaration)

