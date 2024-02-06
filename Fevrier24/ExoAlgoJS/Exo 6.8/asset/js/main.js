let tab = Array();
let nb = window.prompt("Entrer le nombre d'entrée du tableau :");
let nbNeg = 0;
let nbPos = 0;

for(i=0; i < nb; i++){
tab [i] = window.prompt("Entrer votre nombre :");
    if(tab[i] < 0){
        nbNeg = nbNeg + 1;
    }
    else{
        nbPos = nbPos + 1;
    }
}

console.log("Les nombres négatifs sont au nombre de : " + nbNeg);
console.log("Les nombres positifs sont au nombre de : " + nbPos);
