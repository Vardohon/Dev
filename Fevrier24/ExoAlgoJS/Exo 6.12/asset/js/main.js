let tab = Array();
let nb = window.prompt("Entrer le nombre d'entrée du tableau :");

for(i=0; i < nb; i++){
tab [i] = window.prompt("Entrer votre nombre :");
}
for(i=0; i < nb; i++){
        tab[i] = parseInt(tab[i]) + 1;
        console.log("" + tab[i]);
    }


