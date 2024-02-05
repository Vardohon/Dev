let marie = window.confirm("Etes-vous marié ?");
let enfant = window.prompt("Combien d'enfants avez-vous ?");
let salaire = window.confirm("Votre salaire est-il moins de 1200€ ?")

let remiseEnfant = parseInt(enfant) * 10;

if (marie == true){
    marie = 25;
}
else {
    marie = 20;
}

if (salaire == true){
    salaire = 10;
}
else {
    salaire = 0;
}

let participationTotale = parseInt(remiseEnfant) + parseInt(marie) + parseInt(salaire);

if (participationTotale > 50){
    participationTotale = 50
}

alert("La participation totale est de : " + participationTotale + " %");


