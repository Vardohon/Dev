//ici portée de la variable est globale
const ht = document.getElementById("prixht");
const message = document.getElementById("totalttc");
const Article = document.getElementById("nbArticles");
const TVA = document.getElementById("tva")
const bouton3 = document.getElementById("bouton3")

bouton3.addEventListener("click",calculTtc)

function calculTtc()
{   //ici la portée de la variable est locale
    resultat = (ht.value*Article.value*(TVA.value/100+1));
    message.innerHTML = resultat;
}

