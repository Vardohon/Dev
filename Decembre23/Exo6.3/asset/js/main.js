const valeur = document.getElementById("valeur");
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");
const clavier = document.getElementById("clavier");

let i = 0

do {
    message.innerHTML = valeur.value
    i = i + 1
}
while (i < 8)





bouton.addEventListener("click", declaration)