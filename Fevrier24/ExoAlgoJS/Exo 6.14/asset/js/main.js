let tab = Array();
let nb = window.prompt("Entrer le nombre d'entrée du tableau :");
let somme = 0;
let moyenne = 0;
let plusGrand = 0;

for(i=0; i <nb; i++){
    tab[i] = window.prompt("Entrer votre nombre :");
    somme = somme + parseInt(tab[i])
}
moyenne = parseInt(somme) / i;
console.log("La moyenne est de :" + moyenne);
for(i=0; i < nb; i++){
        if(parseInt(tab[i]) > parseInt(moyenne)){
            plusGrand = parseInt(tab[i]);
            console.log("Les notes aux dessus de la moyenne sont : " + plusGrand);
        }
    }
