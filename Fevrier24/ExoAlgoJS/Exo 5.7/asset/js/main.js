let plusGrand = 0;
let nb = 0;
let position = 0;


for (i=1; i <= 10; i++){
    nb = parseInt(window.prompt("Entrer le chiffre n° " + i));
    if (nb > plusGrand){
        plusGrand = nb;
        position = i;
    }
}

console.log("Le plus grand de ces nombres est : " + plusGrand + " c'était le nombre n° " + position);