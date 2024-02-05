let ht = window.prompt("Entrer le prix hors-taxe :");
let qte = window.prompt("Entrer la quantité :");
let tva = window.prompt("Entrer la TVA :");

totalHT = parseInt(ht)*parseInt(qte);
montantTva = parseInt(totalHT)*(parseInt(tva)/100);
prixTtc = parseInt(totalHT)+parseInt(montantTva);

console.log(prixTtc)