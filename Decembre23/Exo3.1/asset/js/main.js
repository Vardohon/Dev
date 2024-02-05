const nbre = document.getElementById("nbre")
const bouton = document.getElementById("bouton")
const message = document.getElementById("message")


function declaration()
{let resultat = ""
    if (nbre.value > 0){
    resultat = "positif"
    nbre.value=""
} else{
    resultat = "négatif"
    nbre.value=""
}
message.innerHTML = resultat
}
//faire pour valider au bouton
bouton.addEventListener("click", declaration)

//faire pour valider avec Entrer
nbre.addEventListener("keypress", (event)=>{
    if (event.code === "Enter" || event.code === "NumpadEnter"){declaration();
        setInterval(function(){effacerAlert()},10)
    }});
//pour que le résultat s'efface au bout de 10 secondes (ligne 23)
    function effacerAlert(){
        resultat.innerHTML=""
    }