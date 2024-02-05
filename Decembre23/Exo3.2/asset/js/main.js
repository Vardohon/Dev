const nbre1 = document.getElementById("nbre1");
const nbre2 = document.getElementById("nbre2");
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");


function declaration()
{let resultat = ""
    if (nbre1.value > 0 && nbre2.value > 0){
    resultat = " le résultat est positif"
} else if(nbre1.value < 0 && nbre2.value < 0){
    resultat = "le résultat est positif"
} else if (nbre1.value < 0 || nbre2.value < 0){
resultat = "le résultat est négatif"}
message.innerHTML = resultat
}


bouton.addEventListener("click", declaration)
