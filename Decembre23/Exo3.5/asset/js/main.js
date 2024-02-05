const nbre1 = document.getElementById("nbre1");
const nbre2 = document.getElementById("nbre2");
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");
const clavier = document.getElementById("clavier");

function declaration()
{let resultat = ""
    if (nbre1.value > 0 && nbre2.value > 0){
    resultat = " le résultat est positif"
} else if(nbre1.value < 0 && nbre2.value < 0){
    resultat = "le résultat est positif"
} else if (nbre1.value < 0 || nbre2.value < 0){
resultat = "le résultat est négatif"}
    else if (nbre1.value == 0 || nbre2.value == 0){
        resultat = "le résultat est nul"
    }
message.innerHTML = resultat
}


bouton.addEventListener("click", declaration)
