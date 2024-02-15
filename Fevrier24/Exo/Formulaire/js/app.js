let envoie = document.getElementById("envoyer");
let societe = document.getElementById("societe");
let personne = document.getElementById("personne");
let postal = document.getElementById("postal");
let ville = document.getElementById("ville");
let email = document.getElementById("email");
let tech = document.getElementById("technique");
let autres = document.getElementById("autres");

envoie.addEventListener("click", function(){
    if (societe.value.length < 1){
        alert("Il faut au moins une lettre pour votre société s.v.p. !");
    }
    if (personne.value.length < 1){
        alert("Entrez le nom de la personne à contacter s.v.p. !");
    }
    if (postal.value.length < 5){
        alert("Entrez le code postal sur 5 chiffres s.v.p. !");
    }
    if (ville.value.length < 1){
        alert("Entrez au moins une lettre pour la ville s.v.p. !");
    }
    if (!email.value.includes("@")){
        alert("l'Email doit avoir un @");
    }
})

tech.addEventListener("click", function(){
    autres.innerText = tech.value;
    })