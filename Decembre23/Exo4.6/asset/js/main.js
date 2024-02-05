const candidat1 = document.getElementById("candidat1");
const candidat2 = document.getElementById("candidat2");
const candidat3 = document.getElementById("candidat3");
const candidat4 = document.getElementById("candidat4");
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");
const clavier = document.getElementById("clavier");

function declaration()
{let resultat = ""
if (candidat1.value >50){
    resultat = "Le candidat est élu !!"
} if (candidat1.value < 12.5){
    resultat = "Le candidat est éliminé !"
} if (candidat1.value>candidat2.value && candidat1.value>candidat3.value && candidat1.value>candidat4.value) {
    resultat = "Ballotage favorable"
} if (candidat1.value<candidat2.value || candidat1.value<candidat3.value || candidat1.value<candidat4.value){
    resultat = "Ballotage défavorable"
}

message.innerHTML = resultat
}


bouton.addEventListener("click", declaration)