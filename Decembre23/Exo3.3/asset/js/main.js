const nom1 = document.getElementById("nom1")
const nom2 = document.getElementById("nom2")
const nom3 = document.getElementById("nom3")
const bouton = document.getElementById("bouton")
const message = document.getElementById("message")

function testalphabetique()
{let resultat = ""
    if (nom1.value < nom2.value && nom1.value < nom3.value & nom2.value < nom3.value){
    resultat = " Ordre alphabétique"}
        else {resultat = "Ordre non-alphabétique"}
        message.innerHTML = resultat}
bouton.addEventListener("click", testalphabetique)