let pu = window.prompt("Entrer le prix unitaire :");
let qteCommande = window.prompt("Entrer la quantité commandée :");
let totalNonRemise = parseInt(pu) * parseInt(qteCommande);
let remise = 0;
let port = 0;

if (totalNonRemise >= 100 && totalNonRemise <=200){
    remise = parseInt(totalNonRemise) * 0.05;
}
else if (totalNonRemise > 200){
    remise = parseInt(totalNonRemise) * 0.10;
}

let totalRemise = parseInt(totalNonRemise) - parseInt(remise);

if (totalRemise > 500){
    port = 0;
}
else if (totalRemise <= 500){
    port = parseInt(totalRemise) * 0.02
    if (port < 6){
        port = 6
    }
}

let totalAPayer = parseInt(totalRemise) + parseInt (port);

alert("Le total sans remise ni FDP est de : " + totalNonRemise);
alert("Le total avec remise ni FDP est de : " + totalRemise);
alert("Le total à payer avec FDP est de : " + totalAPayer);

console.log("Le total sans remise ni FDP est de : ", totalNonRemise);
console.log("Le total avec remise ni FDP est de : ", totalRemise);
console.log("Le total à payer avec FDP est de : ", totalAPayer);