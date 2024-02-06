let nb = window.prompt("Entrer votre nombre :");
let somme = 0;

for(i=0; i <= nb; i++){
    somme = parseInt(somme) + i;
}

console.log("La somme est de : " + somme)