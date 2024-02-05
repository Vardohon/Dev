const bouton = document.getElementById("bouton");
const clavier = document.querySelector("#saisie-clavier");
const message = document.getElementById("message")

function calculerCarre(){
    let resultat = clavier.value * clavier.value;
    message.innerHTML = resultat;
}

bouton.addEventListener("click", calculerCarre);