function saisirNombre(){
    // Je déclare ma variable entier sans l'instancier (donc elle va être à null)
    let entier;

    // tant que entier n'est pas un nombre (donc IsNan renverra true (boléen))
    while(isNaN(entier)){
        entier = prompt("Saisir un nombre");
        // vérification si la saisie est un nombre
        if (isNaN(entier)){
            alert("Ce n'est pas un nombre !")
        }
    }
    // sortie de la boucle, on renvoit l'entier
    return parseInt(entier);
}

let first = saisirNombre();
let second = saisirNombre();

alert("first : " + first);
alert("second : " + second);
PGCD(first,second);

function PGCD(a,b){
    // fonction pour calculer le Plus Grand Diviseur Commun
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    // le PGCD est stocké dans "a"
alert("Le PGCD est : " + a);
// Pas de return car l'alerte est dans la fonction
}
