let prixUnitaire = 1;
let prixTotal = 0;
let payeClient = 0;
let monnaieArendre = 0;
let billetDix = 0;
let billetCinq = 0;
let pieceUn = 0;
let restant = 0;

for(i=0; prixUnitaire != 0; i++){
    prixUnitaire = parseInt(window.prompt("Entrer le prix :"));
    prixTotal = parseInt(prixTotal) + parseInt(prixUnitaire);
}

payeClient = parseInt(window.prompt("Prix payé par le client :"));
monnaieArendre = parseInt(payeClient) - parseInt(prixTotal);

if(parseInt(monnaieArendre) > 0){
    restant = parseInt(monnaieArendre);

    if(parseInt(monnaieArendre) >= 10){
    while(parseInt(restant) > 10){
        restant = parseInt(restant) - 10;
        billetDix = parseInt(billetDix) + 1;
    }
    if(restant >= 5){
    while(parseInt(restant) >= 5){
            restant = parseInt(restant) - 5;
            billetCinq = parseInt(billetCinq) + 1;
    }}}
    if(restant > 0){
    while(parseInt(restant) > 0){
            restant = parseInt(restant) - 1;
            pieceUn = parseInt(pieceUn) + 1;
        }}
}

console.log("le prix total est de : " + prixTotal + "\nLa monnaie à rendre est de : " + monnaieArendre + "€" + "\nLa monnaie rendue est de : " + billetDix + " billets de 10€ " + "\net de " + 
billetCinq + " billets de 5€ " + "\net de " + pieceUn + " pièces de 1€");