let tab = Array();
let nb = window.prompt("Entrer le nombre d'entrée du tableau :");
let position = 0;
let plusGrand = 0;

try{
for(i=1; i <=nb; i++){
tab[i] = window.prompt("Entrer votre nombre :");
}
for(i=1; i <= nb; i++){
        if(parseInt(tab[i]) > plusGrand){
            plusGrand = parseInt(tab[i]);
            position = i
        }
    }
console.log("Le nombre le plus grand est : " + plusGrand + " et en position n°" + position);
}
catch{
    alert("Une erreur a été détectée")
}