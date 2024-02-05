// associer le champ de formulaire à la variable formulaire
const formulaire = document.getElementById("champ-formulaire");
const bouton = document.getElementById("bouton")
// déclarer d'une focntion
function afficherValeur()
{
    let carre = formulaire.value * formulaire.value;
    console.log(carre)
}
// ajouter un ecouteur d'evenement au click qui va appeler la fonction afficherValeur
bouton.addEventListener("click",afficherValeur)