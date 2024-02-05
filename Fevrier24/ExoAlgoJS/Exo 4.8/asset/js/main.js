let jour = window.prompt("Entrer le jour :");
let mois = window.prompt("Entrer le mois :");
let année = window.prompt("Entrer l'année :");

if (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois ==12 && jour <= 31){
    console.log ("La date est valable")
if (mois == 4 || mois == 6 || mois == 9 || mois == 11 && jour <= 30){
    console.log ("La date est valable");
}}
else if (mois == 2 && jour <= 28){
    console.log("La date est valable");
}
else if (mois == 2 && jour <=29 && (année % 400 == 0) || (année % 100 != 0 && année % 4 == 0)){
    console.log("La date est valide")
}
else {
    console.log ("La date est invalide");
}
