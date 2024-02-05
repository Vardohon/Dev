let nb1 = window.prompt("Entrer le premier nombre :");
let nb2 = window.prompt("Entrer le deuxième nombre :");

if (nb1 > 0 && nb2 > 0){
    console.log("le produit est positif");
}
else if (nb1 < 0 && nb2 < 0) {
    console.log("Le produit est positif")
}
else if (nb1 > 0 && nb2 < 0 || nb1 < 0 && nb2 > 0){
    console.log("Le produit est négatif")
}