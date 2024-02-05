let accident = window.prompt("Entrer le nombre d'accidents :");
let age = window.prompt("Entrer l'âge :");
let permis = window.prompt("Entrer le nombre d'année de permis :");
let fidelite = window.prompt("Entrer le nombre d'année de fidélité :");
let compteur = 0;


if (accident >= 3){
    console.log("Le client est refusé !");
}
if (accident == 1){
    compteur = parseInt(compteur) -1;
}
if (accident == 2){
    compteur = parseInt(compteur) -2;
}
if (age >= 25 ){
    compteur = parseInt(compteur) +1;
}
if (permis >= 2){
    compteur = parseInt(compteur) +1;
}
if (fidelite >= 1){
    compteur = parseInt(compteur) +1;
}
if (parseInt(compteur) < 0){
    console.log("Le client est refusé !");
}
if (parseInt(compteur) == 0){
    console.log("Le tarif est rouge");
}
if (parseInt(compteur) == 1){
    console.log("le tarif est orange");
}
if (parseInt(compteur) == 2){
    console.log("le tarif est vert");
}
if (parseInt(compteur) >= 3){
    console.log("le tarif est bleu");
}

