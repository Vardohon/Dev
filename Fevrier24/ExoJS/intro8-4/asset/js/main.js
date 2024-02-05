let option = prompt(
    "Faites votres choix : \n" +
        "1 - Multiples \n" +
        "2 - Sommes et moyennes \n" +
        "3 - Recherche du nombre de voyelles \n" +
        "4 - Recherche du nombre des caractères suivants \n" +
    "Entrez votre option :"
)




switch(option){
case "1":
    multiples();

break;

case "2":
    sommeEtMoyenne();    

break;

case "3":
    voyelles();

break;

case "4":
    nombreDeCaractere();

break;

default:
    console.log("" + option + ": operateur invalide");
}
//


function multiples(){
function tablemulti(x){
    for(i=1; i<=10 ; i++){
        document.write(i + " x " + x + " = " + i*x);
        document.write("<br>");
    }}
    let n = prompt("Saisissez le nombre");
    tablemulti(n)
}

function sommeEtMoyenne(){
    let nb=parseInt(prompt("saisissez un nombre entier (premier tour)"));
let somme=0;
let compteurNbSaisis = 0;

// on va faire une boucle

while (nb != 0){
    compteurNbSaisis++;
    somme = somme + nb;
    nb = parseInt(prompt("saisissez un nombre"));
}

alert("la somme est égale à " + parseInt(somme));
alert("la moyenne est égale à" + parseFloat(somme / compteurNbSaisis));
}

function voyelles(){
                // Demander à l'utilisateur de saisir un mot
                var mot = prompt("Veuillez saisir un mot :");
                
                // Initialiser le compteur de voyelles à 0
                var nombreVoyelles = 0;
                
                // Parcourir chaque caractère du mot
                for (var k = 0; k < mot.length; k++) {
                    // Extraire le caractère courant
                    var caractereCourant = mot.substr(k, 1);
                
                    // Vérifier si le caractère est une voyelle (en minuscule)
                    if ("aeiou".indexOf(caractereCourant.toLowerCase()) !== -1) {
                        // Incrémenter le compteur de voyelles
                        nombreVoyelles++;
                    }
                }
                // Afficher le nombre de voyelles dans le mot
                document.write("Le mot '" + mot + "' contient " + nombreVoyelles + " voyelle(s).");
                }

                function nombreDeCaractere(){
                    let lign=prompt("saisissez une phrase");
                let lett=prompt("saisissez une lettre");
                function test(phrase,lettre){
                  // nb correspond aux nbres d'occurence de la lettre dans la phrase
                    let nb=0;
                    // avec la boucle on va parcourir chaque carctere qu'il y a dans la phrase
                    for (var i = 0; i < phrase.length; i++) {
                      // Extraire le caractère courant
                      var caractereCourant = phrase[i];
                  // on compare le caractère courant avec la lettre à rechercher
                      if(lettre==caractereCourant){
                        // si c'est le cas on incrémente nb de 1
                        nb++;
                      }
                  }
                  return nb;
                }
                let resulat=test(lign,lett);
                alert(resulat);
                }